import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'

export default function TextBox({
  name,
  type,
  appendText,
  value,
  pattern
}) {
  return ( 
    <Form>
      <Form.Row bsPrefix="justify-content-center">
        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>{ name }</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type={ type }
              placeholder={ name }
              aria-label={ name }
              value={ value }
              pattern={ pattern || null }
            />
            <InputGroup.Append>
              <InputGroup.Text>{ appendText }</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
