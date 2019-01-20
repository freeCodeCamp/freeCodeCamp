---
title: 2 by 2 Determinants
---

## 2 by 2 Determinants

In linear algebra, the determinant of a two-by-two matrix is a useful quantity. Mostly it is used to calculate the area of the given quadilateral (convex polygons only) and is also an easy representation of a quadilateral(convex polygons only) to be stored in computers as arrays. Scientists, engineers, and mathematicians use determinants in many everyday applications including image and graphic processing. 

Geometrically , the determinant of a 2 by 2 matrix is the area of a unit square when the matrix transformation is applied to the plane.

Calculating the determinant of a square two-by-two matrix is simple, and is the basis of the [Laplace formula](https://en.wikipedia.org/wiki/Laplace_expansion) used for calculating determinants for larger square matrices.

Given a matrix A, the determinant of A (written as |A|) is given by the following equation:

## Properties of (2x2) determinants

The rows and vectors of a 2 by 2 matrix can be associated with points on a cartesian plane, such that each row forms a 2D vector. These two vectors form a parallelogram, as shown in the image below.

### Proof

Let the vectors be M(a,b),N(c,d) originating from origin in a 2-D plane with an angle (&theta;>0) between them (head of one vector aligning with tail of another vector). But in here it doesn't matter because sin(&theta;)=sin(2&pi;-&theta;). Then the other point is P(a+c,b+d). The area of the parallelogram is perpendicular distance from one point say N(c,d) to the base vector, M(a,b) multiplied by the length of the base vector, |M(a,b)|. The parallelogram consists of two triangles hence, the area is two times of a triangle. 

Let the perpendicular distance be h.

Then:
- h=|N(c,d)| * sin(&theta;)
- b=|M(a,b)|
- Area = h * b

The absolute value of the determinant is equal to the area of the parallelogram. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Area_parallellogram_as_determinant.svg/1044px-Area_parallellogram_as_determinant.svg.png" width="300"> <a href="https://i.stack.imgur.com/gCaz3.png">Here</a> is an interesting visual proof of this property.

Note: If the determinant equals zero, there are no solutions (intersections) to the system (aka the lines are parallel). 

#### More Information:
- [Determinant of a Matrix](https://github.com/freeCodeCamp/guides/blob/master/src/pages/mathematics/determinant-of-a-matrix/index.md "Determinant of a Matrix")
- [Wikipedia: 2x2 Determinant](https://en.wikipedia.org/wiki/Determinant#2_.C3.97_2_matrices)


![img](https://ncalculators.com/images/formulas/2x2-matrix-determinant.jpg)
