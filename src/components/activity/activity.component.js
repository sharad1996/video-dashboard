import React from 'react'
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './activity.styles.scss';

const useStyles = makeStyles({
    formControl: {
        minWidth: 200,
        maxHeight: 50,
    },
    formControlBuilding: {
        minWidth: '100%',
        maxHeight: 50,
    }
});

export default function Activity(props) {

    const classes = useStyles();
    const {playVideo, age, handleChange, videos, activeIdVideo} = props
    return (
        <div className='location-block'>
            <div className='p-3'>
                <div className='d-flex justify-content-between px-3'>
                    <div className=''>Location</div>
                    <div className='filter'>Filters+</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <FormControl variant="outlined" className={classes.formControlBuilding}>
                        <InputLabel id="demo-simple-select-outlined-label">Building Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={()=>handleChange()}
                            label="Building Name"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-block'>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age All</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Age All"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='filter pr-3'>Filters+</div>
                </div>
            </div>
            <div className='location-data'>
                {videos.map((data) => {
                    return (
                        <div className={`px-4 d-flex align-items-center mb-4 ${activeIdVideo === data.id && 'active-video'}`} key={data.id} onClick={() => playVideo(this, data.id)}>
                            <img src={data.image} alt={data.heading}/>
                            <div className='d-block pl-3 pr-5'>
                                <div><strong>{data.heading}</strong></div>
                                <div>{data.description}</div>
                            </div>
                            <div className='px-4'>
                                <div>{moment(data.time).format('h:mm a')}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
