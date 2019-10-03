import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function InputBlock({
  type,
  rate,
  loanAmount,
  emi,
  totalInterest,
  totalPayments,
  periods,
  lastEmiDate
}) {
  return (
    <Card
      bg="light"
      border="dark"
    >
      <div className="text-center">
        <Card.Header>{type} - { rate }%</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Loan Amount - { loanAmount }</ListGroup.Item>
          <ListGroup.Item>EMI - { emi }</ListGroup.Item>
          <ListGroup.Item>Total Interest - { totalInterest }</ListGroup.Item>
          <ListGroup.Item>Total Payments - { totalPayments }</ListGroup.Item>
          <ListGroup.Item>Periods - { periods } months</ListGroup.Item>
          <ListGroup.Item>Last EMI Date - { lastEmiDate }</ListGroup.Item>
        </ListGroup>
      </div>
    </Card>
  );
}
