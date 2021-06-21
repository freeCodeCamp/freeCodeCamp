import React from 'react';
import { Row, Col } from '@freecodecamp/react-bootstrap';

function FullWidthRow({
  children,
  className
}: {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  children?: any;
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
