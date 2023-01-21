import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';

interface FullWidthRowProps {
  children?: React.ReactNode;
  className?: string;
  key?: string;
}

const FullWidthRow = ({ children, className, key }: FullWidthRowProps) => {
  return (
    <Row className={className} key={key}>
      <Col sm={8} smOffset={2} xs={12}>
        {children}
      </Col>
    </Row>
  );
};

FullWidthRow.displayName = 'FullWidthRow';

export default FullWidthRow;
