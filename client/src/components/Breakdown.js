import React, { useState, useEffect } from 'react';
import { BankAPI } from '../api/BankAPI';
import '../styles/Breakdown.css'

function Breakdown() {
    const [breakdown, setBreakdown] = useState([])

    useEffect(() => {
        async function fetchData() {
            const categoriesBreakdown = await BankAPI().getBreakdown()
            setBreakdown(categoriesBreakdown.data)
        }
        fetchData();
    }, [])

    return ( 
        <div>
            <h2>Breakdown:</h2>
            {breakdown.map((b, k) => {
                return <div key={k} className='break-item'>
                    <div className='break-background'>
                        {b.category}: {b.amount} $
                    </div>
                </div>
            })}
        </div>
     );
}

export default Breakdown;

