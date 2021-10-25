import React, { Component } from 'react'

export class Itemadd extends Component {
    render() {
        const {srNo, title, priority, handleDelete } = this.props;
      

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
                    <th className="col-2">{title}</th>
                    <th className="col-4">{priority}</th>
                   



                    <th colSpan="2">
                       
                    
                    </th>
                    <button className="btn btn-danger bg-danger" onClick={handleDelete}>DELETE</button>
                    
                  
                    
                </tr>
               

            </table>
           
        )
    }
}

export default Itemadd
