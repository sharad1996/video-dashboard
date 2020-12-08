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

const camera = [
    'Camera 1',
    'Camera 2',
    'Camera 3',
    'Camera 4'
]
const eventTypes = [
  'event type 1',
  'event type 2',
  'event type 3',
  'event type 4',
  'event type 5',
  'event type 6',
  'event type 7',
  'event type 8'
]
const priority = [
  'low',
  'medium',
  'high'
]
const buildings = [
  {name:'140 Hope St', area:['floors', 'hallways','garden','pathways'], floors:['First Floor','Second Floor', 'Third Floor' ,'Fourth Floor']},
  {name:'150 Hope St', area:['floors', 'hallways','garden','pathways'], floors:['First Floor','Second Floor', 'Third Floor' ,'Fourth Floor']},
  {name:'160 Hope St', area:['floors', 'hallways','garden','pathways'], floors:['First Floor','Second Floor', 'Third Floor' ,'Fourth Floor']},
  {name:'120 Hope St', area:['floors', 'hallways','garden','pathways'], floors:['First Floor','Second Floor', 'Third Floor' ,'Fourth Floor']}
]
const videos = [
  {id: 0, heading: 'Dog Peeping', time: new Date(), camera: 'Camera 2', image: '/assets/images/user-profile-avatar.png', floor: 'Third Floor',  building:'120 Hope St', area:'hallways',eventType:'event type 1',priority:'low'},
  {id: 1, heading: 'Dog Alone', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png',   floor: 'Second Floor', building:'150 Hope St', area:'garden'  ,eventType:'event type 1',priority:'low'},
  {id: 2, heading: 'Dog Barking', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png', floor: 'First Floor',  building:'140 Hope St', area:'floors'  ,eventType:'event type 2',priority:'low'},
  {id: 3, heading: 'Dog Jumping', time: new Date(), camera: 'Camera 2', image: '/assets/images/user-profile-avatar.png', floor: 'Second Floor', building:'120 Hope St', area:'hallways',eventType:'event type 1',priority:'low'},
  {id: 4, heading: 'Dog Alone', time: new Date(), camera: 'Camera 4', image: '/assets/images/user-profile-avatar.png',   floor: 'Third Floor' , building:'150 Hope St', area:'hallways',eventType:'event type 1',priority:'low'},
  {id: 5, heading: 'Dog Event', time: new Date(), camera: 'Camera 3', image: '/assets/images/user-profile-avatar.png',   floor: 'Fourth Floor', building:'140 Hope St', area:'hallways',eventType:'event type 1',priority:'low'},
  {id: 6, heading: 'Dog Running', time: new Date(), camera: 'Camera 1', image: '/assets/images/user-profile-avatar.png', floor: 'First Floor' , building:'160 Hope St', area:'garden'  ,eventType:'event type 1',priority:'low'},
  {id: 7, heading: 'Dog prasing', time: new Date(), camera: 'Camera 1', image: '/assets/images/user-profile-avatar.png', floor: 'First Floor' , building:'140 Hope St', area:'pathways',eventType:'event type 1',priority:'low'}
];

export default function Filters() {
  const classes = useStyles();
  const [buildingDropSelect, setBuildingDropSelect] = React.useState();
  const [expanded, setExpanded] = React.useState(false);
  const [checkedLocationArea, setCheckedLocationArea] = React.useState([]);
  const [checkedCamera, setCheckedCamera] = React.useState([]);
  const [checkedEvent, setCheckedEvent] = React.useState([]);
  const [checkedPriority, setCheckedPriority] = React.useState([]);
  const [toggleAreaFloor, setToggleAreaFloor] = React.useState(false);
  const [locationFloor, setLocationFloor] = React.useState()

  const handleToggleLocationArea = (value,from) => () => {
    const currentIndex = checkedLocationArea.indexOf(value);
    const newChecked = [...checkedLocationArea];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedLocationArea(newChecked);
  };

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

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const handleChangeBuildingSelect = (event) => {
    setBuildingDropSelect(event.target.value);
  };

  const handleToggleAreaFloor = (value) => () => {
    setToggleAreaFloor(value);
  };

  const handleLocationFloorSelect = (value) => () => {
    setLocationFloor(value);
  };

  const getAreaList = ()=>{
    for(var i=0;i<buildings.length;i++) {
      if(buildings[i].name===buildingDropSelect)
        return buildings[i].area;
    }
    return [];
  }

  const getFloorList = ()=>{
    for(var i=0;i<buildings.length;i++) {
      if(buildings[i].name===buildingDropSelect)
        return buildings[i].floors;
    }
    return [];
  }
  
  const checkFilters = ()=>{
    var filterVideos = videos;
    filterVideos = videos.filter((video)=>video.building===buildingDropSelect)
                         .filter((video)=>checkedLocationArea.length>0?checkedLocationArea.includes(video.area):true)
                         .filter((video)=>checkedCamera.length>0?checkedCamera.includes(video.camera):true)
                         .filter((video)=>checkedPriority.length>0?checkedPriority.includes(video.priority):true)
                         .filter((video)=>checkedEvent.length>0?checkedEvent.includes(video.eventType):true)

    console.log("array of videos after filters",filterVideos);
  }

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
            value={buildingDropSelect?buildingDropSelect:''}
            onChange={handleChangeBuildingSelect}
            >
              {buildings.map((building)=>{
                return(
                <MenuItem value={building.name}>{building.name}</MenuItem>
                )
              })
              }
            </Select>
        </FormControl>
        <div className='d-flex justify-content-between w-100 m-2'>
          <div className='d-flex justify-content-between w-50'>
            <div onClick={handleToggleAreaFloor(false)}>Area</div>
            <div onClick={handleToggleAreaFloor(true)}>Floor</div>
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
        {!toggleAreaFloor?
        <List className={classes.root}>
            {getAreaList().map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggleLocationArea(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedLocationArea.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
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
            value={locationFloor}
            onChange={handleLocationFloorSelect}
            >
              {
                getFloorList().map((value)=>
                  <MenuItem value={value}>{value}</MenuItem>
                )
              }
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
            value=''
            // onChange={handleChangeBuildingSelect}
            >
              <MenuItem value='Single Viewer'>Single Viewer</MenuItem>
              <MenuItem value='Multi Viewer'>Multi Viewer</MenuItem>
            </Select>
          </FormControl>
          <List className={classes.root}>
            {camera.map((value) => {
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
                  <ListItemText id={labelId} primary={value} />
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
            {eventTypes.map((value) => {
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
                  <ListItemText id={labelId} primary={value} />
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
            {priority.map((value) => {
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
                  <ListItemText id={labelId} primary={value} />
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>

      <Button variant="contained" color="primary" style={{width:'95%', margin:'auto'}}>
        Apply Filters
      </Button>

      {checkFilters()}
    </div>
  );
}