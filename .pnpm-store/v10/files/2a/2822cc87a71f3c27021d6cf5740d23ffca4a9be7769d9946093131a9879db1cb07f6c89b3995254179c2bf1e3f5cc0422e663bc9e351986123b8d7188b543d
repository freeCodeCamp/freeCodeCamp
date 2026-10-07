type FastQueryString = {
  stringify(value: Record<string, any>): string;
  parse(value: string): Record<string, any>;
};

declare namespace fastQueryString {
  export function stringify(value: Record<string, any>): string;
  export function parse(value: string): Record<string, any>;

  const fqs: FastQueryString;
  export { fqs as default };
}

export = fastQueryString;
