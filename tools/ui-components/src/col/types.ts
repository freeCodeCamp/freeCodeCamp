export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  xs?: 6 | 8 | 10 | 12;
  sm?: 2 | 4 | 5 | 6 | 8 | 10 | 12;
  md?: 4 | 6 | 8 | 10 | 12;
  lg?: 6 | 8 | 10;
  xsOffset?: 1 | 2 | 3;
  smOffset?: 1 | 2 | 3 | 4;
  mdOffset?: 1 | 2 | 3 | 4;
  lgOffset?: 0 | 1 | 2;
  smPush?: 1;
}
