import React from 'react';
import { Button } from '@material-ui/core';
import { Card,Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';

const faces = [
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor',
		commonActivities:[
			'Walks Dog', 'Smoking','Frequently leaves at 9:00AM'
		],
		history: [
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Leave building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Kicks Door',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Walks Dog',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			}
		]
	},
	{
		name: 'Aman Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor',
		commonActivities:[
			'Walks Dog', 'Smoking','Frequently leaves at 9:00AM'
		],
		history: [
			{
				activityName:'Jumps',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Exit building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Walks Cat',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			}
		]
	},
	{
		name: 'Karan Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor',
		commonActivities:[
			'Walks Dog', 'Smoking','Frequently leaves at 9:00AM'
		],
		history: [
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			}
		]
	},
	{
		name: 'Steve Jaknkowski',
		apartment: '3rd Foor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor',
		commonActivities:[
			'Walks Dog', 'Smoking','Frequently leaves at 9:00AM'
		],
		history: [
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			},
			{
				activityName:'Enters building',
				date:'19 July',
				time:'9:00 AM'
			}
		]
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	},
	{
		name: 'Robert Jaknkowski',
		apartment: '3rd Floor, Apt 2B ',
		detections: 250,
		relEvents: 4,
		type: 'Visitor'
	}
]

const useStyles = makeStyles((theme) => ({
	cardRoot: {
		width: '30%',
		backgroundColor: '#3c3c52',
		height: 200,
		color: 'white',
		padding: 15,
		margin: 10
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	tab: {
		minWidth: '24rem', // a number of your choice
		borderRadius: '5px 5px 0 0',
		backgroundColor: '#515159',
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'left',
	},
	avatar: {
		height:60,
		width:60,
		margin: 3,
		textAlign: 'left'
	},
}));

function Faces() {
	const classes = useStyles();
	const [view, setview] = React.useState('grid')
	const [sideViewData, setsideViewData] = React.useState(null)
	const [seeMore, setseeMore] = React.useState(false)

	const handleView = (value)=>{
		setview(value);
	}

	const handleChangeSideViewData = (value)=>{
		setsideViewData(value);
	}

	const handleSeeMore = ()=>{
		setseeMore(!seeMore)
	}

	return (
		<div className='d-flex text-left justify-content-between py-5 dashboard h w-100 overflow-auto' style={{width:'94%',height:'100vh'}} >
			<div className='px-5' style={{width:'73%'}}>
				<div className='d-flex justify-content-between mb-4'>
                    <h2>Faces</h2>                    
                </div>
				<div className='mb-4 text-left d-flex justify-content-between search-bar '>
                    <input className='search-bar p-4' placeholder='Search for anything!' />
                    <Button className='add-alert'><b>Fiters+</b></Button>
                </div>
				<div className="d-flex flex-row-reverse">
					<ViewListRoundedIcon onClick={()=>handleView('list')}/>
					<ViewComfyRoundedIcon onClick={()=>handleView('grid')}/>
				</div>
				{
					!seeMore?
					<div className='d-flex justify-content-between w-100 flex-wrap'>
					{
						view==='grid'?
						faces.map((data,index)=>
							<Card key={index} className={classes.cardRoot} onClick={()=>handleChangeSideViewData(data)}>
								<div className="d-flex flex-wrap">
									<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
									<div className='w-75 text-left mx-2'>
										<h5>{data.name}</h5>
										<h5>{data.apartment}</h5>
										<h6 style={{color:'grey'}}>{`${data.detections} detections`}</h6>
										<h6 style={{color:'grey'}}>{`${data.relEvents} relevant events`}</h6>
									</div>
									<div className="d-flex w-100 m-2 justify-content-between" >
										<h6 className="bg-info p-1 rounded">{data.type}</h6>
										<h6 style={{color:'grey'}}>See history</h6>
									</div>
								</div>
							</Card>
						)
						:
						faces.map((data,index)=>
							<Card key={index} className={classes.cardRoot} style={{width:'100%', height:'100px'}} onClick={()=>handleChangeSideViewData(data)} >
								<div className="d-flex flex-wrap">
									<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
									<div className="d-flex justify-content-between align-items-center" style={{width:'90%'}}>
										<div className='text-left mx-2'>
											<h5>{data.name}</h5>
											<h5>{data.apartment}</h5>	
										</div>
										<div><h6 className="bg-info p-1 rounded">{data.type}</h6></div>
										<h6 style={{color:'grey'}}>{`${data.detections} detections`}</h6>
										<h6 style={{color:'grey'}}>{`${data.relEvents} relevant events`}</h6>
										<h6 style={{color:'grey'}}>See history</h6>
									</div>
								</div>
							</Card>
						)
					}
					</div>
					:
					<Card className={classes.cardRoot} style={{width:'95%', backgroundColor:'#f5eeee' ,color:'black',height:'85vh'}} >
						<div className='d-flex  justify-content-between'>
							<div className="d-flex flex-wrap align-items-center">
								<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
								<div className="d-flex justify-content-between align-items-center">
									<div className='text-left mx-2'>
										<h5>{sideViewData.name}</h5>
										<h6 style={{color:'grey'}}>{sideViewData.apartment}</h6>
									</div>
									<div><h6 className="bg-info p-1 rounded">{sideViewData.type}</h6></div>
								</div>
							</div>
							<h5 onClick={handleSeeMore}>Close</h5>
						</div>
						
						
						<div className='w-25'>
							<br/>
							<h5 className="text-left">Most Common Activities</h5>
							<div className="d-flex flex-wrap ">
							{
								sideViewData.commonActivities.map((value)=><h6 className='px-1' style={{color:'grey'}}>{value}</h6>)
							}
							</div>
						</div>
						<hr/>
						<div className='scroll-auto'>
							<h5>History</h5>
							<div className='d-flex w-100 flex-wrap' style={{height:'48vh', overflow:'auto'}}>
							{
								sideViewData.history.map((data,index)=>{
									return(
										<Card key={index} className='m-2' style={{width:'30%', height:'100px', backgroundColor:'#f5eeee'}}>
											<div className="d-flex align-items-center flex-wrap">
												<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
												<div className="w-75" >
														<h6>{data.activityName}</h6>
														<h6 style={{color:'grey'}}>{data.date},<span className='p-1'>{data.time}</span></h6>	
												</div>
											</div>
										</Card>
									)
								})
							}
							</div>							
						</div>
						
					</Card>

				}
				
			</div>
			<div className="d-block mx-4 p-2" style={{backgroundColor:'#3c3c52', width:'23%', height:'90vh'}}>
				{
					sideViewData?
					<Card className={classes.cardRoot} style={{width:'95%', backgroundColor:'#f5eeee' ,color:'black',height:'85vh'}} >
						<div className="d-flex flex-wrap align-items-center">
							<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							<div className="d-flex w-75 justify-content-between align-items-center">
								<div className='text-left mx-2'>
									<h5>{sideViewData.name}</h5>
									<h6 style={{color:'grey'}}>{sideViewData.apartment}</h6>
								</div>
								<div><h6 className="bg-info p-1 rounded">{sideViewData.type}</h6></div>
							</div>
						</div>
						<div>
							<br/>
							<h5 className="text-left">Most Common Activities</h5>
							<div className="d-flex flex-wrap ">
							{
								sideViewData.commonActivities.map((value)=><h6 className='px-1' style={{color:'grey'}}>{value}</h6>)
							}
							</div>
						</div>
						<hr/>
						<div className='scroll-auto'>
							<h5>History</h5>
							<div style={{height:'48vh', overflow:'hidden'}}>
							{
								sideViewData.history.map((data,index)=>{
									return(
										<Card key={index} className='my-2' style={{width:'100%', height:'100px', backgroundColor:'#f5eeee'}}>
											<div className="d-flex align-items-center flex-wrap">
												<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
												<div className="w-75" >
														<h6>{data.activityName}</h6>
														<h6 style={{color:'grey'}}>{data.date},<span className='p-1'>{data.time}</span></h6>	
												</div>
											</div>
										</Card>
									)
								})
							}
							</div>
							<h6 className='text-right' onClick={handleSeeMore}>+ See More</h6>							
						</div>
						
					</Card>
					:null
				}
				
			</div>
		</div>
	);
}

export default Faces;