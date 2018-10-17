---
title: Dot Product
---
## Dot Product

A dot product is a way of multiplying two vectors together to get a single number.
Dot products are common in physics and linear algebra.

You can write the dot product of two vectors **a** and **b** as **a** · **b** .

Two vectors must be of the same length to have a dot product.

To find the dot product, multiply the `nth` element in the first vector by the `nth` element in the second vector.
Do this for all of the elements.
Then, find the sum of all those products.
This sum is the dot product!

### Properties of Dot Products

The dot product of two vectors can also be expressed as `a · b = ||a|| * ||b|| * cos(theta)`.
In this formula, `||a||` is the magnitude of vector **a**, and `theta` is the angle between the two vectors.

Two orthogonal (a.k.a. perpendicular) vectors will always have a dot product of 0.

### Worked Example

For example, say you have the vectors **a** and **b**.
Let `a = (1 2 3 4)` and `b = (-1 0 1 2)`.

The dot product would be `(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12`.
So in this case, you would say that **a** · **b** = 12.

### Code Example

Here's an example function in JavaScript.
It returns the dot product of two vector arguments:

```javascript

/**
 * @param {array} a - A vector/array of numbers
 * @param {array} b - A vector/array of numbers with the same length as a
 * @returns {number} - The dot product of a and b
 */
function dotProduct(a, b) {
  // Check if the lengths are the same - if not, there can't be a dot product
  if (a.length !== b.length) {
    throw "vector lengths must be equal";
  }

  // Create a variable to store the sum as we calculate it
  let product = 0;

  // Loop through the vectors, calculate products, and add them to the total
  for (let i = 0; i < a.length; i++) {
    // You may want to ensure that a[i] and b[i] are both finite numbers
    product += a[i] * b[i];
  }

  return product;
}

```

### More Information:
[Vectors](../vectors/index.md)
