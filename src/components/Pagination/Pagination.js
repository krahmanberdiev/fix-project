import React from 'react';

function Pagination({ customers, onPageChange, handlePerPageValue }) {
    let start = customers.start;
    let end = customers.end;
    if ( end > customers.data.length ) {
        end = customers.data.length
    }
    return  <div className="pagination">
                <span> Rows per page:</span>
                <span className="pag-dropdown">
                    <select style={{border: 'none', appearance: 'none'}} onChange={handlePerPageValue}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </span>
                <span className="pag-start">{start + 1}-</span>
                <span className="pag-end">{end}</span> of <span className="pag-total">{customers.data.length}</span>
                <span className="pag-left"><i className="fas fa-chevron-left" onClick = {() => onPageChange('left')}></i></span>
                <span className="pag-right"><i className="fas fa-chevron-right" onClick = {() => onPageChange('right')}></i></span>
            </div>
}

export default Pagination;