---
title: 3 by 3 Determinants
---
## 3 by 3 Determinants

Consider the following matrix, which we will call A:

<table>
  <tr>
    <td style="background-color: white">a</td>
    <td style="background-color: white">b</td>
    <td style="background-color: white">c</td>
  </tr>
  <tr>
    <td style="background-color: white">d</td>
    <td style="background-color: white">e</td>
    <td style="background-color: white">f</td>
  </tr>
  <tr>
    <td style="background-color: white">g</td>
    <td style="background-color: white">h</td>
    <td style="background-color: white">i</td>
  </tr>
</table>

Then the determinant of this matrix, denoted <em>det(A)</em>, is given by:

<em>det(A) = a * (e * i - h * f) - b * (d * i - f * g) + c * (d * h - e * g)</em>

Please keep in mind the order of operations in the expression above.

For example, consider the following matrix, which we will call B:

<table>
  <tr>
    <td style="background-color: white">1</td>
    <td style="background-color: white">2</td>
    <td style="background-color: white">3</td>
  </tr>
  <tr>
    <td style="background-color: white">0</td>
    <td style="background-color: white">-3</td>
    <td style="background-color: white">5</td>
  </tr>
  <tr>
    <td style="background-color: white">-10</td>
    <td style="background-color: white">4</td>
    <td style="background-color: white">7</td>
  </tr>
</table>

<em>det(B)</em> is given by the formula above. We apply the formula below:

<em>det(B) = 1 * ( (-3) * 7 - 5 * 4) - 2 * ( 0 * 7 - 5 * (-10)) + 3 * (0 * 4 - (-3) * (-10))</em>, which we simplify to:

<em>det(B) = 1 * ((-21) - 20) - 2 * (0 - (-50)) + 3 * (0 - (30))</em>, which we simplify to:

<em>det(B) = (-41) - 100 - 90 = -231</em>

#### More information:
 * [Determinant of a Matrix](https://www.mathsisfun.com/algebra/matrix-determinant.html) on MathIsFun
 * [3x3 Determinant calculator](http://www.wolframalpha.com/widgets/view.jsp?id=7fcb0a2c0f0f41d9f4454ac2d8ed7ad6)
 * [Determinant](https://en.wikipedia.org/wiki/Determinant) on Wikipedia
