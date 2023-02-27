exports.sortChallengeFiles = function sortChallengeFiles(challengeFiles) {
  const xs = challengeFiles.slice();
  xs.sort((a, b) => {
    var hisA = a.history[0]
    var hisB = b.history[0]

    if(hisA === 'index.html' ||
       hisA === 'styles.css' ||
       hisA === 'index.jsx'  ||
       hisA === 'script.js'
      ) {return -1;}

    if(hisB === 'index.html' ||
       hisB === 'styles.css' ||
       hisB === 'index.jsx'  ||
       hisB === 'script.js'
      ) {return 1;}
      
    return 0;
  });
  return xs;
};
