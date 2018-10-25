---
title: Logical Operators
localeTitle: 逻辑运算符
---
## 逻辑运算符

**AND（&&）**  
如果A和B都为True，则&& B返回True。如果A或B（或两者）都为False，则A && B为False。

| A | B |和（A，B）| | --- | --- | --- | | F | t | f | | F | f | f | | T | t | t | | T | f | t |

**或（||）**  
如果A或B（或A和B都是），则A || B返回True。如果A和B都为False，则仅返回False。

| A | B | OR（A，B）| | --- | --- | --- | | F | t | t | | F | f | f | | T | t | t | | T | f | t |

**不（！）**  
返回相反的值。防爆。如果A为真，那么！A为假，如果A为假，那么！A为真。这是唯一只对一个输入起作用的逻辑运算符，这使它成为一元运算符。

| A | B | NOT（A）| NOT（B） | --- | --- | --- | --- | | F | t | t | f | | F | f | t | t | | T | t | f | f | | T | f | f | t |

**异或（“eXclusive或”）**  
被称为**独家或** 。与OR类似，但如果A和B都为真，则返回False。也就是说，如果A或B中只有一个为True，则XOR返回true。

| A | B | XOR（A，B）| | --- | --- | --- | | F | t | t | | F | f | f | | T | t | f | | T | f | t |

**含义（A - > B）**  
读为“如果A，则B”或“A暗示B”。 仅当A为True且B为False时才返回False。否则暗示是真的。  
![](http://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables13.png)

注意：含义通常用于直接数学证明。 A代表假设，而B代表结论。

条件为假的唯一时间是真值导致假值。

| A | B | IF（A，B）| | --- | --- | --- | | F | t | t | | F | f | t | | T | t | t | | T | f | f |

**逻辑等价（iff：if和only if）**  
“P当且仅当Q”与“P暗示Q和Q暗示P”相同。换句话说，P和Q的真值表对于所有真值都是相同的。 这被称为双条件。它相当于A - > B **AND** B-> A.这意味着必须满足两个条件才能使双条件成立。

您可以很容易地看到真值表中IFF运算符的输出与第3列和第4列的AND运算相同。

| A | B | IF（A，B）| IF（B，A）| IFF（A，B）| | --- | --- | --- | --- | --- | | F | t | t | f | f | | F | f | t | t | t | | T | t | t | t | t | | T | f | f | t | f |

#### 更多信息：

\+ \* [Javascript中的逻辑运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) + \* [PHP中的逻辑运算符](http://php.net/manual/en/language.operators.logical.php) + \* [C ++中的逻辑运算符](http://en.cppreference.com/w/cpp/language/operator_logical)