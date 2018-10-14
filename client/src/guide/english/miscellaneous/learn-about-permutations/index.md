---
title: Learn About Permutations
---
_Permutation_ is a mathematical term for the number of ways a group of objects can be assembled into a set. It's similar to another mathematical term, _combination_, except for one key difference: with permutations, the order of the itmes in the set makes a difference.

For example, say you were pulling numbers from a hat and counting the different combinations of three numbers. In that case, both `[1,2,3]` and `[3,2,1]` would be a combination of `1`, `2`, and `3` and would count as one combination.

However, if you were counting permutations of numbers, they would count as two different instances because the numbers in each set are in a different order.

Permutations can be calculated in one of two ways, depending on whether repeated values are allowed or not. To calculate the number of permutations of `n` objects without repeats, you simply calculate `n!`, or `n * (n-1) * (n-2) ... * 1`. This makes sense, because if you pick one number from the hat and don't put it back before picking the next number, there will be one less number to choose from.

To calculate only part of the total number of permutations (for example, to find the number of permutations of three digits from 1-10 without repeats), you only need to multiply for as many choices you're making. In the case of the three digits, you would only need to multiply `10 * 9 * 8`. In the same way, if repeats **are** allowed (meaning, you put the number back in the hat after picking), you would multiply `10 * 10 * 10`.