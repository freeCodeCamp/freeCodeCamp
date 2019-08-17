---
id: 5900f3cc1000cf542c50fedf
challengeType: 5
title: 'Problem 96: Su Doku'
forumTopicId: 302213
---

## Description
<section id='description'>
Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.


0 0 39 0 00 0 1
0 2 03 0 58 0 6
6 0 00 0 14 0 0
0 0 87 0 00 0 6
1 0 20 0 07 0 8
9 0 00 0 82 0 0
0 0 28 0 00 0 5
6 0 92 0 30 1 0
5 0 00 0 93 0 0



4 8 39 6 72 5 1
9 2 13 4 58 7 6
6 5 78 2 14 9 3
5 4 87 2 91 3 6
1 3 25 6 47 9 8
9 7 61 3 82 4 5
3 7 28 1 46 9 5
6 8 92 5 34 1 7
5 1 47 6 93 8 2


A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.
The 6K text file, sudoku.txt (right click and 'Save Link/Target As...'), contains fifty different Su Doku puzzles ranging in difficulty, but all with unique solutions (the first puzzle in the file is the example above).
By solving all fifty puzzles find the sum of the 3-digit numbers found in the top left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the solution grid above.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler96()</code> should return 24702.
    testString: assert.strictEqual(euler96(), 24702);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler96() {
  // Good luck!
  return true;
}

euler96();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
