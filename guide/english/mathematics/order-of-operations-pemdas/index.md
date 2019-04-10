---
title: Order of Operations PEMDAS
---
## Order of Operations PEMDAS

The order of operations used in mathematics, science, and programming languages, abbreviated as PEMDAS or BEDMAS is the order of precedence to evaluate operations in algebraic or arithmetic expression, e.g., `2*4-2`, `2-(3/4+7)/3` or `a*(b+c)`.

The order of operations is not something derived from mathematics and implicit in how the world works, but instead it is simply a convention made to ensure expressions are well defined. For example, without specifying a required order to evalute things, it would not be possible to talk about the number `2*3+4` since one person may evaluate this as `6 + 4 = 10` while someone else may evaluate this as `2*7 = 14`.

The Mnemonic PEMDAS (or BEMDAS) is the order of operations agreed upon to ensure that when talking about expressions such as `2*3+4` we are all talking about the same number. It stands for
```
P - Parentheses (or B - brackets, which includes (), [] and {})
E - Exponents
M - Multiplication
D - Divison
A - Addition
S - Subtraction
```
Roughly, this suggests that when looking at an expression you should always evaluate sub-expressions inside parenthesis first (using the same order of operations!), then evaluate exponents, then all multiplication, division, addition and subtraction. However, evaluating expressions exactly like this can lead to subtle erorrs because multiplication and division are really the same operation, while addition and subtraction are really the same operation. In particular, dividing by `a` is the same as multiplying by `1/a`, while subtracting by `b` is the same as adding `-b`, so when applying the order of operations you should apply multiplication and division at the same time (after parentheses and exponents) from left to right, and then evaluate all additions and subtractions at the same time from left to right.

Note: while multiplication is just repeated addition, this is not the *same* operation as addition, which is why we cannot do multiplication and addition together.

So the number `2*3+4` is, by the universally accepted convention, `10`. Anoether example to cover everything,
```
[(1+2^(3+4))/(5*6+7)] - 8 + 9.
```
First, we evaluate the expressions in the parentheses, starting with `(3+4) = 7`, so
```
(1+2^(3+4)) = (1 + 2^7) = (1 + 128) = 129,
(5*6+7) = (30 + 7) = 37
```
where the exponent evalutes before the addition in the first example, and the multiplication evaluates before the addition in the second. The big bracket on the left thus evaluates to
```
[129/37]
```
and after doing this division we may perform the subtraction and addition on the right. Here is where we need to be careful about evaluating addition and subtraction together from left to right, as adding 9 to 8 and *then* subtracting by 17 is not correct (we are adding -8 and then adding 9). Instead, working from left to right gives
```
129/37 + 1
```
where we have left the fraction as is because it is an infinite decimal expansion, though if you prefer, this is equal to
```
3.486486486... + 1 = 4.486486486...
```
with the 486 string repeating forever.

Similarly, the rules apply to algebraic expressions such as
```
[a - (1+b)*(1-b)]^2/(1 + c) + d = [a - (1 - b^2)]/(1 + c) + d = [a + b^2 - 1]/(1 + c) + d
```
which can be left as is, or simplified with a common denominator as
```
[a + b^2 + (1 + c)*d - 1]/(1 + c).
```

While PEMDAS does make most expressions well-defined, it does not cover all possibilities. For example, the expression
```
-2^2
```
could equal `(-2)^2 = 4` or `-(2^2) = -4`, so it is usually best to be as clear as possible when working with expressions. Another common expression not covered with PEMDAS is repeated exponentiation, such as
```
2^3^4.
```
Unfortunately, as exponentiation is [right associative](https://en.wikipedia.org/wiki/Operator_associativity) the widely accepted way to evaluate this expression is *top down* or from right to left,
```
2^3^4 = 2^(3^4) = 2^81
```
and not the usual left to right that is correct almost everywhere else. Once again, it is usually best to be as clear as possible when working with expressions to ensure confusion is not possible, e.g., if we wrote `2^(3^4)` instead it is clear what was intended.

Thus, PEMDAS represents the convention:

1. Evaluate (sub)expressions in parentheses first, using the PEMDAS convention;
2. Evluate exponents (including roots), from top to bottom (or right to left);
3. Evaluate any multiplication or division operations, from left to right;
4. Finally, evaluate any addition and subtraction operations, from left to right.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

