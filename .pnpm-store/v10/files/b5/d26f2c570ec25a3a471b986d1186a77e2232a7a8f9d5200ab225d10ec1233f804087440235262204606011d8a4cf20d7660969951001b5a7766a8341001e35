import { TCacheTestResultFactory } from '../types';

export const createCacheTestResult: TCacheTestResultFactory = (ongoingTests, testResults) => {
    return (tester, test) => {
        const cachedTestResult = testResults.get(tester);

        if (cachedTestResult !== undefined) {
            return cachedTestResult;
        }

        const ongoingTest = ongoingTests.get(tester);

        if (ongoingTest !== undefined) {
            return ongoingTest;
        }

        try {
            const synchronousTestResult = test();

            if (synchronousTestResult instanceof Promise) {
                ongoingTests.set(tester, synchronousTestResult);

                return synchronousTestResult
                    .catch(() => false)
                    .then((finalTestResult) => {
                        ongoingTests.delete(tester);
                        testResults.set(tester, finalTestResult);

                        return finalTestResult;
                    });
            }

            testResults.set(tester, synchronousTestResult);

            return synchronousTestResult;
        } catch {
            testResults.set(tester, false);

            return false;
        }
    };
};
