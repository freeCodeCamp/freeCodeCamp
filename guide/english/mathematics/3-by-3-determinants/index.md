---
title: 3 by 3 Determinants
---
## 3 by 3 Determinants
3x3 determinants are a value that can be calculated by the values in a matrix. It is also known as the scaling factor of the linear transformation that the matrix represents.
When a 3x3 matrix and its rows are comprised of three vectors, the determinant of this 3x3 matrix is the volume of the parallelepiped that is made up of these three vectors.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Determinant_parallelepiped.svg/950px-Determinant_parallelepiped.svg.png" width="400">

## Calculation
### Method 1
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

### Method 2
This method it similar to 2 by 2 determinants, and based on opertations with diagonals
Again, consider the following matrix, which we will call A:

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

<em>det(A) = a * e * i + b * f * g + c * d * h - c * e * g - f * h * a - i * b * d</em>

Note how three top-right to bottom-left diagonals are positive

<table>
  <tr>
    <td style="background-color: white">a</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">e</td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">i</td>
  </tr>
</table>

<table>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">b</td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">f</td>
  </tr>
  <tr>
    <td style="background-color: white">g</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
</table>

<table>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">c</td>
  </tr>
  <tr>
    <td style="background-color: white">d</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">h</td>
    <td style="background-color: white"> </td>
  </tr>
</table>

Top-left to bottom-right are negative

<table>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">c</td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">e</td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white">g</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
</table>

<table>
  <tr>
    <td style="background-color: white">a</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">f</td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">h</td>
    <td style="background-color: white"> </td>
  </tr>
</table>

<table>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white">b</td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white">d</td>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
  </tr>
  <tr>
    <td style="background-color: white"> </td>
    <td style="background-color: white"> </td>
    <td style="background-color: white">i</td>
  </tr>
</table>

Consider the same example as in method 2: matrix, which we will call B:

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

<em>det(B) = 1 * (-3) * 7 + 2 * 5 * (-10) + 3 * 0 * 4 - 3 * (-3) * (-10) - 5 * 4 * 1 - 7 * 2 * 0</em>, which we simplify to:

<em>det(B) = -21 - 100 + 0 - 90 - 20 - 0 = -231</em>, same, as in method 1


#### More information:
 * [Determinant of a Matrix](https://www.mathsisfun.com/algebra/matrix-determinant.html) on MathIsFun
 * [3x3 Determinant calculator](http://www.wolframalpha.com/widgets/view.jsp?id=7fcb0a2c0f0f41d9f4454ac2d8ed7ad6)
 * [Determinant](https://en.wikipedia.org/wiki/Determinant) on Wikipedia
