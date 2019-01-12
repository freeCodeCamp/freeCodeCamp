---
title: Permutation Formula
---
## Permutation Formula

In probability, a permutation is an ordered set of elements created from a larger set of possible elements. In order to know the number of all possible permutations of a specific size that can be made from any given set of elements, we use the permutation formula which is as follows:

![alt text](https://github.com/TheRealSpartacus/sources/blob/master/PermForm/PermForm%20Formula.PNG "Permutation Formula")

where *n* is the number of elements in the set of possible elements and *r* is the number of elements in the permutation of elements from the set of possible elements

To get the total number of possible permutations of size *r* from a set of size *n*, you first take the factorial (!) of *n*. Next you'll take the difference of *r* from *n* and then take the factorial of that difference. Then you divide the first factorial by the difference factorial to get the total number of possible permutations.

For example, if you wanted to know the total numbers of 4-digit number codes possible for a cell phone, you would first find the values for *n* and *r*.

Since the size of the code is 4 digits and the number of different numerals is 10, *n* = 10 and *r* = 4
Now we plug in *r* and *n* to the permutation formula:

![alt text](https://github.com/TheRealSpartacus/sources/blob/master/PermForm/PermForm%20Fig.%201.PNG "Fig. 1")

Next, we take the difference of *n* and *r*:

![alt text](https://github.com/TheRealSpartacus/sources/blob/master/PermForm/PermForm%20Fig.%202.PNG "Fig. 2")

Then, we take the factorial of both the numerator and denominator:

![alt text](https://github.com/TheRealSpartacus/sources/blob/master/PermForm/PermForm%20Fig.%203.PNG "Fig. 3")

Finally, we divide each result to get the total number of possible 4 digit codes for a cell phone:

![alt text](https://github.com/TheRealSpartacus/sources/blob/master/PermForm/PermForm%20Fig.%204.PNG "Fig. 4")

### Another Explanation

If I took a list of 3 color {red, blue, green}. How many ways could I arrange this?

{red, blue, green}
{red, green, blue}

{blue, red, green}
{blue, green, red}

{green, blue, red}
{green, red, blue}

In a list of 3 colors, I had 6 arrangements. 
6 = 3! (3 X 2 X 1)

In another example, I take 4 letters {m, a, l, c} and arrange them in all the possible ways.

{m,a,l,c}
{m,a,c,l}
{m,l,c,a}
{m,l,a,c}
{m,c,a,l}
{m,c,l,a}

{a,m,l,c}
{a,m,c,l}
{a,l,c,m}
{a,l,m,c}
{a,c,m,l}
{a,c,l,m}

{l,m,a,c}
{l,m,c,a}
{l,a,c,m}
{l,a,m,c}
{l,c,m,a}
{l,c,a,m}

{c,m,a,l}
{c,m,l,a}
{c,a,l,m}
{c,a,m,l}
{c,l,m,a}
{c,l,a,m}

In total, that is 24 ways. 24 = 4! (4X3X2X1)

See a pattern?

In general, when asked how many ways can you arrange a list where order matters (meaning {1,2} != {2,1}), the formula is as follows:

n!, where n is the number of elements in the list.

Now, lets says we are asked how many ways arrange 2 out of the 4 letters.

{m,a,l,c}

{m,a}
{a,m}

{m,l}
{l,m}

{m,c}
{c,m}

{a,l}
{l,a}

{a,c}
{c,a}

{l,c}
{c,l}

That is 12 different ways.

When asked how many ways to arrange k elements from a list of n elements the formula is as follows:

n!/(n-k)!

So, from the example above, 4!/(4-2)! = 24/2 = 12.

#### More Information:
- [Helpful Khan Adcamedy video](https://www.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/v/permutation-formula)

