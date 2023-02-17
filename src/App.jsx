import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Japanese from './routes/Japanese';
import English from './routes/English';

const APP = () => {
  return (
    <Router>
    <>
        <Routes>
            <Route path='/' exact element={<Main/>}/>
            <Route path='/eng' exact element={<English/>}/>
            <Route path='/jp' exact element={<Japanese/>}/>
           

            
        </Routes>
    
</>
</Router>
  )
}


export default APP