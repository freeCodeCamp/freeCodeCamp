import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

describe('<Tabs />', () => {
  it('should switch tabs content if the tab trigger is pressed', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value='Code'>Code</TabsTrigger>
          <TabsTrigger value='Tests'>Tests</TabsTrigger>
        </TabsList>
        <TabsContent value='Code'>
          <code>here is a code element.</code>
        </TabsContent>
        <TabsContent value='Tests'>Here is the test for the code.</TabsContent>
      </Tabs>
    );
    const codeContent = screen.getByText('here is a code element.');
    expect(codeContent).toBeInTheDocument();

    const tabsTrigger = screen.getByText('Tests');
    userEvent.click(tabsTrigger);
    const testContent = screen.getByText('Here is the test for the code.');
    expect(testContent).toBeInTheDocument();
  });
});
