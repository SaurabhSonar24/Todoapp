import React, { Component } from 'react'

import axios from 'axios'
import { Link,Redirect,useHistory } from 'react-router-dom';

const regForName =RegExp(/^[A-Za-z]/);
const regForEve =RegExp(/^(?!^ +$)^.+$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);


export class Reg extends Component {
    constructor(props) {
        super(props)
        
        this.state = { prodata: [], fname: '', lname: '', username: '',email:'',password:'',confirm_password:'', errors:{
            fname:'',
            lname:'',
            username:'',
            email:'',
            password:'',
            confirm_password:''
            
            
            
        },err:{
            fname:'',
            lname:'',
            username:'',
            email:'',
            password:'',
            confirm_password:''
            
            
            
        } }
    }
    
    handle = (event) => {
        const { name, value } = event.target
 
        let errors=this.state.errors;
        let err=this.state.err;
        switch(name){
            case 'fname':
                errors.fname=regForName.test(value)?'':'Enter Valid first Name';
                if(errors.fname!==""){err.fname="error"}
                else{err.fname=""}
                break;
            case 'lname':
                errors.lname=regForName.test(value)?'':'Enter Valid Last Name';
                if(errors.lname!==""){err.lname="error"}
                else{err.lname=""}
                break;
            case 'username':
                errors.username=regForEve.test(value)?'':'Enter Username';
                if(errors.username!==""){err.username="error"}
                else{err.username=""}
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':'Enter Valid Email';
                if(errors.email!==""){err.email="error"}
                else{err.email=""}
                break;
            case 'password':
                errors.password=regForEve.test(value)?'':'Enter Password';
                if(errors.password!==""){err.password="error"}
                else{err.password=""}
                break;
            case 'confirm_password':
                errors.confirm_password = this.state.password === value?'':"Password and Confirm Password does not match"
                if(errors.confirm_password!==""){err.confirm_password="error"}
                else{err.fname=""}
                break;
            
            }
            this.setState({err,errors,[name]:value},()=>{
                console.log(errors)
            })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        
        if(this.validate(this.state.errors))
        {
            if(this.state.email!=="" && this.state.password!=="" && this.state.fname!=="" && this.state.lname!=="" && this.state.username!==""){
              alert("Details added successfully !!")
               this.add()
            }
            else{
                alert("Failed to Register")
            }
            
           
        }
        else {
            alert("Please Enter Valid Details");
        }
     }
      validate=(errors)=>{
         let valid=true;
         Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
         return valid;
     }
    add = (event) => {
        
     
        const URL = "http://localhost:3003/cred"
        axios.post(URL, {
            fname: this.state.fname, 
            lname:this.state.lname,
            username:this.state.username,
            email:this.state.email,
            password: this.state.password 
            
            })
            .catch(err => { console.log(err) })
           
    }

    render() {
        const {errors}=this.state;
        return (
            <div style={{backgroundColor:"#EFE3E1",height:"2000px"}}>
                 <h1 className="text-secondary " style={{paddingLeft:"500px",fontSize:"15mm"}}>Registration</h1>
                <div className="container form-group " >
                    <form onSubmit={this.formSubmit}>
                        <label>First Name</label>
                            <input type="text" name="fname" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                            {errors.fname.length>0 && 
            <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                        <label>Last Name</label>
                        <input type="text" name="lname" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                        {errors.lname.length>0 && 
            <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                        {errors.username.length>0 && 
            <span style={{color:'red'}}>{errors.username}</span>}<br/>
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" onChange={this.handle}  style={{backgroundColor:"#F9F1F1"}}/>
                        {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}<br/>
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                        {errors.password.length>0 && 
            <span style={{color:'red'}}>{errors.password}</span>}<br/>
                        <label>Confirm Password</label>
             <input type="password" name="confirm_password" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                        {errors.confirm_password.length>0 && 
            <span style={{color:'red'}}>{errors.confirm_password}</span>}<br/>
                      
                        <input type="submit" value="Add" className="btn btn-success " style={{marginLeft:"525px"}} />
                        <br/><br/><br/>
                        <p className="text-center">If Registered, Go to <Link to="/">Login Page</Link></p>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Reg
