import React, { useState, useEffect } from 'react';
import { BankAPI } from '../api/BankAPI'


function Operations(props) {
    const [transactionData, setTransactionData] = useState({amount: "", vendor: "", category: ""})


    const handleChange = (key, value) => setTransactionData({...transactionData, [key]: value})

    const addTransaction = async (e) => {
        if(validInput()) {
            if(e.target.name == 'withdraw') {
                const newAmount = parseInt(transactionData.amount) * -1
                let newTransaction = {amount: newAmount, vendor: transactionData.vendor, category: transactionData.category}
                await BankAPI().sendTransaction(newTransaction)
            }
            else {
                await BankAPI().sendTransaction(transactionData)
            }
            props.callUpdateBalance()
        }
    }

    const validInput = () => {
        if(parseInt(transactionData.amount) <= 0) {
            alert("Transaction amount must be a positive number. Please enter a valid amount.")
            return false
        }
        else if(transactionData.amount == "" || transactionData.vendor == "" || transactionData.category == "") {
            alert("Invalid input. Please make sure to fill all input fields.")
            return false
        } 
        return true
    }


    return ( 
        <div>
            <input type='number' min='0' placeholder='Transaction amount' name='amount' value={transactionData.amount} onChange={e => handleChange(e.target.name, e.target.value)}></input>
            <input type='text' placeholder='Transaction vendor' name='vendor' value={transactionData.vendor} onChange={e => handleChange(e.target.name, e.target.value)}></input>
            <input type='text' placeholder='Transaction category' name='category' value={transactionData.category} onChange={e => handleChange(e.target.name, e.target.value)}></input>
            <button onClick={e => addTransaction(e)} name='deposit' className='deposit-btn'>Deposit</button>
            <button onClick={e => addTransaction(e)} name='withdraw' className='withdraw-btn'>Withdraw</button>
        </div>
     );
}

export default Operations;