/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { parseBlanks } from './parse-blanks';

describe('parseBlanks', () => {
  it('handles strings without blanks', () => {
    expect(parseBlanks('<p>hello world</p>')).toEqual([
      [{ type: 'text', value: 'hello world' }]
    ]);
  });

  it('handles strings without blanks and with multiple paragraphs', () => {
    expect(parseBlanks('<p>hello world</p><p>dlrow olleh</p>')).toEqual([
      [{ type: 'text', value: 'hello world' }],
      [{ type: 'text', value: 'dlrow olleh' }]
    ]);
  });

  it('handles strings with blanks', () => {
    expect(parseBlanks('<p>hello _!</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ]
    ]);

    expect(parseBlanks('<p>hello _! Nice _ to meet you.</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '! Nice ' },
        { type: 'blank', value: 1 },
        { type: 'text', value: ' to meet you.' }
      ]
    ]);
  });

  it('handles paragraphs with a leading blank', () => {
    expect(parseBlanks('<p>_ hello</p>')).toEqual([
      [
        { type: 'blank', value: 0 },
        { type: 'text', value: ' hello' }
      ]
    ]);
  });

  it('removes trailing empty strings', () => {
    expect(parseBlanks('<p>hello _</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 }
      ]
    ]);
  });

  it('handles strings with blanks and multiple paragraphs', () => {
    expect(parseBlanks(`<p>hello _!</p><p>dlrow _</p>`)).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 }
      ]
    ]);
  });

  it('ignores newlines between paragraphs', () => {
    expect(
      parseBlanks(`<p>hello _!</p>

<p>dlrow _</p>`)
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 }
      ]
    ]);
  });

  it('ignores whitespace surrounding the input', () => {
    expect(
      parseBlanks(` <p>hello _!</p>
    `)
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ]
    ]);
  });

  it('counts blanks across multiple paragraphs', () => {
    expect(
      parseBlanks(`<p>hello _!</p><p>dlrow _ _</p><p> even _ more _</p>`)
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 },
        { type: 'text', value: ' ' },
        { type: 'blank', value: 2 }
      ],
      [
        { type: 'text', value: ' even ' },
        { type: 'blank', value: 3 },
        { type: 'text', value: ' more ' },
        { type: 'blank', value: 4 }
      ]
    ]);
  });

  it('throws if the string is not wrapped in p tags', () => {
    expect(() => parseBlanks('hello _!')).toThrow();
    expect(() => parseBlanks('<p>hello _!</p>hello _!')).toThrow();
    expect(() => parseBlanks('hello _!<p>hello</p>')).toThrow();
  });
});
