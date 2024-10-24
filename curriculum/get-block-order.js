const fs = require('fs');
const path = require('path');

// Define the root directory where the _meta folder is located
const ROOT_DIR = path.join(__dirname, 'challenges', '_meta');

const result = [];

// Read all folders inside the _meta directory
const folders = fs
  .readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory()) // Ensure it's a folder
  .map(dirent => dirent.name); // Extract folder names

// Loop through each folder and read the meta.json file
folders.forEach(folder => {
  const metaFilePath = path.join(ROOT_DIR, folder, 'meta.json');
  if (fs.existsSync(metaFilePath)) {
    const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf-8'));

    // Check if the superBlock is 'front-end-development'
    if (meta.superBlock === 'front-end-development') {
      result.push({
        dashedName: meta.dashedName,
        order: meta.order
      });
    }
  }
});

// Sort the result array by the 'order' property
result.sort((a, b) => a.order - b.order);

// Log the sorted result
console.log(result);
