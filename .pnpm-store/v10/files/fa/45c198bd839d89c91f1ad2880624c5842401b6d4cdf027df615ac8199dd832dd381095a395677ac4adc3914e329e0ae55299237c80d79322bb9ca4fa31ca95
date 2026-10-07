// @flow

import {Transformer} from '@parcel/plugin';
import json5 from 'json5';

export default (new Transformer({
  async transform({asset}) {
    asset.type = 'js';
    // Use JSON.parse("...") for faster script parsing, see
    // https://v8.dev/blog/cost-of-javascript-2019#json.
    // Apply `JSON.stringify` twice to make it a valid string literal.
    asset.setCode(
      `module.exports = JSON.parse(${JSON.stringify(
        JSON.stringify(json5.parse(await asset.getCode())),
      )});`,
    );
    return [asset];
  },
}): Transformer);
