---
id: 5900f3cc1000cf542c50fedf
challengeType: 5
title: 'Problem 96: Su Doku'
forumTopicId: 302213
---

## Description
<section id='description'>
Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.


<div style="margin: auto; background-color: white; padding: 10px; width: 80%; text-align: center;">
  <table border="0" cellpadding="0" cellspacing="0" align="center">
    <tbody>
      <tr>
        <td>
          <table cellpadding="5" cellspacing="0" border="1">
            <tbody>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 3<br />9 0 0<br />0 0 1
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 2 0<br />3 0 5<br />8 0 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 0 0<br />0 0 1<br />4 0 0
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 8<br />7 0 0<br />0 0 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  1 0 2<br />0 0 0<br />7 0 8
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 0 0<br />0 0 8<br />2 0 0
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 2<br />8 0 0<br />0 0 5
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 0 9<br />2 0 3<br />0 1 0
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 0 0<br />0 0 9<br />3 0 0
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td width="50">
          <img src="images/spacer.gif" width="50" height="1" alt="" /><br />
        </td>
        <td>
          <table cellpadding="5" cellspacing="0" border="1">
            <tbody>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  4 8 3<br />9 6 7<br />2 5 1
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 2 1<br />3 4 5<br />8 7 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 5 7<br />8 2 1<br />4 9 3
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 4 8<br />7 2 9<br />1 3 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  1 3 2<br />5 6 4<br />7 9 8
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 7 6<br />1 3 8<br />2 4 5
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  3 7 2<br />8 1 4<br />6 9 5
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 8 9<br />2 5 3<br />4 1 7
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 1 4<br />7 6 9<br />3 8 2
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>

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
