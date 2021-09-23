type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  primary?: boolean;
  size?: ButtonSize;
  backgroundColor?: string;
  label: string;
  customKey?: string;
  onClick: () => void;
}
