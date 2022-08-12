import React, { useState } from 'react';
import { TabPane } from '../tab-pane';
import { TabsProps } from './types';

// TODO: remove it
interface ChildProps {
  title?: string;
  eventKey: string | number;
}

const defaultLiClassNames = ['flex', 'flex-1'];
const defaultButtonClassNames = [
  'flex-1',
  'px-2.5',
  'py-[5px]',
  'mr-0.5',
  'border',
  'text-sm',
  'text-gray-750'
];
const computeLiClassNames = (
  activeKey: string | number,
  eventKey: string | number
) => {
  const classNames = [...defaultLiClassNames];
  if (activeKey === eventKey) {
    classNames.push('bg-background-quaternary');
  }
  return classNames.join(' ');
};

// TODO: useCallback 和 useMemo 切换 bg-background-quaternary
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, defaultActiveKey }, ref) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const renderTab = (child: React.ReactNode) => {
      const { title, eventKey } = (child as { props: ChildProps }).props;
      const buttonClasses = defaultButtonClassNames.join(' ');
      if (title == null) {
        return null;
      }
      return (
        <li className={computeLiClassNames(activeKey, eventKey)}>
          <button
            className={buttonClasses}
            onClick={() => {
              setActiveKey(eventKey);
            }}
          >
            {title}
          </button>
        </li>
      );
    };

    const renderTabPane = (child: React.ReactNode) => {
      const childProps = {
        ...(child as { props: ChildProps }).props,
        activeKey
      };
      return <TabPane {...childProps} />;
    };

    return (
      <div ref={ref}>
        <nav>
          <ul className='flex'>{React.Children.map(children, renderTab)}</ul>
        </nav>
        <div>{React.Children.map(children, renderTabPane)}</div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
