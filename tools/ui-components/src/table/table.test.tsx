import React from 'react';
import { render, screen } from '@testing-library/react';

import { Table } from '.';

describe('<Table />', () => {
  it('should apply striped bg color to every odd <tr> element', () => {
    render(<Table striped />);

    const table = screen.getByRole('table');
    const oddTableRowClass =
      '[&>tbody>tr:nth-of-type(odd)]:bg-background-tertiary';

    expect(table).toHaveClass(oddTableRowClass);
  });
  it('should apply the condensed to <th> and <td> elements', () => {
    render(<Table condensed />);

    const table = screen.getByRole('table');
    const tableDataClass = '[&_td]:p-1 ';
    const tableHeaderClass = '[&_th]:p-1';

    expect(table).toHaveClass(tableDataClass + tableHeaderClass);
  });
});
