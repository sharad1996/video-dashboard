import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './home.styles.scss';
import { Player } from 'video-react';
// import DemoAppArea from './demo-app-area';
import Activity from '../activity/activity.component';
import Analytics from '../analytics/analytics.component';
import DemoAppArea from './demo-app-area.component';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 500,
    },
    formControl: {
        minWidth: 200,
        maxHeight: 50,
    },
    formControlBuilding: {
        minWidth: '100%',
        maxHeight: 50,
    }
});

function Home() {
	const [value, setValue] = React.useState(0);
	const [activeIdType, setActiveIdType] = React.useState(0);
	const [activeIdVideo, setActiveIdVideo] = React.useState(0);
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [sidePanelValue, setSidePanelValue] = React.useState('Activity')
    const [video, setVideo] = React.useState('');

    console.log(sidePanelValue)
	const tags = [
		{id: 0, name: 'Tenant', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
		{id: 1, name: 'Animal', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
		{id: 2, name: 'Crowd', link: 'https://www.youtube.com/watch?v=PbQywcwkxDM'},
		{id: 3, name: 'Moving', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
		{id: 4, name: 'Visitors', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
		{id: 5, name: 'Smoking', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
		{id: 6, name: 'Intruder', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
        {id: 7, name: 'Loitering', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'},
        {id: 8, name: 'Demo_tab', link: 'https://www.youtube.com/watch?v=kdJvv3RipNY'}
    ];
    
    const videos = [
		{id: 0, heading: 'Dog Peeping', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 1, heading: 'Dog Alone', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 2, heading: 'Dog Barking', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 3, heading: 'Dog Jumping', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 4, heading: 'Dog Alone', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 5, heading: 'Dog Event', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 6, heading: 'Dog Running', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'},
		{id: 7, heading: 'Dog prasing', time: new Date(), description: 'Same Camera', image: '/assets/images/user-profile-avatar.png'}
	];

    const handleChange = (event, newValue) => {
		setValue(newValue);
    };
    
    const handleClick = (ev, data) => {
        setActiveIdType(data.id);
        setVideo(data.link);
    }

    const handleSideTabClick = (data) => {
        setSidePanelValue(data);
    }
    
    const playVideo = (ev, id) => {
        setActiveIdVideo(id);
    }

	return (
		<div className='d-flex w-100 justify-content-between dashboard py-5'>
            <div className='d-block w-100 px-5'>
                <div className='d-flex justify-content-between mb-4'>
                    <h3>Dashboard Residencial</h3>
                    <button className='viewer-btn'>Main viewer</button>
                </div>
                <div className='mb-4 text-left'>
                    <input className='search-bar p-4' placeholder='Search for anything!' />
                </div>
                <div className='d-flex mb-4'>
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
                <div className='mb-4 stock-board'>
                    {activeIdType!==8?
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
            </div>
        
            <div className='d-block pr-5'>
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
                {sidePanelValue=='Activity'?
                    <Activity playVideo={playVideo} age={age} handleChange={handleChange} videos={videos} activeIdVideo={activeIdVideo}/>
                :
                <Analytics/>
                }
                
            </div>
        </div>
	);
}

export default Home;