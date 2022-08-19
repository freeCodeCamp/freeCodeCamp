import React, { useState } from 'react';
import { TabPane, TabPaneProps } from '../tab-pane';
import { TabsProps } from './types';

const defaultButtonClassNames = [
  'flex-1',
  'mr-0.5',
  'px-2.5',
  'py-[5px]',
  'border-1',
  'border-transparent',
  'text-sm',
  'text-foreground-secondary'
];

const computeClassNames = (
  activeKey: string | number,
  eventKey: string | number
) => {
  const classNames = [...defaultButtonClassNames];
  if (activeKey === eventKey) {
    classNames.push(
      'border-x-[#ddd]',
      'border-t-[#ddd]',
      'bg-background-quaternary'
    );
  }
  return classNames.join(' ');
};

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ id, children, defaultActiveKey, onSelect }, ref) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const renderTab = (child: React.ReactNode) => {
      const { title, eventKey } = (child as { props: TabPaneProps }).props;
      if (title == null) {
        return null;
      }
      return (
        <li className='flex flex-1 -mb-px'>
          {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/bb84abc793435a25398160242c5f2870b83b72ca/docs/rules/anchor-is-valid.md */}
          <button
            className={computeClassNames(activeKey, eventKey)}
            onClick={() => {
              setActiveKey(eventKey);
              onSelect && onSelect();
            }}
          >
            {title}
          </button>
        </li>
      );
    };

    const renderTabPane = (child: React.ReactNode) => {
      const childProps = {
        ...(child as { props: TabPaneProps }).props,
        activeKey
      };
      return <TabPane {...childProps} />;
    };

    return (
      <div id={id} onSelect={onSelect} ref={ref}>
        <nav>
          <ul className='flex border-1 border-transparent border-b-[#ddd]'>
            {React.Children.map(children, renderTab)}
          </ul>
        </nav>
        <div>{React.Children.map(children, renderTabPane)}</div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
