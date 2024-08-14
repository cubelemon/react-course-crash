import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
      <Router>
        {/* Everything has to be wrapped around Router */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          
          
          {
          /*
          
          This makes the page refresh even if you click on the same route

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> 
          
          */}
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
  
  )
}
export default App;
