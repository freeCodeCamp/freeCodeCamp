---
title: Algebra of Logic
---
## Algebra of Logic

_Algebra of Logic_ or _Boolean algebra_ is a branch of mathematics. It deals with variables and their truth value. The variables have two possible states – `true` or `false`.

It was first introduced by George Boole in his book The Mathematical Analysis of Logic (1847).

Boolean algebra is fundamental to the development of digital electronics. It is responsible for making possible all modern computing.

The three basic operations in Boolean Algebra are `AND`, `OR`, and `NOT`. Consider two boolean variables `x` and `y`:

- `x AND y` is true if and only if both `x` and `y` are true
- `x OR y` is true if and only if either of `x`, `y` are true. If `x`, `y` are both true, `x OR y` is still true 
- `NOT x` is true if and only if `x` is false and vice versa

`NOT` of boolean statements can be refactored to apply directly to each variable. Consider the following :
- `NOT (x AND y) = NOT x OR NOT y`
- `NOT (x OR y) = NOT x AND NOT y`

### Truth tables

A truth table has one column for each input variable (for example, x and y), and one final column showing all of the possible results of the logical operation that the table represents (for example, x AND y).

Truth table for some commonly used logical operators:<br>
x y (x and y)(x or y)(x xor y)(x=>y)<br>
t&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t<br>
t&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f<br>
f&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t<br>
f&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t<br>

where t: true, f: false
(source, <a href='https://en.wikipedia.org/wiki/Truth_table' target='_blank' rel='nofollow'>Wikipedia</a>)

### More Information:
- The Calculus of Logic: <a href='http://www.maths.tcd.ie/pub/HistMath/People/Boole/CalcLogic/CalcLogic.html' target='_blank' rel='nofollow'>George Boole</a>
- Boolean algebra article: <a href='https://en.wikipedia.org/wiki/Boolean_algebra' target='_blank' rel='nofollow'>Wikipedia</a>
- Truth table: <a href='https://en.wikipedia.org/wiki/Truth_table' target='_blank' rel='nofollow'>Truth table</a>
