import { test, expect } from '@playwright/test';
import store from 'store';
import { ChallengeData } from '../tools/challenge-editor/api/interfaces/challenge-data';

const failedUpdates = [
  {
    endpoint: '/modern-challenge-completed',
    payload: { id: '5dc1798ff86c76b9248c6eb3', challengeType: 0 },
    id: '4bd1d704-cfaa-44f7-92a3-bc0d857dbaa6'
  },
  {
    endpoint: '/modern-challenge-completed',
    payload: { id: '5dc17d3bf86c76b9248c6eb4', challengeType: 0 },
    id: 'ea289e2f-a5d2-45e0-b795-0f9f4afc5124'
  }
];
const failedUpdatesKey = 'fcc-failed-updates';

function getCompletedIds(completedChallenges: ChallengeData[]): string[] {
  return completedChallenges.map((challenge: ChallengeData) => challenge.id);
}

test.describe('failed update flushing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should resubmit failed updates, check they are stored, then flush', async ({
    page
  }) => {
    store.set(failedUpdatesKey, failedUpdates);

    const response = await page.request.get(
      'http://localhost:3000/user/get-session-user'
    );
    const body = await response.json();
    const completedChallenges = body.user.developmentuser.completedChallenges;
    expect(completedChallenges).toEqual([]);

    await page.route(
      'http://localhost:3000/modern-challenge-completed',
      async route => {
        await route.continue();
      }
    );

    expect(store.get(failedUpdatesKey)).toEqual(failedUpdates);
    await page.goto('http://localhost:3000');
    // Wait for both requests to complete
    await page.waitForResponse(
      'http://localhost:3000/modern-challenge-completed'
    );
    await page.waitForResponse(
      'http://localhost:3000/modern-challenge-completed'
    );

    const updatedResponse = await page.request.get(
      'http://localhost:3000/user/get-session-user'
    );
    const updatedBody = await updatedResponse.json();
    const updatedCompletedChallenges =
      updatedBody.user.developmentuser.completedChallenges;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const completedIds = getCompletedIds(updatedCompletedChallenges);

    for (const failedUpdate of failedUpdates) {
      expect(completedIds).toContain(failedUpdate.payload.id);
    }
    expect(store.get(failedUpdatesKey)).toEqual([]);
  });
});
