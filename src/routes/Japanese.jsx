import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navjp from '../components/nav/Navjp';
import ContainerBox from '../components/containerbox/ContainerBox';
import ProfileAvatarJp from '../components/profile/ProfileAvatarJp';
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

function Japanese() {
  return (
    <ThemeProvider theme={theme}>
     <Navjp/>
     <ProfileAvatarJp/>
    <ContainerBox title={'どうも! 私はGabrielです。宜しくお願い致します!'} text ={'私の名前はGabriel Olivaresで、データサイエンス/AIに特化したプログラマーとしてジュニア/トレーニーのポジションを探しているフリーランサーのプログラマーです。現在、私は母国であるチリに住んでいますが、御社の為にリモートまたは御社のオフィスで働くことが可能です（この場合、VISAが必要です）。もし宜しければ私の履歴書は上記のボタンからダウンロードできますし、LinkedInとGithubのプロフィールをご覧になって、自分の今までのプロジェクトやその他の情報を見つけられます。'} theme = {theme}/>
    <ContainerBox title={'連絡先はこちら!'} text ={'Email: gabriel.olivares.armijo@gmail.com\nPhone Number: +56 981759562'} theme = {theme}/>
    <SMBox title={'SNSやプロジェクトはこちら!'} theme={theme}/>
    </ThemeProvider>
  )
}

export default Japanese