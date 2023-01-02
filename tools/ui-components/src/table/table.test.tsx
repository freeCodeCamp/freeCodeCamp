import React from 'react';
import { render, screen } from '@testing-library/react';

import { Table } from '.';

describe('<Table />', () => {
  it('should contain class table by default', () => {
    render(<Table data-testid='test' />);

    const table = screen.getByTestId('test');

    expect(table).toHaveClass('table');
    expect(table).toBeInTheDocument();
  });

  it('should apply striped bg color to every odd <tr> element', () => {
    render(<Table data-testid='test' striped />);

    const table = screen.getByTestId('test');
    const oddTableRowClass =
      '[&>tbody>tr:nth-of-type(odd)]:bg-background-tertiary';

    expect(table).toHaveClass(oddTableRowClass);
  });
  it('should apply the condensed to <th> and <td> elements', () => {
    render(<Table data-testid='test' condensed />);

    const table = screen.getByTestId('test');
    const tableDataClass = '[&_td]:p-1 ';
    const tableHeaderClass = '[&_th]:p-1';

    expect(table).toHaveClass(tableDataClass + tableHeaderClass);
  });
});
