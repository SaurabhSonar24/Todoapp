import React, { Component } from 'react'

export class Itemadd extends Component {
    render() {
        const {srNo, title, priority, handleDelete, handleEdit,Done } = this.props;
        console.log(   `Task is ${Done}`)

        if (localStorage.getItem('mylogin') != undefined) {
            let arr = JSON.parse(localStorage.getItem('mylogin'));
            arr.push({ title }, { priority });
            localStorage.setItem('mylogin', JSON.stringify(arr));

        }
        else {
            let arr = [];
            arr.push({ title }, { priority });
            localStorage.setItem('mylogin', JSON.stringify(arr));

        }
        return (
            <table className="table table-bordereless table-hover text-center" style={{ fontFamily: "-moz-initial"}}>


                <tr>
                    <th className="col-2">{srNo}</th>
                    <th className="col-5">{title}</th>
                    <th className="col-4">{priority}</th>
                    {/* <th>{Done}</th> */}



                    <th colSpan="2">
                        {/* <span className="mx-2 text-success" onClick={handleEdit}>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </span> */}
                    
                    {/* <button className="btn btn-primary bg-primary" onClick={handleEdit}>EDIT</button> */}
                    
                    </th>
                    <button className="btn btn-danger bg-danger" onClick={handleDelete}>DELETE</button>
                  
                    
                </tr>
               

            </table>
            // <div>
            // <h2 className="text-center text-warning" style={{marginTop:"50px",marginBottom:"50px",fontSize:"12mm"}}>Task List</h2>
            // <table className="container text-center" style={{width:"5000px",backgroundColor:"#E8CEC9"}}>
            //     <tr>
            //         <th>Task ID</th>
            //         <th>Task</th>
            //         <th>Priority</th>
                   
                   
                   
            //         <th colSpan="2">Action</th>
            //     </tr>
            //     {this.state.prodata.map(element =>
            //         <tr>
            //             <td>{element.id}</td>
            //             <td>{element.task}</td>
            //             <td>{element.priority}</td>
                        
                        
                       
            //             <td><button className="btn btn-danger" onClick={() => this.delete(`${element.id}`)} >DELETE</button></td>
            //             <td><button className="btn btn-primary" onClick={() => this.update(`${element.id}`)} > UPDATE</button></td>
            //         </tr>)}
            // </table>
            // </div>
        )
    }
}

export default Itemadd
