import React, { Component } from 'react'
import json from '../cred.json';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            
            proData: [],
            userData: [],
             password: ''
            
        }
    }
    componentDidMount() {
        this.setState({ proData: json.cred })
    }
    handler = (event) => {
        const { name, value } = event.target;
        
      
        this.setState({ [name]: value } )
    }
    
    formSubmit = (event) => {
        event.preventDefault();
        let formdata = {
            email: this.state.email,
          
            password: this.state.password
        }
        console.log(formdata)
     

            for (var i = 0; i < this.state.proData.length; i++) 
            {
                if (this.state.proData[i].email === formdata.email && this.state.proData[i].password === formdata.password) {
                    alert("Login Successful");
                    this.setState({
                        userData: [...this.state.userData,
                        {   
                            'email': formdata.email,
                            'password': formdata.password

                        }]

                    });
                

                    localStorage.setItem('userdetails', formdata.email);
                    this.props.history.push("/Todo")
                    break;
                }
                else if (i === this.state.proData.length-1) {
                    alert("Not Valid");
                }
               
            }
            console.log(this.state)
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            console.log(this.state)
        
       
    }

   
    render() {
    
        return (
          
            <div className="container-fluid row" style={{backgroundColor:"#EFE3E1",height:"2000px"}}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <form onSubmit={this.formSubmit}>
       
        <h1 className="text-center" style={{marginTop:"80px"}}>Login</h1>
        <label htmlFor="login">Email</label>
        <input
          onChange={this.handler}
          id="email"
          name="email"
          type="text"
          className="form-control"
          style={{backgroundColor:"#F9F1F1"}} 
        />
        <label htmlFor="password" style={{marginTop:"30px"}}>Password</label>
        <input
          onChange={this.handler}
          id="password"
          name="password"
          type="password"
          className="form-control"
          style={{backgroundColor:"#F9F1F1"}} 
        />
        <button type="submit" className="btn btn-primary text-center" style={{marginLeft:"280px",marginTop:"30px"}}>Log in</button>
      </form>
      <br/><br/>
      <p className="text-center">If Not Registered, <Link to="/Reg">Register Here</Link></p>
            </div>
            <div className="col-md-3"></div>
     
      </div>
        )
    }
}

export default Login;