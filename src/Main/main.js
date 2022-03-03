import { MainTitle } from './maintitle';
import { Introduction } from "./Page/introduction01";
import { Introduction01_1} from "./Page/introduction01-1";
import { Introduction02 } from "./Page/introduction02";
import { Introduction03 } from "./Page/introduction03";
import { Introduction04 } from "./Page/introduction04";
import { makeStyles } from '@material-ui/styles';
import { Title } from './titletext';
import {useState, useEffect} from 'react';

import React from 'react';
import Box from '@material-ui/core/Box';
import Bar from "./bar";
import SpaceImage from './Img/space.jpg';


const useStyles = makeStyles({
    '@global': {    
        body: {
          margin: 0,
        }
      },
    paper:{
        backgroundColor: "white",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        width:"blue",
    },
    mainimgae: {
        backgroundImage: `url(${SpaceImage})`,
        backgroundColor: "black",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        width:"auto",
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    body:{
        textAlign: 'center',
        height: '100vh',
        width:"auto",
    },
    view:{
        backgroundColor: "black",
    },main_2:{
        backgroundColor: "white"
    }
  }); 
   

function MainPage() {
    const classes = useStyles();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <div className={classes.view} >
            <Bar/>
            <Box id="Main" className={classes.mainimgae}>
                <MainTitle />
            </Box>
            <div id="main-body">
                <div id="main-1">
                    <Introduction scrollPosition={scrollPosition}/>
                </div>
                <div id="main-1-1" className={classes.main_2}>
                    <Introduction01_1/>
                </div>
                <Title text="시설 설비"/>
                <div id="main-2" className={classes.main_2}>
                    <Introduction02/>
                </div>
                <Title text="제품 소개"/>
                <div id="main-3"className={classes.main_2}>
                    <Introduction03/>
                </div>
                <div id="main-4"className={classes.main_2}>
                    <Introduction04/>
                </div>
            </div>
        </div>
    );
}
export default MainPage;