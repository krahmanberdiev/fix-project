import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className='w6 search-box'>
            <input className='search-input pv2 ml5 mr1 br2 mt2' placeholder='Enter the name' onChange ={onSearchChange}></input>
            <button className='search-button pv2 br2 mt2'>Search</button>
        </div>
    )
}

export default SearchBox