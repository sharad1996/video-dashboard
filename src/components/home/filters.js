import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  formContainer: {
    width: 300,
    display: 'flex',
    flexWrap: 'wrap',
    padding: 6
  }
}));


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

const floors = [
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

export default function Filters() {
  const classes = useStyles();
  const [cameraDropSelect, setCameraDropSelect] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [checkedLocation, setCheckedLocation] = React.useState([0]);
  const [checkedCamera, setCheckedCamera] = React.useState([0]);
  const [checkedEvent, setCheckedEvent] = React.useState([0]);
  const [checkedPriority, setCheckedPriority] = React.useState([0]);
  const [toggleLocationFloor, setToggleLocationFloor] = React.useState(false)

  const handleToggleLocation = (value,from) => () => {
    const currentIndex = checkedLocation.indexOf(value);
    const newChecked = [...checkedLocation];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedLocation(newChecked);
  };
  console.log(checkedLocation)

  const handleToggleCamera = (value,from) => () => {
    const currentIndex = checkedCamera.indexOf(value);
    const newChecked = [...checkedCamera];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCamera(newChecked);
  };
  console.log(checkedCamera)

  const handleToggleEvent = (value,from) => () => {
    const currentIndex = checkedEvent.indexOf(value);
    const newChecked = [...checkedEvent];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedEvent(newChecked);
  };
  console.log(checkedEvent)

  const handleTogglePriority = (value,from) => () => {
    const currentIndex = checkedPriority.indexOf(value);
    const newChecked = [...checkedPriority];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedPriority(newChecked);
  };
  console.log(checkedPriority)

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const handleChangeCameraSelect = (event) => {
    setCameraDropSelect(event.target.value);
  };

  const handleToggleLocationFloor = (value) => () => {
    setToggleLocationFloor(value);
  };
  console.log(checkedPriority)

  // const handleChange = (event,from) => {
  //   if(from === 'location')
  //       setLocationValue(event.target.value)
  //   if(from === 'camera')
  //       setCameraValue(event.target.value)
  //   if(from === 'person')
  //       setPersonName(event.target.value)
  //   // setPersonName(event.target.value);
  // };
  
  // const checkFilters = ()=>{
  //   var filterVideos = []

  //   if(cameraValue.length===0 && locationValue.length===0)
  //     return console.log(videos)
  //   //for camera filter
  //   for(let i=0;i<videos.length;i++)
  //   {
  //     for(let j=0;j<cameraValue.length;j++)
  //     {
  //       if(videos[i].camera===cameraValue[j])
  //       {
  //         filterVideos.push(videos[i])
  //         break;
  //       }
  //     }
  //   }
  //   //for location filter to be written
  //   console.log("array of videos after filters",filterVideos);
  // }

  return (
    <div className={classes.formContainer}>
      <Accordion className={classes.formControl} expanded={expanded === 'panel1'} onChange={handleChangePanel('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Locations</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-wrap">
        <FormControl className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Building</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cameraDropSelect}
            onChange={handleChangeCameraSelect}
            >
              <MenuItem value='Single Viewer'>Single Viewer</MenuItem>
              <MenuItem value='Multi Viewer'>Multi Viewer</MenuItem>
            </Select>
        </FormControl>
        <div className='d-flex justify-content-between w-100 m-2'>
          <div className='d-flex justify-content-between w-50'>
            <div onClick={handleToggleLocationFloor(false)}>Area</div>
            <div onClick={handleToggleLocationFloor(true)}>Floor</div>
          </div>
          <div>
            <Checkbox
              edge="start"
              checked={false}
              tabIndex={-1}
              disableRipple
            />
            <span>All</span>
          </div> 
        </div>
        {!toggleLocationFloor ?
        <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggleLocation(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedLocation.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItem>
              );
            })}
          </List>
          :
          <FormControl className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Pick Floor</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cameraDropSelect}
            onChange={handleChangeCameraSelect}
            >
              <MenuItem value='Single Viewer'>Single Viewer</MenuItem>
              <MenuItem value='Multi Viewer'>Multi Viewer</MenuItem>
            </Select>
        </FormControl>
        }      
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.formControl} expanded={expanded === 'panel2'} onChange={handleChangePanel('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Camera</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-wrap">
          <input className='search-bar p-4'style={{backgroundColor:'#d7d7e0',color:'black'}} placeholder='Search' />
          <FormControl className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Viewer</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cameraDropSelect}
            onChange={handleChangeCameraSelect}
            >
              <MenuItem value='Single Viewer'>Single Viewer</MenuItem>
              <MenuItem value='Multi Viewer'>Multi Viewer</MenuItem>
            </Select>
          </FormControl>
          <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggleCamera(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedCamera.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.formControl} expanded={expanded === 'panel3'} onChange={handleChangePanel('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Timestamps</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.formControl} expanded={expanded === 'panel4'} onChange={handleChangePanel('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Event Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggleEvent(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedEvent.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.formControl} expanded={expanded === 'panel5'} onChange={handleChangePanel('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Priority: medium</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={handleTogglePriority(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedPriority.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained" color="primary" style={{width:'95%', margin:'auto'}}>
        Apply Filters
      </Button>
      {/* {checkFilters()} */}
    </div>
  );
}