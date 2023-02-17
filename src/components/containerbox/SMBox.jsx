import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from "@material-ui/core/Fade";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@material-ui/core/Link';


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
        color:'#212121',
        textAlign: 'center'
        
    }, 
    linkcolor:
    {
      color: 'black'
    }
    
       


}),
);

function SMBox({title, theme}) {
    const classes = useStyles();
    
    const [choice, setChoice] = React.useState(true);
  return (
    
   <div>
    <div className={classes.drawerHeader}/>
        <Fade in={choice === true} timeout={1000}>
            <div>
            <Box bgcolor={theme.palette.primary.main} className={classes.content}  >
            <Box bgcolor={theme.palette.secondary.main} className={classes.title}>
                <Typography >
                {title}
                </Typography>
            </Box>
            <Typography  className={classes.drawerHeader}>
              <Link href="https://github.com/gabriel000masters" target='_blank' title='Github' className={classes.linkcolor}>
              <GitHubIcon sx={{ width: 100, height: 100 }}/>
              </Link>
              
              <Link href='https://www.linkedin.com/in/gabriel-oliv-ar/' target='_blank' title='LinkedIn' className={classes.linkcolor}>
              <LinkedInIcon sx={{ width: 100, height: 100 }}/>
              </Link>
              
          </Typography>
            </Box>
            </div>
        </Fade>
   </div>
  )
}

export default SMBox