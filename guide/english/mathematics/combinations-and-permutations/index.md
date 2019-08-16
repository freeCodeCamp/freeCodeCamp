---
title: Combinations and Permutations
---
## Combinations and Permutations

  Let's say you have 9 people competing to place in the top three of a golf tournament. How many different possibilities are there for the top three in the tournament?
  Well, if we pick first place first, we have 9 people to choose from. After that, we would have 8 to choose from for second place, and 7 for third place. To calculate the total, we simply have to multiply them together:
  
  9x8x7=505
  
  This is an example of a permutation. A permutation is the number of different ordered possibilities that can occur in a given situation. A permutation can be with or without repetition, as can a combination. If we say that there is a permutation for n things with r possibilities, the formulae will be:
  
**With Repetition:**
 <a href="https://www.codecogs.com/eqnedit.php?latex=n^r" target="_blank"><img src="https://latex.codecogs.com/gif.latex?n^r" title="n^r" /></a>
  
**Without Repetition:**
<a href="https://www.codecogs.com/eqnedit.php?latex=\frac{&space;n!}{(n-r)!}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\frac{&space;n!}{(n-r)!}" title="\frac{ n!}{(n-r)!}" /></a>
  
  Returning to the problem at the top, what if they were sitting in three identical chairs instead of having rankings? This is an example of a combination. In a combination, order doesn't matter. Therefore, every permutation of the same combination has to be eliminated. This creates two more formulae:
  
**With Repetition:**
 <a href="https://www.codecogs.com/eqnedit.php?latex=\frac{(r&plus;n-1)!}{r!(n-1)!}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\frac{(r&plus;n-1)!}{r!(n-1)!}" title="\frac{(r+n-1)!}{r!(n-1)!}" /></a>
  
**Without Repetition:**
<a href="https://www.codecogs.com/eqnedit.php?latex=\frac{n!}{r!(n-r)!}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\frac{n!}{r!(n-r)!}" title="\frac{n!}{r!(n-r)!}" /></a>
  
  
###Sources
  “Combinations and Permutations.” Math is Fun, www.mathsisfun.com/combinatorics/combinations-permutations.html.


<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/combinations-and-permutations/index.md' target='_blank' rel='nofollow'>Help our community expand this article</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


