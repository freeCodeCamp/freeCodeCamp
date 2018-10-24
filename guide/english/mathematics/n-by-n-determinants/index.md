---
title: n by n determinant
---

## n by n Determinants

To show how to calculate the determinant for a square matrix of size (n,n) first we must show how a determinant is solved for the base case (2,2) and (3,3) then we can create a general formula to illustrate how the process is completed for a matrix of size (n,n).

### Base Case Determinant Definition

Consider a 2 by 2 matrix, which we will call A:

<a href="https://www.codecogs.com/eqnedit.php?latex=A&space;=&space;\begin{bmatrix}&space;a_{11}&space;&&space;a_{12}&space;\\&space;a_{21}&space;&&space;a_{22}&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?A&space;=&space;\begin{bmatrix}&space;a_{11}&space;&&space;a_{12}&space;\\&space;a_{21}&space;&&space;a_{22}&space;\end{bmatrix}" title="A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}" /></a>

The determinant for matrix A is as follows:

<a href="https://www.codecogs.com/eqnedit.php?latex=A^D&space;=&space;(a_{11}&space;*&space;a_{22})&space;-&space;(a_{21}&space;*&space;a_{12})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?A^D&space;=&space;(a_{11}&space;*&space;a_{22})&space;-&space;(a_{21}&space;*&space;a_{12})" title="A^D = (a_{11} * a_{22}) - (a_{21} * a_{12})" /></a>

Now consider a 3 by 3 matrix, which we will call B:

<a href="https://www.codecogs.com/eqnedit.php?latex=B&space;=&space;\begin{bmatrix}&space;b_{11}&space;&&space;b_{12}&space;&&space;b_{13}\\&space;b_{21}&space;&&space;b_{22}&space;&&space;b_{23}&space;\\&space;b_{31}&space;&&space;b_{32}&space;&&space;b_{33}&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?B&space;=&space;\begin{bmatrix}&space;b_{11}&space;&&space;b_{12}&space;&&space;b_{13}\\&space;b_{21}&space;&&space;b_{22}&space;&&space;b_{23}&space;\\&space;b_{31}&space;&&space;b_{32}&space;&&space;b_{33}&space;\end{bmatrix}" title="B = \begin{bmatrix} b_{11} & b_{12} & b_{13}\\ b_{21} & b_{22} & b_{23} \\ b_{31} & b_{32} & b_{33} \end{bmatrix}" /></a>

The determinant for matrix B is as follows:

<a href="https://www.codecogs.com/eqnedit.php?latex=B^D&space;=&space;b_{11}&space;*&space;\begin{bmatrix}&space;b_{22}&space;&&space;b_{23}&space;\\&space;b_{32}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;-&space;b_{12}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}&space;\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;&plus;&space;b_{13}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{22}&space;\\&space;b_{31}&space;&&space;b_{32}&space;\end{bmatrix}^D" target="_blank"><img src="https://latex.codecogs.com/gif.latex?B^D&space;=&space;b_{11}&space;*&space;\begin{bmatrix}&space;b_{22}&space;&&space;b_{23}&space;\\&space;b_{32}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;-&space;b_{12}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}&space;\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;&plus;&space;b_{13}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{22}&space;\\&space;b_{31}&space;&&space;b_{32}&space;\end{bmatrix}^D" title="B^D = b_{11} * \begin{bmatrix} b_{22} & b_{23} \\ b_{32} & b_{33} \end{bmatrix}^D - b_{12} * \begin{bmatrix} b_{21} & b_{23} \\ b_{31} & b_{33} \end{bmatrix}^D + b_{13} * \begin{bmatrix} b_{21} & b_{22} \\ b_{31} & b_{32} \end{bmatrix}^D" /></a>


Notice that the second in the above equation is being subtracted, but the third is being added, so in order to maintain that relationship for a matirix of size (n,n) we can define a matrix containing the coefficients for each part of the determinant equation, which we will call Mu:

<a href="https://www.codecogs.com/eqnedit.php?latex=\mu&space;=&space;\begin{bmatrix}&space;1&space;&&space;\cdots&space;&&space;-\mu_{1\,\,\,n-1}\\&space;\vdots&space;&&space;\ddots&space;&&space;\vdots\\&space;-\mu_{n-1\,\,\,1}&space;&&space;\cdots&space;&&space;1&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\mu&space;=&space;\begin{bmatrix}&space;1&space;&&space;\cdots&space;&&space;-\mu_{1\,\,\,n-1}\\&space;\vdots&space;&&space;\ddots&space;&&space;\vdots\\&space;-\mu_{n-1\,\,\,1}&space;&&space;\cdots&space;&&space;1&space;\end{bmatrix}" title="\mu = \begin{bmatrix} 1 & \cdots & -\mu_{1\,\,\,n-1}\\ \vdots & \ddots & \vdots\\ -\mu_{n-1\,\,\,1} & \cdots & 1 \end{bmatrix}" /></a>

