import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import HistoryImage from '../Img/ba68bbe6c319a08172d25c7b2c33ffc9.png';

const useStyles = makeStyles({
    body:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '250vh',
        width:"100%",
    },
    paper:{
        height: '220vh',
        width:"90vh",
    }
  }); 

  export function Introduction01_1(){
    const classes = useStyles();
    return (
        <Paper elevation={10} className={classes.body} img={HistoryImage}>
            <img className={classes.paper} src={HistoryImage} alt="HistoryImage"/>
        </Paper>  
    );
}

