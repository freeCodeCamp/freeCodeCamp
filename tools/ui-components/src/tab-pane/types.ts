export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  eventKey?: string | number;
  activeKey?: string | number;
}
