import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';

interface FullWidthRowProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

const FullWidthRow = ({
  children,
  className,
  ...props
}: FullWidthRowProps): JSX.Element => (
  <Row className={className} {...props}>
    <Col sm={8} smOffset={2} xs={12}>
      {children}
    </Col>
  </Row>
);

FullWidthRow.displayName = 'FullWidthRow';

export default FullWidthRow;
