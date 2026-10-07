// @flow
import { DYNAMIC_PROVIDER, composeProviders } from './helpers';

export function dynamic(fn: Function): any {
  return { fn, [DYNAMIC_PROVIDER]: true };
}

export function throwError(error: any): void {
  return dynamic(() => {
    throw error;
  });
}

export { composeProviders };
