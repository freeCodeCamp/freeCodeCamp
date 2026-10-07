declare function stringify(
  value: any,
  replacer?: (key: string, value: any) => any,
  space?: string | number,
  options?: { depthLimit: number | undefined; edgesLimit: number | undefined }
): string;

declare namespace stringify {
  export function stable(
    value: any,
    replacer?: (key: string, value: any) => any,
    space?: string | number,
    options?: { depthLimit: number | undefined; edgesLimit: number | undefined }
  ): string;
  export function stableStringify(
    value: any,
    replacer?: (key: string, value: any) => any,
    space?: string | number,
    options?: { depthLimit: number | undefined; edgesLimit: number | undefined }
  ): string;
}

export default stringify;
