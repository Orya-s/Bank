import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Transactions.css'

function Transaction(props) {

    const deleteTransaction = () => {
        props.deleteTransaction(props.data.id)
    }

    const getClass = () => {
        return props.data.amount < 0 ? 'withdraw' : 'deposit'
    }
    
    return ( 
        <div className='card-container'>
            <Card className='card'>
                <Card.Header as="h5" className={getClass()}>{props.data.amount}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.data.category}</Card.Title>
                    <Card.Text>
                    {props.data.vendor}
                    </Card.Text>
                    <Button variant="primary" onClick={deleteTransaction}>Delete</Button>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}

export default Transaction;