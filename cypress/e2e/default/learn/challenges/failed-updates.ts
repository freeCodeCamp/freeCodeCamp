import store from 'store';
import { ChallengeData } from '../../../../../tools/challenge-editor/api/interfaces/challenge-data';

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

describe('failed update flushing', function () {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
  });

  beforeEach(() => {
    cy.preserveSession();
  });

  it('should resubmit failed updates, check they are stored, then flush', () => {
    store.set(failedUpdatesKey, failedUpdates);
    cy.request('http://localhost:3000/user/get-session-user')
      .its('body.user.developmentuser.completedChallenges')
      .then((completedChallenges: ChallengeData[]) => {
        const completedIds: string[] = getCompletedIds(completedChallenges);
        failedUpdates.forEach(failedUpdate => {
          expect(completedIds).not.to.include(failedUpdate.payload.id);
        });
      });

    cy.intercept('http://localhost:3000/modern-challenge-completed').as(
      'completed'
    );
    cy.wrap(store.get(failedUpdatesKey)).should('deep.equal', failedUpdates);
    cy.reload();
    cy.wait('@completed');
    // if we don't wait for both requests to complete, we have a race condition
    cy.wait('@completed');
    cy.request('http://localhost:3000/user/get-session-user')
      .its('body.user.developmentuser.completedChallenges')
      .then((completedChallenges: ChallengeData[]) => {
        const completedIds: string[] = getCompletedIds(completedChallenges);
        failedUpdates.forEach(failedUpdate => {
          expect(completedIds).to.include(failedUpdate.payload.id);
        });
        expect(store.get(failedUpdatesKey)).to.be.empty;
      });
  });
});
