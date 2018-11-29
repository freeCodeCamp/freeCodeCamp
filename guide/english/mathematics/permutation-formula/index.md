---
title: Permutation Formula
---
## Permutation Formula

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
<!-- Please add any articles you think might be helpful to read before writing the article -->
Helpful Khan Adcamedy video:
https://www.khanacademy.org/math/precalculus/prob-comb/combinatorics-precalc/v/permutation-formula




