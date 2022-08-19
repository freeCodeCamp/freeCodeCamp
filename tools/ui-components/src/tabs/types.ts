export interface TabsProps extends React.PropsWithChildren<unknown> {
  id: string;
  defaultActiveKey: string | number;
  activeKey?: string;
  onSelect?: (...args: unknown[]) => unknown;
}
