
import {v1 as uuid} from "uuid";
import React, {Component} from 'react';
import ToDo from './ToDo';
import List from './List';
const regForTask = RegExp('^[a-zA-z0-9 ]{3,100}$')
const regForPriority = RegExp('^[1-5 ]{1}$')

class Home extends Component {
  state={
    items: [],
    id: uuid(),
    item: "",
    desc: "",
    srNo:0,
    editItem: false,
    done:false,
    err:{
      item:'',
      desc:''
      
      
      
  }
  };
  handleChange = (e) =>{
    const { name, value } = e.target
 
    let err=this.state.err;
    switch(name){
      case 'item':
          err.item=regForTask.test(value)?'':'Enter Valid Task(Task will accept alphanumeric char upto 3 to 100)';
          break;
    }
    this.setState({err,
      item: e.target.value
    },()=>{console.log(err)})
   
  }
  validate=(err)=>{
    let valid=true;
    Object.values(err).forEach((val)=> val.length >0 && (valid=false));
    return valid;
}
  handleChange1 = (e) =>{ 
    const { name, value } = e.target
   
    let err=this.state.err;
    switch(name){
      case 'desc':
          err.desc=regForPriority.test(value)?'':'Enter Valid Priority(1:Lowest to 5:highest)';
          break;
    }
    this.setState({err,
      desc: e.target.value
    },()=>{console.log(err)})
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    if(this.validate(this.state.err))
    {
        if(this.state.item!=="" && this.state.desc!=="") {
          alert("Task Updated Successfully !!")
        
          const newItem = {
            id: this.state.id,
            title: this.state.item,
            priority: this.state.desc,
            done:this.state.done
          }
          const updatedItems = [...this.state.items,newItem]
          this.setState({
            items: updatedItems,
            item: "",
            desc: "",
            
            id: uuid(),
            editItem: false
          },()=>console.log(this.state))
        }
        else{
            alert("Failed to Register")
        }      
    }
    else {
        alert("Please Enter Valid Details");
    }
  }
  
    handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item=>item.id !== id)
    console.log(id)
    this.setState({
      items: filteredItems
    })
  }
   
 handleEdit=(id)=>{
  let todoData = JSON.parse(localStorage.getItem('mylogin'))
  todoData[id].status="true"
  localStorage.setItem('mylogin',JSON.stringify(todoData))
  window.location.replace('/Todo')
 }
  render() {
  return (
    <div className="container "  style={{backgroundColor:"#EFE3E1",height:"800px"}}>
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
         
          <h3 className="text-center text-uppercase" style={{fontSize:"15mm"}}>Todo List</h3>
          <h5 className=" text-uppercase text-center" style={{paddingTop:"30px"}}>Add To Do</h5>
          <ToDo item={this.state.item} desc={this.state.desc} srNo={this.state.srNo} handleChange1={this.handleChange1} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} err={this.state.err} handleEdit={this.handleEdit} />
          <List items={this.state.items} handleDelete={this.handleDelete} />
          
        </div>
      </div>
     
      
    </div>

  );
  }
  } 

export default Home;
