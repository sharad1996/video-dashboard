import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Tabs, Tab} from "@material-ui/core";
import { Avatar } from '@material-ui/core';
import './reports.styles.scss'

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

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	cardContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	card: {
		width: '47%',
		margin: 8,
		textAlign: 'left'
	},
	cardRoot: {
		width: '100%',
		backgroundColor: '#3c3c52',
		height: 100,
		color: 'white',
		padding: 10
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
		width: '10%',
		textAlign: 'left'
	},
	choiceContent: {
		width: '87%',
		textAlign: 'left'
	},
}));

function Reports() {
	const [selectedTab, setSelectedTab] = React.useState(0);
	const [expanded, setExpanded] = React.useState(false);
	const [expandedChoiceValue, setExpandedChoiceValue] = React.useState();
	const classes = useStyles();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const handleTabsChange = (event, newValue) => {
		setSelectedTab(newValue);
	};
	const handleExpandedChoiceValue = (value) => {
		setExpandedChoiceValue(value);
	};
	// console.log(expandedChoiceValue)

	const choiceComponent = <div className={classes.cardContainer}>
		{videos.map(data => {
			return (
				<div className={classes.card}>
					<Card key={data.id} className={classes.cardRoot} onClick={()=>handleExpandedChoiceValue(data.id)}>
						<div className={classes.cardContainer}>
							<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							<div className={classes.choiceContent}>
								<h5>{data.heading}</h5>
							</div>
							
						</div>
					</Card>
				</div>
			);
		})}
	</div>

	return (
		<div className = 'dashboard-container'>
			<div className = 'alerts-container'>
			{/* <Alerts/> */}
			<div className = 'alerts-header mb-3'>
				<h2 className='font-weight-bold'>Alerts</h2>
				<Button className='add-alert'><b>+ Add new alert</b></Button>
			</div>
			<Tabs className='mb-5' value={selectedTab} onChange={handleTabsChange}>
				<Tab classes={{ root: classes.tab }} label="Location" />
				<Tab classes={{ root: classes.tab }} label="Timeline" />
				<Tab classes={{ root: classes.tab }} label="All" />
			</Tabs>
			{selectedTab === 0 && 
				<div className={classes.root}>
					<Accordion className='pannel' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography className={classes.heading}>First Floor</Typography>
							<div className='border-accordion'></div>
						</AccordionSummary>
						<AccordionDetails>
							{choiceComponent}
						</AccordionDetails>
					</Accordion>
					<Accordion className='pannel' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2bh-content"
							id="panel2bh-header"
						>
							<Typography className={classes.heading}>Second Floor</Typography>
							<div className='border-accordion'></div>
						</AccordionSummary>
						<AccordionDetails>
							{choiceComponent}
						</AccordionDetails>
					</Accordion>
					<Accordion className='pannel' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3bh-content"
							id="panel3bh-header"
						>
							<Typography className={classes.heading}>Third Floor</Typography>
							<div className='border-accordion'></div>
						</AccordionSummary>
						<AccordionDetails>
							{choiceComponent}
						</AccordionDetails>
					</Accordion>
					<Accordion className='pannel' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4bh-content"
							id="panel4bh-header"
						>
							<Typography className={classes.heading}>Fourth Floor</Typography>
							<div className='border-accordion'></div>
						</AccordionSummary>
						<AccordionDetails>
							{choiceComponent}
						</AccordionDetails>
					</Accordion>
				</div>
			}
			{selectedTab === 1 &&
				<div>
					Timeline content to be rendered
				</div>
			}
			</div>
			<div className = 'video-container'>Video Container</div>
      	</div>
	);
}

export default Reports;


