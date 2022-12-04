export type ButtonVariant = 'primary' | 'danger';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ToggleButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}
