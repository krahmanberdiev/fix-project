import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import UserList from '../components/UserList/UserList.js';
import AddNewCustomerButton from '../components/AddNewCustomer/AddNewCustomerButton.js';
import AddNewCustomerForm from '../components/AddNewCustomer/AddNewCustomerForm.js';
import Pagination from '../components/Pagination/Pagination.js';
import Header from '../components/Header/Header.js';
import SignIn from '../components/SignIn/SignIn.js'; 
import EditCustomerForm from '../components/EditCustomer/EditCustomerForm.js'; 

import { setSearchField } from '../redux/actions.js'; 
import SearchBox from '../components/SearchBox/SearchBox';


const mapStateToProps = (state) => {
  return { searchField: state.searchUsers.searchField }
}

// const mapDispatchToProps = dispatch => {
//   // onSearchChange: (event) => dispatch(setSearchField(event.target.value))  
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {id: 1, name: 'Azamat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 2, name: 'Kuttubek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 3, name: 'Aibek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Progress' },
        {id: 4, name: 'Tolon', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 5, name: 'Kanat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 6, name: 'Zamir', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 7, name: 'David', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 1, name: 'Azamat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 2, name: 'Kuttubek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 3, name: 'Aibek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Progress' },
        {id: 4, name: 'Tolon', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 5, name: 'Kanat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 6, name: 'Zamir', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 7, name: 'David', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 1, name: 'Azamat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 2, name: 'Kuttubek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 3, name: 'Aibek', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Progress' },
        {id: 4, name: 'Tolon', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 5, name: 'Kanat', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
        {id: 6, name: 'Zamir', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Active' },
        {id: 7, name: 'David', phone: '5718894220', zip: '94330', vin: '5346543654641', status: 'Inactive' },
      ],
      route: 'home',
      newform: {},
      currentIndex: '',
      start: 0,
      end: 5,
      perPageValue: 5  
    }
  }
  
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    console.log(this.state)
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

 //triggering add new customer form
addNewCustomerButton = (route, ind) => {
  this.setState({route: route, currentIndex: ind})
}

//cancel adding new customer
cancelButton = (route) => {
  this.setState({route: route})
}

onInputChange = ( {target} ) => {
  const theform = this.state.newform;
  theform[target.name] = target.value;
  this.setState({newform: theform})
  console.log(this.state.newform)
}

addingUser = () => {
  const theUserList = this.state.data;
  const newUser = this.state.newform;
  if (Object.entries(newUser).length !== 0) {
      newUser.status = 'Active'
  theUserList.push(newUser);
  }
  this.setState({route: 'home', newform: {}})
}

//to edit the user info
onEditUser = (ind) => {
  // console.log(target)
  const theUserList = this.state.data;
  const theCurrentUser = this.state.data[ind]
  console.log(theCurrentUser);

  const theform = this.state.newform;
  // theform[target.name] = target.value;

  // const editedUser = this.state.data[ind]
  if (Object.entries(theform).length !== 0) {
    // theCurrentUser = 
    for (let key of Object.keys(theform)) {
      theCurrentUser[key] = theform[key];
      console.log(theCurrentUser[key])
      theUserList[ind] = theCurrentUser;
      this.setState({data: theUserList})
    }
    theform.status = 'Active'
  }
  this.setState({ route: 'home', newform: {} })
}

 //to delete the user  
onDeleteUser = (ind) => {
  const theItem = this.state.data;
  theItem.splice([ind], 1);
  this.setState({[this.state.data]: theItem})
}

  //the change the status of the user
onStatusChange = (ind) => {
  const theStatus=this.state.data;
  if (theStatus[ind].status==='Active') {
      theStatus[ind].status='Progress'
  } else if(theStatus[ind].status==='Progress') {
      theStatus[ind].status='Inactive'
  } else {
      theStatus[ind].status='Active'
  }
  this.setState({[this.state.data]: theStatus})
}

onPageChange = (arrow) => {
  let start = this.state.start;
  let end = this.state.end;
  let perPageValue = this.state.perPageValue;
  const total = this.state.data.length;

  if (arrow === 'right' && end <= total) {
    start += perPageValue;
    end += perPageValue;
  } else if (arrow === 'left' && start >= 0 && end > perPageValue){
    start -= perPageValue;
    end -= perPageValue;
  }
  this.setState({start: start, end: end})
}

handlePerPageValue = (event) => {
  let newValue = Number(event.target.value);
  console.log(newValue)
  this.setState({
    perPageValue: newValue,
    end: newValue,
    start: 0
  })
}


render() {
  // console.log(this.props.store.getState())
  return (  
    <div className='App'>
    {this.state.route === 'signin'
    ? <SignIn onRouteChange={this.onRouteChange}/>
    : <div>
      <Header />
      <AddNewCustomerButton addNewCustomerButton={this.addNewCustomerButton} />
      <SearchBox 
          onSearchChange={this.onSearchChange}
      />
      <div className="customers-list-wrapper mh5 mt3 br2">
        <UserList 
          customers = {this.state} 
          addNewCustomerButton={this.addNewCustomerButton}
          onStatusChange={this.onStatusChange}
          onDeleteUser = {this.onDeleteUser}
          onEditUser = {this.addNewCustomerButton}
        />
        <Pagination 
        customers = {this.state}
        onPageChange={this.onPageChange}
        handlePerPageValue={this.handlePerPageValue}
        /> 
      </div>
    </div>}
    {this.state.route === 'newuser'
     ? <AddNewCustomerForm 
        customers = {this.state} 
        cancelButton={this.cancelButton} 
        onInputChange={this.onInputChange}
        addingUser = {this.addingUser} />
     : <div></div> }
      {this.state.route === 'edituser'
     ? <EditCustomerForm 
        customers = {this.state} 
        cancelButton={this.cancelButton} 
        onInputChange={this.onInputChange}
        onEditUser = {this.onEditUser} />
     : <div></div> }
    </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
