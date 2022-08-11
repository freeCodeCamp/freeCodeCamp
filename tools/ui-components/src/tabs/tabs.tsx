import React, { useState } from 'react';
import { TabPane } from '../tab-pane';

import { TabsProps } from './types';

interface ChildProps {
  title?: string;
  eventKey: string | number;
}

export const Tabs = (props: TabsProps) => {
  const { children, defaultActiveKey } = props;
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const renderTab = (child: React.ReactNode) => {
    const { title, eventKey } = (child as { props: ChildProps }).props;
    if (title == null) {
      return null;
    }
    return (
      <li
        className={
          'flex flex-1' + (activeKey === eventKey ? ' bg-gray-150' : '')
        }
      >
        <button
          className='flex-1 px-2.5 py-[5px] mr-0.5 border text-sm text-gray-750'
          onClick={() => {
            setActiveKey(eventKey);
          }}
        >
          {title}
        </button>
      </li>
    );
  };
  return (
    <div>
      <nav>
        <ul className='flex'>{React.Children.map(children, renderTab)}</ul>
      </nav>
      <div>
        {React.Children.map(children, child => {
          // TODO: activeKey didn't pass to child components, it in context in react bootstrap
          const childProps = {
            ...(child as { props: ChildProps }).props,
            activeKey
          };
          return <TabPane {...childProps} />;
        })}
      </div>
    </div>
  );
};
