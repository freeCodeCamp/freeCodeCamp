const fs = require('fs');
const path = require('path');

// Define the paths
const ROOT_DIR = path.join(__dirname, 'challenges', '_meta');
const UPDATED_ORDERS_FILE = path.join(__dirname, 'sorted-block-order.json');

// Read the updated orders from the JSON file
const updatedOrders = JSON.parse(fs.readFileSync(UPDATED_ORDERS_FILE, 'utf-8'));

// Function to update the order in meta.json files
function updateMetaOrder() {
  updatedOrders.forEach(({ dashedName, order }) => {
    const folderPath = findFolderByDashedName(dashedName);
    if (folderPath) {
      const metaFilePath = path.join(folderPath, 'meta.json');
      const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf-8'));

      if (meta.order !== order) {
        // Update the order in the meta.json file
        meta.order = order;
        fs.writeFileSync(metaFilePath, JSON.stringify(meta, null, 2), 'utf-8');

        console.log(`Updated order for ${dashedName} to ${order}`);
      }
    } else {
      console.warn(`Folder not found for dashedName: ${dashedName}`);
    }
  });
}

// Helper function to find the folder path by dashedName
function findFolderByDashedName(dashedName) {
  const folders = fs
    .readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(ROOT_DIR, dirent.name));

  // Check each folder's meta.json for the matching dashedName
  for (const folder of folders) {
    const metaFilePath = path.join(folder, 'meta.json');
    if (fs.existsSync(metaFilePath)) {
      const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf-8'));
      if (
        meta.dashedName === dashedName &&
        meta.superBlock === 'front-end-development'
      ) {
        return folder; // Return the folder path if matched
      }
    }
  }
  return null; // Return null if no match is found
}

// Run the function
updateMetaOrder();
