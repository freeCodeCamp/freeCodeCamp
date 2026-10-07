ESQuery is a library for querying the AST output by Esprima for patterns of syntax using a CSS style selector system. Check out the demo:

[demo](https://estools.github.io/esquery/)

The following selectors are supported:
* AST node type: `ForStatement`
* [wildcard](http://dev.w3.org/csswg/selectors4/#universal-selector): `*`
* [attribute existence](http://dev.w3.org/csswg/selectors4/#attribute-selectors): `[attr]`
* [attribute value](http://dev.w3.org/csswg/selectors4/#attribute-selectors): `[attr="foo"]` or `[attr=123]`
* attribute regex: `[attr=/foo.*/]` or (with flags) `[attr=/foo.*/is]`
* attribute conditions: `[attr!="foo"]`, `[attr>2]`, `[attr<3]`, `[attr>=2]`, or `[attr<=3]`
* nested attribute: `[attr.level2="foo"]`
* field: `FunctionDeclaration > Identifier.id`
* [First](http://dev.w3.org/csswg/selectors4/#the-first-child-pseudo) or [last](http://dev.w3.org/csswg/selectors4/#the-last-child-pseudo) child: `:first-child` or `:last-child`
* [nth-child](http://dev.w3.org/csswg/selectors4/#the-nth-child-pseudo) (no ax+b support): `:nth-child(2)`
* [nth-last-child](http://dev.w3.org/csswg/selectors4/#the-nth-last-child-pseudo) (no ax+b support): `:nth-last-child(1)`
* [descendant](http://dev.w3.org/csswg/selectors4/#descendant-combinators): `ancestor descendant`
* [child](http://dev.w3.org/csswg/selectors4/#child-combinators): `parent > child`
* [following sibling](http://dev.w3.org/csswg/selectors4/#general-sibling-combinators): `node ~ sibling`
* [adjacent sibling](http://dev.w3.org/csswg/selectors4/#adjacent-sibling-combinators): `node + adjacent`
* [negation](http://dev.w3.org/csswg/selectors4/#negation-pseudo): `:not(ForStatement)`
* [has](https://drafts.csswg.org/selectors-4/#has-pseudo): `:has(ForStatement)`, `:has(> ForStatement)`
* [matches-any](http://dev.w3.org/csswg/selectors4/#matches): `:is([attr] > :first-child, :last-child)`
* [subject indicator](http://dev.w3.org/csswg/selectors4/#subject): `!IfStatement > [name="foo"]`
* class of AST node: `:statement`, `:expression`, `:declaration`, `:function`, or `:pattern`

[![Build Status](https://travis-ci.org/estools/esquery.png?branch=master)](https://travis-ci.org/estools/esquery)
