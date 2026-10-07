import { readFileSync, statSync, writeFile } from 'fs';
import { format } from 'util';
import { resolve } from 'path';
export default {
    fs: {
        readFileSync,
        writeFile
    },
    format,
    resolve,
    exists: (file) => {
        try {
            return statSync(file).isFile();
        }
        catch (err) {
            return false;
        }
    }
};
