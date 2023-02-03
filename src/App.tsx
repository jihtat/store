import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import {BrowserRouter} from 'react-router-dom'  
import {Shop} from './components/Pages/Shop';
import {About} from './components/Pages/About';
import {Contact} from './components/Pages/Contact';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
 
  return (
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
      <Route path='Shop' element={<Shop/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
   
  );
  
}

export default App;
