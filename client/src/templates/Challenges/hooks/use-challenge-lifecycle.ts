import React, { useEffect } from 'react';
import type { ChallengeMeta, Test } from '../../../redux/prop-types';
import { getChallengePaths } from '../utils/challenge-paths';

/**
 * Common challenge initialization logic shared across all challenge types.
 * Handles mounting lifecycle, metadata updates, and test initialization.
 * 
 * This hook consolidates the duplicated useEffect patterns found in:
 * - ShowClassic, ShowExam, ShowQuiz, ShowBackEnd, ShowFrontEndProject,
 * - ShowGeneric, ShowFillInTheBlank, ShowMsTrophy
 * 
 * @param options Challenge initialization configuration
 */
export interface UseChallengeLifecycleOptions {
  /** Challenge ID for tracking mount/unmount */
  challengeId: string;
  /** Challenge title for display */
  title: string;
  /** Challenge type identifier */
  challengeType: number;
  /** Help category for support */
  helpCategory: string;
  /** Test cases for the challenge */
  tests: Test[];
  /** Current challenge metadata from pageContext */
  challengeMeta: ChallengeMeta;
  
  // Redux action dispatchers
  challengeMounted: (id: string) => void;
  updateChallengeMeta: (meta: ChallengeMeta) => void;
  initTests: (tests: Test[]) => void;
  
  // Optional additional initialization
  onMount?: () => void;
}

/**
 * Custom hook that handles common challenge lifecycle operations.
 * Reduces duplication across challenge Show components.
 * 
 * Usage:
 * ```tsx
 * useChallengeLifecycle({
 *   challengeId: challenge.id,
 *   title: challenge.title,
 *   challengeType: challenge.challengeType,
 *   helpCategory: challenge.helpCategory,
 *   tests: challenge.tests,
 *   challengeMeta,
 *   challengeMounted,
 *   updateChallengeMeta,
 *   initTests,
 *   onMount: () => { // optional custom initialization }
 * });
 * ```
 */
export const useChallengeLifecycle = ({
  challengeId,
  title,
  challengeType,
  helpCategory,
  tests,
  challengeMeta,
  challengeMounted,
  updateChallengeMeta,
  initTests,
  onMount
}: UseChallengeLifecycleOptions): void => {
  useEffect(() => {
    // Initialize tests
    initTests(tests);
    
    // Calculate challenge paths
    const challengePaths = getChallengePaths({
      currentCurriculumPaths: challengeMeta
    });
    
    // Update challenge metadata with paths and current challenge info
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory,
      ...challengePaths
    });
    
    // Mount the challenge (triggers analytics, state updates, etc.)
    challengeMounted(challengeId);
    
    // Execute any additional custom initialization
    if (onMount) {
      onMount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeId]);
};
