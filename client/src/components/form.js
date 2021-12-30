import React, { useState } from "react";
import axios from 'axios';
import { Grid, Paper, TextField, Button, Typography, Container, Box } from "@material-ui/core";
import DateTimePicker from 'react-datetime-picker';
import useStyles from './styles';


const Form = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        creator:'',
        postTime: new Date(),
        selectedFile: ''
    });

    // const clear = () => {}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData)
        axios.post("http://localhost:5000/record/add", postData).then((res) => console.log(res.data));  

    };

   
    return (

        <Paper className={classes.paper}> 
        <Grid>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Schedule Posts</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event)=>setPostData({...postData, creator: event.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event)=>setPostData({...postData, title: event.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event)=>setPostData({...postData, message: event.target.value})}/>
        
            <Grid>
            <div className="Sample">
                    <div className="Sample__container">
                        <main className="Sample__container__content">
                            <DateTimePicker
                                name="posttime" 
                                label="PostTime"
                                amPmAriaLabel="Select AM/PM"
                                calendarAriaLabel="Toggle calendar"
                                clearAriaLabel="Clear value"
                                dayAriaLabel="Day"
                                hourAriaLabel="Hour"
                                minuteAriaLabel="Minute"
                                monthAriaLabel="Month"
                                nativeInputAriaLabel="Date and time"
                                onChange={(event)=>setPostData({...postData, postTime: event})}
                                secondAriaLabel="Second"
                                value={postData.postTime} 
                                yearAriaLabel="Year"
                            />
                        </main>
                    </div>
                </div>
                </Grid>
                <Grid>
                    <Container y={{ p: 0.5 }}>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    </Container>
                </Grid>
            </form>
        </Grid>

        </Paper>
    );
}
export default Form 
