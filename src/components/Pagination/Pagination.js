import React from 'react';

function Pagination() {
    return  <div className="pagination">
                <span> Rows per page</span>
                <span className="pag-dropdown"> 10</span><i class="fas fa-sort-down"></i>
                <span className="pag-start"> 1 </span> -
                <span className="pag-end"> 10 </span> of <span className="pag-total"> 68 </span>
                <span className="pag-left"><i class="fas fa-chevron-left"></i></span>
                <span className="pag-right"><i class="fas fa-chevron-right"></i></span>
            </div>
}

export default Pagination;