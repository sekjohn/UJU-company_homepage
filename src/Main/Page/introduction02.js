import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import IconButton from '@mui/material/IconButton';

import Leftbutton from '../Img/Icon/arrow-angle-left-circle-svgrepo-com.svg';
import Rightbutton from '../Img/Icon/arrow-angle-right-circle-svgrepo-com.svg';

const useStyles = makeStyles({
    body:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        height: '100vh',
        background: '#1C1C1C'
    },
    paper:{
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign: 'center',
        height: '80%',
        width: '70%',
    },img:{
        width:"80px",
        height:"80px",
    }
  }); 

  export function Introduction02(){
    const classes = useStyles();
    return (
        <Box elevation={10} className={classes.body} id="view">
            <IconButton aria-label="next" size="large">
                <img className={classes.img} src={Leftbutton} alt="left-button"/>
            </IconButton>
            <Paper className={classes.paper}>
                <div>
                </div>
            </Paper>
            <IconButton aria-label="next" size="large">
                <img className={classes.img} src={Rightbutton} alt="right-button"/>
            </IconButton>
        </Box>
    );
}

