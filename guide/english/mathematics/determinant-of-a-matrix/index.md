---
title: Determinant of a Matrix
---
## Determinant of a Matrix

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The elements of a square matrix can be used to compute a special value called the determinant. It is denoted by det(A) or |A|. The determinant is only defined for a square matrix, i.e a matrix with identical number of rows and columns.

The determinant of a 2x2 matrix is the simplest case(a 1x1 matrix is just the number itself).
It is found by multiplying the opposite corners and subtracting them.

![2x2 determinant](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b2e40d390e1d26039aabee44c7d1d86c8755232)

Subsequent square matrices are just extensions of a 2x2 matrix and can be easily found by reducing them recursively as 2x2 matrices. The determinant of a 3x3 matrix is given below.

<img src= http://www.statisticslectures.com/images/third1.gif width='300' height='100'>

The steps to find the determinant for a 3x3 matrix are:
- Choose a row or column to go along (say the 1st row)
- Multiply 'a' by the 2x2 determinant formed without a's row or column.
- Next do the same with b. Here make sure to multiply this value by -1. You will need to multiply -1 to every alternate element in the row.
- Continue this till you do this for all elements in the row.
- Simplify the expression by finding the individual 2x2 determinants
- The value you obtain is the final value of the determinant of the matrix.

This method can similarly be applied to any nxn square matrix by breking it down into basic 2x2 matrices and finding their determinants.

Exercise - Try finding the determinant of the following 3x3 matrix

<img src="https://cdn.kastatic.org/ka-exercise-screenshots/matrix_determinant_3x3_256.png">


Answer = 27

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

https://en.wikipedia.org/wiki/Determinant
https://mathinsight.org/determinant_matrix
