import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import './App.css';

import Footer from "./component/footer.component";
import Navbar from "./component/navbar.component";

import Home from "./home";
import About from "./pages/about";
import Team from "./pages/team";

function App() {
  return (
    <div className="App">
       <Router> 
 <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/> 
    <Route path="/team"  element={<Team/>}/> 
    </Routes>
    <Footer/>
    
  </Router> 
  
 
  
    </div>
  );
}
export default App;




