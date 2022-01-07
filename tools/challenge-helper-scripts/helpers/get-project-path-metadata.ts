import fs from 'fs';

// Process the contents of a argument (json) to an Object
function getMetaData(file: string): Record<string, unknown> {
  let metaData;

  try {
    metaData = fs.readFileSync(file);
  } catch (err) {
    throw `No _meta.json file exists at ${file}`;
  }

  return JSON.parse(metaData) as Record<string, unknown>;
}

export { getMetaData };
