import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Students from './components/Students';
import Contectus from './components/Contectus';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Students' element={<Students/>}/>
         <Route path='/Contectus' element={<Contectus/>}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
