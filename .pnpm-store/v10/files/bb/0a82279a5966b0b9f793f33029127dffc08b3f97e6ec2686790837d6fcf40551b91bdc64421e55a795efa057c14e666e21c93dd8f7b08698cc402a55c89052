export interface PayPalMessagesComponentOptions {
  amount?: number | string;
  currency?: "USD" | "GBP" | "EUR";
  style?: {
    layout?: "text" | "flex" | "custom";
    color?: string;
    logo?: {
      type?: "primary" | "alternative" | "inline" | "none";
      position?: "left" | "right" | "top";
    };
    text?: {
      color?: "black" | "white" | "monochrome" | "grayscale";
      size?: 10 | 11 | 12 | 13 | 14 | 15 | 16;
      align?: "left" | "center" | "right";
    };
    ratio?: "1x1" | "1x4" | "8x1" | "20x1";
  };
  placement?: "home" | "category" | "product" | "cart" | "payment";
  onApply?: (data: Record<string, unknown>) => void;
  onClick?: (data: Record<string, unknown>) => void;
  onRender?: (data: Record<string, unknown>) => void;
}

export interface PayPalMessagesComponent {
  render: (container: HTMLElement | string) => Promise<void>;
}
