import React from 'react';

import InputCard from './components/InputCard/InputCard';
import LoanParameters from './components/LoanParameters/LoanParameters';
import InterestRate from './components/InterestRate/InterestRate';
import Btn from './components/Btn/Btn';
import LoanDetails from './components/LoanDetails/LoanDetails'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function App() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <div className="my-5">
            <InputCard
              header="Loan Parameters"
              content={ <LoanParameters /> }
            />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="my-5">
            <InputCard
              header="Interest Rates"
              content={ <InterestRate /> }
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={{ span:6, offset: 3 }}>
          <Btn />   
        </Col> 
      </Row>

      <Row>
        <Col sm={12} md={6}>
          <div className="my-5">
            <LoanDetails
              type="Flat Rate"
              rate="9.15"
              loanAmount="7,12,000"
              emi="13,905"
              totalInterest="4,56,036"
              totalPayments="11,68,036"
              periods="84"
              lastEmiDate="18-November-2025"
            />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="my-5">
            <LoanDetails
              type="Reducing Balance Rate"
              rate="9.15"
              loanAmount="7,12,000"
              emi="11,510"
              totalInterest="2,54,815"
              totalPayments="9,66,815"
              periods="84"
              lastEmiDate="18-November-2025"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
