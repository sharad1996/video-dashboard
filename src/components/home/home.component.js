import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button, Popover } from '@material-ui/core';
import './home.styles.scss';
import { Player } from 'video-react';
import Activity from '../activity/activity.component';
import Analytics from '../analytics/analytics.component';
import DemoAppArea from './demo-app-area.component';
import Filters from './filters';
import Card from '@material-ui/core/Card';
import { Avatar } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
    },
    formControl: {
        maxHeight: 50,
    },
    formControlBuilding: {
        minWidth: '100%',
        maxHeight: 50,
    },
    // cardContainer: {
    //     minWidth: '15%',
    //     width:'15%',
    //     textAlign: 'center'
    // },
    cardRoot: {
        width: '100%',
        backgroundColor: '#313141',
        height: 150,
        color: 'white',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        boxShadow: 'none'
        
    },
    avatar: {
        width: '40px',
        height: '40px',
        textAlign: 'left'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  }));

  const tags = [
    {id: 0, name: 'Tenant', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 1, name: 'Animal', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 2, name: 'Crowd', link: 'https://www.youtube.com/watch?v=PbQywcwkxDM'},
    {id: 3, name: 'Moving', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
    {id: 4, name: 'Visitors', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
    {id: 5, name: 'Smoking', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
    {id: 6, name: 'Intruder', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
    {id: 7, name: 'Loitering', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'}
];

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

function Home() {
	const [value, setValue] = React.useState(0);
	const [activeIdType, setActiveIdType] = React.useState(0);
    const [activeIdVideo, setActiveIdVideo] = React.useState(0);
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [sidePanelValue, setSidePanelValue] = React.useState('Activity')
    const [video, setVideo] = React.useState('');
    const [viewer, setViewer] = React.useState('Single Viewer');
    const [anchorEl, setAnchorEl] = React.useState(null);

	

    const handleChange = (event, newValue) => {
		setValue(newValue);
    };

    const handleChangeViewer = (event) => {
        setViewer(event.target.value);
    };
    
    const handleClick = (ev, data) => {
        setActiveIdType(data.id);
        setVideo(data.link);
    }

    const handleSideTabClick = (data) => {
        setSidePanelValue(data);
    }

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const playVideo = (ev, id) => {
        setActiveIdVideo(id);
    }
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const filter =<Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        <Filters/>
    </Popover>
    
	return (
		<div className='d-lg-flex justify-content-between dashboard py-5' style={{width:'94%',height:'100vh',overflow:'scroll'}}>
            <div className='d-block px-5'>
                <div className='d-flex justify-content-between mb-4'>
                    <h3>Dashboard Residencial</h3>
                    <FormControl className={classes.formControl} >
                        <InputLabel id="demo-simple-select-label">Viewer</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={viewer}
                        onChange={handleChangeViewer}
                        style={{backgroundColor:'white'}}
                        >
                        <MenuItem value='Single Viewer'>Single Viewer</MenuItem>
                        <MenuItem value='Multi Viewer'>Multi Viewer</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div className='mb-4 text-left d-flex justify-content-between search-bar '>
                    <input className='search-bar p-4' placeholder='Search for anything!' />
                    <Button className='add-alert' onClick={handleFilterClick}><b>Fiters+</b></Button>
                </div>
                {filter}
                <div className='d-flex flex-wrap justify-content-evenly mb-4'>
                    {tags.map(data => {
                        return (
                                <div
                                    className={`list-unstyled d-flex align-items-center justify-content-center mx-2 my-2 tags ${activeIdType === data.id && 'active'}`}
                                    key={data.id}
                                    onClick={() => handleClick(this, data) }
                                >
                                    {data.name}
                                </div>
                        );
                    })}
                </div>
                <div className='mb-4 stock-board'  >
                    {viewer!=='Multi Viewer'?
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={video}
                    />
                    :<DemoAppArea/>
                    }
                    {/* <Player>
                        <source src={video} />
                    </Player> */}
                </div>
                <div className='d-flex p-3 activity ' >
                    <div className='d-flex mb-4 justify-content-between' style={{width:"100%"}}>
                        <div>{`Activity(${videos.length})`}</div>
                        <div><b>Filters+</b></div>
                    </div>
                    <div className='d-flex cards' style={{width:"100%"}}>
                            {videos.map(data => {
                                return (
                                    <div className='cardContainer' >
                                        <Card key={data.id} className={classes.cardRoot}>
                                            <div className="d-flex justify-content-center" style={{width:'70%', height:'50px'}}>
                                                <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </div>
                                            <h5>Name of alert</h5>
                                            <div>{data.heading}</div>
                                            <div>{data.camera}</div>
                                        </Card>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        
            <div className='d-block pr-md-5 px-5 mt-lg-0 mt-4'>
                <Paper square className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="icon tabs example"
                    >
                        <Tab icon={'Activity'} aria-label="phone" onClick={() => handleSideTabClick('Activity')} />
                        <Tab icon={'Analytics'} aria-label="favorite" onClick={() => handleSideTabClick('Analytics')}/>
                    </Tabs>
                </Paper>
                {sidePanelValue==='Activity'?
                    <Activity playVideo={playVideo} age={age} handleChange={handleChange} videos={videos} activeIdVideo={activeIdVideo}/>
                :
                <Analytics/>
                }
                
            </div>
        </div>
	);
}

export default Home;