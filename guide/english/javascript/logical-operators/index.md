---
title: Logical Operators
---

# Logical Operators

Logical operators compare Boolean values and return a Boolean response. There are two types of logical operators: Logical AND, and Logical OR. These operators are often written as && for AND, and || for OR.

#### Logical AND ( && )

The AND operator compares two expressions. If the first evaluates as ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), the statement will return the value of the second expression.
If the first evaluates as ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), the statement will return the value of the first expression.

When only involving boolean values (either `true` or `false`), it returns true if only if both expressions are true. If one or both expressions are false, the entire statement will return false.
```js
true && true        //returns the second value, true
true && false       //returns the second value, false
false && false      //returns the first value, false
123 && 'abc'        //returns the second value, 'abc'
'abc' && null       //returns the second value, null
undefined && 'abc'  //returns the first value, undefined
0 && false          //returns the first value, 0
```

#### Logical OR ( || )

The OR operator compares two expressions. If the first evaluates as "falsy", the statement will return the value of the second second expression. If the first evaluates as "truthy", the statement will return the value of the first expression.

When only involving boolean values (either `true` or `false`), it returns true if either expression is true. Both expressions can be true, but only one is needed to get true as a result.
```js
true || true       //returns the first value, true
true || false      //returns the first value, true
false || false     //returns the second value, false
123 || 'abc'       //returns the first value, 123
'abc' || null      //returns the first value, 'abc'
undefined || 'abc' //returns the second value, 'abc'
0 || false         //returns the second value, false
```
#### Short-circuit evaluation
&& and || behave as a short-circuit operators. 

In case of the logical AND, if the first operand returns false, the second operand is never evaluated and first operand is returned.

In case of the logical OR, if the first value returns true, the second value is never evaluated and the first operand is returned.

#### Logical NOT (!)

The NOT operator does not do any comparison like the AND and OR operators.Moreover it is operated only on 1 operand.

An '!' (exclamation) mark is used for representing the NOT operator.

###### Use of NOT operators

1. conversion of the expression into boolean.
2. returns the inverse of the boolean value obtained in last step.

```js
var spam = 'rinki'; //spam may be equal to any non empty string
var booSpam = !spam;
/*returns false
  since when a non-empty string when converted to boolean returns true
  inverse of which is evaluated to false.
*/

var spam2 = ''; //spam2 here is equal to empty string
var booSpam2 = !spam2;
/*returns true
  since when a empty string when converted to boolean returns false
  inverse of which is evaluated to true.
*/
```
#### Tips:
Both logical operators will return the value of the last evaluated expression. For example:

```js
"cat" && "dog" //returns "dog"
"cat" && false //returns false
0 && "cat"  //returns 0 (which is a falsy value)

"cat" || "dog" //returns "cat"
"cat" || false //returns "cat"
0 || "cat" //returns "cat"
```

Note that where `&&` returns the first value, `||` returns the second value and vice versa.

#### More information:

* [Javascript Truth Table](https://guide.freecodecamp.org/javascript/truth-table)

* [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
