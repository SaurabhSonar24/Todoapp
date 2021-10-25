import React, { Component } from 'react'

export class ToDo extends Component {
    render() {
        const{item, desc, handleChange, handleChange1, handleSubmit, editItem,err} = this.props;
        return (
            <div className="container text-center my-3">
                <form onSubmit={handleSubmit}>
                   
                       <input type="text" className="form-control border-0 " placeholder=" Add to do " name="item" value={item} onChange={handleChange} /><br/>
                       {err.item.length>0 && 
            <span style={{color:'red'}}>{err.item}</span>}<br/>
                        <input type="number" className="form-control  border-0" placeholder="Priority" name="desc" value={desc} onChange={handleChange1}  />
                        {err.desc.length>0 && 
            <span style={{color:'red'}}>{err.desc}</span>}<br/>
                    <button type="submit" disabled={item?false:true && desc?false:true} className="bg-success" className={editItem? "btn btn-info mt-3 " : "btn btn-info mt-3"}>
                        {editItem? "EDIT ":"ADD "}
                    </button>
                </form>
               
            </div>
        )
    }
}

export default ToDo
