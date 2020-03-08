import React, { Component } from 'react';
import '../../containers/App.css';

class UserList extends Component {

  //to retrieve the headers
  getHeader = () => {
    let headers = Object.keys(this.props.customers.data[0])
    // //slicing out id prop and add action column
    headers.splice(0, 1)
    headers.push('Action')
    return headers.map((header, ind) => {
        return <div key ={String(ind)} className = 'headers'>{header}</div>
    })}
     
render() { 
    const {start, end, data} = this.props.customers;
    const newlist = data.slice(start, end)
    return (
        <div>
        <div className="customers-list-wrapper mt3 br2">
            <div className="thead">
            {this.getHeader()}
            </div>
            {newlist.map((row, ind) => {
            const { name, phone, zip, vin, status } = row;
 
            return ( 
                        <div className="tbody" key ={String(ind)}>
                            <div>{name}</div>
                            <div>{phone}</div>
                            <div>{zip}</div>
                            <div>{vin}</div>
                            <div>
                                <button className={'pv2 w-80 br2 buttons '+this.props.customers.data[ind].status.toLowerCase()} 
                                  onClick={() => this.props.onStatusChange(ind)}
                                >
                                {status}
                                </button>
                            </div>  
                            <div>
                                <i className="fas fa-pen" onClick={() => this.props.addNewCustomerButton('edituser', ind)}></i>
                                <i className="fas fa-trash-alt" onClick={() => this.props.onDeleteUser(ind)}></i>
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