import React, { Component } from 'react';
import '../../App.css';

class UserList extends Component {

  //to retrieve the headers
  getHeader = () => {
    let headers = Object.keys(this.props.customers[0]);
    //slicing out id prop
    headers.splice(0,1)
    headers.push('Action') 
    return headers.map((header, ind) => {
    const firstLet = header.slice(0,1).toUpperCase()
    const restLetters = header.slice(1)
    return <div className = 'headers'>{firstLet}{restLetters}</div>
    })
  } 

render() { 
    return (
        <div>
        <div className="customers-list-wrapper mt3 br2">
            <div className="thead">
            {this.getHeader()}
            </div>
            {this.props.customers.map((row, ind) => {
            const { name, phone, zip, vin, status } = row;  
            return ( 
                        <div className="tbody">
                            <div>{name}</div>
                            <div>{phone}</div>
                            <div>{zip}</div>
                            <div>{vin}</div>
                            <div>
                                <button className= {'buttons'+' '+this.props.customers[ind].status.toLowerCase()} 
                                  onClick={() => this.props.onStatusChange(ind)}
                                >
                                {status}
                                </button>
                            </div>  
                            <div>
                                <i class="fas fa-pen" onClick={() => this.props.onEditUser('2')}></i>
                                <i class="fas fa-trash-alt" onClick={() => this.props.onDeleteUser(ind)}></i>
                            </div>
                        </div>
                        )   
                    })
                }                  
            </div>
        </div>
        )
    }
}

  export default UserList;