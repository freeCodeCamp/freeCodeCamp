"use strict";

// Initial file from https://github.com/rolandstarke/node-cache-manager-fs-hash @ af52d2d
/* !
The MIT License (MIT)

Copyright (c) 2017 Roland Starke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const promisify = require(`util`).promisify;
const fs = require(`fs`);
const zlib = require(`zlib`);
exports.write = async function (path, data, options) {
  const externalBuffers = [];
  let dataString = JSON.stringify(data, function replacerFunction(_k, value) {
    // Buffers searilize to {data: [...], type: "Buffer"}
    if (value && value.type === `Buffer` && value.data && value.data.length >= 1024 /* only save bigger Buffers external, small ones can be inlined */) {
      const buffer = Buffer.from(value.data);
      externalBuffers.push({
        index: externalBuffers.length,
        buffer: buffer
      });
      return {
        type: `ExternalBuffer`,
        index: externalBuffers.length - 1,
        size: buffer.length
      };
    } else if (value === Infinity || value === -Infinity) {
      return {
        type: `Infinity`,
        sign: Math.sign(value)
      };
    } else {
      return value;
    }
  });
  let zipExtension = ``;
  if (options.zip) {
    zipExtension = `.gz`;
    dataString = await promisify(zlib.deflate)(dataString);
  }
  // save main json file
  await promisify(fs.writeFile)(path + `.json` + zipExtension, dataString, `utf8`);

  // save external buffers
  await Promise.all(externalBuffers.map(async function (externalBuffer) {
    let buffer = externalBuffer.buffer;
    if (options.zip) {
      buffer = await promisify(zlib.deflate)(buffer);
    }
    await promisify(fs.writeFile)(path + `-` + externalBuffer.index + `.bin` + zipExtension, buffer, `utf8`);
  }));
};
exports.read = async function (path, options) {
  let zipExtension = ``;
  if (options.zip) {
    zipExtension = `.gz`;
  }

  // read main json file
  let dataString;
  if (options.zip) {
    const compressedData = await promisify(fs.readFile)(path + `.json` + zipExtension);
    dataString = (await promisify(zlib.unzip)(compressedData)).toString();
  } else {
    dataString = await promisify(fs.readFile)(path + `.json` + zipExtension, `utf8`);
  }
  const externalBuffers = [];
  let data;
  try {
    data = JSON.parse(dataString, function bufferReceiver(_k, value) {
      if (value && value.type === `Buffer` && value.data) {
        return Buffer.from(value.data);
      } else if (value && value.type === `ExternalBuffer` && typeof value.index === `number` && typeof value.size === `number`) {
        // JSON.parse is sync so we need to return a buffer sync, we will fill the buffer later
        const buffer = Buffer.alloc(value.size);
        externalBuffers.push({
          index: +value.index,
          buffer: buffer
        });
        return buffer;
      } else if (value && value.type === `Infinity` && typeof value.sign === `number`) {
        return Infinity * value.sign;
      } else {
        return value;
      }
    });
  } catch (e) {
    throw new Error("json-file-store failed to JSON.parse this string: `" + dataString.replace(/\n/g, `⏎`));
  }

  // read external buffers
  await Promise.all(externalBuffers.map(async function (externalBuffer) {
    if (options.zip) {
      const bufferCompressed = await promisify(fs.readFile)(path + `-` + +externalBuffer.index + `.bin` + zipExtension);
      const buffer = await promisify(zlib.unzip)(bufferCompressed);
      buffer.copy(externalBuffer.buffer);
    } else {
      const fd = await promisify(fs.open)(path + `-` + +externalBuffer.index + `.bin` + zipExtension, `r`);
      await promisify(fs.read)(fd, externalBuffer.buffer, 0, externalBuffer.buffer.length, 0);
      await promisify(fs.close)(fd);
    }
  }));
  return data;
};
exports.delete = async function (path, options) {
  let zipExtension = ``;
  if (options.zip) {
    zipExtension = `.gz`;
  }
  await promisify(fs.unlink)(path + `.json` + zipExtension);

  // delete binary files
  try {
    for (let i = 0; i < Infinity; i++) {
      await promisify(fs.unlink)(path + `-` + i + `.bin` + zipExtension);
    }
  } catch (err) {
    if (err.code === `ENOENT`) {
      // every binary is deleted, we are done
    } else {
      throw err;
    }
  }
};
//# sourceMappingURL=json-file-store.js.map