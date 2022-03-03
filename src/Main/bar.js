import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-scroll"
import './main.css'

const useStyles = makeStyles({
    bar: {
      position:'fixed',
      color: "white",
      backgroundColor: "black",
      margin: 0,
    },
  });

function Bar(){
    const classes = useStyles();
  return (
    <AppBar position="static">
        <Toolbar  className={classes.bar}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }} >
              <ButtonBase href={"#"}>
                회사 로고
              </ButtonBase>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  fontFamily="tway_fly"> 
                <Link to="main-1" spy={true} smooth={true}> 
                    회사 소개
                </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  fontFamily="tway_fly">
                <Link to="main-2" spy={true} smooth={true}>
                    시설 설비
                </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  fontFamily="tway_fly">
                <Link to="main-3" spy={true} smooth={true}>
                    제품 소개 
                </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}  fontFamily="tway_fly"> 
                <Link to="main-4" spy={true} smooth={true}>
                    제품 의뢰 및 고객센터
                </Link>
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  );
}
export default  Bar;