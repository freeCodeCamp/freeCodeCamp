import { Row, Col } from '@freecodecamp/react-bootstrap';
import { ReactNode } from 'react';

function FullWidthRow({
  children,
  className
}: {
  children?: ReactNode;
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
