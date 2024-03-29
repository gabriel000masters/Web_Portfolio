import React from 'react'
import Avatar from '@mui/material/Avatar';
import img from './profile-gabriel-olivares.jpg';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import curric_vitae_eng from './Gabriel Andres Olivares Armijo.pdf';


const useStyles = makeStyles((theme)=>
createStyles({

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1, 1),
        // necessary for content to be below app bar
        //...theme.mixins.toolbar,
        //justifyContent: 'flex-start',
      },
      
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
    },
      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1, 1),
        // necessary for content to be below app bar
        //...theme.mixins.toolbar,
        //justifyContent: 'flex-start',
    },
})
);
const onDownload = () => {
  const link = document.createElement("a");
  link.download = `Resume Gabriel Olivares.pdf`;
  link.href = curric_vitae_eng;
  link.click();
};

function ProfileAvatarEng() {
    const classes = useStyles();
    return (
      
  
      <>
      <div className={classes.drawerHeader}>
        <Avatar
        alt="Gabriel Olivares"
        src={img}
        sx={{ width: 320, height: 350 }}
        />
      </div>
      
      <div className={classes.button}>
        <Button onClick={onDownload} variant='contained' color='primary'>Get Resume</Button>
      </div>
      </>
    )
}

export default ProfileAvatarEng