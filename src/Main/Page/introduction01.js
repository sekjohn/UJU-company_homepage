import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles({
    body:{
        height: '100vh',
        width:"auto",
        background: 'linear-gradient(to right, #0000,#1C1C1C, #0000);'
    },
    title:{
        flex: 1,
        justifyContent: 'center',
        color: "white",
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center', 
        height: '100%',
        width:"auto"

    },
    text:{
        fontSize: 18
    }
  }); 


const TextInfoList = () =>{
    const classes = useStyles();
    return(
        <FadeIn delay={250} className={classes.text} >      
            <div className="copy__content">
                <h1  className="text-pb-1">
                    우주정밀산업은
                </h1>
            </div>
            <div className="copy__content">
                <h3  className="text-pb-2">
                    복합 CNC 정밀절삭 가공회사로 2014년 3월 13일 창업을 한 기업 입니다.
                </h3>
            </div>
            <div>
                <h3 className="text-pb-3">
                    복합CNC정밀 가공하는 전문분야에
                </h3>
                <h3 className="text-pb-3-1">
                    25년 실무 경험과 열정을 바탕으로 창업을 하였습니다.
                </h3>
            </div>
            <div>
                <h3 className="text-pb-4">
                    정밀분야 CNC 가공업체로서,
                </h3>
            </div>
            <div>
                <h2  className="text-pb-6">
                    "최상의 품질"
                </h2>
            </div>
            <div>
                <h2  className="text-pb-7">
                    "고객만족"
                </h2>
            </div>
            <div>
                <h3  className="text-pb-8">
                    을 목표로 전 직원이 최선의 노력을 
                </h3>
                <h3  className="text-pb-8-1">
                    다 하여 더욱 더 성정하는 기업으로 거듭 나고자 합니다.
                </h3>
            </div>
        </FadeIn>
    );
}

export function Introduction({scrollPosition}){
    const classes = useStyles();
    return (
        <Paper className={classes.body} id="12">
            <Box className={classes.title} fontFamily="tway_fly">
                {  
                    scrollPosition >= 200? (<TextInfoList className={classes.text}/>) : (null)
                } 
            </Box>
        </Paper>
    );
}

