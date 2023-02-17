import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Naveng from '../components/nav/Naveng'
import ContainerBox from '../components/containerbox/ContainerBox'
import ProfileAvatarEng from '../components/profile/ProfileAvatarEng';
import SMBox from '../components/containerbox/SMBox';

const theme = createTheme({

    palette: {
      primary: {
        main: "#68904D",
        
      },
      secondary: {
        main: "#F9E79F"
      }, 
      background:
      {
        default: "#14471E",
        
        
      }
      
    }
    
  });

function English() {
  return (
    <ThemeProvider theme={theme}>
     <Naveng/>
     <ProfileAvatarEng/>
    <ContainerBox title={"Hello there! I'm Gabriel Nice to meet you!"} text ={"My name is Gabriel Olivares and I'm a freelancer programmer looking for a Junior/Trainee position as a Data Science/AI focused programmer. At the moment I'm living in my country, Chile, but I'm available to work for your company either remotely or at your office (with the due VISA, that is). Feel free to download my Curriculum Vitae by clicking the above button and to visit both my LinkedIn and Github profiles to find the projects I've worked on and some extra information about me."} theme = {theme}/>
    <ContainerBox title={'Contact'} text ={'Email: gabriel.olivares.armijo@gmail.com\nPhone Number: +56 981759562'} theme = {theme}/>
    <SMBox title={'Networks and Projects'} theme={theme}/>
    </ThemeProvider>
  )
}

export default English