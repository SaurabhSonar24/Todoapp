import './App.css';
import Reg from './components/Reg';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Login from './components/Login';

import Home from './components/Todo/Home';


function App() {
  return (
    <div >
    
     <Router>
        <Switch>
        <Route path="/" exact component={Login}/>
       <Route path="/Todo" exact component={Home}/>
       <Route path="/Reg" exact component={Reg}/>
       </Switch> 
     

     </Router>
    </div>
  );
}

export default App;
