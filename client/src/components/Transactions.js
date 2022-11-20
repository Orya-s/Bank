import React, { useState, useEffect } from 'react';
import { BankAPI } from '../api/BankAPI'
import Transaction from './Transaction'


function Transactions(props) {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function fetchData() {
            const transactionsData = await BankAPI().getTransactions()
            setTransactions(transactionsData.data)
        }
        fetchData();
    }, [])

    const deleteTransaction = async(transactionId) => {
        await BankAPI().deleteTransaction(transactionId)

        const transactionsData = await BankAPI().getTransactions()
        setTransactions(transactionsData.data)
        props.callUpdateBalance()
    }


    return ( 
        <div>
            {transactions.map((t, k) => <Transaction data={t} key={k} deleteTransaction={deleteTransaction}/>)}
        </div>
    );
}

export default Transactions;