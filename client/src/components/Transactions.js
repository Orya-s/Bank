import React, { useState, useEffect } from 'react';
import { BankAPI } from '../api/BankAPI'
import Transaction from './Transaction'


function Transactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function fetchData() {
            const transactionsData = await BankAPI().getTransactions()
            setTransactions(transactionsData.data)
        }
        fetchData();
    }, [])

    const deleteTransaction = async(transactionId) => {
        console.log(transactionId);
        // send delete to api

        // const transactionsData = await BankAPI().getTransactions()
        // setTransactions(transactionsData.data)
    }


    return ( 
        <div>
            {transactions.map((t, k) => <Transaction data={t} key={k} deleteTransaction={deleteTransaction}/>)}
        </div>
    );
}

export default Transactions;