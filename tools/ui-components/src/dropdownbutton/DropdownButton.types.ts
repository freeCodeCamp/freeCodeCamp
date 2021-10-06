type DropdownButtonSize = 'small' | 'medium' | 'large';

export interface DropdownButtonProps {
  primary?: boolean;
  size?: DropdownButtonSize;
  label: string;
  customKey?: string;
  onClick: () => void;
  theme?: 'light' | 'dark';
}
