/* eslint-disable @typescript-eslint/no-unsafe-call */
import { indent, wrapInCoroutine } from './transform-python';

describe('transform-python', () => {
  describe('indent', () => {
    it('should indent n spaces', () => {
      const inputCode = `def foo():
    print('bar')`;
      const fourSpaces = `    def foo():
        print('bar')`;
      const eightSpaces = `        def foo():
            print('bar')`;

      expect(indent(inputCode, 4)).toEqual(fourSpaces);
      expect(indent(inputCode, 8)).toEqual(eightSpaces);
    });
  });

  describe('wrapInCoroutine', () => {
    it('should wrap a code string in a cancellable coroutine', () => {
      const inputCode = `def foo():
    print('bar')`;
      const wrappedCode = `import asyncio
async def cancellable_coroutine():
    try:
        def foo():
            print('bar')
        globals()['__locals'] = locals()
    except asyncio.CancelledError:
        raise

__task = asyncio.create_task(cancellable_coroutine())

def __cancel():
    __task.cancel()`;

      expect(wrapInCoroutine(inputCode)).toEqual(wrappedCode);
    });
  });
});
