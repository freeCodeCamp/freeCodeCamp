import { describe, it, expect, vi, beforeEach } from 'vitest';
import { retry } from 'rxjs/operators';
import { post } from '../../../utils/ajax';
import postUpdate$ from './post-update';

vi.mock('../../../utils/ajax', () => ({
  post: vi.fn()
}));

const mockedPost = vi.mocked(post);

describe('postUpdate$', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('defers post invocation so RxJS retry triggers fresh HTTP requests', async () => {
    mockedPost
      .mockRejectedValueOnce(new Error('network error 1'))
      .mockRejectedValueOnce(new Error('network error 2'))
      .mockResolvedValueOnce({
        response: new Response(null, { status: 200 }),
        data: undefined
      });

    const result = await postUpdate$({
      endpoint: '/modern-challenge-completed',
      payload: { id: 'abc' }
    })
      .pipe(retry(3))
      .toPromise();

    expect(mockedPost).toHaveBeenCalledTimes(3);
    expect(result.response.status).toBe(200);
  });
});
