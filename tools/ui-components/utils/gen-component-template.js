// component.tsx
exports.component = name => `
import React from 'react';
    
import { ${name}Props } from './types';
    
export const ${name} = ({}: ${name}Props) => {
  return <div>Hello, I am a ${name} component</div>;
};
`;

// types.ts
exports.type = name => `
export interface ${name}Props {
  className?: string
}
`;

// component.test.tsx
exports.test = name => `
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ${name} } from '.';

describe('<${name} />', () => {
  it('should render correctly', () => {});
});
`;

// component.stories.tsx
exports.story = name => `
import React from 'react';
import { Story } from '@storybook/react';
import { ${name}, ${name}Props } from '.';

const story = {
  title: 'Example/${name}',
  component: ${name}
};

const Template: Story<${name}Props> = args => {
  return <${name} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // default props go here
};

export default story;
`;

// index.ts
exports.barrel = (name, kebabCasedName) => `
export { ${name} } from './${kebabCasedName}';
export type { ${name}Props } from './types';
`;
