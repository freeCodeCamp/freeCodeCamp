export interface ToggleButtonProps {
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}
