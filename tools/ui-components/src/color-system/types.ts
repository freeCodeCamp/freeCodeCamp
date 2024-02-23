export interface Color {
  label: string;
  value: string;
}

export interface PaletteProps {
  colors: Color[];
}

export type ColorList = Record<string, string>;
