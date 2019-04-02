---
title: Basic Number Properties - Associative, Commutative, and Distributive
---
## Basic Number Properties: Associative, Commutative, and Distributive

Among other things everyday numbers possess, these are 3 basic properties.
<br/>
These properties play an important role in more advanced mathematics. Textbooks generally don't discuss them in detail until this point because all number systems used through high school have these properties.
<br/>
When studying advanced mathematics, the importance of these properties becomes clear, e.g., in [abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra) the importance and effect of each of these properties is studied.

## Associativity
If an operation (e.g. +, -, &times;, /) is *associative* it means <strong>the result will remain the same regardless of the order of operands.</strong> In other words, using parentheses to group the operations has no effect.
<pre>
For example, with addition
 (3 + 4) + 5 = 3 + (4 + 5)
          12 = 12
</pre>
### Note:
When working with real numbers
+ Addition and multiplication are associative. In other words, for any real numbers `a, b` and `c` we have
```
(a + b) + c = a + (b + c)
    (a*b)*c = a*(b*c)
```
and so we do not need parentheses, writing `a + b + c` and `a*b*c` is unambiguous.
+ Subtraction and division are not. For simple examples,
```
(1 - 1) - 1 = -1  whereas  1 - (1 - 1) = 1.
   (1/2)/3 = 1/6  whereas  1/(2/3) = 3/2
```

## Commutativity
If an operation (e.g. +, -, &times;, /) is *commutative* it means <strong>the result will remain the same regardless of the order in which the operands are evaluated.</strong>
<pre>
For example, consider addition again
    3 + 4 = 4 + 3
        7 = 7
</pre>
### Note:
When working with real numbers
+ Addition and multiplication are commutative. Again, if we have real numbers `a` and `b`, then
```
a + b = b + a,
  a*b = b*a
```
which is why we can work from left to right when evaluating an expression (following the order of operations!).
+ Subtraction and division almost never commutative as, for example
```
1 - 0 = 1   whereas   0 - 1 = -1
0/1 = 0   whereas   1/0 is not defined!
```
  
## Distributivity
  Distributivity is not a property a single operation possesses, but instead a property that one operation has over another. For example, with real numbers, multiplication *distributes* over addition because for any real `a, b` and `c` we have
  ```
  a*(b + c) = a*b + a*c,
  (b + c)*a = b*a + c*a.
  ```
(Since multiplication is commutative the two expressions above are the same, but in general an operation being distributive over another requires checking both, e.g., see division below.)
For example,
<pre>
  3 &times; (4 + 5) = 3 &times; 9 = 27,
  3 &times; 4 + 3 &times; 5 = 12 + 15 = 27
</pre>
### Note
+ Multiplication is distributive over addtion and subtraction, but division is neither. Indeed, we see
```
(a + b)/c = a/c + b/c,
```
but `a/(b + c)` is almost never equal to `a/b + a/c`. For example, consider `b = -c` non-zero. Then `a/b + a/c` is a number, while `a/(b + c)` is not defined!

## Additional notes
To get a taste of why studying objects with these properties may be more valuable than they appear in the simple examples above, consider the following:
+ The [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) (and least common multiple) functions are associatve and commutative, e.g.,
```
   gcd(gcd(a, b), c) = gcd(a, gcd(b, c)),
           gcd(a, b) = gcd(b, a)
```
+ [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication) is both associative and distributive (over matrix addition), but not commutative.
+ Addition and multiplication (as above) for the natural numbers, integers, real numbers, complex numbers, and (set of all) polynomials (with integer, real and complex coefficients) are associative, commutative and distributive as discussed above.
+ Cryptography and information security studies uses [objects](https://en.wikipedia.org/wiki/Modular_arithmetic) with similar addition and multiplication to those above its the associativity, commutativity and distributivity (as well as other properties) that gives the structure needed to allow [modern](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) [crytographic](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) [algorithms](https://simple.wikipedia.org/wiki/RSA_algorithm) to work.
+ The [quaternions](https://en.wikipedia.org/wiki/Quaternion) are not commutative with respect to multiplication.
+ In the (modern) cryptography example above, you can put a remarkable [operation](https://en.wikipedia.org/wiki/Elliptic_curve#The_group_law) on points of [elliptic curves](https://en.wikipedia.org/wiki/Elliptic_curve) to "add" them, and it is both associative and commutative.
