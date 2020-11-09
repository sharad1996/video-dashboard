import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './alerts.styles.scss';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 500,
    }
});

function Alert() {
	const classes = useStyles();
	const [selected, setSelected] = React.useState(false);

	const toggleSelected = () => {
		setSelected(!selected);
	}

	return (
		<div className='d-flex w-100 h-100 justify-content-between dashboard p-5 align-items-center'>
            <div className='d-block w-100 alert col-12'>
				<div className='inner-alert col-6 p-4'>
					<div>Step 1</div>
					<div></div>
					<div>Hey there,</div>
					<div>What alerts do you want to set up today?</div>
					<div>
						<div className="toggle-container" onClick={toggleSelected}>
							<div className={`dialog-button ${selected ? "" : "disabled"}`}>
								{selected ? "RECOMMENDED ALERTS" : "ALL ALERTS"}
							</div>
						</div>
					</div>
					<div>
						<button className='next-btn'>NEXT</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Alert;
