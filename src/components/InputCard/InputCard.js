import React from 'react';

import Card from 'react-bootstrap/Card';

export default function InputBlock({ header, content }) {
  return (
    <div className="my-5">
      <Card bg="light" border="dark">
        <Card.Header as="h5">
          { header }
        </Card.Header>
        <Card.Body>
          { content }
        </Card.Body>
      </Card>
    </div>
  );
}
