const path = require('path');
const fs = require('fs');


const main = async () => {
  const commitFile = path.resolve('.git/COMMIT_EDITMSG');
  const commitMessage = fs.readFileSync(commitFile, 'utf8');

  const regex = /(fix|feat|wip|none|chore|refactor|docs|style|test):.+/;
  const match = commitMessage.match(regex);

  if (!match) {
    console.log('please use the following format: type: description \n commit message: ' + commitMessage);
    process.exit(1);
  } else {
    console.log('commit message ok');
  }
};

main();
