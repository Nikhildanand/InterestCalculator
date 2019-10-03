import React, { Fragment } from 'react';

import TextBox from '../TextBox/TextBox'
export default function LoanParameters() {
  return (
    // Used defaultValue because value should be used with an event function in JSX and that function would be useless in this context
    <>
      <TextBox
        name="Loan Amount"
        type="text"
        appendText=""
        defaultValue="7,12,000"
      />
      <TextBox
        name="Loan Term"
        type="number"
        appendText="Years"
        defaultValue="7"
      />
      <TextBox
        name="EMI Start Date"
        type="text"
        appendText=""
        defaultValue="18-December-2018"
      />
    </>
  );
}
