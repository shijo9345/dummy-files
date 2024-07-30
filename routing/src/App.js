import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Nav';
import About from './About';
import './App.css';
import Home from './Home';
import Blog from './Blog'
import Footer from './Footer'
import Contact from './Contact'

function App() {
  return (
    <BrowserRouter><div>
      <Navbar/>
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="name" element={<About/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
        
      </Routes>
    </div> 
   
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
