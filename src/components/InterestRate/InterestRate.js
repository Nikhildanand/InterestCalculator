import React, { Fragment } from 'react';

import TextBox from '../TextBox/TextBox'
export default function InterestRate() {
  return (
    // Used defaultValue because value should be used with an event function in JSX and that function would be useless in this context
    <>
      <TextBox
        name = "Flat Rate"
        type = "number"
        appendText = "%"
        deafultValue = "9.15"
      />
      <TextBox
        name = "Reducing Balance Rate"
        type = "number"
        appendText = "%"
        deafultValue = "9.15"
      />
    </>
  );
}
