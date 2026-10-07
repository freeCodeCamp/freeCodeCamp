const fs = require('fs');
const path = require('path');

function del(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return false;
  }

  try {
    if (fs.statSync(targetPath).isDirectory()) {
      // If it's a directory, delete its contents first
      fs.readdirSync(targetPath).forEach(file => {
        const curPath = path.join(targetPath, file);

        if (fs.statSync(curPath).isFile()) {
          fs.unlinkSync(curPath); // Delete file
        }
      });
      fs.rmdirSync(targetPath); // Delete the now-empty directory
    } else {
      fs.unlinkSync(targetPath); // If it's a file, delete it directly
    }

    return true;
  } catch (error) {
    console.error(`Error while deleting ${targetPath}: ${error.message}`);
  }
}

module.exports = { del };
