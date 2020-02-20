import React, { Component } from 'react';
import Status from './components/status.js';
import Action from './components/action.js';
import Name from './components/names.js';
import Phone from './components/phones.js';
import ZIP from './components/zip.js';
import VIN from './components/vin.js';
import './App.css';

class App extends Component {
  

  // newWindow() {
  //   let form=this.state;
  //   console.log(form)
  //   // form[0].inner='form-inner';
  //   // form[0].outer='form-outer';
  //   // this.setState({[this.state[1]]: form})
  // }

  render() {
    const info = this.props.data
  return (
    <div>
      {/* <div className={this.state[1][0].outer}></div>
      <div className={this.state[1][0].inner}></div> */}
      <h3>Fixinity<span>|</span></h3>
      <button className='main-button' onClick={this.newWindow}>Add New Customer</button>
      <div className='container'>
          <Name data={info} /> 
          <Phone data={info} />
          <ZIP data={info} />
          <VIN data={info} />
          <Status data={info} />
          <Action data={info} />
        </div>
      </div>
    )
  }
}

export default App;
