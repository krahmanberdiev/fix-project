import React from 'react';

const EditCustomerForm = ({ onInputChange, cancelButton, onEditUser, customers}) => {
    console.log(customers.currentIndex);
    return (
        // <div className='form-inner'></div>
    <div className="modal-bg">
      <div className="modal">
          <div className="modal-body-wrapper">
              <div>
                  <div id="modal-header">New Customer</div>
              </div>
              <div>
                  <input type="input" placeholder="Name" onChange={onInputChange} name='name' defaultValue={customers.data[customers.currentIndex].name}/>
                  <input type="input" placeholder="Phone" onChange={onInputChange} name='phone' defaultValue={customers.data[customers.currentIndex].phone} />
              </div>
              <div>
                  <input type="input" placeholder="Zip" onChange={onInputChange} name='zip' defaultValue={customers.data[customers.currentIndex].zip} />
                  <input type="input" placeholder="Vin" onChange={onInputChange} name='vin' defaultValue={customers.data[customers.currentIndex].vin} />
              </div>
              <div className="add-cancel-row">
                  <button id="add" type="button" onClick={()=> onEditUser(customers.currentIndex)}>Submit</button>
                  <button id="cancel" type="button" onClick={() => cancelButton('home')}> Cancel</button>
              </div>            
          </div>
      </div>
    </div>
    )
}

export default EditCustomerForm;