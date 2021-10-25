import React, { Component } from 'react';
import Itemadd from './Itemadd';

export class List extends Component {
    render() {
        const{items, handleDelete} = this.props;
        return (
            <div >
                <table  className="table table-bordereless table-hover text-center" style={{ fontFamily: "-moz-initial" }}>
                 <tr>
                    <th className="col-2">No</th>
                    <th className="col-5">TITLE</th>
                    <th className="col-4">PRIORITY</th>
                    <th colSpan="3" >ACTION</th>
                  
                </tr>
                </table> 
                
                {items.map((value,index) => 
                {return (<Itemadd key={value.id} srNo={index + 1} 
                title={value.title} priority={value.priority} 
                handleDelete={()=>handleDelete(value.id)}/>)})}
                

            </div>
        )
    }
}

export default List
