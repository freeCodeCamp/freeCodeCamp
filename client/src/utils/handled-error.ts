import { has } from 'lodash-es';

interface ErrorData {
  type?: string;
  message?: string;
  redirectTo?: string | null;
}

export const handledErrorSymbol = Symbol('handledError');

export type HandledError = Error & {
  [handledErrorSymbol]: ErrorData;
};

export function isHandledError(err: unknown): err is HandledError {
  return has(err, handledErrorSymbol);
}

export function unwrapHandledError(
  err: HandledError
): ErrorData | Record<string, never> {
  return handledErrorSymbol in err ? err[handledErrorSymbol] : {};
}
