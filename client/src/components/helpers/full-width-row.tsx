import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';

interface FullWidthRowProps {
  children: React.ReactNode;
  className?: string;
}

const FullWidthRow = ({
  children,
  className
}: FullWidthRowProps): JSX.Element => (
  <Row className={className}>
    <Col sm={8} smOffset={2} xs={12}>
      {children}
    </Col>
  </Row>
);

FullWidthRow.displayName = 'FullWidthRow';

export default FullWidthRow;
