'use strict';

const { Readable, Writable } = require('stream');

const StreamSearch = require('streamsearch');

const {
  basename,
  convertToUTF8,
  getDecoder,
  parseContentType,
  parseDisposition,
} = require('../utils.js');

const BUF_CRLF = Buffer.from('\r\n');
const BUF_CR = Buffer.from('\r');
const BUF_DASH = Buffer.from('-');

function noop() {}

const MAX_HEADER_PAIRS = 2000; // From node
const MAX_HEADER_SIZE = 16 * 1024; // From node (its default value)

const HPARSER_NAME = 0;
const HPARSER_PRE_OWS = 1;
const HPARSER_VALUE = 2;
class HeaderParser {
  constructor(cb) {
    this.header = Object.create(null);
    this.pairCount = 0;
    this.byteCount = 0;
    this.state = HPARSER_NAME;
    this.name = '';
    this.value = '';
    this.crlf = 0;
    this.cb = cb;
  }

  reset() {
    this.header = Object.create(null);
    this.pairCount = 0;
    this.byteCount = 0;
    this.state = HPARSER_NAME;
    this.name = '';
    this.value = '';
    this.crlf = 0;
  }

  push(chunk, pos, end) {
    let start = pos;
    while (pos < end) {
      switch (this.state) {
        case HPARSER_NAME: {
          let done = false;
          for (; pos < end; ++pos) {
            if (this.byteCount === MAX_HEADER_SIZE)
              return -1;
            ++this.byteCount;
            const code = chunk[pos];
            if (TOKEN[code] !== 1) {
              if (code !== 58/* ':' */)
                return -1;
              this.name += chunk.latin1Slice(start, pos);
              if (this.name.length === 0)
                return -1;
              ++pos;
              done = true;
              this.state = HPARSER_PRE_OWS;
              break;
            }
          }
          if (!done) {
            this.name += chunk.latin1Slice(start, pos);
            break;
          }
          // FALLTHROUGH
        }
        case HPARSER_PRE_OWS: {
          // Skip optional whitespace
          let done = false;
          for (; pos < end; ++pos) {
            if (this.byteCount === MAX_HEADER_SIZE)
              return -1;
            ++this.byteCount;
            const code = chunk[pos];
            if (code !== 32/* ' ' */ && code !== 9/* '\t' */) {
              start = pos;
              done = true;
              this.state = HPARSER_VALUE;
              break;
            }
          }
          if (!done)
            break;
          // FALLTHROUGH
        }
        case HPARSER_VALUE:
          switch (this.crlf) {
            case 0: // Nothing yet
              for (; pos < end; ++pos) {
                if (this.byteCount === MAX_HEADER_SIZE)
                  return -1;
                ++this.byteCount;
                const code = chunk[pos];
                if (FIELD_VCHAR[code] !== 1) {
                  if (code !== 13/* '\r' */)
                    return -1;
                  ++this.crlf;
                  break;
                }
              }
              this.value += chunk.latin1Slice(start, pos++);
              break;
            case 1: // Received CR
              if (this.byteCount === MAX_HEADER_SIZE)
                return -1;
              ++this.byteCount;
              if (chunk[pos++] !== 10/* '\n' */)
                return -1;
              ++this.crlf;
              break;
            case 2: { // Received CR LF
              if (this.byteCount === MAX_HEADER_SIZE)
                return -1;
              ++this.byteCount;
              const code = chunk[pos];
              if (code === 32/* ' ' */ || code === 9/* '\t' */) {
                // Folded value
                start = pos;
                this.crlf = 0;
              } else {
                if (++this.pairCount < MAX_HEADER_PAIRS) {
                  this.name = this.name.toLowerCase();
                  if (this.header[this.name] === undefined)
                    this.header[this.name] = [this.value];
                  else
                    this.header[this.name].push(this.value);
                }
                if (code === 13/* '\r' */) {
                  ++this.crlf;
                  ++pos;
                } else {
                  // Assume start of next header field name
                  start = pos;
                  this.crlf = 0;
                  this.state = HPARSER_NAME;
                  this.name = '';
                  this.value = '';
                }
              }
              break;
            }
            case 3: { // Received CR LF CR
              if (this.byteCount === MAX_HEADER_SIZE)
                return -1;
              ++this.byteCount;
              if (chunk[pos++] !== 10/* '\n' */)
                return -1;
              // End of header
              const header = this.header;
              this.reset();
              this.cb(header);
              return pos;
            }
          }
          break;
      }
    }

    return pos;
  }
}

