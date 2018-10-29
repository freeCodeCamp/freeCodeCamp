---
title: Equality Vs Identity Operator
localeTitle: 平等与身份运营商
---
在JavaScript中，有2个运算符可用于比较两个值： _\==_和_\===_ 。它们似乎完全相同，但它们的工作方式不同，在某些情况下它们会产生不同的结果。

## 权益运营商

所有必要的类型转换后，等式运算符（==）比较两个值。我们来看几个例子：
```
0 == ''             // -> true 
 false == 'false'    // -> false 
```

在第一个示例中，0和''（空字符串）都经历自动转换。它们都被转换为虚假给予：
```
false == false 
```

这显然是_真的_ 。在第二个示例_'false'中_ ，非空String被计算为true，使整个表达式为false。

## 身份运营商

相比之下，当且仅当被比较的两个值具有相同类型且具有相同值时，身份运算符（===）才会返回true。如果我们尝试比较两种不同类型的值，它将始终返回_false_ 。
```
false === 0            // -> false 
 0 === ''              // -> false 
 5 === 5                  // -> true 
```

确切地说，===检查两个变量是否引用相同的对象，或者在值类型（如_int_ ， _double_ ， _String_ ， _bool_等）的情况下，如果它们都具有相同的值。
```
var array1 = [ 5, 6, 7 ]; 
 var array2 = [ 5, 6, 7 ]; 
 var array3 = array2; 
 
 array1 === array2      // -> false 
 array1 == array2      // -> false 
 
 array2 === array3      // -> true 
 array2 == array3      // -> true 
```

_array1_和_array2_都具有相同的类型，它们是相同的但是比较_array1 === array2_返回false，因为它们引用不同的对象。 _array2 === array3_返回true，因为两个变量都引用同一个对象。

## 我应该使用哪个操作员？

理解_\==_和_\===_之间的区别但是应该使用哪个运算符很重要？

使用_\==_运算符时，JavaScript将执行比较两个值所需的所有转换。它似乎非常方便，但这种转换的效果可能会令人困惑，并且很难跟踪错误。

“ _JavaScript：The Good Parts_ ”一书的作者Douglas Crockford建议_\===_应该在任何地方使用，而不是使用_\==_运算符来避免潜在的错误。在大多数情况下，您应该遵循此建议，除非您特别想要利用自动类型转换。