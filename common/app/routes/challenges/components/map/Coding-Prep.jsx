import React from 'react';
import PureComponent from 'react-pure-render/component';
import dedent from 'dedent';
import SuperBlock from './Super-Block.jsx';

const lockMessage = dedent`
  To qualify for these nonprofit projects,
  you must first earn all three foundational certifications:
  Front End, Data Visualization, and Back End
`.replace(/[\n]/g, ' ');

const codingPrep = [{
  title: 'Coding Interview Training',
  time: '70 Hours',
  challenges: [
    {
      title: 'Soft Skill Training',
      isLocked: true
    },
    {
      title: 'Critical Thinking Training',
      isLocked: true
    },
    {
      title: 'Whiteboard Coding Training',
      isLocked: true
    }
  ]
}, {
  title: 'Mock Interviews',
  time: '10 Hours',
  challenges: [
    {
      title: 'Mock Interview #1',
      isLocked: true
    },
    {
      title: 'Mock Interview #2',
      isLocked: true
    },
    {
      title: 'Mock Interview #3',
      isLocked: true
    }
  ]
}];

export default class CodingPrep extends PureComponent {
  static displayName = 'CodingPrep;'

  render() {
    return (
      <div>
        <SuperBlock
          blocks={ codingPrep }
          message={ lockMessage }
          title='Coding Interview Prep ' />
      </div>
    );
  }
}
