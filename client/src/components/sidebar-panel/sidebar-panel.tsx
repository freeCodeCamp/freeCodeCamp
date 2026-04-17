import React from 'react';

import './sidebar-panel.css';

type SidebarPanelProps = {
  className?: string;
  children: React.ReactNode;
};

function SidebarPanelRoot({ className, children }: SidebarPanelProps) {
  const asideClassName = ['sidebar-panel', className].filter(Boolean).join(' ');

  return <aside className={asideClassName}>{children}</aside>;
}

SidebarPanelRoot.displayName = 'SidebarPanel';

type SidebarPanelItemProps = {
  className?: string;
  children: React.ReactNode;
};

function SidebarPanelItem({ className, children }: SidebarPanelItemProps) {
  const liClassName = ['sidebar-panel-item', className]
    .filter(Boolean)
    .join(' ');

  return <li className={liClassName}>{children}</li>;
}

SidebarPanelItem.displayName = 'SidebarPanel.Item';

const SidebarPanel = Object.assign(SidebarPanelRoot, {
  Item: SidebarPanelItem
});

export default SidebarPanel;
