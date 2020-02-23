import React, { Component } from 'react'
import '../App.css';

class Action extends Component {

    render() {
        return (
            <div className='action col'>
                    <div className='header'>Action</div> 
                    {this.props.data.map((card, ind) => {
                        return (
                            <div className='card' key={String(ind)}>
                                {card.action}
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-trash-alt" onClick = {() => this.props.deleteItems(ind)}></i>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default Action;

