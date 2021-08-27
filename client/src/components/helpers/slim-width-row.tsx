import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';

interface SlimWidthRowProps {
  children: JSX.ElementChildrenAttribute;
}
function SlimWidthRow({
  children,
  ...restProps
}: SlimWidthRowProps): JSX.Element {
  return (
    <Row {...restProps}>
      <Col md={6} mdOffset={3} sm={12}>
        {children}
      </Col>
    </Row>
  );
}

SlimWidthRow.displayName = 'SlimWidthRow';

export default SlimWidthRow;
