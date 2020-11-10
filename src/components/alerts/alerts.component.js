import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './alerts.styles.scss';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 500,
    }
});

function Alert() {
	const classes = useStyles();
	const [selected, setSelected] = React.useState(true);
	const [activeIdVideo, setActiveIdVideo] = React.useState(0);
	const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
	const alertTypes1 = [
		{id: 0, name: 'Dog Alone', descrption: 'All Cameras'},
		{id: 1, name: 'Loethring', descrption: 'Halways, Stairwells'},
		{id: 2, name: 'Party', descrption: 'Roof Backward'},
		{id: 3, name: 'Moving', descrption: ''},
	];
	const alertTypes2 = [	
		{id: 4, name: 'Smoking', descrption: 'All Building'},
		{id: 5, name: 'Fire', descrption: 'All Building'},
		{id: 6, name: 'Luggage', descrption: ''},
		{id: 7, name: 'Peeing', descrption: 'All Building'}
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

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

	return (
		<div className='d-flex w-100 h-100 justify-content-between dashboard p-5 align-items-center'>
			<div className='d-block w-100 alert col-12'>
				<div className='inner-alert col-6 p-4'>
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
							<div className='d-flex w-100 col-12'>
								{alertTypes1.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
										</div>
									</div>
									);
								})}
							</div>
							<div className='d-flex w-100 col-12'>
								{alertTypes2.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
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
							<div className='d-flex w-100 col-12'>
								{alertTypes1.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
										</div>
									</div>
									);
								})}
							</div>
							<div className='d-flex w-100 col-12'>
								{alertTypes2.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
										</div>
									</div>
									);
								})}
							</div>
						</div>
					}
					{activeStep === 2 && <div>
						<div className='pb-1'>
								<h5><strong>STEP 3</strong></h5>
							</div>
							<div className='pb-1'>
								<h4><strong>Hey there,</strong></h4>
							</div>
							<div className='pb-3'>
								<h4>What alerts do you want to set up today?</h4>
							</div>
							<div className='d-flex w-100 col-12'>
								{alertTypes1.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
										</div>
									</div>
									);
								})}
							</div>
							<div className='d-flex w-100 col-12'>
								{alertTypes2.map((data) => {
								return (
									<div className={`col-3 m-1 d-flex align-items-center justify-content-center alert-types mb-4 ${activeIdVideo === data.id && 'active-video'}`}
										key={data.id}
										onClick={() => handleClick(this, data) }
									>
										<div className='d-block'>
											<div>
												<strong>{data.name}</strong>
											</div>
											<div>{data.description}</div>
										</div>
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
