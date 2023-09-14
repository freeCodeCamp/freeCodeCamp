export interface ToggleButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
  value?: string;
  name?: string;
  type?: 'button' | 'radio';
  id?: string;
}
