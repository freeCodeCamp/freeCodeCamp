import { inspect } from './inspect.mjs';
/**
 * Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
 */

export function toError(thrownValue) {
  return thrownValue instanceof Error
    ? thrownValue
    : new NonErrorThrown(thrownValue);
}

class NonErrorThrown extends Error {
  constructor(thrownValue) {
    super('Unexpected error value: ' + inspect(thrownValue));
    this.name = 'NonErrorThrown';
    this.thrownValue = thrownValue;
  }
}
