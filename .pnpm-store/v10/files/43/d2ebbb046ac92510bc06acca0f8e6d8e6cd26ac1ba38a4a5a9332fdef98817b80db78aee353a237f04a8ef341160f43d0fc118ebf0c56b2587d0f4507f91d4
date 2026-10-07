'use strict';

var { CSSStyleDeclaration } = require('./CSSStyleDeclaration');

var allProperties = require('./allProperties');
var allExtraProperties = require('./allExtraProperties');
var implementedProperties = require('./implementedProperties');
var parsers = require('./parsers');

var dashedProperties = [...allProperties, ...allExtraProperties];
var allowedProperties = dashedProperties.map(parsers.dashedToCamelCase);
implementedProperties = Array.from(implementedProperties).map(parsers.dashedToCamelCase);
var invalidProperties = implementedProperties.filter(prop => !allowedProperties.includes(prop));

describe('CSSStyleDeclaration', () => {
  test('has only valid properties implemented', () => {
    expect(invalidProperties.length).toEqual(0);
  });

  test('has all properties', () => {
    var style = new CSSStyleDeclaration();
    allProperties.forEach(property => {
      expect(style.__lookupGetter__(property)).toBeTruthy();
      expect(style.__lookupSetter__(property)).toBeTruthy();
    });
  });

  test('has dashed properties', () => {
    var style = new CSSStyleDeclaration();
    dashedProperties.forEach(property => {
      expect(style.__lookupGetter__(property)).toBeTruthy();
      expect(style.__lookupSetter__(property)).toBeTruthy();
    });
  });

  test('has all functions', () => {
    var style = new CSSStyleDeclaration();

    expect(typeof style.item).toEqual('function');
    expect(typeof style.getPropertyValue).toEqual('function');
    expect(typeof style.setProperty).toEqual('function');
    expect(typeof style.getPropertyPriority).toEqual('function');
    expect(typeof style.removeProperty).toEqual('function');

    // TODO - deprecated according to MDN and not implemented at all, can we remove?
    expect(typeof style.getPropertyCSSValue).toEqual('function');
  });

  test('has special properties', () => {
    var style = new CSSStyleDeclaration();

    expect(style.__lookupGetter__('cssText')).toBeTruthy();
    expect(style.__lookupSetter__('cssText')).toBeTruthy();
    expect(style.__lookupGetter__('length')).toBeTruthy();
    expect(style.__lookupSetter__('length')).toBeTruthy();
    expect(style.__lookupGetter__('parentRule')).toBeTruthy();
  });

  test('from style string', () => {
    var style = new CSSStyleDeclaration();
    style.cssText = 'color: blue; background-color: red; width: 78%; height: 50vh;';
    expect(style.length).toEqual(4);
    expect(style.cssText).toEqual('color: blue; background-color: red; width: 78%; height: 50vh;');
    expect(style.getPropertyValue('color')).toEqual('blue');
    expect(style.item(0)).toEqual('color');
    expect(style[1]).toEqual('background-color');
    expect(style.backgroundColor).toEqual('red');
    style.cssText = '';
    expect(style.cssText).toEqual('');
    expect(style.length).toEqual(0);
  });

  test('from properties', () => {
    var style = new CSSStyleDeclaration();
    style.color = 'blue';
    expect(style.length).toEqual(1);
    expect(style[0]).toEqual('color');
    expect(style.cssText).toEqual('color: blue;');
    expect(style.item(0)).toEqual('color');
    expect(style.color).toEqual('blue');
    style.backgroundColor = 'red';
    expect(style.length).toEqual(2);
    expect(style[0]).toEqual('color');
    expect(style[1]).toEqual('background-color');
    expect(style.cssText).toEqual('color: blue; background-color: red;');
    expect(style.backgroundColor).toEqual('red');
    style.removeProperty('color');
    expect(style[0]).toEqual('background-color');
  });

  test('shorthand properties', () => {
    var style = new CSSStyleDeclaration();
    style.background = 'blue url(http://www.example.com/some_img.jpg)';
    expect(style.backgroundColor).toEqual('blue');
    expect(style.backgroundImage).toEqual('url(http://www.example.com/some_img.jpg)');
    expect(style.background).toEqual('blue url(http://www.example.com/some_img.jpg)');
    style.border = '0 solid black';
    expect(style.borderWidth).toEqual('0px');
    expect(style.borderStyle).toEqual('solid');
    expect(style.borderColor).toEqual('black');
    expect(style.borderTopWidth).toEqual('0px');
    expect(style.borderLeftStyle).toEqual('solid');
    expect(style.borderBottomColor).toEqual('black');
    style.font = '12em monospace';
    expect(style.fontSize).toEqual('12em');
    expect(style.fontFamily).toEqual('monospace');
  });

  test('width and height properties and null and empty strings', () => {
    var style = new CSSStyleDeclaration();
    style.height = 6;
    expect(style.height).toEqual('');
    style.width = 0;
    expect(style.width).toEqual('0px');
    style.height = '34%';
    expect(style.height).toEqual('34%');
    style.height = '100vh';
    expect(style.height).toEqual('100vh');
    style.height = '100vw';
    expect(style.height).toEqual('100vw');
    style.height = '';
    expect(1).toEqual(style.length);
    expect(style.cssText).toEqual('width: 0px;');
    style.width = null;
    expect(0).toEqual(style.length);
    expect(style.cssText).toEqual('');
  });

  test('implicit properties', () => {
    var style = new CSSStyleDeclaration();
    style.borderWidth = 0;
    expect(style.length).toEqual(1);
    expect(style.borderWidth).toEqual('0px');
    expect(style.borderTopWidth).toEqual('0px');
    expect(style.borderBottomWidth).toEqual('0px');
    expect(style.borderLeftWidth).toEqual('0px');
    expect(style.borderRightWidth).toEqual('0px');
    expect(style.cssText).toEqual('border-width: 0px;');
  });

  test('top, left, right, bottom properties', () => {
    var style = new CSSStyleDeclaration();
    style.top = 0;
    style.left = '0%';
    style.right = '5em';
    style.bottom = '12pt';
    expect(style.top).toEqual('0px');
    expect(style.left).toEqual('0%');
    expect(style.right).toEqual('5em');
    expect(style.bottom).toEqual('12pt');
    expect(style.length).toEqual(4);
    expect(style.cssText).toEqual('top: 0px; left: 0%; right: 5em; bottom: 12pt;');
  });

  test('clear and clip properties', () => {
    var style = new CSSStyleDeclaration();
    style.clear = 'none';
    expect(style.clear).toEqual('none');
    style.clear = 'lfet';
    expect(style.clear).toEqual('none');
    style.clear = 'left';
    expect(style.clear).toEqual('left');
    style.clear = 'right';
    expect(style.clear).toEqual('right');
    style.clear = 'both';
    expect(style.clear).toEqual('both');
    style.clip = 'elipse(5px, 10px)';
    expect(style.clip).toEqual('');
    expect(style.length).toEqual(1);
    style.clip = 'rect(0, 3Em, 2pt, 50%)';
    expect(style.clip).toEqual('rect(0px, 3em, 2pt, 50%)');
    expect(style.length).toEqual(2);
    expect(style.cssText).toEqual('clear: both; clip: rect(0px, 3em, 2pt, 50%);');
  });

  test('colors', () => {
    var style = new CSSStyleDeclaration();
    style.color = 'rgba(0,0,0,0)';
    expect(style.color).toEqual('rgba(0, 0, 0, 0)');
    style.color = 'rgba(5%, 10%, 20%, 0.4)';
    expect(style.color).toEqual('rgba(12, 25, 51, 0.4)');
    style.color = 'rgb(33%, 34%, 33%)';
    expect(style.color).toEqual('rgb(84, 86, 84)');
    style.color = 'rgba(300, 200, 100, 1.5)';
    expect(style.color).toEqual('rgb(255, 200, 100)');
    style.color = 'hsla(0, 1%, 2%, 0.5)';
    expect(style.color).toEqual('rgba(5, 5, 5, 0.5)');
    style.color = 'hsl(0, 1%, 2%)';
    expect(style.color).toEqual('rgb(5, 5, 5)');
    style.color = 'rebeccapurple';
    expect(style.color).toEqual('rebeccapurple');
    style.color = 'transparent';
    expect(style.color).toEqual('transparent');
    style.color = 'currentcolor';
    expect(style.color).toEqual('currentcolor');
    style.color = '#ffffffff';
    expect(style.color).toEqual('rgba(255, 255, 255, 1)');
    style.color = '#fffa';
    expect(style.color).toEqual('rgba(255, 255, 255, 0.667)');
    style.color = '#ffffff66';
    expect(style.color).toEqual('rgba(255, 255, 255, 0.4)');
  });

  test('short hand properties with embedded spaces', () => {
    var style = new CSSStyleDeclaration();
    style.background = 'rgb(0, 0, 0) url(/something/somewhere.jpg)';
    expect(style.backgroundColor).toEqual('rgb(0, 0, 0)');
    expect(style.backgroundImage).toEqual('url(/something/somewhere.jpg)');
    expect(style.cssText).toEqual('background: rgb(0, 0, 0) url(/something/somewhere.jpg);');
    style = new CSSStyleDeclaration();
    style.border = '  1px  solid   black  ';
    expect(style.border).toEqual('1px solid black');
  });

  test('setting shorthand properties to an empty string should clear all dependent properties', () => {
    var style = new CSSStyleDeclaration();
    style.borderWidth = '1px';
    expect(style.cssText).toEqual('border-width: 1px;');
    style.border = '';
    expect(style.cssText).toEqual('');
  });

  test('setting implicit properties to an empty string should clear all dependent properties', () => {
    var style = new CSSStyleDeclaration();
    style.borderTopWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px;');
    style.borderWidth = '';
    expect(style.cssText).toEqual('');
  });

  test('setting a shorthand property, whose shorthands are implicit properties, to an empty string should clear all dependent properties', () => {
    var style = new CSSStyleDeclaration();
    style.borderTopWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px;');
    style.border = '';
    expect(style.cssText).toEqual('');
    style.borderTop = '1px solid black';
    expect(style.cssText).toEqual('border-top: 1px solid black;');
    style.border = '';
    expect(style.cssText).toEqual('');
  });

  test('setting border values to "none" should clear dependent values', () => {
    var style = new CSSStyleDeclaration();
    style.borderTopWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px;');
    style.border = 'none';
    expect(style.cssText).toEqual('');
    style.borderTopWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px;');
    style.borderTopStyle = 'none';
    expect(style.cssText).toEqual('');
    style.borderTopWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px;');
    style.borderTop = 'none';
    expect(style.cssText).toEqual('');
    style.borderTopWidth = '1px';
    style.borderLeftWidth = '1px';
    expect(style.cssText).toEqual('border-top-width: 1px; border-left-width: 1px;');
    style.borderTop = 'none';
    expect(style.cssText).toEqual('border-left-width: 1px;');
  });

  test('setting border to 0 should be okay', () => {
    var style = new CSSStyleDeclaration();
    style.border = 0;
    expect(style.cssText).toEqual('border: 0px;');
  });

  test('setting values implicit and shorthand properties via csstext and setproperty should propagate to dependent properties', () => {
    var style = new CSSStyleDeclaration();
    style.cssText = 'border: 1px solid black;';
    expect(style.cssText).toEqual('border: 1px solid black;');
    expect(style.borderTop).toEqual('1px solid black');
    style.border = '';
    expect(style.cssText).toEqual('');
    style.setProperty('border', '1px solid black');
    expect(style.cssText).toEqual('border: 1px solid black;');
  });

  test('setting opacity should work', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('opacity', 0.75);
    expect(style.cssText).toEqual('opacity: 0.75;');
    style.opacity = '0.50';
    expect(style.cssText).toEqual('opacity: 0.5;');
    style.opacity = 1;
    expect(style.cssText).toEqual('opacity: 1;');
  });

  test('width and height of auto should work', () => {
    var style = new CSSStyleDeclaration();
    style.width = 'auto';
    expect(style.cssText).toEqual('width: auto;');
    expect(style.width).toEqual('auto');
    style = new CSSStyleDeclaration();
    style.height = 'auto';
    expect(style.cssText).toEqual('height: auto;');
    expect(style.height).toEqual('auto');
  });

  test('padding and margin should set/clear shorthand properties', () => {
    var style = new CSSStyleDeclaration();
    var parts = ['Top', 'Right', 'Bottom', 'Left'];
    var testParts = function(name, v, V) {
      style[name] = v;
      for (var i = 0; i < 4; i++) {
        var part = name + parts[i];
        expect(style[part]).toEqual(V[i]);
      }

      expect(style[name]).toEqual(v);
      style[name] = '';
    };
    testParts('padding', '1px', ['1px', '1px', '1px', '1px']);
    testParts('padding', '1px 2%', ['1px', '2%', '1px', '2%']);
    testParts('padding', '1px 2px 3px', ['1px', '2px', '3px', '2px']);
    testParts('padding', '1px 2px 3px 4px', ['1px', '2px', '3px', '4px']);
    style.paddingTop = style.paddingRight = style.paddingBottom = style.paddingLeft = '1px';
    testParts('padding', '', ['', '', '', '']);
    testParts('margin', '1px', ['1px', '1px', '1px', '1px']);
    testParts('margin', '1px auto', ['1px', 'auto', '1px', 'auto']);
    testParts('margin', '1px 2% 3px', ['1px', '2%', '3px', '2%']);
    testParts('margin', '1px 2px 3px 4px', ['1px', '2px', '3px', '4px']);
    style.marginTop = style.marginRight = style.marginBottom = style.marginLeft = '1px';
    testParts('margin', '', ['', '', '', '']);
  });

  test('padding and margin shorthands should set main properties', () => {
    var style = new CSSStyleDeclaration();
    var parts = ['Top', 'Right', 'Bottom', 'Left'];
    var testParts = function(name, v, V) {
      var expected;
      for (var i = 0; i < 4; i++) {
        style[name] = v;
        style[name + parts[i]] = V;
        expected = v.split(/ /);
        expected[i] = V;
        expected = expected.join(' ');

        expect(style[name]).toEqual(expected);
      }
    };
    testParts('padding', '1px 2px 3px 4px', '10px');
    testParts('margin', '1px 2px 3px 4px', '10px');
    testParts('margin', '1px 2px 3px 4px', 'auto');
  });

  test('setting a value to 0 should return the string value', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('fill-opacity', 0);
    expect(style.fillOpacity).toEqual('0');
  });

  test('onchange callback should be called when the csstext changes', () => {
    var style = new CSSStyleDeclaration(function(cssText) {
      expect(cssText).toEqual('opacity: 0;');
    });
    style.setProperty('opacity', 0);
  });

  test('setting float should work the same as cssfloat', () => {
    var style = new CSSStyleDeclaration();
    style.float = 'left';
    expect(style.cssFloat).toEqual('left');
  });

  test('setting improper css to csstext should not throw', () => {
    var style = new CSSStyleDeclaration();
    style.cssText = 'color: ';
    expect(style.cssText).toEqual('');
    style.color = 'black';
    style.cssText = 'float: ';
    expect(style.cssText).toEqual('');
  });

  test('url parsing works with quotes', () => {
    var style = new CSSStyleDeclaration();
    style.backgroundImage = 'url(http://some/url/here1.png)';
    expect(style.backgroundImage).toEqual('url(http://some/url/here1.png)');
    style.backgroundImage = "url('http://some/url/here2.png')";
    expect(style.backgroundImage).toEqual('url(http://some/url/here2.png)');
    style.backgroundImage = 'url("http://some/url/here3.png")';
    expect(style.backgroundImage).toEqual('url(http://some/url/here3.png)');
  });

  test('setting 0 to a padding or margin works', () => {
    var style = new CSSStyleDeclaration();
    style.padding = 0;
    expect(style.cssText).toEqual('padding: 0px;');
    style.margin = '1em';
    style.marginTop = '0';
    expect(style.marginTop).toEqual('0px');
  });

  test('setting ex units to a padding or margin works', () => {
    var style = new CSSStyleDeclaration();
    style.padding = '1ex';
    expect(style.cssText).toEqual('padding: 1ex;');
    style.margin = '1em';
    style.marginTop = '0.5ex';
    expect(style.marginTop).toEqual('0.5ex');
  });

  test('setting null to background works', () => {
    var style = new CSSStyleDeclaration();
    style.background = 'red';
    expect(style.cssText).toEqual('background: red;');
    style.background = null;
    expect(style.cssText).toEqual('');
  });

  test('flex properties should keep their values', () => {
    var style = new CSSStyleDeclaration();
    style.flexDirection = 'column';
    expect(style.cssText).toEqual('flex-direction: column;');
    style.flexDirection = 'row';
    expect(style.cssText).toEqual('flex-direction: row;');
  });

  test('camelcase properties are not assigned with `.setproperty()`', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('fontSize', '12px');
    expect(style.cssText).toEqual('');
  });

  test('casing is ignored in `.setproperty()`', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('FoNt-SiZe', '12px');
    expect(style.fontSize).toEqual('12px');
    expect(style.getPropertyValue('font-size')).toEqual('12px');
  });

  test('support non string entries in border-spacing', () => {
    var style = new CSSStyleDeclaration();
    style.borderSpacing = 0;
    expect(style.cssText).toEqual('border-spacing: 0px;');
  });

  test('float should be valid property for `.setproperty()`', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('float', 'left');
    expect(style.float).toEqual('left');
    expect(style.getPropertyValue('float')).toEqual('left');
  });

  test('flex-shrink works', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('flex-shrink', 0);
    expect(style.getPropertyValue('flex-shrink')).toEqual('0');
    style.setProperty('flex-shrink', 1);
    expect(style.getPropertyValue('flex-shrink')).toEqual('1');
    expect(style.cssText).toEqual('flex-shrink: 1;');
  });

  test('flex-grow works', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('flex-grow', 2);
    expect(style.getPropertyValue('flex-grow')).toEqual('2');
    expect(style.cssText).toEqual('flex-grow: 2;');
  });

  test('flex-basis works', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('flex-basis', 0);
    expect(style.getPropertyValue('flex-basis')).toEqual('0px');
    style.setProperty('flex-basis', '250px');
    expect(style.getPropertyValue('flex-basis')).toEqual('250px');
    style.setProperty('flex-basis', '10em');
    expect(style.getPropertyValue('flex-basis')).toEqual('10em');
    style.setProperty('flex-basis', '30%');
    expect(style.getPropertyValue('flex-basis')).toEqual('30%');
    expect(style.cssText).toEqual('flex-basis: 30%;');
  });

  test('shorthand flex works', () => {
    var style = new CSSStyleDeclaration();
    style.setProperty('flex', 'none');
    expect(style.getPropertyValue('flex-grow')).toEqual('0');
    expect(style.getPropertyValue('flex-shrink')).toEqual('0');
    expect(style.getPropertyValue('flex-basis')).toEqual('auto');
    style.removeProperty('flex');
    style.removeProperty('flex-basis');
    style.setProperty('flex', 'auto');
    expect(style.getPropertyValue('flex-grow')).toEqual('');
    expect(style.getPropertyValue('flex-shrink')).toEqual('');
    expect(style.getPropertyValue('flex-basis')).toEqual('auto');
    style.removeProperty('flex');
    style.setProperty('flex', '0 1 250px');
    expect(style.getPropertyValue('flex')).toEqual('0 1 250px');
    expect(style.getPropertyValue('flex-grow')).toEqual('0');
    expect(style.getPropertyValue('flex-shrink')).toEqual('1');
    expect(style.getPropertyValue('flex-basis')).toEqual('250px');
    style.removeProperty('flex');
    style.setProperty('flex', '2');
    expect(style.getPropertyValue('flex-grow')).toEqual('2');
    expect(style.getPropertyValue('flex-shrink')).toEqual('');
    expect(style.getPropertyValue('flex-basis')).toEqual('');
    style.removeProperty('flex');
    style.setProperty('flex', '20%');
    expect(style.getPropertyValue('flex-grow')).toEqual('');
    expect(style.getPropertyValue('flex-shrink')).toEqual('');
    expect(style.getPropertyValue('flex-basis')).toEqual('20%');
    style.removeProperty('flex');
    style.setProperty('flex', '2 2');
    expect(style.getPropertyValue('flex-grow')).toEqual('2');
    expect(style.getPropertyValue('flex-shrink')).toEqual('2');
    expect(style.getPropertyValue('flex-basis')).toEqual('');
    style.removeProperty('flex');
  });

  test('font-size get a valid value', () => {
    var style = new CSSStyleDeclaration();
    const invalidValue = '1r5px';
    style.cssText = 'font-size: 15px';
    expect(1).toEqual(style.length);
    style.cssText = `font-size: ${invalidValue}`;
    expect(0).toEqual(style.length);
    expect(undefined).toEqual(style[0]);
  });

  test('getPropertyValue for custom properties in cssText', () => {
    const style = new CSSStyleDeclaration();
    style.cssText = '--foo: red';

    expect(style.getPropertyValue('--foo')).toEqual('red');
  });

  test('getPropertyValue for custom properties with setProperty', () => {
    const style = new CSSStyleDeclaration();
    style.setProperty('--bar', 'blue');

    expect(style.getPropertyValue('--bar')).toEqual('blue');
  });

  test('getPropertyValue for custom properties with object setter', () => {
    const style = new CSSStyleDeclaration();
    style['--baz'] = 'yellow';

    expect(style.getPropertyValue('--baz')).toEqual('');
  });

  test('custom properties are case-sensitive', () => {
    const style = new CSSStyleDeclaration();
    style.cssText = '--fOo: purple';

    expect(style.getPropertyValue('--foo')).toEqual('');
    expect(style.getPropertyValue('--fOo')).toEqual('purple');
  });

  test('supports calc', () => {
    const style = new CSSStyleDeclaration();
    style.setProperty('width', 'calc(100% - 100px)');
    expect(style.getPropertyValue('width')).toEqual('calc(100% - 100px)');
  });
});
