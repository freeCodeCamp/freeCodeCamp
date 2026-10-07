import {extractAllowedOptionsUpdates} from './extractAllowedOptionsUpdates';

describe('extractAllowedOptionsUpdates', () => {
  it('drops unchanged keys', () => {
    expect(
      extractAllowedOptionsUpdates(
        {foo: 'foo2', bar: {buz: 'buz'}},
        {foo: 'foo1', bar: {buz: 'buz'}},
        []
      )
    ).toEqual({foo: 'foo2'});
  });

  it('works with a null previous value', () => {
    expect(extractAllowedOptionsUpdates({foo: 'foo2'}, null, [])).toEqual({
      foo: 'foo2',
    });
  });

  it('warns about and drops updates to immutable keys', () => {
    const consoleSpy = jest.spyOn(window.console, 'warn');

    // Silence console output so test output is less noisy
    consoleSpy.mockImplementation(() => {});

    expect(
      extractAllowedOptionsUpdates(
        {foo: 'foo2', bar: 'bar'},
        {foo: 'foo1', bar: 'bar'},
        ['bar', 'foo']
      )
    ).toEqual(null);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Unsupported prop change: options.foo is not a mutable property.'
    );
    expect(consoleSpy).toHaveBeenCalledTimes(1);

    consoleSpy.mockRestore();
  });

  it('does not warn on properties that do not change', () => {
    const consoleSpy = jest.spyOn(window.console, 'warn');

    // Silence console output so test output is less noisy
    consoleSpy.mockImplementation(() => {});

    const obj = {
      num: 0,
      obj: {
        num: 0,
      },
      emptyObj: {},
      regex: /foo/,
      func: () => {},
      null: null,
      undefined: undefined,
      array: [1, 2, 3],
    };

    expect(extractAllowedOptionsUpdates(obj, obj, Object.keys(obj))).toEqual(
      null
    );

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
