node-css-selector-parser [![Build Status](https://travis-ci.org/mdevils/node-css-selector-parser.svg?branch=master)](https://travis-ci.org/mdevils/node-css-selector-parser)
========================

Fast and low memory CSS selector parser.

Parses CSS selector into object-model.

Installation
------------

```
npm install css-selector-parser
```

Usage
-----

```javascript
var CssSelectorParser = require('css-selector-parser').CssSelectorParser,

    parser = new CssSelectorParser();

parser.registerSelectorPseudos('has');
parser.registerNestingOperators('>', '+', '~');
parser.registerAttrEqualityMods('^', '$', '*', '~');
parser.enableSubstitutes();

var util = require('util');

console.log(util.inspect(parser.parse('a[href^=/], .container:has(nav) > a[href]:lt($var)'), false, null));
```

Produces:

```javascript
{ type: 'selectors',
  selectors:
   [ { type: 'ruleSet',
       rule:
        { tagName: 'a',
          attrs: [ { name: 'href', operator: '^=', valueType: 'string', value: '/' } ],
          type: 'rule' } },
     { type: 'ruleSet',
       rule:
        { classNames: [ 'container' ],
          pseudos:
           [ { name: 'has',
               valueType: 'selector',
               value: { type: 'ruleSet', rule: { tagName: 'nav', type: 'rule' } } } ],
          type: 'rule',
          rule:
           { tagName: 'a',
             attrs: [ { name: 'href' } ],
             pseudos: [ { name: 'lt', valueType: 'substitute', value: 'var' } ],
             nestingOperator: '>',
             type: 'rule' } } } ] }
```

Token description
-----------------

*type* may be one of:

* *selectors* — list of selectors, token contains *selectors* array of *ruleSet* tokens (based on "," operator).
* *ruleSet* — selector, token contains *rule* field with *rule*-type object.
* *rule* — single rule.

Fields for *rule* type.

* *tagName* — tag name for the rule (e.g. "div"), may be '*'.
* *classNames* — list of CSS class names for the rule.
* *attrs* — list of attribute rules; rule may contain fields:
  * *name* — attribute name, required field.
  * *valueType* — type of comparison value ("string" or "substitute").
  * *operator* — attribute value comparison operator.
  * *value* — comparison attribute value.
* *pseudos* — list of pseudo class rules; rule may contain fields:
  * *name* — pseudo name, required field.
  * *valueType* — argument type ("string", "selector" or "substitute").
  * *value* — pseudo argument.
* *nestingOperator* — the operator used to nest this rule (e.g. in selector "tag1 > tag2", tag2 will have nestingOperator=">")
* *rule* — nested rule.
