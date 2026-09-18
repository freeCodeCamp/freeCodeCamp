import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useSolutionDownloadUrl } from './use-solution-download';

describe('useSolutionDownloadUrl', () => {
  const files = [{ name: 'main', ext: 'py', contents: 'print("hello")' }];
  const createObjectURL = vi.fn();
  const revokeObjectURL = vi.fn();

  beforeEach(() => {
    createObjectURL
      .mockReset()
      .mockReturnValueOnce('blob:first')
      .mockReturnValueOnce('blob:second');
    revokeObjectURL.mockReset();
    vi.stubGlobal(
      'URL',
      class extends URL {
        static createObjectURL = createObjectURL;
        static revokeObjectURL = revokeObjectURL;
      }
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each([null, undefined, []])('has no URL for %j', challengeFiles => {
    const { result } = renderHook(() => useSolutionDownloadUrl(challengeFiles));

    expect(result.current).toBeUndefined();
    expect(createObjectURL).not.toHaveBeenCalled();
  });

  it('releases replaced URLs and the final URL on unmount', () => {
    const { result, rerender, unmount } = renderHook(useSolutionDownloadUrl, {
      initialProps: files
    });

    expect(result.current).toBe('blob:first');
    rerender([{ ...files[0], contents: 'print("updated")' }]);

    expect(revokeObjectURL).toHaveBeenCalledWith('blob:first');
    expect(result.current).toBe('blob:second');
    unmount();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:second');
  });

  it('removes the download and releases its URL when files are cleared', () => {
    const { result, rerender } = renderHook(useSolutionDownloadUrl, {
      initialProps: files
    });

    rerender([]);

    expect(result.current).toBeUndefined();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:first');
  });
});
