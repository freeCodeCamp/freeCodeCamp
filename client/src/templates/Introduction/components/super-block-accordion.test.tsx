import { ChallengeNode } from '../../../redux/prop-types';
import { getCompletionStateFromChallenges } from './super-block-accordion';

describe('getCompletionStateFromChallenges', () => {
  it('should return the correct completedBlocks, completedModules, and completedChapters', () => {
    const result = getCompletionStateFromChallenges({
      challenges: [
        {
          id: 'lecture-what-is-html',
          block: 'what-is-html',
          module: 'basic-html',
          chapter: 'html'
        },
        {
          id: 'workshop-cat-photo-app',
          block: 'cat-photo-app',
          module: 'basic-html',
          chapter: 'html'
        },
        {
          id: 'lab-event-hub',
          block: 'event-hub',
          module: 'semantic-html',
          chapter: 'html'
        },
        {
          id: 'lab-business-card',
          block: 'business-card',
          module: 'basic-css',
          chapter: 'css'
        }
      ] as ChallengeNode['challenge'][],
      completedChallengesIds: [
        'lecture-what-is-html',
        'workshop-cat-photo-app',
        'lab-event-hub'
      ]
    });

    expect(result).toMatchObject({
      completedBlocks: ['what-is-html', 'cat-photo-app', 'event-hub'],
      completedModules: ['basic-html', 'semantic-html'],
      completedChapters: ['html']
    });
  });
});
