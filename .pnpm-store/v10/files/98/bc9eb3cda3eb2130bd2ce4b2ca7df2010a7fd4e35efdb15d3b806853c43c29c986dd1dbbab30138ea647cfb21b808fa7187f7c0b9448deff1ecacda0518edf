declare namespace processWarning {
  export interface WarningItem {
    (a?: any, b?: any, c?: any): void;
    name: string;
    code: string;
    message: string;
    emitted: boolean;
    unlimited: boolean;
    format(a?: any, b?: any, c?: any): string;
  }

  export type WarningOptions = {
    name: string;
    code: string;
    message: string;
    unlimited?: boolean;
  }

  export type DeprecationOptions = Omit<WarningOptions, 'name'>

  export type ProcessWarningOptions = {
    unlimited?: boolean;
  }

  export type ProcessWarning = {
    createWarning(params: WarningOptions): WarningItem;
    createDeprecation(params: DeprecationOptions): WarningItem;
  }

  export function createWarning (params: WarningOptions): WarningItem
  export function createDeprecation (params: DeprecationOptions): WarningItem

  const processWarning: ProcessWarning
  export { processWarning as default }
}

export = processWarning
