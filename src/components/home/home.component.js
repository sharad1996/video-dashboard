import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './home.styles.scss';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
    },
});

function Home() {
    const [value, setValue] = React.useState(0);
    const [activeId, setActiveId] = React.useState(0);
    const classes = useStyles();
    const tags = [
		{id: 0, name: 'Tenant'},
		{id: 1, name: 'Animal'},
		{id: 2, name: 'Crowd'},
		{id: 3, name: 'Moving'},
		{id: 4, name: 'Visitors'},
		{id: 5, name: 'Smoking'},
		{id: 6, name: 'Intruder'},
		{id: 7, name: 'Loitering'}
	];

    const handleChange = (event, newValue) => {
		setValue(newValue);
    };
    
    const handleClick = (ev, id) => {
		setActiveId(id);
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
                                className={`list-unstyled d-flex align-items-center justify-content-center mx-1 my-2 tags ${activeId === data.id && 'active'}`}
                                key={data.id}
                                onClick={() => handleClick(this, data.id) }
                            >
                                {data.name}
                            </div>
                        );
                    })}
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
                        <Tab icon={'Hello'} aria-label="phone" />
                        <Tab icon={'All'} aria-label="favorite" />
                    </Tabs>
                </Paper>
                <div className='location-block p-3'>
                    <div className='d-flex justify-content-between'>
                        <div>Location</div>
                        <div>Filters+</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>Building name</div>
                        <div>^</div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div className='d-block'>
                            <div>Camers</div>
                            <div>All ^</div>
                        </div>
                        <div>Filters+</div>
                    </div>
                </div>
            </div>
           
        </div>
	);
}

export default Home;
