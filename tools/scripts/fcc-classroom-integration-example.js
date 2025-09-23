/**
 * FCC Classroom Integration Example
 * 
 * This script demonstrates how to use the challenge map endpoint
 * to process user data for FCC Classroom integration.
 * 
 * Usage: node fcc-classroom-integration-example.js
 */

const fs = require('fs');
const path = require('path');

// Import test user data
const userData = require('./seed/user-data.js');

/**
 * Fetches the challenge map from the API
 * In production, you would call the actual API endpoint
 */
async function fetchChallengeMap() {
  // For this example, we'll build the challenge map directly
  // In production, you would fetch from: GET /challenge-map
  
  try {
    const challengeMap = buildChallengeMapFromStructure();
    return {
      success: true,
      challengeMap,
      totalChallenges: Object.keys(challengeMap).length,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching challenge map:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Builds challenge map from curriculum structure (for demo purposes)
 */
function buildChallengeMapFromStructure() {
  const challengeMap = {};
  
  try {
    // Read curriculum structure
    const curriculumPath = path.join(__dirname, '../../curriculum/structure/curriculum.json');
    const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
    
    const superblockPath = path.join(__dirname, '../../curriculum/structure/superblocks');
    
    for (const superblockName of curriculum.superblocks) {
      try {
        const superblockFile = path.join(superblockPath, `${superblockName}.json`);
        if (!fs.existsSync(superblockFile)) continue;
        
        const superblock = JSON.parse(fs.readFileSync(superblockFile, 'utf8'));
        
        for (const blockName of superblock.blocks || []) {
          try {
            const blockPath = path.join(__dirname, '../../curriculum/structure/blocks', `${blockName}.json`);
            if (!fs.existsSync(blockPath)) continue;
            
            const block = JSON.parse(fs.readFileSync(blockPath, 'utf8'));
            
            for (const challenge of block.challengeOrder || []) {
              challengeMap[challenge.id] = {
                title: challenge.title,
                block: blockName,
                superblock: superblockName
              };
            }
          } catch (blockError) {
            console.warn(`Warning: Could not read block ${blockName}`);
          }
        }
      } catch (superblockError) {
        console.warn(`Warning: Could not read superblock ${superblockName}`);
      }
    }
    
    return challengeMap;
  } catch (error) {
    console.error('Error building challenge map:', error);
    throw error;
  }
}

/**
 * Filters user challenges against current curriculum
 */
function filterActiveUserChallenges(completedChallenges, challengeMap) {
  const activeCompleted = [];
  const deprecatedCompleted = [];
  
  for (const challenge of completedChallenges) {
    if (challengeMap.hasOwnProperty(challenge.id)) {
      activeCompleted.push(challenge);
    } else {
      deprecatedCompleted.push(challenge);
    }
  }
  
  return { activeCompleted, deprecatedCompleted };
}

/**
 * Generates statistics about user's progress
 */
function generateUserStats(completedChallenges, challengeMap) {
  const { activeCompleted, deprecatedCompleted } = filterActiveUserChallenges(completedChallenges, challengeMap);
  
  // Group by superblock
  const completionBySuperblock = {};
  const completionByBlock = {};
  
  for (const challenge of activeCompleted) {
    const challengeInfo = challengeMap[challenge.id];
    if (challengeInfo) {
      completionBySuperblock[challengeInfo.superblock] = 
        (completionBySuperblock[challengeInfo.superblock] || 0) + 1;
      completionByBlock[challengeInfo.block] = 
        (completionByBlock[challengeInfo.block] || 0) + 1;
    }
  }
  
  return {
    totalCompleted: completedChallenges.length,
    activeCompleted: activeCompleted.length,
    deprecatedCompleted: deprecatedCompleted.length,
    completionBySuperblock,
    completionByBlock,
    completionPercentage: Math.round((activeCompleted.length / Object.keys(challengeMap).length) * 100)
  };
}

/**
 * Main integration example
 */
async function main() {
  console.log('🚀 FCC Classroom Integration Example');
  console.log('=====================================\n');
  
  // Step 1: Fetch challenge map
  console.log('📋 Fetching challenge map...');
  const challengeMapResponse = await fetchChallengeMap();
  
  if (!challengeMapResponse.success) {
    console.error('❌ Failed to fetch challenge map:', challengeMapResponse.error);
    return;
  }
  
  const { challengeMap, totalChallenges } = challengeMapResponse;
  console.log(`✅ Challenge map loaded: ${totalChallenges} active challenges\n`);
  
  // Step 2: Process test users
  const testUsers = [
    { name: 'Fully Certified User', data: userData.fullyCertifiedUser },
    { name: 'Demo User', data: userData.demoUser },
    { name: 'Blank User', data: userData.blankUser }
  ];
  
  for (const testUser of testUsers) {
    console.log(`👤 Processing: ${testUser.name}`);
    console.log('─'.repeat(40));
    
    const stats = generateUserStats(testUser.data.completedChallenges, challengeMap);
    
    console.log(`Total challenges completed: ${stats.totalCompleted}`);
    console.log(`Active challenges completed: ${stats.activeCompleted}`);
    console.log(`Deprecated challenges: ${stats.deprecatedCompleted}`);
    console.log(`Overall completion: ${stats.completionPercentage}%`);
    
    console.log('\\nCompletion by superblock:');
    for (const [superblock, count] of Object.entries(stats.completionBySuperblock)) {
      console.log(`  • ${superblock}: ${count} challenges`);
    }
    
    console.log('\\n');
  }
  
  // Step 3: Demonstrate filtering
  console.log('🔍 Challenge Filtering Example');
  console.log('─'.repeat(40));
  
  const sampleUser = userData.fullyCertifiedUser;
  const { activeCompleted, deprecatedCompleted } = filterActiveUserChallenges(
    sampleUser.completedChallenges, 
    challengeMap
  );
  
  console.log(`Original completed challenges: ${sampleUser.completedChallenges.length}`);
  console.log(`After filtering deprecated: ${activeCompleted.length}`);
  console.log(`Deprecated challenges filtered out: ${deprecatedCompleted.length}`);
  
  if (deprecatedCompleted.length > 0) {
    console.log('\\nSample deprecated challenge IDs:');
    deprecatedCompleted.slice(0, 5).forEach(challenge => {
      console.log(`  • ${challenge.id} (completed: ${new Date(challenge.completedDate).toLocaleDateString()})`);
    });
  }
  
  console.log('\\n✅ Integration example completed successfully!');
  console.log('\\n📚 Next steps for FCC Classroom:');
  console.log('  1. Call GET /challenge-map to get the current curriculum');
  console.log('  2. Filter user completed challenges against the challenge map');
  console.log('  3. Use only active challenges for progress tracking');
  console.log('  4. Cache the challenge map to improve performance');
}

// Run the example
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  fetchChallengeMap,
  filterActiveUserChallenges,
  generateUserStats
};