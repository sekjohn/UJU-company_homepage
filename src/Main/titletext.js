import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';
import './main.css'

export function Title({text}){
    return (
        <Box padding={3} 
            sx={{
                backgroundColor: 'black'
            }}>
            <Typography variant="h2" fontFamily="ONE_Mobile" align="center"color="white" >  
                {text}
            </Typography>
        </Box>
    );
}

