import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css'

function Balance(props) {

    const getClass = () => props.balance < 0 ? 'minus-balance' : 'balance'


    return ( 
        <div className={getClass()}>
            <span className='balance-title'>Balance:</span> {props.balance} $
        </div>
     );
}

export default Balance;