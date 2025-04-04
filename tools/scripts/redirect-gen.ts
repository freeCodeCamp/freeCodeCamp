import fs from 'fs';
import path from 'path';

/* This can be used to create NGINX maps for redirects. After running this
   script with `npx tsx redirect-gen`, the map should appear in the current
   directory.
*/

function createRedirectMap(): void {
  const basePath = '../../../curriculum/challenges/english/18-project-euler';
  const directories = fs.readdirSync(path.resolve(__dirname, basePath));

  let mapObject = '';

  for (let i = 0; i < directories.length; i++) {
    const files = fs.readdirSync(
      path.resolve(__dirname, `${basePath}/${directories[i]}`)
    );

    for (let j = 0; j < files.length; j++) {
      const fileName = path.parse(files[j]).name;
      mapObject += `~^/learn/coding-interview-prep/project-euler/${fileName}/?$ /learn/project-euler/${directories[i]}/${fileName}; \n`;
    }
  }

  fs.writeFile('redirectMap.map', mapObject, 'utf8', function (err) {
    if (err) {
      console.log('An error occurred while writing MAP redirect file', err);
      return console.log(err);
    }

    console.log('Map file has been saved.');
  });
}

createRedirectMap();
