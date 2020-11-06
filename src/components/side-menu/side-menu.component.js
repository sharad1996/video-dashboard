import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import './side-menu.styles.scss';
import { Link } from "react-router-dom";

// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 500,
//   },
// });

function SideMenu() {
	const menu = [
		{id: 0, name: 'home', link:'home'},
		{id: 1, name: 'alert', link:'alert'},
		{id: 2, name: 'faces', link:'faces'},
		{id: 3, name: 'settings', link:'settings'},
		{id: 4, name: 'reports', link:'reports'}
	];
	// const classes = useStyles();
	// const [value, setValue] = React.useState(0);
	const [activeId, setActiveId] = React.useState(0);

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	const handleClick = (ev, id) => {
		setActiveId(id);
	}

	return (
		<div className='d-flex'>
			<div className='menu-bar pt-4 px-2'>
				<div className='heading'>OWAL</div>
				<div className='user-profile'>
					<div className='text-center'>
						<div className='user-img mx-auto mt-4 mb-2'></div>
						<h4 className='user-name mb-5 font-weight-bold'>JC</h4>
					</div>
				</div>
				<div className='menu-list'>
					<ul className='pl-0'>
						{menu.map(data => {
							return (
								<li
									className={`list-unstyled d-flex align-items-end justify-content-center mb-3 ${activeId === data.id && 'active'}`}
									key={data.id}
									onClick={() => handleClick(this, data.id) }
								>
									{/* <a href=''>{data.name}</a> */}
									<Link to={`${data.link}`}>{data.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			
			{/* <div className='d-flex w-100 justify-content-between dashboard'>
				<div className='d-block'>
					<div className='d-flex justify-content-between'>
						<h3>Dashboard Residencial</h3>
						<button className='viewer-btn'>Main viewer</button>
					</div>
					<input className='search-bar' placeholder='Search for anything!' />
				</div>
			
				<div className='d-block'>
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
					<div className='location-block'>
						<div>Location</div>
						<div>Building Name</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default SideMenu;
