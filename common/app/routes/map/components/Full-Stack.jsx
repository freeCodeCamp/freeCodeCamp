import React from 'react';
import PureComponent from 'react-pure-render/component';
import dedent from 'dedent';
import SuperBlock from './Super-Block.jsx';

const lockMessage = dedent`
  To qualify for these nonprofit projects,
  you must first earn all three foundational certifications:
  Front End, Data Visualization, and Back End
`.replace(/[\n]/g, ' ');

const nonprofitProjects = {
  title: 'Nonprofit Projects',
  time: '800 Hours',
  challenges: [
    {
      title: 'Greenfield Nonprofit Project #1',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Greenfield Nonprofit Project #2',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Legacy Code Nonprofit Project #1',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Legacy Code Nonprofit Project #2',
      isLocked: true,
      isRequired: true
    },
    {
      title: 'Claim your Full Stack Development Certification',
      isLocked: true
    }
  ]
};

export default class FullStack extends PureComponent {
  static displayName = 'FullStack';
  render() {
    const title = 'Full Stack Development Certification';
    return (
      <SuperBlock
        blocks={ [ nonprofitProjects ] }
        message={ lockMessage }
        title={ title } />
    );
  }
}
