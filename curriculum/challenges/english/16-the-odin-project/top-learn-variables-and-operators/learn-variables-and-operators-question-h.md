---
id: 65e1aedc500d930ce8ed90ac
title: Learn Variables and Operators Question H
challengeType: 15
dashedName: learn-variables-and-operators-question-h
---
# --description--

If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

From school, you know that the multiplication in the expression `1 + 2 * 2` should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if you’re not satisfied with the default order, you can use them to change it. For example, write `(1 + 2) * 2`.

There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

| Precedence | Name             | Sign |
|------------|------------------|------|
| ...        | ...              | ...  |
| 14         | unary plus       | +    |
| 14         | unary negation   | -    |
| 13         | exponentiation   | **   |
| 12         | multiplication   | *    |
| 12         | division         | /    |
| 11         | addition         | +    |
| 11         | subtraction      | -    |
| ...        | ...              | ...  |
| 2          | assignment       | =    |
| ...        | ...              | ...  |



# --question--

## --text--

When dealing with multiple operators in a JavaScript expression, which statement is true regarding the order of execution?

## --answers--

Operators are executed from right to left, regardless of their precedence.

---

Operators with higher precedence are executed first, and parentheses can override the predefined precedence.

---

The operator precedence is determined by the operator's speed of execution.

---

Multiplication always takes precedence over addition, and unary operators are executed after binary ones.


## --video-solution--

2
