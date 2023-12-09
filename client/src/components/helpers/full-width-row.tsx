import { Col, Row } from '@freecodecamp/ui';
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
    <Col sm={10} smOffset={1} xs={12}>
      {children}
    </Col>
  </Row>
);

FullWidthRow.displayName = 'FullWidthRow';

export default FullWidthRow;
