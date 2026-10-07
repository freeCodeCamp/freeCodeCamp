'use strict';

function createMultipartBuffers(boundary, sizes) {
  const bufs = [];
  for (let i = 0; i < sizes.length; ++i) {
    const mb = sizes[i] * 1024 * 1024;
    bufs.push(Buffer.from([
      `--${boundary}`,
      `content-disposition: form-data; name="file${i + 1}"; `
        + `filename="random${i + 1}.bin"`,
      'content-type: application/octet-stream',
      '',
      '0'.repeat(mb),
      '',
    ].join('\r\n')));
  }
  bufs.push(Buffer.from([
    `--${boundary}--`,
    '',
  ].join('\r\n')));
  return bufs;
}

const boundary = '-----------------------------168072824752491622650073';
const buffers = createMultipartBuffers(boundary, (new Array(100)).fill(1));
const calls = {
  partBegin: 0,
  headerField: 0,
  headerValue: 0,
  headerEnd: 0,
  headersEnd: 0,
  partData: 0,
  partEnd: 0,
  end: 0,
};

const moduleName = process.argv[2];
switch (moduleName) {
  case 'busboy': {
    const busboy = require('busboy');

    const parser = busboy({
      limits: {
        fieldSizeLimit: Infinity,
      },
      headers: {
        'content-type': `multipart/form-data; boundary=${boundary}`,
      },
    });
    parser.on('file', (name, stream, info) => {
      ++calls.partBegin;
      stream.on('data', (chunk) => {
        ++calls.partData;
      }).on('end', () => {
        ++calls.partEnd;
      });
    }).on('close', () => {
      ++calls.end;
      console.timeEnd(moduleName);
    });

    console.time(moduleName);
    for (const buf of buffers)
      parser.write(buf);
    break;
  }

  case 'formidable': {
    const { MultipartParser } = require('formidable');

    const parser = new MultipartParser();
    parser.initWithBoundary(boundary);
    parser.on('data', ({ name }) => {
      ++calls[name];
      if (name === 'end')
        console.timeEnd(moduleName);
    });

    console.time(moduleName);
    for (const buf of buffers)
      parser.write(buf);

    break;
  }

  case 'multiparty': {
    const { Readable } = require('stream');

    const { Form } = require('multiparty');

    const form = new Form({
      maxFieldsSize: Infinity,
      maxFields: Infinity,
      maxFilesSize: Infinity,
      autoFields: false,
      autoFiles: false,
    });

    const req = new Readable({ read: () => {} });
    req.headers = {
      'content-type': `multipart/form-data; boundary=${boundary}`,
    };

    function hijack(name, fn) {
      const oldFn = form[name];
      form[name] = function() {
        fn();
        return oldFn.apply(this, arguments);
      };
    }

    hijack('onParseHeaderField', () => {
      ++calls.headerField;
    });
    hijack('onParseHeaderValue', () => {
      ++calls.headerValue;
    });
    hijack('onParsePartBegin', () => {
      ++calls.partBegin;
    });
    hijack('onParsePartData', () => {
      ++calls.partData;
    });
    hijack('onParsePartEnd', () => {
      ++calls.partEnd;
    });

    form.on('close', () => {
      ++calls.end;
      console.timeEnd(moduleName);
    }).on('part', (p) => p.resume());

    console.time(moduleName);
    form.parse(req);
    for (const buf of buffers)
      req.push(buf);
    req.push(null);

    break;
  }

  default:
    if (moduleName === undefined)
      console.error('Missing parser module name');
    else
      console.error(`Invalid parser module name: ${moduleName}`);
    process.exit(1);
}
