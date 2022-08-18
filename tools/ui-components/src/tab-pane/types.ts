export interface TabPaneProps extends React.PropsWithChildren<unknown> {
  eventKey: string | number;
  title?: string;
  activeKey?: string | number;
}
