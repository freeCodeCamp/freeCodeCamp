import React from 'react';
import i18next from 'i18next';

import type { ConsoleOutput, ConsoleOutputNode } from '../utils/console-output';
import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: ConsoleOutput[];
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const messages = output.length
    ? output
    : [{ type: 'text' as const, value: defaultOutput }];

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {index > 0 ? '\n' : null}
          {message.type === 'text'
            ? message.value
            : message.nodes.map(renderNode)}
        </React.Fragment>
      ))}
    </pre>
  );
}

function renderNode(node: ConsoleOutputNode, index: number): React.ReactNode {
  if (node.type === 'text') {
    return node.value;
  }

  return React.createElement(
    node.tag,
    { key: index },
    node.children.map(renderNode)
  );
}

export default Output;
