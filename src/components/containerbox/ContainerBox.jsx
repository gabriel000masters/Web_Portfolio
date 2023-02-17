import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme)=>
createStyles({

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        margin: theme.spacing(2),
        flexGrow:1
        // necessary for content to be below app bar
        //...theme.mixins.toolbar,
        //justifyContent: 'flex-start',
      },
      
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
    },
    title:
    {
        
        flexGrow:1,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
        textDecorationColor:'#fff',
        color:'#212121',
        textAlign: 'center'
        
    }, 
    text:
    {
        
        flexGrow:1,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
        color:'#212121',
        textAlign: 'center'
        
    }, 
    linkcolor:
    {
      color: 'black'
    }
    
       


}),
);


const ContainerBox = ({title, theme, text}) => {
    const classes = useStyles();
    
    const [choice, setChoice] = React.useState(true);
    
   
    
    return (
        <div>
            
        
          <div className={classes.drawerHeader} />
          <Fade  in={choice === true} timeout={1000}>
            <div>

          <Box bgcolor={theme.palette.primary.main} className={classes.content}  >
            <Box bgcolor={theme.palette.secondary.main} className={classes.title}>
                <Typography lassName={classes.text}>
                {title}
                </Typography>
            </Box>
            <Typography paragraph>
            {text.split("\n").map((i, key) => {
    return <div key={key}>{i}</div>;
  })}
          </Typography>
            </Box>
          
          </div>
         </Fade>
        </div>
    )
}
export default ContainerBox;