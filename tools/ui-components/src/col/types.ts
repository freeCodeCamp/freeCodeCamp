export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  xs?: 8 | 12;
  sm?: 2 | 4 | 6 | 8 | 10 | 12;
  md?: 4 | 6 | 8 | 10;
  lg?: 6 | 8 | 10;
}
