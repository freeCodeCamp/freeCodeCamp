---
title: Logical Operators
localeTitle: 逻辑运算符
---
# 逻辑运算符

逻辑运算符比较布尔值并返回布尔响应。有两种类型的逻辑运算符 - 逻辑AND和逻辑OR。这些运算符通常写为&&表示AND和||对于OR。

#### 逻辑AND（&&）

AND运算符比较两个表达式。如果第一个评估为[“truthy”](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) ，则该语句将返回第二个表达式的值。 如果第一个计算为[“falsy”](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) ，则该语句将返回第一个表达式的值。

当只涉及布尔值（ `true`或`false` ）时，如果两个表达式都为真，则返回true。如果一个或两个表达式为false，则整个语句将返回false。

```js
true && true //returns  the second value, true 
 true && false //returns the second value, false 
 false && false //returns the first value, false 
 123 && 'abc' // returns the second value, 'abc' 
 'abc' && null //returns the second value, null 
 undefined && 'abc' //returns the first value, undefined 
 0 && false //returns the first value, 0 
```

#### 逻辑OR（||）

OR运算符比较两个表达式。如果第一个计算为“falsy”，则该语句将返回第二个表达式的值。如果第一个评估为“truthy”，则该语句将返回第一个表达式的值。

当仅涉及布尔值（ `true`或`false` ）时，如果任一表达式为true，则返回true。两个表达式都可以是真的，但结果只需要一个表达式。

```js
true || true //returns the first value, true 
 true || false //returns the first value, true 
 false || false //returns the second value, false 
 123 || 'abc' // returns the first value, 123 
 'abc' || null //returns the first value, 'abc' 
 undefined || 'abc' //returns the second value, 'abc' 
 0 || false //returns the second value, false 
```

#### 短路评估

&&和||表现为短路运营商。

在逻辑AND的情况下，如果第一个操作数返回false，则永远不会计算第二个操作数，并返回第一个操作数。

如果是逻辑OR，如果第一个值返回true，则永远不会计算第二个值，并返回第一个操作数。

#### 逻辑NOT（！）

NOT运算符不会像AND和OR运算符那样进行任何比较。此外，它仅在1个操作数上运行。

一个'！' （感叹号）标记用于表示NOT运算符。

###### 使用NOT运算符

1.  将表达式转换为布尔值。
2.  返回上一步中获得的布尔值的倒数。

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

#### 提示：

两个逻辑运算符都将返回上次计算的表达式的值。例如：

```js
"cat" && "dog" //returns "dog" 
 "cat" && false //returns false 
 0 && "cat"  //returns 0 (which is a falsy value) 
 
 "cat" || "dog" //returns "cat" 
 "cat" || false //returns "cat" 
 0 || "cat" //returns "cat" 
```

请注意， `&&`返回第一个值， `||`返回第二个值，反之亦然。

#### 更多信息：

*   [Javascript真值表](https://guide.freecodecamp.org/javascript/truth-table)
    
*   [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)