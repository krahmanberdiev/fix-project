import React from 'react';

const AddNewCustomerForm = ({ onInputChange, cancelButton, addingUser}) => {
    return (
        // <div className='form-inner'></div>
    <div className="modal-bg">
      <div className="modal">
          <div className="modal-body-wrapper">
              <div>
                  <div id="modal-header">New Customer</div>
              </div>
              <div>
                  <input type="input" placeholder="Name" onChange={onInputChange} name='name' />
                  <input type="input" placeholder="Phone" onChange={onInputChange} name='phone'/>
              </div>
              <div>
                  <input type="input" placeholder="Zip" onChange={onInputChange} name='zip'/>
                  <input type="input" placeholder="Vin" onChange={onInputChange} name='vin'/>
              </div>
              <div className="add-cancel-row">
                  <button id="add" type="button" onClick={addingUser}> Add</button>
                  <button id="cancel" type="button" onClick={() => cancelButton('1')}> Cancel</button>
              </div>            
          </div>
      </div>
    </div>
    )
}

export default AddNewCustomerForm;
