import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './add-alert.styles.scss';
import Card from '@material-ui/core/Card';
import MobileStepper from '@material-ui/core/MobileStepper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
	root: {
		flexGrow: 1,
		maxWidth: 500,
	},
	cardRoot: {
		width: '100%',
		height: 250,
		borderRadius: 10,
		padding: 10
	},
	cardContainer: {
		width: '30%',
		margin: 15,
		textAlign: 'left'
	},
	formControl: {
		margin: theme.spacing(1),
		width: '90%'
	},
	avatar: {
		width: '10%',
		textAlign: 'left',
		margin: 5
	},
	cardContainerStep3: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	card: {
		width: '47%',
		margin: 8,
		textAlign: 'left'
	},
	cardRootStep3: {
		width: '100%',
		height: 130,
		padding: 10
	},
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

function getStyles(name, personName, theme) {
	return {
	  fontWeight:
		personName.indexOf(name) === -1
		  ? theme.typography.fontWeightRegular
		  : theme.typography.fontWeightMedium,
	};
}

function Alert() {
	const classes = useStyles();
	const [selected, setSelected] = React.useState(true);
	const [activeIdVideo, setActiveIdVideo] = React.useState(0);
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [eventValue, setEventValue] = React.useState([]);
	const [cameraValue, setCameraValue] = React.useState([]);
	const [selectedStep3, setSelectedStep3] = React.useState();
	const handleChange = (event,from) => {
		if(from === 'events')
			setEventValue(event.target.value)
		if(from === 'camera')
			setCameraValue(event.target.value)
	};
	const alertTypes1 = [
		{id: 0, name: 'Dog Alone', descrption: 'All Cameras'},
		{id: 1, name: 'Loethring', descrption: 'Halways, Stairwells'},
		{id: 2, name: 'Party', descrption: 'Roof Backward'},
		{id: 3, name: 'Moving', descrption: ''},
		{id: 4, name: 'Smoking', descrption: 'All Building'},
		{id: 5, name: 'Fire', descrption: 'All Building'},
		{id: 6, name: 'Luggage', descrption: ''},
		{id: 7, name: 'Peeing', descrption: 'All Building'}
	];
	const alertTypes2 = [	
		{id: 4, name: 'Smoking', descrption: 'All Building', events:['alone', 'peeing'], camera:['camera 1', 'camera 2']},
		{id: 5, name: 'Fire', descrption: 'All Building', events:['alone', 'peeing'], camera:['camera 1', 'camera 2']},
		{id: 6, name: 'Luggage', descrption: '', events:['alone', 'peeing'], camera:['camera 1', 'camera 2']},
		{id: 7, name: 'Peeing', descrption: 'All Building', events:['alone', 'peeing'], camera:['camera 1', 'camera 2']}
	]
	const toggleSelected = () => {
		setSelected(!selected);
	};

	const handleClick = (ev, data) => {
		setActiveIdVideo(data.id);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	
	const handleSelectedStep3 = (e,id) => {
		setSelectedStep3(id);
	};
	  
	console.log("Selected alert id",selectedStep3)
	return (
		<div className='d-flex w-100 h-100 justify-content-between dashboard p-5 align-items-center'>
			<div className='d-flex justify-content-center align-items-center w-100 alert col-12 h-100'>
				<div className='inner-alert col-8 p-4'>
					{activeStep === 0 && <div>
							<div className='pb-1'>
								<h5><strong>STEP 1</strong></h5>
							</div>
							<div className='pb-1'>
								<h4><strong>Hey there,</strong></h4>
							</div>
							<div className='pb-3'>
								<h4>What alerts do you want to set up today?</h4>
							</div>
							<div className='d-flex pb-3 justify-content-center'>
								<div className="toggle-container" onClick={toggleSelected}>
									<div className='d-flex h-100 align-items-center justify-content-center'>
										<div className='w-50'><strong>RECOMMENDED ALERTS</strong></div>
										<div className='w-50'><strong>ALL ALERTS</strong></div>
									</div>
									{}
									<div className={`dialog-button ${selected ? "" : "disabled"}`}>
										{selected ? "ALL ALERTS" : "RECOMMENDED ALERTS"}
									</div>
								</div>
							</div>
							<div className='d-flex w-100 row m-0'>
								{alertTypes1.map((data) => {
								return (
									<div className='col-3 mb-4'
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className={`d-flex align-items-center justify-content-center alert-types ${activeIdVideo === data.id && 'active-video'}`}>
											<div className='d-block p-2'>
												<div>
													<strong>{data.name}</strong>
												</div>
												<div>{data.description}</div>
											</div>
										</div>
									</div>
									);
								})}
							</div>
						</div>
					}
					{activeStep === 1 && <div>
						<div className='pb-1'>
								<h5><strong>STEP 2</strong></h5>
							</div>
							<div className='pb-1'>
								<h4><strong>Hey there,</strong></h4>
							</div>
							<div className='pb-3'>
								<h4>What alerts do you want to set up today?</h4>
							</div>
							<div className='d-flex w-100 row m-0'>
								{alertTypes2.map(data => {
									return (
										<div className={classes.cardContainer}>
											<Card key={data.id} className={classes.cardRoot}>
												<h3>{data.name}</h3>
												<FormControl className={classes.formControl}>
													<InputLabel id="demo-mutiple-name-label">Select Events</InputLabel>
													<Select
													labelId="demo-mutiple-name-label"
													id="demo-mutiple-name"
													multiple
													value={eventValue}
													onChange={(e)=>handleChange(e,'events')}
													input={<Input />}
													MenuProps={MenuProps}
													>
													{data.events.map((name) => (
														<MenuItem key={name} value={name} style={getStyles(name, eventValue, theme)}>
														{name}
														</MenuItem>
													))}
													</Select>
												</FormControl>
												<FormControl className={classes.formControl}>
													<InputLabel id="demo-mutiple-name-label">Select Cameras</InputLabel>
													<Select
													labelId="demo-mutiple-name-label"
													id="demo-mutiple-name"
													multiple
													value={cameraValue}
													onChange={(e)=>handleChange(e,'camera')}
													input={<Input />}
													MenuProps={MenuProps}
													>
													{data.camera.map((name) => (
														<MenuItem key={name} value={name} style={getStyles(name, eventValue, theme)}>
														{name}
														</MenuItem>
													))}
													</Select>
												</FormControl>
											</Card>
										</div>
									);
								})}
							</div>
						</div>
					}
					{activeStep === 2 && <div>
						<div className='pb-1' >
								<h5><strong>STEP 3</strong></h5>
							</div>
							<div className='pb-1'>
								<h4><strong>Hey there,</strong></h4>
							</div>
							<div className='pb-3'>
								<h4>What alerts do you want to set up today?</h4>
							</div>
							<div className='d-flex w-100 row m-0'>
								{alertTypes1.map((data) => {
								return (
									<div className={classes.card}>
										<Card key={data.id} className={classes.cardRootStep3} onClick={(e)=>handleSelectedStep3(e,data.id)} >
											<div className={classes.cardContainerStep3}>
												<Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
												<div className={classes.choiceContent}>
													<h5>{data.name}</h5>
												</div>
											</div>
											<div className="d-flex align-items-center">
												<div className="m-1">Events</div>
												<div>
													{eventValue.map((name) => (
														<span className="m-1">{name}</span>
													))}
												</div>
												
											</div>
											<div className="d-flex align-items-center">
												<div className="m-1">Camera</div>
												<div>
													{cameraValue.map((name) => (
														<span className="m-1">{name}</span>
													))}
												</div>
											</div>
										</Card>
									</div>
									);
								})}
							</div>
						</div>
					}
					<div className='pb-3'>
						<button className='next-btn' onClick={handleNext}>NEXT</button>
					</div>
					<MobileStepper
						variant="dots"
						steps={3}
						position="static"
						activeStep={activeStep}
						className={`pb-3 ${classes.root}`}
					/>
				</div>

			</div>
		</div>
	);
}

export default Alert;
