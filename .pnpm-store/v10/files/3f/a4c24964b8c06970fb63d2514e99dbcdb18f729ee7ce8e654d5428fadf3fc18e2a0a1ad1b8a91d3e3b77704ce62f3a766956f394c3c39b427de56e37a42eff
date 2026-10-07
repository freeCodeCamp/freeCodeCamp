import { Transform } from './index.js';
import { BlockMarkers, Block, Line, Markers } from '../primitives.js';
import { rewireSource } from '../util.js';

interface Width {
  start: number;
  tag: number;
  type: number;
  name: number;
}

const zeroWidth = {
  start: 0,
  tag: 0,
  type: 0,
  name: 0,
};

const getWidth =
  (markers = Markers) =>
  (w: Width, { tokens: t }: Line) => ({
    start: t.delimiter === markers.start ? t.start.length : w.start,
    tag: Math.max(w.tag, t.tag.length),
    type: Math.max(w.type, t.type.length),
    name: Math.max(w.name, t.name.length),
  });

const space = (len: number) => ''.padStart(len, ' ');

export default function align(markers = Markers): Transform {
  let intoTags = false;
  let w: Width;

  function update(line: Line): Line {
    const tokens = { ...line.tokens };
    if (tokens.tag !== '') intoTags = true;

    const isEmpty =
      tokens.tag === '' &&
      tokens.name === '' &&
      tokens.type === '' &&
      tokens.description === '';

    // dangling '*/'
    if (tokens.end === markers.end && isEmpty) {
      tokens.start = space(w.start + 1);
      return { ...line, tokens };
    }

    switch (tokens.delimiter) {
      case markers.start:
        tokens.start = space(w.start);
        break;
      case markers.delim:
        tokens.start = space(w.start + 1);
        break;
      default:
        tokens.delimiter = '';
        tokens.start = space(w.start + 2); // compensate delimiter
    }

    if (!intoTags) {
      tokens.postDelimiter = tokens.description === '' ? '' : ' ';
      return { ...line, tokens };
    }

    const nothingAfter = {
      delim: false,
      tag: false,
      type: false,
      name: false,
    };

    if (tokens.description === '') {
      nothingAfter.name = true;
      tokens.postName = '';

      if (tokens.name === '') {
        nothingAfter.type = true;
        tokens.postType = '';

        if (tokens.type === '') {
          nothingAfter.tag = true;
          tokens.postTag = '';

          if (tokens.tag === '') {
            nothingAfter.delim = true;
          }
        }
      }
    }

    tokens.postDelimiter = nothingAfter.delim ? '' : ' ';

    if (!nothingAfter.tag)
      tokens.postTag = space(w.tag - tokens.tag.length + 1);
    if (!nothingAfter.type)
      tokens.postType = space(w.type - tokens.type.length + 1);
    if (!nothingAfter.name)
      tokens.postName = space(w.name - tokens.name.length + 1);

    return { ...line, tokens };
  }

  return ({ source, ...fields }: Block): Block => {
    w = source.reduce(getWidth(markers), { ...zeroWidth });
    return rewireSource({ ...fields, source: source.map(update) });
  };
}
