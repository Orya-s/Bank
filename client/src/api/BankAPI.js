import axios from "axios";

const baseURL = `http://localhost:8000/transactions`

export function BankAPI() {

    function getTransactions() {
        return axios.get(baseURL)
    }

    function getBalance() {
        return axios.get(`${baseURL}/balance`)
    }

    function sendTransaction(transaction) {
        try {
            return axios.post(baseURL, transaction)
        }
        catch (err) {
            console.warn(err);
        }
    }



    return {
        getTransactions,
        getBalance,
        sendTransaction
    }
}

// export default BankAPI;