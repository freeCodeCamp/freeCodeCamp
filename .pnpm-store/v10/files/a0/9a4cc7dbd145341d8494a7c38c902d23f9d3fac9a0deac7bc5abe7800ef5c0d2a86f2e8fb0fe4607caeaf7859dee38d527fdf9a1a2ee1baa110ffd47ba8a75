/* eslint-env mocha */
/* eslint no-template-curly-in-string: 0 */
import assert from 'assert';
import {
  extractProp,
  changePlugins,
  describeIfNotBabylon,
  setParserName,
} from '../helper';
import getPropValue from '../../src/getPropValue';

describe('getPropValue', () => {
  beforeEach(() => {
    setParserName('flow');
  });

  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof getPropValue;

    assert.equal(actual, expected);
  });

  it('should return undefined when not provided with a JSXAttribute', () => {
    const expected = undefined;
    const actual = getPropValue(1);

    assert.equal(actual, expected);
  });

  it('should throw not error when trying to get value from unknown node type', () => {
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
      value = getPropValue(prop);
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
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Literal', () => {
    it('should return correct string if value is a string', () => {
      const prop = extractProp('<div foo="bar" />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return correct string if value is a string expression', () => {
      const prop = extractProp('<div foo={"bar"} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return correct integer if value is a integer expression', () => {
      const prop = extractProp('<div foo={1} />');

      const expected = 1;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "true" to boolean type', () => {
      const prop = extractProp('<div foo="true" />');

      const expected = true;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should convert "false" to boolean type', () => {
      const prop = extractProp('<div foo="false" />');

      const expected = false;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('JSXElement', () => {
    it('should return correct representation of JSX element as a string', () => {
      const prop = extractProp('<div foo={<bar />} />');

      const expected = '<bar />';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Identifier', () => {
    it('should return string representation of variable identifier', () => {
      const prop = extractProp('<div foo={bar} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when identifier is literally `undefined`', () => {
      const prop = extractProp('<div foo={undefined} />');

      const expected = undefined;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return String object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={String} />');

      const expected = String;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Array object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Array} />');

      const expected = Array;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Date object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Date} />');

      const expected = Date;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Infinity object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Infinity} />');

      const expected = Infinity;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Math object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Math} />');

      const expected = Math;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Number object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Number} />');

      const expected = Number;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return Object object when using a reserved JavaScript object', () => {
      const prop = extractProp('<div foo={Object} />');

      const expected = Object;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string "undefined" for expressions that evaluate to undefined', () => {
      const prop = extractProp('<div foo={`bar ${undefined}`} />');

      const expected = 'bar undefined';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return template literal with expression type wrapped in curly braces', () => {
      const prop = extractProp('<div foo={`bar ${baz()}`} />');

      const expected = 'bar {CallExpression}';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should ignore non-expressions in the template literal', () => {
      const prop = extractProp('<div foo={`bar ${<baz />}`} />');

      const expected = 'bar ';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Tagged Template literal', () => {
    it('should return template literal with vars wrapped in curly braces', () => {
      const prop = extractProp('<div foo={noop`bar ${baz}`} />');

      const expected = 'bar {baz}';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string "undefined" for expressions that evaluate to undefined', () => {
      const prop = extractProp('<div foo={noop`bar ${undefined}`} />');

      const expected = 'bar undefined';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return template literal with expression type wrapped in curly braces', () => {
      const prop = extractProp('<div foo={noop`bar ${baz()}`} />');

      const expected = 'bar {CallExpression}';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should ignore non-expressions in the template literal', () => {
      const prop = extractProp('<div foo={noop`bar ${<baz />}`} />');

      const expected = 'bar ';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Arrow function expression', () => {
    it('should return a function', () => {
      const prop = extractProp('<div foo={ () => { return "bar"; }} />');

      const expected = 'function';
      const actual = getPropValue(prop);

      assert.equal(expected, typeof actual);

      // For code coverage ¯\_(ツ)_/¯
      actual();
    });
    it('should handle ArrowFunctionExpression as conditional consequent', () => {
      const prop = extractProp('<div foo={ (true) ? () => null : () => ({})} />');

      const expected = 'function';
      const actual = getPropValue(prop);

      assert.equal(expected, typeof actual);

      // For code coverage ¯\_(ツ)_/¯
      actual();
    });
  });

  describe('Function expression', () => {
    it('should return a function', () => {
      const prop = extractProp('<div foo={ function() { return "bar"; } } />');

      const expected = 'function';
      const actual = getPropValue(prop);

      assert.equal(expected, typeof actual);

      // For code coverage ¯\_(ツ)_/¯
      actual();
    });
  });

  describe('Logical expression', () => {
    it('should correctly infer result of && logical expression based on derived values', () => {
      const prop = extractProp('<div foo={bar && baz} />');

      const expected = 'baz';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when evaluating `undefined && undefined` ', () => {
      const prop = extractProp('<div foo={undefined && undefined} />');

      const expected = undefined;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly infer result of || logical expression based on derived values', () => {
      const prop = extractProp('<div foo={bar || baz} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly infer result of || logical expression based on derived values', () => {
      const prop = extractProp('<div foo={undefined || baz} />');

      const expected = 'baz';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when evaluating `undefined || undefined` ', () => {
      const prop = extractProp('<div foo={undefined || undefined} />');

      const expected = undefined;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Member expression', () => {
    it('should return string representation of form `object.property`', () => {
      const prop = extractProp('<div foo={bar.baz} />');

      const expected = 'bar.baz';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate to a correct representation of member expression with a nullable member', () => {
      const prop = extractProp('<div foo={bar?.baz} />');

      const expected = 'bar?.baz';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Call expression', () => {
    it('should return string representation of callee', () => {
      const prop = extractProp('<div foo={bar()} />');

      const expected = 'bar()';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string representation of callee', () => {
      const prop = extractProp('<div foo={bar.call()} />');

      const expected = 'bar.call()';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Unary expression', () => {
    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-bar} />');

      // -"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with -', () => {
      const prop = extractProp('<div foo={-42} />');

      const expected = -42;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+bar} />');

      // +"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with +', () => {
      const prop = extractProp('<div foo={+42} />');

      const expected = 42;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with !', () => {
      const prop = extractProp('<div foo={!bar} />');

      const expected = false; // !"bar" === false
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with ~', () => {
      const prop = extractProp('<div foo={~bar} />');

      const expected = -1; // ~"bar" === -1
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return true when evaluating `delete foo`', () => {
      const prop = extractProp('<div foo={delete x} />');

      const expected = true;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return undefined when evaluating `void foo`', () => {
      const prop = extractProp('<div foo={void x} />');

      const expected = undefined;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    // TODO: We should fix this to check to see if we can evaluate it.
    it('should return undefined when evaluating `typeof foo`', () => {
      const prop = extractProp('<div foo={typeof x} />');

      const expected = undefined;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Update expression', () => {
    it('should correctly evaluate an expression that prefixes with ++', () => {
      const prop = extractProp('<div foo={++bar} />');

      // ++"bar" => NaN
      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that prefixes with --', () => {
      const prop = extractProp('<div foo={--bar} />');

      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that suffixes with ++', () => {
      const prop = extractProp('<div foo={bar++} />');

      // "bar"++ => NaN
      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });

    it('should correctly evaluate an expression that suffixes with --', () => {
      const prop = extractProp('<div foo={bar--} />');

      const expected = true;
      const actual = Number.isNaN(getPropValue(prop));

      assert.equal(actual, expected);
    });
  });

  describe('This expression', () => {
    it('should return string value `this`', () => {
      const prop = extractProp('<div foo={this} />');

      const expected = 'this';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Conditional expression', () => {
    it('should evaluate the conditional based on the derived values correctly', () => {
      const prop = extractProp('<div foo={bar ? baz : bam} />');

      const expected = 'baz';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the conditional based on the derived values correctly', () => {
      const prop = extractProp('<div foo={undefined ? baz : bam} />');

      const expected = 'bam';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the conditional based on the derived values correctly', () => {
      const prop = extractProp('<div foo={(1 > 2) ? baz : bam} />');

      const expected = 'bam';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Binary expression', () => {
    it('should evaluate the `==` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 == "1"} />');
      const falseProp = extractProp('<div foo={1 == bar} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `!=` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 != "2"} />');
      const falseProp = extractProp('<div foo={1 != "1"} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `===` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 === 1} />');
      const falseProp = extractProp('<div foo={1 === "1"} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `!==` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 !== "1"} />');
      const falseProp = extractProp('<div foo={1 !== 1} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `<` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 < 2} />');
      const falseProp = extractProp('<div foo={1 < 0} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `>` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 > 0} />');
      const falseProp = extractProp('<div foo={1 > 2} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `<=` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 <= 1} />');
      const falseProp = extractProp('<div foo={1 <= 0} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `>=` operator correctly', () => {
      const trueProp = extractProp('<div foo={1 >= 1} />');
      const falseProp = extractProp('<div foo={1 >= 2} />');

      const trueVal = getPropValue(trueProp);
      const falseVal = getPropValue(falseProp);

      assert.equal(true, trueVal);
      assert.equal(false, falseVal);
    });

    it('should evaluate the `<<` operator correctly', () => {
      const prop = extractProp('<div foo={1 << 2} />');

      const expected = 4;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `>>` operator correctly', () => {
      const prop = extractProp('<div foo={1 >> 2} />');

      const expected = 0;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `>>>` operator correctly', () => {
      const prop = extractProp('<div foo={2 >>> 1} />');

      const expected = 1;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `+` operator correctly', () => {
      const prop = extractProp('<div foo={1 + 1} />');

      const expected = 2;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `-` operator correctly', () => {
      const prop = extractProp('<div foo={1 - 1} />');

      const expected = 0;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `*` operator correctly', () => {
      const prop = extractProp('<div foo={10 * 10} />');

      const expected = 100;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `/` operator correctly', () => {
      const prop = extractProp('<div foo={10 / 2} />');

      const expected = 5;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `%` operator correctly', () => {
      const prop = extractProp('<div foo={10 % 3} />');

      const expected = 1;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `|` operator correctly', () => {
      const prop = extractProp('<div foo={10 | 1} />');

      const expected = 11;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `^` operator correctly', () => {
      const prop = extractProp('<div foo={10 ^ 1} />');

      const expected = 11;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `&` operator correctly', () => {
      const prop = extractProp('<div foo={10 & 1} />');

      const expected = 0;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `in` operator correctly', () => {
      const prop = extractProp('<div foo={foo in bar} />');

      const expected = false;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `instanceof` operator correctly', () => {
      const prop = extractProp('<div foo={{} instanceof Object} />');

      const expected = true;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should evaluate the `instanceof` operator when right side is not a function', () => {
      const prop = extractProp('<div foo={"bar" instanceof Baz} />');

      const expected = false;
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('Object expression', () => {
    it('should evaluate to a correct representation of the object in props', () => {
      const prop = extractProp('<div foo={ { bar: "baz" } } />');

      const expected = { bar: 'baz' };
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });

    it('should evaluate to a correct representation of the object, ignore spread properties', () => {
      const prop = extractProp('<div foo={{bar: "baz", ...{baz: "bar", foo: {...{bar: "meh"}}}}} />');

      const expected = { bar: 'baz', baz: 'bar', foo: { bar: 'meh' } };
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });

    it('should evaluate to a correct representation of the object, ignore spread properties', () => {
      const prop = extractProp('<div foo={{ pathname: manageRoute, state: {...data}}} />');

      const expected = { pathname: 'manageRoute', state: {} };
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describe('New expression', () => {
    it('should return a new empty object', () => {
      const prop = extractProp('<div foo={new Bar()} />');

      const expected = {};
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describe('Sequence array expression', () => {
    it('should evaluate to correct representation of the the array in props', () => {
      const prop = extractProp('<div foo={[{"type":"Literal","start":821,"end":827}]} />');

      const expected = [{
        type: 'Literal',
        start: 821,
        end: 827,
      }];
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describe('Array expression', () => {
    it('should evaluate to correct representation of the the array in props', () => {
      const prop = extractProp('<div foo={["bar", 42, null]} />');

      const expected = ['bar', 42, null];
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });

    it('should evaluate to a correct representation of an array with spread elements', () => {
      const prop = extractProp('<div foo={[...this.props.params, bar]} />');

      const expected = [undefined, 'bar'];
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  it('should return an empty array provided an empty array in props', () => {
    const prop = extractProp('<div foo={[]} />');

    const expected = [];
    const actual = getPropValue(prop);

    assert.deepEqual(actual, expected);
  });

  describe('Bind expression', () => {
    it('should return string representation of bind function call when object is null', () => {
      const prop = extractProp('<div foo={::this.handleClick} />');

      const expected = null;
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });

    it('should return string representation of bind function call when object is not null', () => {
      const prop = extractProp('<div foo={foo::bar} />');

      const expected = 'foo';
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });

    it('should return string representation of bind function call when binding to object properties', () => {
      const prop = extractProp('<div foo={a.b::c} />');
      const otherProp = extractProp('<div foo={::a.b.c} />');

      const expected = 'a.b';
      const actual = getPropValue(prop);

      const otherExpected = null;
      const otherActual = getPropValue(otherProp);

      assert.deepEqual(actual, expected);
      assert.deepEqual(otherActual, otherExpected);
    });
  });

  describe('Type Cast Expression', () => {
    it('should return the expression from a type cast', () => {
      const prop = extractProp('<div foo={(this.handleClick: (event: MouseEvent) => void))} />');

      const expected = 'this.handleClick';
      const actual = getPropValue(prop);

      assert.deepEqual(actual, expected);
    });
  });

  describeIfNotBabylon('Typescript', () => {
    beforeEach(() => {
      changePlugins((pls) => [...pls, 'typescript']);
    });

    it('should return string representation of variable identifier wrapped in a Typescript non-null assertion', () => {
      const prop = extractProp('<div foo={bar!} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string representation of variable identifier wrapped in a deep Typescript non-null assertion', () => {
      const prop = extractProp('<div foo={(bar!)!} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });

    it('should return string representation of variable identifier wrapped in a Typescript type coercion', () => {
      changePlugins((pls) => [...pls, 'typescript']);
      const prop = extractProp('<div foo={bar as any} />');

      const expected = 'bar';
      const actual = getPropValue(prop);

      assert.equal(actual, expected);
    });
  });

  describe('JSX empty expression', () => {
    it('should work with an empty expression', () => {
      const prop = extractProp('<div>\n{/* Hello there */}\n</div>', 'children');
      const expected = undefined;
      const actual = getPropValue(prop);
      assert.equal(actual, expected);
    });
  });
});
