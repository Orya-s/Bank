import React, { useState, useEffect } from 'react';

function Transaction(props) {

    const deleteTransaction = () => {
        props.deleteTransaction(props.data.id)
    }
    
    return ( 
        // color in red / green 
        <div>
            <p>amount: {props.data.amount}</p>
            <p>vendor: {props.data.vendor}</p>  
            <p>category: {props.data.category}</p>
            <button onClick={deleteTransaction}>Delete</button>
            <br/>
        </div>
    );
}

export default Transaction;