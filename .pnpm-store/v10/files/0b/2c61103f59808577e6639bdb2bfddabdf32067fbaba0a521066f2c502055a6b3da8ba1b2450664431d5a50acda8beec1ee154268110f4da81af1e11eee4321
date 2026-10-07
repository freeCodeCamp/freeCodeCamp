/* eslint-disable no-underscore-dangle */

'use strict';

const { Stream } = require('stream');
const MultipartParser = require('../parsers/Multipart');
const errors = require('../FormidableError.js');

const { FormidableError } = errors;

// the `options` is also available through the `options` / `formidable.options`
module.exports = function plugin(formidable, options) {
  // the `this` context is always formidable, as the first argument of a plugin
  // but this allows us to customize/test each plugin

  /* istanbul ignore next */
  const self = this || formidable;

  // NOTE: we (currently) support both multipart/form-data and multipart/related
  const multipart = /multipart/i.test(self.headers['content-type']);

  if (multipart) {
    const m = self.headers['content-type'].match(
      /boundary=(?:"([^"]+)"|([^;]+))/i,
    );
    if (m) {
      const initMultipart = createInitMultipart(m[1] || m[2]);
      initMultipart.call(self, self, options); // lgtm [js/superfluous-trailing-arguments]
    } else {
      const err = new FormidableError(
        'bad content-type header, no multipart boundary',
        errors.missingMultipartBoundary,
        400,
      );
      self._error(err);
    }
  }
};

// Note that it's a good practice (but it's up to you) to use the `this.options` instead
// of the passed `options` (second) param, because when you decide
// to test the plugin you can pass custom `this` context to it (and so `this.options`)
function createInitMultipart(boundary) {
  return function initMultipart() {
    this.type = 'multipart';

    const parser = new MultipartParser(this.options);
    let headerField;
    let headerValue;
    let part;

    parser.initWithBoundary(boundary);

    // eslint-disable-next-line max-statements, consistent-return
    parser.on('data', ({ name, buffer, start, end }) => {
      if (name === 'partBegin') {
        part = new Stream();
        part.readable = true;
        part.headers = {};
        part.name = null;
        part.originalFilename = null;
        part.mimetype = null;

        part.transferEncoding = this.options.encoding;
        part.transferBuffer = '';

        headerField = '';
        headerValue = '';
      } else if (name === 'headerField') {
        headerField += buffer.toString(this.options.encoding, start, end);
      } else if (name === 'headerValue') {
        headerValue += buffer.toString(this.options.encoding, start, end);
      } else if (name === 'headerEnd') {
        headerField = headerField.toLowerCase();
        part.headers[headerField] = headerValue;

        // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
        const m = headerValue.match(
          // eslint-disable-next-line no-useless-escape
          /\bname=("([^"]*)"|([^\(\)<>@,;:\\"\/\[\]\?=\{\}\s\t/]+))/i,
        );
        if (headerField === 'content-disposition') {
          if (m) {
            part.name = m[2] || m[3] || '';
          }

          part.originalFilename = this._getFileName(headerValue);
        } else if (headerField === 'content-type') {
          part.mimetype = headerValue;
        } else if (headerField === 'content-transfer-encoding') {
          part.transferEncoding = headerValue.toLowerCase();
        }

        headerField = '';
        headerValue = '';
      } else if (name === 'headersEnd') {
        switch (part.transferEncoding) {
          case 'binary':
          case '7bit':
          case '8bit':
          case 'utf-8': {
            const dataPropagation = (ctx) => {
              if (ctx.name === 'partData') {
                part.emit('data', ctx.buffer.slice(ctx.start, ctx.end));
              }
            };
            const dataStopPropagation = (ctx) => {
              if (ctx.name === 'partEnd') {
                part.emit('end');
                parser.off('data', dataPropagation);
                parser.off('data', dataStopPropagation);
              }
            };
            parser.on('data', dataPropagation);
            parser.on('data', dataStopPropagation);
            break;
          }
          case 'base64': {
            const dataPropagation = (ctx) => {
              if (ctx.name === 'partData') {
                part.transferBuffer += ctx.buffer
                  .slice(ctx.start, ctx.end)
                  .toString('ascii');

                /*
                  four bytes (chars) in base64 converts to three bytes in binary
                  encoding. So we should always work with a number of bytes that
                  can be divided by 4, it will result in a number of buytes that
                  can be divided vy 3.
                  */
                const offset = parseInt(part.transferBuffer.length / 4, 10) * 4;
                part.emit(
                  'data',
                  Buffer.from(
                    part.transferBuffer.substring(0, offset),
                    'base64',
                  ),
                );
                part.transferBuffer = part.transferBuffer.substring(offset);
              }
            };
            const dataStopPropagation = (ctx) => {
              if (ctx.name === 'partEnd') {
                part.emit('data', Buffer.from(part.transferBuffer, 'base64'));
                part.emit('end');
                parser.off('data', dataPropagation);
                parser.off('data', dataStopPropagation);
              }
            };
            parser.on('data', dataPropagation);
            parser.on('data', dataStopPropagation);
            break;
          }
          default:
            return this._error(
              new FormidableError(
                'unknown transfer-encoding',
                errors.unknownTransferEncoding,
                501,
              ),
            );
        }

        this.onPart(part);
      } else if (name === 'end') {
        this.ended = true;
        this._maybeEnd();
      }
    });

    this._parser = parser;
  };
}
