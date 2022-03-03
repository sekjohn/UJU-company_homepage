import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    footer_: {
      position:'fixed',
      color: "white",
      backgroundColor: "black",
      flexDirection: 'column',
      justifyContent:'flex-start',
      padding:20,
      margin: 0,
    },
  });

function Footer({text}){
    const classes = useStyles();
    return (
        <Toolbar className={classes.footer_}>
            <Typography variant="subtitle2" gutterBottom component="div">
                경기도 남양주시 진접읍 내각1로 89번길 80
            </Typography>
            <Typography variant="subtitle2" component="div">
                TEL : 031-527-5487
            </Typography>
            <Typography variant="subtitle2" component="div">
                H.P : 010-6647-5488
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                E-mail : shine1854@hanmail.net
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                사업자등록번호 : 406-01-6331
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                대표자 : 석병관
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                Copyright © 2014 우주정밀산업. All rights reserved.
            </Typography>
        </Toolbar>

    );
}

export default Footer;