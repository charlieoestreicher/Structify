import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
    textField: {
      marginTop: 20,
      marginBottom: 20,
      align: "center",
      display: "block"
    },
    topMargin: {
        marginTop: 20,
        marginBottom: 5,
        align: "center",
        display: "block"
      },
      bottomMargin: {
        marginTop: 5,
        marginBottom: 20,
        align: "center",
        display: "block"
      },
  });


export default function Preferences(props) {
    const [preferences, setPreferences] = useState({});
    const history = useHistory();
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function onSubmit() {
        preferences["startDate"] = startDate;
        preferences["endDate"] = endDate;
        console.log(JSON.stringify(preferences))
        props.callbackFunc(preferences);
        history.push("/input1");
    }

    return (
        <div className="body1">
            <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "90vh" }}>
            <Typography variant="h3" color="primary" className={classes.textField}>
                Enter Preferences
            </Typography>

            <div className={classes.textField}>
            <Typography variant="h6" color="default" className={classes.topMargin}>
                Start Time
              </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                label="Masked timepicker"
                placeholder="08:00 AM"
                mask="__:__ _M"
                value={startDate}
                onChange={date => setStartDate(date)}
                />
            </MuiPickersUtilsProvider>
            </div>
            <div className={classes.textField}>
            <Typography variant="h6" color="default" className={classes.topMargin}>
                End Time
              </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                label="Material Date Picker"
                placeholder="08:00 AM"
                value={endDate}
                onChange={date => setEndDate(date)}
                />
            </MuiPickersUtilsProvider>
            </div>
            

            <Button onClick={onSubmit} variant="contained">Submit</Button>
            </Grid>
            
        </div>
    )
}