class FileStream extends Readable {
  constructor(opts, owner) {
    super(opts);
    this.truncated = false;
    this._readcb = null;
    this.once('end', () => {
      // We need to make sure that we call any outstanding _writecb() that is
      // associated with this file so that processing of the rest of the form
      // can continue. This may not happen if the file stream ends right after
      // backpressure kicks in, so we force it here.
      this._read();
      if (--owner._fileEndsLeft === 0 && owner._finalcb) {
        const cb = owner._finalcb;
        owner._finalcb = null;
        // Make sure other 'end' event handlers get a chance to be executed
        // before busboy's 'finish' event is emitted
        process.nextTick(cb);
      }
    });
  }
  _read(n) {
    const cb = this._readcb;
    if (cb) {
      this._readcb = null;
      cb();
    }
  }
}

const ignoreData = {
  push: (chunk, pos) => {},
  destroy: () => {},
};

function callAndUnsetCb(self, err) {
  const cb = self._writecb;
  self._writecb = null;
  if (err)
    self.destroy(err);
  else if (cb)
    cb();
}

function nullDecoder(val, hint) {
  return val;
}

class Multipart extends Writable {
  constructor(cfg) {
    const streamOpts = {
      autoDestroy: true,
      emitClose: true,
      highWaterMark: (typeof cfg.highWaterMark === 'number'
                      ? cfg.highWaterMark
                      : undefined),
    };
    super(streamOpts);

    if (!cfg.conType.params || typeof cfg.conType.params.boundary !== 'string')
      throw new Error('Multipart: Boundary not found');

    const boundary = cfg.conType.params.boundary;
    const paramDecoder = (typeof cfg.defParamCharset === 'string'
                            && cfg.defParamCharset
                          ? getDecoder(cfg.defParamCharset)
                          : nullDecoder);
    const defCharset = (cfg.defCharset || 'utf8');
    const preservePath = cfg.preservePath;
    const fileOpts = {
      autoDestroy: true,
      emitClose: true,
      highWaterMark: (typeof cfg.fileHwm === 'number'
                      ? cfg.fileHwm
                      : undefined),
    };

    const limits = cfg.limits;
    const fieldSizeLimit = (limits && typeof limits.fieldSize === 'number'
                            ? limits.fieldSize
                            : 1 * 1024 * 1024);
    const fileSizeLimit = (limits && typeof limits.fileSize === 'number'
                           ? limits.fileSize
                           : Infinity);
    const filesLimit = (limits && typeof limits.files === 'number'
                        ? limits.files
                        : Infinity);
    const fieldsLimit = (limits && typeof limits.fields === 'number'
                         ? limits.fields
                         : Infinity);
    const partsLimit = (limits && typeof limits.parts === 'number'
                        ? limits.parts
                        : Infinity);

    let parts = -1; // Account for initial boundary
    let fields = 0;
    let files = 0;
    let skipPart = false;

    this._fileEndsLeft = 0;
    this._fileStream = undefined;
    this._complete = false;
    let fileSize = 0;

    let field;
    let fieldSize = 0;
    let partCharset;
    let partEncoding;
    let partType;
    let partName;
    let partTruncated = false;

    let hitFilesLimit = false;
    let hitFieldsLimit = false;

    this._hparser = null;
    const hparser = new HeaderParser((header) => {
      this._hparser = null;
      skipPart = false;

      partType = 'text/plain';
      partCharset = defCharset;
      partEncoding = '7bit';
      partName = undefined;
      partTruncated = false;

      let filename;
      if (!header['content-disposition']) {
        skipPart = true;
        return;
      }

      const disp = parseDisposition(header['content-disposition'][0],
                                    paramDecoder);
      if (!disp || disp.type !== 'form-data') {
        skipPart = true;
        return;
      }

      if (disp.params) {
        if (disp.params.name)
          partName = disp.params.name;

        if (disp.params['filename*'])
          filename = disp.params['filename*'];
        else if (disp.params.filename)
          filename = disp.params.filename;

        if (filename !== undefined && !preservePath)
          filename = basename(filename);
      }

      if (header['content-type']) {
        const conType = parseContentType(header['content-type'][0]);
        if (conType) {
          partType = `${conType.type}/${conType.subtype}`;
          if (conType.params && typeof conType.params.charset === 'string')
            partCharset = conType.params.charset.toLowerCase();
        }
      }

      if (header['content-transfer-encoding'])
        partEncoding = header['content-transfer-encoding'][0].toLowerCase();

      if (partType === 'application/octet-stream' || filename !== undefined) {
        // File

        if (files === filesLimit) {
          if (!hitFilesLimit) {
            hitFilesLimit = true;
            this.emit('filesLimit');
          }
          skipPart = true;
          return;
        }
        ++files;

        if (this.listenerCount('file') === 0) {
          skipPart = true;
          return;
        }

        fileSize = 0;
        this._fileStream = new FileStream(fileOpts, this);
        ++this._fileEndsLeft;
        this.emit(
          'file',
          partName,
          this._fileStream,
          { filename,
            encoding: partEncoding,
            mimeType: partType }
        );
      } else {
        // Non-file

        if (fields === fieldsLimit) {
          if (!hitFieldsLimit) {
            hitFieldsLimit = true;
            this.emit('fieldsLimit');
          }
          skipPart = true;
          return;
        }
        ++fields;

        if (this.listenerCount('field') === 0) {
          skipPart = true;
          return;
        }

        field = [];
        fieldSize = 0;
      }
    });

    let matchPostBoundary = 0;
    const ssCb = (isMatch, data, start, end, isDataSafe) => {
retrydata:
      while (data) {
        if (this._hparser !== null) {
          const ret = this._hparser.push(data, start, end);
          if (ret === -1) {
            this._hparser = null;
            hparser.reset();
            this.emit('error', new Error('Malformed part header'));
            break;
          }
          start = ret;
        }

        if (start === end)
          break;

        if (matchPostBoundary !== 0) {
          if (matchPostBoundary === 1) {
            switch (data[start]) {
              case 45: // '-'
                // Try matching '--' after boundary
                matchPostBoundary = 2;
                ++start;
                break;
              case 13: // '\r'
                // Try matching CR LF before header
                matchPostBoundary = 3;
                ++start;
                break;
              default:
                matchPostBoundary = 0;
            }
            if (start === end)
              return;
          }

          if (matchPostBoundary === 2) {
            matchPostBoundary = 0;
            if (data[start] === 45/* '-' */) {
              // End of multipart data
              this._complete = true;
              this._bparser = ignoreData;
              return;
            }
            // We saw something other than '-', so put the dash we consumed
            // "back"
            const writecb = this._writecb;
            this._writecb = noop;
            ssCb(false, BUF_DASH, 0, 1, false);
            this._writecb = writecb;
          } else if (matchPostBoundary === 3) {
            matchPostBoundary = 0;
            if (data[start] === 10/* '\n' */) {
              ++start;
              if (parts >= partsLimit)
                break;
              // Prepare the header parser
              this._hparser = hparser;
              if (start === end)
                break;
              // Process the remaining data as a header
              continue retrydata;
            } else {
              // We saw something other than LF, so put the CR we consumed
              // "back"
              const writecb = this._writecb;
              this._writecb = noop;
              ssCb(false, BUF_CR, 0, 1, false);
              this._writecb = writecb;
            }
          }
        }

        if (!skipPart) {
          if (this._fileStream) {
            let chunk;
            const actualLen = Math.min(end - start, fileSizeLimit - fileSize);
            if (!isDataSafe) {
              chunk = Buffer.allocUnsafe(actualLen);
              data.copy(chunk, 0, start, start + actualLen);
            } else {
              chunk = data.slice(start, start + actualLen);
            }

            fileSize += chunk.length;
            if (fileSize === fileSizeLimit) {
              if (chunk.length > 0)
                this._fileStream.push(chunk);
              this._fileStream.emit('limit');
              this._fileStream.truncated = true;
              skipPart = true;
            } else if (!this._fileStream.push(chunk)) {
              if (this._writecb)
                this._fileStream._readcb = this._writecb;
              this._writecb = null;
            }
          } else if (field !== undefined) {
            let chunk;
            const actualLen = Math.min(
              end - start,
              fieldSizeLimit - fieldSize
            );
            if (!isDataSafe) {
              chunk = Buffer.allocUnsafe(actualLen);
              data.copy(chunk, 0, start, start + actualLen);
            } else {
              chunk = data.slice(start, start + actualLen);
            }

            fieldSize += actualLen;
            field.push(chunk);
            if (fieldSize === fieldSizeLimit) {
              skipPart = true;
              partTruncated = true;
            }
          }
        }

        break;
      }

      if (isMatch) {
        matchPostBoundary = 1;

        if (this._fileStream) {
          // End the active file stream if the previous part was a file
          this._fileStream.push(null);
          this._fileStream = null;
        } else if (field !== undefined) {
          let data;
          switch (field.length) {
            case 0:
              data = '';
              break;
            case 1:
              data = convertToUTF8(field[0], partCharset, 0);
              break;
            default:
              data = convertToUTF8(
                Buffer.concat(field, fieldSize),
                partCharset,
                0
              );
          }
          field = undefined;
          fieldSize = 0;
          this.emit(
            'field',
            partName,
            data,
            { nameTruncated: false,
              valueTruncated: partTruncated,
              encoding: partEncoding,
              mimeType: partType }
          );
        }

        if (++parts === partsLimit)
          this.emit('partsLimit');
      }
    };
    this._bparser = new StreamSearch(`\r\n--${boundary}`, ssCb);

    this._writecb = null;
    this._finalcb = null;

    // Just in case there is no preamble
    this.write(BUF_CRLF);
  }

