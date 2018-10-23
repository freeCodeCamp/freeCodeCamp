---
title: Eigenvalue
---
## Eigenvalue

This is a special set of scaler quantities associated with linear system of equations(i.e. matrix equations). In case of linear transformations, it is the scaling factor of a vector(column matrix) when a linear transformations is applied on it.

Let **A** be a linear transformation or a matrix equation represented by a matrix **A**. If there is a **non-zero, n-dimentional vector x** such that

**Ax = λx**

then **λ** is called the eigenvalue and **x** is called the eigenvector.

![alt text](http://mathworld.wolfram.com/images/equations/Eigenvalue/NumberedEquation3.gif "Matrix form of eigenvector and eigenvalues")

By solving **Ax = λx** corresponding eigenvalues and respective eigenvector can be found. Note that these eigenvalues sometimes can be complex values.

## Method of finding eigenvalues and eigenvectors
1. Solve **det(A - λI) = 0** to find the eigenvalues.
2. Substitute each eigenvalue to original equation to get the respective eigenvector.

Example

![alt text](https://github.com/AmilaIndika789/Images/blob/master/EigenValues.png "Eigenvalue and eigenvector example")

This can be easily applied on any square matrix of order nxn.


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information on these topics, refer:
1. [Wikipedia](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors)
2. [WolframMathWorld](http://mathworld.wolfram.com/Eigenvalue.html)


