import React from 'react';
import Card from 'react-bootstrap/Card';

const Balance = () => {
    let savedTransactions = JSON.parse(localStorage.getItem('transactionObject')) || [];
    let balance = 0;

    // iteratively calculates balance over transactions
    for (var i = 0; i < savedTransactions.length; i++) {
        var transaction = savedTransactions[i];
        if (transaction.type === 'Income') {
            balance += parseInt(transaction.amount);
        } else if (transaction.type === 'Expense') {
            balance -= parseInt(transaction.amount);
        }
    }

    return (
        <>
        <Card style={{ width: '45rem' }}>
            <Card.Body>
                <Card.Title>Balance</Card.Title>
                {/* displays calculated balance */}
                <Card.Text>£{balance}</Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default Balance;
