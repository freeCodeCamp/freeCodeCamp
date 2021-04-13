const getChallenge = require('../../curriculum/getChallenges');

module.exports = on => {
  on('task', {
    // return an array of all challenge paths
    //  superBlock, block,  this are unused variables in the condition Husky doesn't like that
    getAllChallengePaths({ lang }) {
      const curriculum = getChallenge.getChallengesForLang(lang);

      return curriculum['responsive-web-design'];
    }
  });
};
