import { performance } from 'node:perf_hooks';

// eslint-disable-next-line jsdoc/require-jsdoc
export const timeOperation = async <T>(
  op: () => Promise<T>,
  emit: (result: 'success' | 'failure', durationMs: number) => void
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await op();
    emit('success', performance.now() - start);
    return result;
  } catch (err) {
    emit('failure', performance.now() - start);
    throw err;
  }
};
