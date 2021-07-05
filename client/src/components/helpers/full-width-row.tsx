import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

function FullWidthRow({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <Row className={className}>
      <Col sm={8} smOffset={2} xs={12}>
        {children}
      </Col>
    </Row>
  );
}

FullWidthRow.displayName = 'FullWidthRow';

export default FullWidthRow;
