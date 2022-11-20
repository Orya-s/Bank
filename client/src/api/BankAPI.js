import axios from "axios";

const baseURL = `http://localhost:8000/transactions`

export function BankAPI() {

    function getTransactions() {
        try {
            return axios.get(baseURL)
        }
        catch (err) {
            console.warn(err);
        }
    }

    function getBalance() {
        try {
            return axios.get(`${baseURL}/balance`)
        }
        catch (err) {
            console.warn(err);
        }
    }

    function sendTransaction(transaction) {
        try {
            return axios.post(baseURL, transaction)
        }
        catch (err) {
            console.warn(err);
        }
    }

    function deleteTransaction(transactionId) {
        try {
            return axios.delete(`${baseURL}/${transactionId}`)
        }
        catch (err) {
            console.warn(err);
        }
    }

    function getBreakdown() {
        try {
            return axios.get(`http://localhost:8000/categories_breakdown`)
        }
        catch (err) {
            console.warn(err);
        }
    }


    return {
        getTransactions,
        getBalance,
        sendTransaction,
        deleteTransaction,
        getBreakdown
    }
}

// export default BankAPI;