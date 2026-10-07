"use strict";

const {
  createWriteStream
} = require('fs');

const {
  Readable
} = require('stream');

class StatsSerializeStream extends Readable {
  constructor(stats) {
    super();
    this._indentLevel = 0;
    this._stringifier = this._stringify(stats);
  }

  get _indent() {
    return '  '.repeat(this._indentLevel);
  }

  _read() {
    let readMore = true;

    while (readMore) {
      const {
        value,
        done
      } = this._stringifier.next();

      if (done) {
        this.push(null);
        readMore = false;
      } else {
        readMore = this.push(value);
      }
    }
  }

  *_stringify(obj) {
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      yield JSON.stringify(obj);
    } else if (Array.isArray(obj)) {
      yield '[';
      this._indentLevel++;
      let isFirst = true;

      for (let item of obj) {
        if (item === undefined) {
          item = null;
        }

        yield `${isFirst ? '' : ','}\n${this._indent}`;
        yield* this._stringify(item);
        isFirst = false;
      }

      this._indentLevel--;
      yield obj.length ? `\n${this._indent}]` : ']';
    } else {
      yield '{';
      this._indentLevel++;
      let isFirst = true;
      const entries = Object.entries(obj);

      for (const [itemKey, itemValue] of entries) {
        if (itemValue === undefined) {
          continue;
        }

        yield `${isFirst ? '' : ','}\n${this._indent}${JSON.stringify(itemKey)}: `;
        yield* this._stringify(itemValue);
        isFirst = false;
      }

      this._indentLevel--;
      yield entries.length ? `\n${this._indent}}` : '}';
    }
  }

}

exports.StatsSerializeStream = StatsSerializeStream;
exports.writeStats = writeStats;

async function writeStats(stats, filepath) {
  return new Promise((resolve, reject) => {
    new StatsSerializeStream(stats).on('end', resolve).on('error', reject).pipe(createWriteStream(filepath));
  });
}