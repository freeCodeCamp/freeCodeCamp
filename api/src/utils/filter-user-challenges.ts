/**
 * Utility functions for filtering user challenge data against the current curriculum
 * Used for FCC Classroom integration to handle deprecated challenges
 */

interface CompletedChallenge {
  id: string;
  completedDate: number;
  solution?: string;
  githubLink?: string;
  challengeType?: number;
  files: any[];
}

interface ChallengeMapEntry {
  title: string;
  block: string;
  superblock: string;
}

/**
 * Filters user's completed challenges to only include those that exist in the current curriculum
 * @param completedChallenges - Array of user's completed challenges
 * @param challengeMap - Map of current active challenges
 * @returns Filtered array containing only active challenges
 */
export function filterActiveUserChallenges(
  completedChallenges: CompletedChallenge[],
  challengeMap: Record<string, ChallengeMapEntry>
): CompletedChallenge[] {
  return completedChallenges.filter(challenge => {
    const isActive = challengeMap.hasOwnProperty(challenge.id);
    
    if (!isActive) {
      console.log(`Filtering out deprecated challenge: ${challenge.id}`);
    }
    
    return isActive;
  });
}

/**
 * Gets statistics about user's challenge completion against current curriculum
 * @param completedChallenges - Array of user's completed challenges
 * @param challengeMap - Map of current active challenges
 * @returns Statistics object
 */
export function getUserChallengeStats(
  completedChallenges: CompletedChallenge[],
  challengeMap: Record<string, ChallengeMapEntry>
) {
  const activeCompleted = filterActiveUserChallenges(completedChallenges, challengeMap);
  const deprecatedCount = completedChallenges.length - activeCompleted.length;
  
  // Group by superblock
  const completionBySuperblock: Record<string, number> = {};
  activeCompleted.forEach(challenge => {
    const challengeInfo = challengeMap[challenge.id];
    if (challengeInfo) {
      completionBySuperblock[challengeInfo.superblock] = 
        (completionBySuperblock[challengeInfo.superblock] || 0) + 1;
    }
  });

  return {
    totalCompleted: completedChallenges.length,
    activeCompleted: activeCompleted.length,
    deprecatedCompleted: deprecatedCount,
    completionBySuperblock,
    completionPercentage: Math.round((activeCompleted.length / Object.keys(challengeMap).length) * 100)
  };
}

/**
 * Example usage with user-data.js test data
 * This function demonstrates how to use the filtering with test users
 */
export function processTestUserData(
  userData: { completedChallenges: CompletedChallenge[] },
  challengeMap: Record<string, ChallengeMapEntry>
) {
  const stats = getUserChallengeStats(userData.completedChallenges, challengeMap);
  const activeCompletedChallenges = filterActiveUserChallenges(userData.completedChallenges, challengeMap);
  
  return {
    ...userData,
    completedChallenges: activeCompletedChallenges,
    challengeStats: stats
  };
}