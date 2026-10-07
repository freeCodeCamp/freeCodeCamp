import {renderHook} from '@testing-library/react-hooks';

import {usePrevious} from './usePrevious';

describe('usePrevious', () => {
  it('returns the initial value if it has not yet been changed', () => {
    const {result} = renderHook(() => usePrevious('foo'));

    expect(result.current).toEqual('foo');
  });

  it('returns the previous value after the it has been changed', () => {
    let val = 'foo';
    const {result, rerender} = renderHook(() => usePrevious(val));

    expect(result.current).toEqual('foo');

    val = 'bar';
    rerender();
    expect(result.current).toEqual('foo');

    val = 'baz';
    rerender();
    expect(result.current).toEqual('bar');

    val = 'buz';
    rerender();
    expect(result.current).toEqual('baz');
  });
});
