const { padWithLeadingZeros } = require('./pad-with-leading-zeros');

describe('padWithLeadingZeros helper', () => {
  it('should return a string of 3 digits for valid values', () => {
    const items = ['1', '11', '111'];

    items.forEach(item => expect(padWithLeadingZeros(item).length).toEqual(3));
  });

  it('should prepend 0s on valid values while length is less than 3', () => {
    expect(padWithLeadingZeros('1')).toEqual('001');
    expect(padWithLeadingZeros('11')).toEqual('011');
    expect(padWithLeadingZeros('111')).toEqual('111');
  });

  it('should throw on invalid values', () => {
    const items = ['undefined', null, []];

    items.forEach(item =>
      expect(() => {
        if (item !== 'undefined') {
          padWithLeadingZeros(item);
        } else {
          padWithLeadingZeros();
        }
      }).toThrow()
    );
  });

  it('should throw on valid values that are longer that 3 characters', () => {
    expect(() => {
      padWithLeadingZeros('19850809');
    }).toThrow();
  });
});
