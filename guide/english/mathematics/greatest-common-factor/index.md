---
title: Greatest Common Factor
---
## Greatest Common Factor

The greatest common factor (or more appropriately the great common divisor, otherwise known as the highest common factor, greatest common measure or highest common divisor) of two integers -- not both 0 -- is the largest positive integer that divides each of the integers. For short, we write the greatest common divisor of a and b as gcd(a,b).

For example, the gcd of 15 and 6 is 3, while the gcd of -42 and 6 is 6. We also have gcd(2,3) = 1 and gcd(17,0) = 17. There are two convensions for gcd(0,0). Either it is not defined to avoid needing special cases, or equal to 0.

There are many ways to compute the gcd of two integers, we will cover two simple algorithms here. Firstly, to see why it can also be called the greatest common factor, using the Fundamental Theorem of Arithmetic, every positive integer factors uniquely (up to order) into prime factors, so we can simply compare prime factorizations of two integers to see all the common factors.

For example, if we want to find the gcd of 3600 and 2640, we note that

<p align='center'>3600 = 2 &times; 2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 5 &times; 5 = 2<sup>4</sup> &times; 3<sup>2</sup> &times; 5<sup>2</sup>,<br />
  2640 = 2 &times; 2 &times; 2 &times; 2 &times; 3 &times; 5 &times; 11 = 2<sup>4</sup> &times; 3 &times; 5 &times; 11.</p>
  
The common factors are 2<sup>4</sup> &times; 3 &times; 5 = 240, and so the greatest common factor is 240 as no other factors divide both numbers.

While this gives a very simple method to find the gcd of two integers, finding a prime factorization is incredibly difficult when the numbers get large, so this is not practical in general. For a more computationally friendly approach we can use the Euclidean algorithm which just uses the [division algorithm](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/mathematics/division/index.md) noting that any factor dividing both the dividend and divisor must divide the remainder, so you can successively do division to get smaller numbers with the same common factors to compute the gcd. To see this in action, let's use our two numbers above again, 3600 and 2640.

To start, divide a = 3600 by b = 2640 to get a quotient q<sub>1</sub> = 1 and a remainder r<sub>1</sub> = 960. As

<p align='center'>a = bq<sub>1</sub> + r<sub>1</sub>,</p>

we have r<sub>1</sub> = a - bq<sub>1</sub>, so any common factor of a and b divides the right hand side, i.e., r<sub>1</sub> as well. Continuing with this, dividing b by r<sub>1</sub> we get a quotient of q<sub>2</sub> = 2 and a remainder of r<sub>2</sub> = 720, with b = q<sub>2</sub>r<sub>1</sub> + r<sub>2</sub>.

Dividing r<sub>1</sub> by r<sub>2</sub>, gives q<sub>3</sub> = 1 and r<sub>3</sub> = 240, and finally we have r<sub>3</sub> divides r<sub>2</sub> evenly (i.e., r<sub>4</sub> = 0) with a quotient q<sub>4</sub> = 3. So, putting everything together we have

<p align='center'>a = b + r<sub>1</sub>,<br />
  b = 2r<sub>1</sub> + r<sub>2</sub>,<br />
  r<sub>1</sub> = r<sub>2</sub> + r<sub>3</sub>,<br />
  r<sub>2</sub> = 3r<sub>3</sub></p>

and so r<sub>3</sub> = 240 divides r<sub>2</sub> (and itself) so it divides r<sub>1</sub> as well, thus b and a too.

It is not too hard to see that the last non-zero remainder is not just any divisor of a and b, but the greatest common divisor since every divisor of a and b divides r<sub>1</sub> as well, hence r<sub>2</sub> and r<sub>3</sub>. With JavaScript, this can be implemented as
```
const gcd = function(a, b) { return (!b) ? a : gcd(b, a%b); };
```

### Useful Properties

- If we denote the [least common multiple](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/mathematics/least-common-multiple/index.md) of two integers a and b -- not both 0 -- by lcm(a,b), then |ab| = gcd(a,b)lcm(a,b). This gives a nice computational approach to computing least common multiples via fast algorithms to compute gcds.
- For two integers a and b -- not both 0 -- there are integers c and d such that gcd(a,b) = ac + bd. (They can be computed with back substitution in the Euclidean algorithm.)
- For any non-negative integer m we have gcd(ma,mb) = mgcd(a,b), and if m divides both a and b, then gcd(a/m,b/m) = gcd(a,b)/m.
- For any integer m we have gcd(a + bm, b) = gcd(a,b).

### Generalizations

You can, in the obvious way, define the greatest common divisor of three integers -- not all 0 -- gcd(a,b,c), as the greatest positive integer that divides each of a, b and c. Similarly you can define the gcd of any number of integers.
