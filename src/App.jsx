import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from "./components/Nav";


function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
  
  )
}
export default App;
