---
title: 2 by 2 Inverse Matrix
---

## 2 by 2 Inverse Matrix

The inverse of a matrix is a matrix such that when multiplied by the original matrix, results in the Identity Matrix.

### Definition

Consider the following matrix, which we will call M:

<table>
  <tr>
    <td style="background-color: white">m(1,1)</td>
    <td style="background-color: white">m(1,2)</td>
  </tr>
  <tr>
    <td style="background-color: white">m(2,1)</td>
    <td style="background-color: white">m(2,2)</td>
  </tr>
</table>

This inverse of this matrix is defined by the equation:

<a href="https://www.codecogs.com/eqnedit.php?latex=I&space;=&space;M^{-1}&space;*&space;M" target="_blank"><img src="https://latex.codecogs.com/gif.latex?I&space;=&space;M^{-1}&space;*&space;M" title="I = M^{-1} * M" /></a>

### Method

The method with which you solve for an inverse matrix is represented by the equation:

<a href="https://www.codecogs.com/eqnedit.php?latex=M^{-1}&space;=&space;\frac{1}{|M|}\begin{bmatrix}&space;m(2,2)&space;&&space;-m(1,2)\\&space;-m(2,1)&space;&&space;m(1,1)&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M^{-1}&space;=&space;\frac{1}{|M|}\begin{bmatrix}&space;m(2,2)&space;&&space;-m(1,2)\\&space;-m(2,1)&space;&&space;m(1,1)&space;\end{bmatrix}" title="M^{-1} = \frac{1}{|M|}\begin{bmatrix} m(2,2) & -m(1,2)\\ -m(2,1) & m(1,1) \end{bmatrix}" /></a>

Where <a href="https://www.codecogs.com/eqnedit.php?latex=|M|" target="_blank"><img src="https://latex.codecogs.com/gif.latex?|M|" title="|M|" /></a> is the determinant of <a href="https://www.codecogs.com/eqnedit.php?latex=M" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M" title="M" /></a>.

### Example

Consider the following matrix, which we will call M:

<table>
  <tr>
    <td style="background-color: white">1</td>
    <td style="background-color: white">2</td>
  </tr>
  <tr>
    <td style="background-color: white">3</td>
    <td style="background-color: white">4</td>
  </tr>
</table>

Using the equation above:

<a href="https://www.codecogs.com/eqnedit.php?latex=M^{-1}&space;=&space;\frac{1}{|M|}\begin{bmatrix}&space;m(2,2)&space;&&space;-m(1,2)\\&space;-m(2,1)&space;&&space;m(1,1)&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M^{-1}&space;=&space;\frac{1}{|M|}\begin{bmatrix}&space;m(2,2)&space;&&space;-m(1,2)\\&space;-m(2,1)&space;&&space;m(1,1)&space;\end{bmatrix}" title="M^{-1} = \frac{1}{|M|}\begin{bmatrix} m(2,2) & -m(1,2)\\ -m(2,1) & m(1,1) \end{bmatrix}" /></a> 

Substituting the appropriate values get:

<a href="https://www.codecogs.com/eqnedit.php?latex=M^{-1}&space;=&space;-\frac{1}{2}\begin{bmatrix}&space;4&space;&&space;-2\\&space;-3&space;&&space;1&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M^{-1}&space;=&space;-\frac{1}{2}\begin{bmatrix}&space;4&space;&&space;-2\\&space;-3&space;&&space;1&space;\end{bmatrix}" title="M^{-1} = -\frac{1}{2}\begin{bmatrix} 4 & -2\\ -3 & 1 \end{bmatrix}" /></a>

Solving this equation we get:

<a href="https://www.codecogs.com/eqnedit.php?latex=M^{-1}&space;=&space;\begin{bmatrix}&space;-2&space;&&space;1\\&space;\frac{3}{2}&space;&&space;-\frac{1}{2}&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M^{-1}&space;=&space;\begin{bmatrix}&space;-2&space;&&space;1\\&space;\frac{3}{2}&space;&&space;-\frac{1}{2}&space;\end{bmatrix}" title="M^{-1} = \begin{bmatrix} -2 & 1\\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix}" /></a>

In order to verify whether or not this is the correct answer we use the definition of an inverse matrix:

<a href="https://www.codecogs.com/eqnedit.php?latex=I&space;=&space;M^{-1}&space;*&space;M" target="_blank"><img src="https://latex.codecogs.com/gif.latex?I&space;=&space;M^{-1}&space;*&space;M" title="I = M^{-1} * M" /></a>

Substituting for the matrices we get:

<a href="https://www.codecogs.com/eqnedit.php?latex=\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;-2&space;&&space;1\\&space;\frac{3}{2}&space;&&space;-\frac{1}{2}&space;\end{bmatrix}&space;*&space;\begin{bmatrix}&space;1&space;&&space;2\\&space;3&space;&&space;4&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;-2&space;&&space;1\\&space;\frac{3}{2}&space;&&space;-\frac{1}{2}&space;\end{bmatrix}&space;*&space;\begin{bmatrix}&space;1&space;&&space;2\\&space;3&space;&&space;4&space;\end{bmatrix}" title="\begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 1\\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix} * \begin{bmatrix} 1 & 2\\ 3 & 4 \end{bmatrix}" /></a>

Solving the equation we get:

<a href="https://www.codecogs.com/eqnedit.php?latex=\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}" title="\begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix}" /></a>

Since that is true, then we know that we solved for the inverse matrix correctly.

#### More information:
  * [Determinant of a Matrix](https://en.wikipedia.org/wiki/Determinant) on Wikipedia
  * [Inverse of a Matrix](https://en.wikipedia.org/wiki/Invertible_matrix) on Wikipedia
  * [Identity Matrix](https://en.wikipedia.org/wiki/Identity_matrix) on Wikipedia
  
