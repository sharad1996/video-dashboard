import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  formContainer: {
    width: 250,
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const location = [
    'First Floor',
    'Second Floor',
    'Third Floor',
    'Fourth Floor'
]

const camera = [
    'Camera 1',
    'Camera 2',
    'Camera 3',
    'Camera 4'
]

const videos = [
  {id: 0, heading: 'Dog Peeping', time: new Date(), camera: 'Camera 2', image: '/assets/images/user-profile-avatar.png', location: 'Third Floor'},
  {id: 1, heading: 'Dog Alone', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png', location: 'Second Floor'},
  {id: 2, heading: 'Dog Barking', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png', location: 'First Floor'},
  {id: 3, heading: 'Dog Jumping', time: new Date(), camera: 'Camera 2', image: '/assets/images/user-profile-avatar.png', location: 'Second Floor'},
  {id: 4, heading: 'Dog Alone', time: new Date(), camera: 'Camera 4', image: '/assets/images/user-profile-avatar.png', location: 'Third Floor'},
  {id: 5, heading: 'Dog Event', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png', location: 'Fourth Floor'},
  {id: 6, heading: 'Dog Running', time: new Date(), camera: 'Camera 1', image: '/assets/images/user-profile-avatar.png', location: 'First Floor'},
  {id: 7, heading: 'Dog prasing', time: new Date(), camera: 'Camera 1', image: '/assets/images/user-profile-avatar.png', location: 'First Floor'}
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filters() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [cameraValue, setCameraValue] = React.useState([]);
  const [locationValue, setLocationValue] = React.useState([]);

  const handleChange = (event,from) => {
    if(from === 'location')
        setLocationValue(event.target.value)
    if(from === 'camera')
        setCameraValue(event.target.value)
    if(from === 'person')
        setPersonName(event.target.value)
    // setPersonName(event.target.value);
  };
  
  const checkFilters = ()=> {
    var filterVideos = []

    if(cameraValue.length===0 && locationValue.length===0)
      return console.log(videos)
    //for camera filter
    for(let i=0;i<videos.length;i++)
    {
      for(let j=0;j<cameraValue.length;j++)
      {
        if(videos[i].camera===cameraValue[j])
        {
          filterVideos.push(videos[i])
          break;
        }
      }
    }
    //for location filter to be written
    console.log("array of videos after filters",filterVideos);
  }

  return (
    <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Location</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={locationValue}
          onChange={(e)=>handleChange(e,'location')}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {location.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Camera</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={cameraValue}
          onChange={(e)=>handleChange(e,'camera')}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {camera.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Timestamp</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={(e)=>handleChange(e,'person')}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Event type</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={(e)=>handleChange(e,'person')}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Priority</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={(e)=>handleChange(e,'person')}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" style={{width:'95%', margin:'auto'}}>
        Apply Filters
      </Button>
      {checkFilters()}
    </div>
  );
}