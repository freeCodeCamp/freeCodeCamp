export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  block?: boolean;
  to?: string;
  target?: React.HTMLAttributeAnchorTarget;
}
