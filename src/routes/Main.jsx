import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navesp from '../components/nav/Navesp';
import ContainerBox from '../components/containerbox/ContainerBox';
import ProfileAvatar from '../components/profile/ProfileAvatar';
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
  
function main() {
  return (
    <ThemeProvider theme={theme}>
     <Navesp/>
     <ProfileAvatar/>
    <ContainerBox title={'¡Hola, mi nombre es Gabriel! ¡Es un placer!'} text ={'Mi nombre es Gabriel Olivares y soy un programador independiente que busca un puesto Junior/Trainee como programador enfocado en Data Science/AI. Actualmente estoy viviendo en mi país, Chile, pero estoy disponible para trabajar para su empresa ya sea de forma remota o en su oficina (con la debida VISA, eso sí). Siéntase libre de descargar mi Currículum Vitae haciendo clic en el botón de arriba y de visitar mis perfiles de LinkedIn y Github para encontrar los proyectos en los que he trabajado y alguna información extra sobre mí.'} theme = {theme}/>
    <ContainerBox title={'Contacto'} text ={'Email: gabriel.olivares.armijo@gmail.com\nNúmero de contacto: +56 981759562'} theme = {theme}/>
    <SMBox title={'Redes y Proyectos'} theme={theme}/>
    </ThemeProvider>

   
    
  )
}

export default main