The second thing that must be done to generalize that Determinant definition is to find the relationship between the matrix element being multiplied and the submatrix determinant being multiplied in each part of the Determinant definition.
If we take a look at just the second part of the Determinant definition for a matrix of size (3,3)...

<a href="https://www.codecogs.com/eqnedit.php?latex=\cdots&space;-b_{12}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;\cdots" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\cdots&space;-b_{12}&space;*&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}^D&space;\cdots" title="\cdots -b_{12} * \begin{bmatrix} b_{21} & b_{23}\\ b_{31} & b_{33} \end{bmatrix}^D \cdots" /></a>

The matrix 

<a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\inline&space;\begin{bmatrix}&space;b_{21}&space;&&space;b_{23}\\&space;b_{31}&space;&&space;b_{33}&space;\end{bmatrix}" title="\begin{bmatrix} b_{21} & b_{23}\\ b_{31} & b_{33} \end{bmatrix}" /></a> 

is a submatrix of matrix B, but which parts of B are included? If we look closely we can see that the submatrix contains the elements present at every index except for r = 1 and c = 1.
It is no coincedence that those two numbers are the indexes of the element being multiplied.

Consider a submatrix of B that contains all the elements except the ones at the indexes m and n, which we will call Beta:

<a href="https://www.codecogs.com/eqnedit.php?latex=\beta_{mn}&space;=&space;B[r\neq&space;m,&space;c&space;\neq&space;n]" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\beta_{mn}&space;=&space;B[r\neq&space;m,&space;c&space;\neq&space;n]" title="\beta_{mn} = B[r\neq m, c \neq n]" /></a>

Using the matrices Beta and Mu, we can generalize any part of the Determinant definition:

<a href="https://www.codecogs.com/eqnedit.php?latex=\cdots&space;\mu_{mn}&space;*&space;b_{mn}&space;*&space;\beta_{mn}&space;\cdots" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\cdots&space;\mu_{mn}&space;*&space;b_{mn}&space;*&space;\beta_{mn}&space;\cdots" title="\cdots \mu_{mn} * b_{mn} * \beta_{mn} \cdots" /></a>
If we look at the Determinant definition for a matrix of size (3,3) we can see:

<a href="https://www.codecogs.com/eqnedit.php?latex=B^D&space;=&space;(\mu_{11}&space;*&space;b_{11}&space;*&space;\beta_{11})&space;&plus;(\mu_{12}&space;*&space;b_{12}&space;*&space;\beta_{12})&plus;&space;(\mu_{13}&space;*&space;b_{13}&space;*&space;\beta_{13})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?B^D&space;=&space;(\mu_{11}&space;*&space;b_{11}&space;*&space;\beta_{11})&space;&plus;(\mu_{12}&space;*&space;b_{12}&space;*&space;\beta_{12})&plus;&space;(\mu_{13}&space;*&space;b_{13}&space;*&space;\beta_{13})" title="B^D = (\mu_{11} * b_{11} * \beta_{11}) +(\mu_{12} * b_{12} * \beta_{12})+ (\mu_{13} * b_{13} * \beta_{13})" /></a>

If you look closely at this equation you will notice 3 things, 1. m = 1 in every part of the equation, 2. 1<=n<=3 for every part of the equation, and 3. the determinant is equal to the sum of every part in the equation.

Using three facts we can derive the following equation as the Determinant definition for a matrix of size (n,n):

<a href="https://www.codecogs.com/eqnedit.php?latex=M^D&space;=&space;\sum_{i=1}^{n}(\mu_{1i}&space;*&space;b_{1i}&space;*&space;\beta_{1i})" target="_blank"><img src="https://latex.codecogs.com/gif.latex?M^D&space;=&space;\sum_{i=1}^{n}(\mu_{1i}&space;*&space;b_{1i}&space;*&space;\beta_{1i})" title="M^D = \sum_{i=1}^{n}(\mu_{1i} * b_{1i} * \beta_{1i})" /></a>

#### More Information:
  * [Determinant](https://en.wikipedia.org/wiki/Determinant) on Wikipedia
  * [Matrices](https://en.wikipedia.org/wiki/Matrix) on Wikipedia
  * [Matrix Multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication) on Wikipedia
  * [Summation](https://en.wikipedia.org/wiki/Summation) on Wikipedia
