import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Login from './components/login'
import Signup from './components/signup';
import { Route, Routes } from 'react-router';

function App() {
  return(
    <>
 
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />}>
 
    </Route>
    <Route path="/about" element={<About />}>

    </Route>
    
    <Route path="/login" element={<Login />}>

    </Route>
    <Route path="/signup" element={<Signup />}>
   
    </Route>
    </Routes>
    

    
    </>
  )
  
}

export default App;
