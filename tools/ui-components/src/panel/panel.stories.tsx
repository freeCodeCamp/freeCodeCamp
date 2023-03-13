import React from 'react';
import { Story } from '@storybook/react';
import { PanelHeading } from './panel-heading';
import { PanelTitle } from './panel-title';
import { PanelBody } from './panel-body';
import { Panel, PanelProps } from '.';

const story = {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    controls: {
      include: ['className', 'bsStyle']
    }
  },
  argType: {
    className: { control: { type: 'text' } },
    bsStyle: { control: { type: 'text' } }
  }
};

const Template: Story<PanelProps> = ({ bsStyle, className }) => {
  return (
    <Panel bsStyle={bsStyle} className={className}>
      <PanelHeading>
        <PanelTitle>Here is panel Heading</PanelTitle>
      </PanelHeading>
      <PanelBody>Here is Panel body</PanelBody>
    </Panel>
  );
};

export const Default = Template.bind({});

export default story;
