/* eslint-env mocha */
/* eslint no-template-curly-in-string: 0 */
import assert from 'assert';
import {
  extractProp,
  describeIfNotBabylon,
  changePlugins,
  setParserName,
  setIsESM,
} from '../helper';
import { getLiteralPropValue } from '../../src/getPropValue';

describe('getLiteralPropValue', () => {
  beforeEach(() => {
    setParserName('babel');
  });
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof getLiteralPropValue;

    assert.equal(actual, expected);
  });

  it('should return undefined when not provided with a JSXAttribute', () => {
    const expected = undefined;
    const actual = getLiteralPropValue(1);

    assert.equal(actual, expected);
  });

  it('should not throw error when trying to get value from unknown node type', () => {
    const prop = {
      type: 'JSXAttribute',
      value: {
        type: 'JSXExpressionContainer',
      },
    };
    let counter = 0;
    // eslint-disable-next-line no-console
    const errorOrig = console.error;
    // eslint-disable-next-line no-console
    console.error = () => {
      counter += 1;
    };
    let value;
    assert.doesNotThrow(() => {
      value = getLiteralPropValue(prop);
    }, Error);

    assert.equal(null, value);
    assert.equal(counter, 1);
    // eslint-disable-next-line no-console
    console.error = errorOrig;
  });

  describe('Null', () => {
    it('should return true when no value is given', () => {
      const prop = extractProp('<div foo />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Literal', () => {
    it('should return correct string if value is a string', () => {
      const prop = extractProp('<div foo="bar" />');

      const expected = 'bar';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return correct string if value is a string expression', () => {
      const prop = extractProp('<div foo={"bar"} />');

      const expected = 'bar';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return correct integer if value is a integer expression', () => {
      const prop = extractProp('<div foo={1} />');

      const expected = 1;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "true" to boolean type', () => {
      const prop = extractProp('<div foo="true" />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "TrUE" to boolean type', () => {
      const prop = extractProp('<div foo="TrUE" />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "false" to boolean type', () => {
      const prop = extractProp('<div foo="false" />');

      const expected = false;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "FaLsE" to boolean type', () => {
      const prop = extractProp('<div foo="FaLsE" />');

      const expected = false;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return String null when value is null', () => {
      const prop = extractProp('<div foo={null} />');

      const expected = 'null';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('JSXElement', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={<bar />} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Identifier', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when identifier is literally `undefined`', () => {
      const prop = extractProp('<div foo={undefined} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describeIfNotBabylon('Chain Expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={abc?.def} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string "undefined" for expressions that evaluate to undefined', () => {
      const prop = extractProp('<div foo={`bar ${undefined}`} />');

      const expected = 'bar undefined';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Tagged Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={noop`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string "undefined" for expressions that evaluate to undefined', () => {
      const prop = extractProp('<div foo={noop`bar ${undefined}`} />');

      const expected = 'bar undefined';
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Arrow function expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ () => { return "bar"; }} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Function expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ function() { return "bar"; } } />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Logical expression', () => {
    it('should return null for && operator', () => {
      const prop = extractProp('<div foo={bar && baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return null for || operator', () => {
      const prop = extractProp('<div foo={bar || baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Member expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar.baz} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Call expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar()} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Unary expression', () => {
    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-bar} />');

      // -"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-42} />');

      const expected = -42;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+bar} />');

      // +"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+42} />');

      const expected = 42;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with !', () => {
      const prop = extractProp('<div foo={!bar} />');

      const expected = false; // !"bar" === false
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with ~', () => {
      const prop = extractProp('<div foo={~bar} />');

      const expected = -1; // ~"bar" === -1
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return true when evaluating `delete foo`', () => {
      const prop = extractProp('<div foo={delete x} />');

      const expected = true;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when evaluating `void foo`', () => {
      const prop = extractProp('<div foo={void x} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    // TODO: We should fix this to check to see if we can evaluate it.
    it('should return undefined when evaluating `typeof foo`', () => {
      const prop = extractProp('<div foo={typeof x} />');

      const expected = undefined;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Update expression', () => {
    it('should correctly evaluate an expression that prefixes with ++', () => {
      const prop = extractProp('<div foo={++bar} />');

      // ++"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with --', () => {
      const prop = extractProp('<div foo={--bar} />');

      // --"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that suffixes with ++', () => {
      const prop = extractProp('<div foo={bar++} />');

      // "bar"++ => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that suffixes with --', () => {
      const prop = extractProp('<div foo={bar--} />');

      // "bar"-- => NaN
      const expected = true;
      const actual = Number.isNaN(getLiteralPropValue(prop));

      assert.equal(actual, expected);
    });
  });

  describe('This expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={this} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Conditional expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={bar ? baz : bam} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Binary expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={1 == "1"} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Object expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={ { bar: "baz" } } />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describe('New expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={new Bar()} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describe('Array expression', () => {
    it('should evaluate to correct representation of the the array in props', () => {
      const prop = extractProp('<div foo={["bar", 42, null]} />');

      const expected = ['bar', 42];
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  it('should return an empty array provided an empty array in props', () => {
    const prop = extractProp('<div foo={[]} />');

    const expected = [];
    const actual = getLiteralPropValue(prop);

    assert.deepEqual(actual, expected);
  });

  describe('Bind expression', () => {
    it('should return null', () => {
      const prop = extractProp('<div foo={::this.handleClick} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describeIfNotBabylon('import.meta', () => {
    beforeEach(() => {
      setIsESM();
    });

    it('should return null', () => {
      const prop = extractProp('<div foo={import.meta.env.whyIsThisNotOnProcess} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describeIfNotBabylon('Typescript', () => {
    beforeEach(() => {
      changePlugins((pls) => [...pls, 'typescript']);
    });

    it('should return string representation of variable identifier wrapped in a Typescript non-null assertion', () => {
      const prop = extractProp('<div foo={bar!} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string representation of variable identifier wrapped in a deep Typescript non-null assertion', () => {
      const prop = extractProp('<div foo={(bar!)!} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string representation of variable identifier wrapped in a Typescript type coercion', () => {
      changePlugins((pls) => [...pls, 'typescript']);
      const prop = extractProp('<div foo={bar as any} />');

      const expected = null;
      const actual = getLiteralPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should work with a this.props value', () => {
      const prop = extractProp('<a href={this.props.href!}>Download</a>', 'href');
      const expected = null;
      const actual = getLiteralPropValue(prop);
      assert.equal(actual, expected);
    });
  });
});
