import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Balance from './Balance';

// ffc => Function Component
// usf => new state variable using State Hook
// uef =>  useEffect Hook

function NavBar(props) {

    return ( 
        <div className='main-links'>
            <Link to={"/"}>Transactions</Link>
            <Link to={"/operations"}>Operations</Link>
            <Link to={"/breakdown"}>Breakdown</Link>
            <Balance balance={props.balance}/>
        </div>
     );
}

export default NavBar;