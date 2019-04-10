---
title: Logical Operators
---

# Logical Operators

## Conjunction a.k.a. "AND" (&&)
P&&Q returns True if both P and Q are True. If either P or Q (or both) are False, then P&&Q is False.

| P | Q | AND(P,Q) |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

## Disjunction a.k.a. "OR" (||)
P||Q returns True if at least one of P or Q (or both P and Q) is True. Only returns False if P and Q are both False.

| P | Q | OR(P,Q) |
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

## Negation a.k.a. "NOT" (!)
Returns the opposite value. Ex. if P is true, then !P is False, and if P is False, then !P is true. This is the only logical operator that works on only one input, which makes it a unary operator.

| P | Q | NOT(P) | NOT(Q) |
|---|---|---|---|
| T | T | F | F |
| T | F | F | T |
| F | T | T | F |
| F | F | T | T |

## XOR ("eXclusive or")
Is known as **exclusive or**. Similar to OR, but returns False if both P and Q are true. That is, XOR returns true if one and only one of P or Q is True.

Note: XOR is unique among the logical operators because, by combining several together, you can form all of the other logical operators using only XOR.

| P | Q | XOR(P,Q) |
|---|---|---|
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

## Implication (P -> Q)
Read as "if P, then Q" or "P implies Q".

Only returns False when P is True and Q is False. Otherwise the implication is True.

Note: Implications are often used for direct mathematical proofs. P represents the hypothesis, while Q is the conclusion.

The only time the conditional is False is when a True value leads to a False value. 

| P | Q | IF(P,Q) |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |


## Logical Equivalence (iff: if and only if)
"P if and only if Q" is the same as "P implies Q AND Q implies P". In other words, the truth tables for P and Q are identical for all truth values.
This is known as the biconditional. It is the equivalent of P -> Q **AND** Q -> P. It means that both conditionals must be satisfied in order for the biconditional to be true.

You can easily see that the output of the IFF operator in the truth table is the same as the ANDing of columns 3 and 4.

| P | Q | IF(P,Q) | IF(Q,P) | IFF(P,Q) |
|---|---|---|---|---|
| T | T | T | T | T |
| T | F | F | T | F |
| F | T | T | F | F |
| F | F | T | T | T |

## Condensed Tables
For binary operators, a condensed form of truth table is also used, where the row headings and the column headings specify the operands and the table cells specify the result. For example, the condensed table for AND operator (^ sign):</br>

| ^ | F | T |
|---|---|---|
| F | F | T |
| T | T | T |

## Additional Resources
- [Logical Operators in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [Logical Operators in PHP](http://php.net/manual/en/language.operators.logical.php)
- [Logical Operators in C++](http://en.cppreference.com/w/cpp/language/operator_logical)
- [Wikipedia, Truth table](https://en.wikipedia.org/wiki/Truth_table)
