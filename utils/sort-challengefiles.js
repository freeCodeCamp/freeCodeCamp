exports.sortChallengeFiles = function sortChallengeFiles(challengeFiles) {
  const xs = challengeFiles.slice();               //This function creates a new array xs that is a copy of the original challengeFiles array using the slice() method to avoid modifying the original array
  xs.sort((a, b) => {                              //It then uses the sort() method on xs, which takes a comparison function as its argument.
    if (a.history[0] === 'index.html') return -1;  //The comparison function checks the first history entry of each element and returns -1, 1, or 0 
    if (b.history[0] === 'index.html') return 1;
    if (a.history[0] === 'styles.css') return -1;
    if (b.history[0] === 'styles.css') return 1;
    if (a.history[0] === 'index.jsx') return -1;
    if (b.history[0] === 'index.jsx') return 1;
    if (a.history[0] === 'script.js') return -1;
    if (b.history[0] === 'script.js') return 1;
    return 0;
  });
  return xs;                                        //Finally, the function returns the sorted array xs.
};
