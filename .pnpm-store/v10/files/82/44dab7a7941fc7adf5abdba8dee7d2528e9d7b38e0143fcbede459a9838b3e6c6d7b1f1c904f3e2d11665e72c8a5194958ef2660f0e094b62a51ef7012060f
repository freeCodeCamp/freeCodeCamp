import { TCacheTestResultFunction } from './cache-test-result-function';

export type TCacheTestResultFactory = (
    ongoingTests: Map<object, Promise<boolean>>,
    testResults: WeakMap<object, boolean>
) => TCacheTestResultFunction;
