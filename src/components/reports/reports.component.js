import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import Activity from '../activity/activity.component';
import Analytics from '../analytics/analytics.component';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer
} from 'recharts';

const data = [
	{
	  name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
	},
	{
	  name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
	},
	{
	  name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
	},
	{
	  name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
	},
	{
	  name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
	},
	{
	  name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
	},
	{
	  name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
	},
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

export default function Reports() {
	const [value, setValue] = React.useState(0);
	const [sidePanelValue, setSidePanelValue] = React.useState('Activity');
	const [activeIdVideo, setActiveIdVideo] = React.useState(0);
	const [age, setAge] = React.useState('');

	const handleChange = (event, newValue) => {
		setValue(newValue);
    };

	const handleSideTabClick = (data) => {
        setSidePanelValue(data);
	}
	
	const playVideo = (ev, id) => {
        setActiveIdVideo(id);
    }

	return (
		<div className='d-flex justify-content-between w-100 dashboard py-5' style={{width:'94%',height:'100vh',overflow:'scroll'}}>
			<div className='px-5' style={{width:'73%'}}>
				<div className='d-flex justify-content-between mb-4'>
                    <h2>Reports</h2>                    
                </div>
				<div className='mb-4 text-left d-flex justify-content-between search-bar '>
                    <input className='search-bar p-4' placeholder='Search for anything!' />
                    <Button className='add-alert'><b>Fiters+</b></Button>
                </div>
				<div className='mb-4 text-left w-100' style={{backgroundColor:'black', height:'75vh'}}>
					<ResponsiveContainer width='50%' height='30%'>
						<AreaChart
							data={data}
							margin={{
								top: 10, right: 30, left: 0, bottom: 0,
							}}
							>
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
							<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
							<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
						</AreaChart>
					</ResponsiveContainer>
					<div className="d-flex w-100" style={{height:'30%'}}>
						<ResponsiveContainer width='50%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
						
						<ResponsiveContainer width='50%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
					</div>
					<div className="d-flex w-100" style={{height:'20%'}}>
						<div className="d-flex">

						</div>
						<ResponsiveContainer width='25%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
						
						<ResponsiveContainer width='25%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>

						<ResponsiveContainer width='50%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
					</div>
					<div className="d-flex w-100" style={{height:'20%'}}>
						<ResponsiveContainer width='50%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
						
						<ResponsiveContainer width='50%' height='100%'>
							<AreaChart
								data={data}
								margin={{
									top: 10, right: 30, left: 0, bottom: 0,
								}}
								>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
								<Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								<Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>

			<div className='d-block pr-3' style={{width:'27%'}}>
                <Paper square>
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
	)
}

