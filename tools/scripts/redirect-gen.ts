import fs from 'fs';
import path from 'path';

function createRedirectMap(): void {
  try {
    // Specify the base path where the directories to be processed are located.
    const basePath = path.resolve(__dirname, '../../../curriculum/challenges/english/18-project-euler');

    // Read the list of directories within the specified base path.
    const directories = fs.readdirSync(basePath);

    // Initialize an empty string to store the NGINX map rules.
    let mapObject = '';

    // Loop through each directory found in the base path.
    for (let i = 0; i < directories.length; i++) {
      // Get the list of files within the current directory.
      const files = fs.readdirSync(path.resolve(basePath, directories[i]));

      // Loop through each file in the current directory.
      for (let j = 0; j < files.length; j++) {
        // Extract the file name without the extension.
        const fileName = path.parse(files[j]).name;

        // Generate the NGINX map rule for the current file and directory.
        mapObject += `~^/learn/coding-interview-prep/project-euler/${fileName}/?$ /learn/project-euler/${directories[i]}/${fileName}; \n`;
      }
    }

    // Write the generated NGINX map rules to a file named "redirectMap.map".
    fs.writeFile('redirectMap.map', mapObject, 'utf8', function (err) {
      if (err) {
        // Handle any errors that occur during file writing.
        console.error('An error occurred while writing MAP redirect file', err);
      } else {
        console.log('Map file has been saved.');
      }
    });
  } catch (err) {
    // Handle any errors that occur during the execution of the script.
    console.error('An error occurred while processing the redirect map', err);
  }
}

// Call the function to create the NGINX map.
createRedirectMap();
                 
