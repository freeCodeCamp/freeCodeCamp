---
title: Die Rolling Probability
---
## Die Rolling Probability
We will initially consider a single die, which we know to be fair. A fair die is one where, when you roll it, all of the six sides have an equal likelihood of showing face up.

Since there are **6** sides, this means that there is a **1 in 6** chance of any particular side showing face up. This probability is often written as a fraction, thus 1/6. Using P(side) to indicate the probability (P) of a particular side showing face up, we can therefore say:

P(1) = P(2) = P(3) = P(4) = P(5) = P(6) = 1/6.

Suppose we now take 2 fair dice. Since each of the six sides of die 1 can show face up with each of the six sides of die 2 there are 6 x 6 = 36 different possibilities and the chance of any combination occuring is therefore 1/36. If there are 3 die, there are 6 x 6 x 6 = 216 different possibilities, and so on with more die.

If it doesn't matter in what order we look at the dice once we have rolled them, we have to look more carefully at the probabilities. For example, a 3 and a 5 can show up as 3 on die 1 and 5 on die 2 **or** 5 on die 1 and 3 on die 2 (2 combinations) so we can say that P(3,5 or 5,3) = 1/36 + 1/36 = 1/18.

If the total sum showing up is all that matters, we have to look at all the combinations of faces that make up the sum we are interested in. For example, suppose we want to know the probability of getting a total sum of 7. We know that 7 = 1 + 6 **or** 6 + 1 **or** 2 + 5 **or** 5 + 2 **or** 3 + 4 **or** 4 + 3 (6 combinations) so that P(sum = 7) is 1/36 + 1/36 + 1/36 + 1/36 + 1/36 + 1/36 = 6 * 1/36 = 6/36 or 1/6.

Exercise: What is the probability of getting a total sum of 5 when rolling two fair dice? How about a sum of 2?
