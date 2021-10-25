import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Reg from './components/Reg';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Login from './components/Login';
// import {Todo1} from './components/Todo1';
// import {Todo1} from './components/Todo1'
import Home from './components/Todo/Home';


function App() {
  return (
    <div >
     {/* <Todo/> */}
     {/* <Reg/> */}
     <Router>
        <Switch>
        <Route path="/" exact component={Login}/>
        {/* <Redirect exact from="/" to="/Todo" />  */}
       <Route path="/Todo" exact component={Home}/>
       <Route path="/Reg" exact component={Reg}/>
       </Switch> 
       {/* <Login/> */}

     </Router>
    </div>
  );
}

export default App;
