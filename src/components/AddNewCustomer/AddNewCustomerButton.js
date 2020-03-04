import React, { Component } from 'react';

const AddNewCustomerButton = ({addNewCustomerButton}) => {

        return (
            <div>
                <button className='main-button pv3 ph5 mh5 br2 mt3' onClick={() => addNewCustomerButton('2')}>Add New Customer</button>
            </div>
        )
    }

export default AddNewCustomerButton;
