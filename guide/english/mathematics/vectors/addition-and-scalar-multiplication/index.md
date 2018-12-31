---
title: Addition and Scalar Multiplication
---
## Addition and Scalar Multiplication

When working with vectors, the two most common operations are addition of vectors and multiplication by a scalar.

### Vector Addition

Vector addition can be visualized as follows:

1. Take the "tail" (The end without an arrow/the origin of the vector) of the second vector, and connect it (unaltered) to the "tip" (The pointed/arrow end) of the first vector. Now, if you create a new vector from the tail of the first vector to the tip of the second vector, you will be left with the sum of the two vectors!

2. Subtracting two vectors is almost the same. However, you must flip the direction of the second vector, and then proceed with connecting it to the first.

Obviously, you don't want to have to draw and connect vectors every single time you want to do vector addition. Luckily, the solution is much simpler in practice.

Assuming you have two vectors <1,2> and <5,-4>, all you have to do is add the corresponding components:
<pre> <1,2> + <5,-4> = <1 + 5, 2 + (-4)> = <6, -2> </pre>
This works with vectors of as many dimensions as you want, as long as the sizes of the two vectors added are the same. For example, adding <4, 4, -5, 0> and <2, 4, -1, -29>:
<pre> <4, 4, -5, 0> + <2, 4, -1, -29> = <4 + 2, 4 + 4, -5 + (-1), 0 + (-29)> = <6, 8, -6, -29> </pre>

### Scalar Multiplication

When multiplying a vector by a scalar, you can think of it as increasing its magnitude.

For example, when multiplying vector <2, 3> by 2:
<pre> 2 * <2,3> = <2 * 2, 2 * 3> = <4, 6> </pre>
The direction is preserved - just the magnitude is increased by a factor of 2.

However, when we multiply by a negative number, the direction is reversed. When multiplying vector <2, 3> by -2:
<pre> -2 * <2, 3> = <-2 * 2, -2 * 3> = <-4, -6> </pre>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


