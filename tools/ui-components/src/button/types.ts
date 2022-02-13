type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  primary?: boolean;
  size?: ButtonSize;
  label: string;
  customKey?: string;
  onClick: () => void;
}
