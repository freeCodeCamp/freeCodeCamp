---
title: Recursive Formulas for Arithmetic Sequences
---
## Recursive Formulas for Arithmetic Sequences
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### What is an Arithmetic Sequence?
A **sequence** is list of numbers where the same operation(s) is done to one number in order to get the next. **Arithmetic sequences**
specifically refer to sequences constructed by adding or subtracting a value-called the **common difference**- to get the next term. In 
order to efficiently talk about a sequence, we use a formula that builds the sequence when a list of indices are put in. Typically, these formulas are given one-letter names, followed by a parameter in parentheses, and the expression that builds the sequence on the right hand side.

`a(n) = n + 1`

Above is an example of a formula for an arithmetic sequence. 

### Examples
Sequence | Formula
---------|---------
1, 2, 3, 4, ...  | a(n) = n + 1
3, 8, 13, 18, ...  | b(n) = 5n - 2

### A Recursive Formula
Note: Mathematicians start counting at 1, so by convention, `n=1` is the first term. So we must define what the first term is. Then we have 
to figure out and include the common difference. Taking a look at the examples again,

Sequence | Formula | Recursive Formula
---------|---------|-------------------
1, 2, 3, 4, ...  | a(n) = n + 1 | a(n) = a(n-1) + 1, a(1) = 1
3, 8, 13, 18, ...  | b(n) = 5n - 2 | b(n) = b(n-1) + 5, b(1) = 3

### Finding the Formula (given a sequence with the first term)
    1. Figure out the common difference
        Pick a term in the sequence and subtract the term that comes before it.         
    2. Construct the formula
        The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]`

### Finding the Formula (given a sequence without the first term)
    1. Figure out the common difference
        Pick a term in the sequence and subtract the term that comes before it. 
    2. Find the first term
        i. Pick a term in the sequence, call it `k` and call its index `h`
        ii. first term = k - (h-1)*(common difference)
    3. Construct the formula
        The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information on this topic, visit
- [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)
- [Khan Academy](https://www.khanacademy.org/math/algebra/sequences/constructing-arithmetic-sequences/a/writing-recursive-formulas-for-arithmetic-sequences)
