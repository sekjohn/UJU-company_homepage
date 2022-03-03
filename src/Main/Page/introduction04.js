import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@mui/material/Typography';

import SpaceStart from '../Img/space_star.png';

const useStyles = makeStyles({
    body:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '50vh',
        backgroundImage: `url(${SpaceStart})`,
        space:1
    },
  }); 

  export function Introduction04(){
    const classes = useStyles();
    return (
        <Box elevation={10} className={classes.body}>
            <Typography variant="h1" fontFamily="ONE_Mobile" align="center" color="white" > 
                제품 의뢰 및 고객센터
            </Typography>
            <Typography variant="h3" fontFamily="ONE_Mobile" align="center" color="white"> 
                문의하기
            </Typography>
        </Box>
    );
}