  static detect(conType) {
    return (conType.type === 'multipart' && conType.subtype === 'form-data');
  }

  _write(chunk, enc, cb) {
    this._writecb = cb;
    this._bparser.push(chunk, 0);
    if (this._writecb)
      callAndUnsetCb(this);
  }

  _destroy(err, cb) {
    this._hparser = null;
    this._bparser = ignoreData;
    if (!err)
      err = checkEndState(this);
    const fileStream = this._fileStream;
    if (fileStream) {
      this._fileStream = null;
      fileStream.destroy(err);
    }
    cb(err);
  }

  _final(cb) {
    this._bparser.destroy();
    if (!this._complete)
      return cb(new Error('Unexpected end of form'));
    if (this._fileEndsLeft)
      this._finalcb = finalcb.bind(null, this, cb);
    else
      finalcb(this, cb);
  }
}

function finalcb(self, cb, err) {
  if (err)
    return cb(err);
  err = checkEndState(self);
  cb(err);
}

function checkEndState(self) {
  if (self._hparser)
    return new Error('Malformed part header');
  const fileStream = self._fileStream;
  if (fileStream) {
    self._fileStream = null;
    fileStream.destroy(new Error('Unexpected end of file'));
  }
  if (!self._complete)
    return new Error('Unexpected end of form');
}

const TOKEN = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const FIELD_VCHAR = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

module.exports = Multipart;
