import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './main.css'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    }
  },
});


const useStyles = makeStyles({
    h1: {
      fontWeight: 'bold',
      textAlign: "center",
      color: 'white',
    },
    h2:{
      fontWeight: 'normal',
      textAlign: "center",
      color: 'white'
    }
  }); 
  
export function MainTitle(){
    const classes = useStyles();
  return (
    <Box>
        <Stack direction="column" alignItems="center" spacing={3}>
            <Typography className={classes.h2} fontFamily="ONE_Mobile"  variant="h3">
                복합 CNC 정밀절삭 가공 전문 기업
            </Typography>
            <Typography className={classes.h2} fontFamily="ONE_Mobile"  variant="h4">
                30년 경력, 고품질 정밀 가공 
            </Typography>
            <Typography className={classes.h1}  variant="h6" fontFamily="ONE_Mobile">
                우주 정밀 산업(유)
            </Typography>
              <Box boxShadow={24}>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined" size="large" color="neutral" href={"#"} >
                    제품 의뢰 및 문의 하기
                  </Button>
                </ThemeProvider>
              </Box>
        </Stack>
    </Box>

  );
}