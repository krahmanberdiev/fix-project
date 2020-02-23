import React, { Component } from 'react';
import '../App.css';
// import '../App.css';
// import Status from './components/status.js';
// import Action from './components/action.js';
// //import Name from './components/names.js';
// import Phone from './components/phones.js';
// import ZIP from './components/zip.js';
// import VIN from './components/vin.js';

class CustomerList extends Component {

    //to retrieve the headers
    getHeader = () => {
        if(this.props.customers) {
            let headers = Object.keys(this.props.customers[0]);
            return headers.map((header) => {
                return <div>{header}</div>
            })
        }
    }

    render() {
        return (
            <div className="customers-list-wrapper">
                <div className="thead">
                    {this.getHeader()}
                </div>
                {this.props.customers.map((row) => {
                const { id, name, phone, zip, vin, status, action } = row;  
                console.log(row);
                    return ( 
                            <div className="tbody">
                                <div>{id}</div>
                                <div>{name}</div>
                                <div>{phone}</div>
                                <div>{zip}</div>
                                <div>{vin}</div>
                                <div><button className = "buttons">{status}</button></div>
                                <div>{action}</div>
                            </div>
                    )   
                })
                }                    
        </div>
        )
    }
}

export default CustomerList;
