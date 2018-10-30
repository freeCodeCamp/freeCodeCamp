/* eslint-env mocha */
/* eslint no-template-curly-in-string: 0 */
import assert from 'assert';
import { extractProp } from '../helper';
import { getLiteralPropValue } from '../../src/getPropValue';

describe('getLiteralPropValue', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof getLiteralPropValue;

    assert.equal(expected, actual);
  });

  it('should return undefined when not provided with a JSXAttribute', () => {
    const expected = undefined;
    const actual = getLiteralPropValue(1);

    assert.equal(expected, actual);
  });

  it('should throw error when trying to get value from unknown node type', () => {
    const prop = {
      type: 'JSXAttribute',
      value: {
        type: 'JSXExpressionContainer',
      },
    };

    assert.throws(() => {
      getLiteralPropValue(prop);
    }, Error);
  });

  describe('Null', () => {
    it('should return true when no value is given', () => {
      const prop = extractProp('<div foo />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Literal', () => {
    it('should return correct string if value is a string', () => {
      const prop = extractProp('<div foo="bar" />');

      const expected = 'bar';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return correct string if value is a string expression', () => {
      const prop = extractProp('<div foo={"bar"} />');

      const expected = 'bar';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return correct integer if value is a integer expression', () => {
      const prop = extractProp('<div foo={1} />');

      const expected = 1;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should convert "true" to boolean type', () => {
      const prop = extractProp('<div foo="true" />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should convert "TrUE" to boolean type', () => {
      const prop = extractProp('<div foo="TrUE" />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should convert "false" to boolean type', () => {
      const prop = extractProp('<div foo="false" />');

      const expected = false;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should convert "FaLsE" to boolean type', () => {
      const prop = extractProp('<div foo="FaLsE" />');

      const expected = false;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return String null when value is null', () => {
      const prop = extractProp('<div foo={null} />');

      const expected = 'null';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('JSXElement', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo=<bar /> />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Identifier', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return undefined when identifier is literally `undefined`', () => {
      const prop = extractProp('<div foo={undefined} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should drop variables in template literals that are literally undefined', () => {
      const prop = extractProp('<div foo={`bar ${undefined}`} />');

      const expected = 'bar ';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Tagged Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={noop`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should drop variables in template literals that are literally undefined', () => {
      const prop = extractProp('<div foo={noop`bar ${undefined}`} />');

      const expected = 'bar ';
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Arrow function expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ () => { return "bar"; }} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Function expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ function() { return "bar"; } } />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Logical expression', () => {
    it('should return null for && operator', () => {
      const prop = extractProp('<div foo={bar && baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return null for || operator', () => {
      const prop = extractProp('<div foo={bar || baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Member expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar.baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Call expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar()} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Unary expression', () => {
    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-bar} />');

      // -"bar" => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-42} />');

      const expected = -42;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+bar} />');

      // +"bar" => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+42} />');

      const expected = 42;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with !', () => {
      const prop = extractProp('<div foo={!bar} />');

      const expected = false; // !"bar" === false
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with ~', () => {
      const prop = extractProp('<div foo={~bar} />');

      const expected = -1; // ~"bar" === -1
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return true when evaluating `delete foo`', () => {
      const prop = extractProp('<div foo={delete x} />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    it('should return undefined when evaluating `void foo`', () => {
      const prop = extractProp('<div foo={void x} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });

    // TODO: We should fix this to check to see if we can evaluate it.
    it('should return undefined when evaluating `typeof foo`', () => {
      const prop = extractProp('<div foo={typeof x} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Update expression', () => {
    it('should correctly evaluate an expression that prefixes with ++', () => {
      const prop = extractProp('<div foo={++bar} />');

      // ++"bar" => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that prefixes with --', () => {
      const prop = extractProp('<div foo={--bar} />');

      // --"bar" => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that suffixes with ++', () => {
      const prop = extractProp('<div foo={bar++} />');

      // "bar"++ => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });

    it('should correctly evaluate an expression that suffixes with --', () => {
      const prop = extractProp('<div foo={bar--} />');

      // "bar"-- => NaN
      const expected = true;
      const actual = isNaN(getLiteralPropValue(prop));

      assert.equal(expected, actual);
    });
  });

  describe('This expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={this} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Conditional expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar ? baz : bam} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Binary expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={1 == "1"} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(expected, actual);
    });
  });

  describe('Object expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ { bar: "baz" } } />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(expected, actual);
    });
  });

  describe('New expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={new Bar()} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(expected, actual);
    });
  });

  describe('Array expression', () => {
    it('should evaluate to correct representation of the the array in props', () => {
      const prop = extractProp('<div foo={["bar", 42, null]} />');

      const expected = ['bar', 42];
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(expected, actual);
    });
  });

  it('should return an empty array provided an empty array in props', () => {
    const prop = extractProp('<div foo={[]} />');

    const expected = [];
    const actual = getLiteralPropValue(prop);

    assert.deepEqual(expected, actual);
  });
});
