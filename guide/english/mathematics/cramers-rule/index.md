---
title: Cramers Rule
---
## Cramers Rule
Named after **Gabriel Cramer** (1704–1752), who published the rule for an arbitrary number of unknowns in 1750.   <br/> 
Cramer's rule implemented in a naïve way is computationally inefficient for systems of more than two or three equations. <br/><br/>
In linear algebra, **Cramer's rule** is an explicit formula for the solution of a system of linear equations with as many equations as unknowns, valid whenever the system has a unique solution. <br/>
It expresses the solution in terms of the determinants of the (square) coefficient matrix and of matrices obtained from it by replacing one column by the column vector of right-hand-sides of the equations.  <br/><br/>


Cramer's rule provides the solution of a system of linear equations with n variables and n equations. This simple rule is applicable only if the system of linear equations has a unique solution when solved for a single variable. The steps to solve the system of equations using Cramer's rule is given below:  <br/><br/>
Step 1: Arrange the system of equations in the standard form. <br/> <br/>
    <img src="https://cramster-image.s3.amazonaws.com/definitions/DC-1381V1.png" alt="formula">  <br/><br/>
Step 2: Form the coefficient matrix of the system of linear equations. <br/><br/>
    <img src="https://cramster-image.s3.amazonaws.com/definitions/DC-1381V2.png">   <br/><br/>
Step 3: Check whether D formed in Step 2 is a square matrix or not. If it is a square matrix, then continue to solve the system of equations by using this method of Cramer's rule, or else the solution cannot be obtained. <br/>

Step 4: Find the determinant of D. If | D | ≠ 0, continue to solve the system of equations. If |D| =0, the solution cannot be found by using this method of Cramer's rule. <br/>

Step 5: Obtain Dx1,Dx2,…, Dxn as follows: <br/><br/>
    <img src="https://cramster-image.s3.amazonaws.com/definitions/DC-1381V3.png">   <br/><br/>
Step 6: Compute the determinants of Dx1, Dx2,…, Dxn.<br/>

Step 7: Find x1, x2,…,xn as follows:  <br/><br/>
   <img src="https://cramster-image.s3.amazonaws.com/definitions/DC-1381V4.png">  <br/><br/>
Thus, the solution is (x1, x2,…,xn).

#### More Information:
<a href="https://www.youtube.com/watch?v=Er7FuODBNqU">Cramer's rule</a>

