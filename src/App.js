import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerList from './components/customerlist.js';
import AddCustomer from './components/addcustomer.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {id: 1, name: 'Azamat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active', action: ''},
        {id: 2, name: 'Kuttubek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive', action: ''},
        {id: 3, name: 'Aibek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Progress', action: ''},
        {id: 4, name: 'Tolon', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active', action: ''},
        {id: 5, name: 'Kanat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive', action: ''},
        {id: 6, name: 'Zamir', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active', action: ''},
        {id: 7, name: 'David', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive', action: ''}
      ]
    }
  }

  deleteItems(ind) {
    const theItem = this.props.data;
    theItem.splice([ind], 1);
    this.setState({[this.props.data]: theItem})
}

render() {
  return (
    <div>
      <h3>Fixinity<span>|</span></h3>
      <AddCustomer />
      <CustomerList customers = {this.state.data}/>
      <Router>
        <Switch>
          <Route path  = '/add'>
              <AddCustomer />
          </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
