import React, {Component} from 'react';
import Home from './Home';
import Contact from './Contact';
import Branch from './Branch';
import Nopage from './Nopage';
import  ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './styles.css';
class App extends Component{
    render() {
        return(
 <Router>
  <h1>Cpc polytechnic mysore</h1>
  <nav>
    <ul>
      <li>
    <Link to="/Home">HOME</Link><br></br>
    </li>
    <li>
    <Link to="/Branch">BRANCH</Link><br></br>
    </li>
    <li>
    <Link to="/Contact">CONTACT</Link><br></br>
    </li>
    <li>
    <Link to="/Nopage">NOPAGE</Link><br></br>
    </li>
    </ul>
  <Routes>
     <Route exact path='/Home' element={<Home />} /> 
     <Route exact path='/Branch' element={<Branch />} /> 
     <Route exact path='/Contact' element={<Contact />} />  
     <Route exact path='/Nopage' element={<Nopage />} /> 
   </Routes>
   </nav>
 </Router>      
        );
        }
    }
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

export default App;
