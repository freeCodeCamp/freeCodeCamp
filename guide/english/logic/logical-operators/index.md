---
title: Logical Operators
---
## Logical Operators

**Conjunction a.k.a. "AND" (&&)** </br>
P&&Q returns True if both P and Q are True. If either P or Q (or both) are False, then P&&Q is False.

| P | Q |AND(P,Q)|
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |


**Disjunction a.k.a. "OR" (||)** </br>
P||Q returns True if at least one of P or Q (or both P and Q) is True. Only returns False if P and Q are both False.

| P | Q |OR(P,Q)|
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**Negation a.k.a. "NOT" (!)** </br>
Returns the opposite value. Ex. if P is true, then !P is false, and if P is false, then !P is true. This is the only logical operator that works on only one input, which makes it a unary operator.

| P | Q |NOT(P)| NOT(Q)
|---|---|---|---|
| T | T | F | F |
| T | F | F | T |
| F | T | T | F |
| F | F | T | T |

**XOR ("eXclusive or")** </br>
Is known as **exclusive or**. Similar to OR, but returns False if both P and Q are true. That is, XOR returns true if one and only one of P or Q is True.

| P | Q |XOR(P,Q)|
|---|---|---|
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

**Implication (P -> Q)** </br>
Read as "if P, then Q" or "P implies Q". 
Only returns False when P is True and Q is False. Otherwise the implication is True. </br>

Note: Implications are often used for direct mathematical proofs. P represents the hypothesis, while Q is the conclusion.

The only time the conditional is false is when a true value leads to a false value. 

| P | Q |IF(P,Q)|
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |


**Logical Equivalence (iff: if and only if)** </br>
"P if and only if Q" is the same as "P implies Q AND Q implies P". In other words, the truth tables for P and Q are identical for all truth values. 
This is known as the biconditional. It is the equivalent of P -> Q **AND** Q->P. It means that both conditionals must be satisfied in order for the biconditional to be true.

You can easily see that the output of the IFF operator in the truth table is the same as the ANDing of columns 3 and 4.

| P | Q |IF(P,Q)| IF(Q,P)| IFF(P,Q)|
|---|---|---|---|---|
| T | T | T | T | T |
| T | F | F | T | F |
| F | T | T | F | F |
| F | F | T | T | T |


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

 +* [Logical Operators in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) <br/>
 +* [Logical Operators in PHP](http://php.net/manual/en/language.operators.logical.php) <br/>
 +* [Logical Operators in C++](http://en.cppreference.com/w/cpp/language/operator_logical)
