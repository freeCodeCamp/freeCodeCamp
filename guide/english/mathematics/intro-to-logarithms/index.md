---
title: Intro to Logarithms
---
## Intro to Logarithms


Logarithms are mathematical functions used to find what power a base is raised to in order to receive a specific output.

![log diagram](https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw)

*Here in the example variable b is the base whereas variable a is the desired output and variable c is the exponent.*

Logs are used in various things in the real world.  They are used in the pH scale, the measuring of the intensity of earthquakes (the Richter Scale) and many other things.

Example of logs in python:
```python
import math

# math.log(value, base) - outputs exponent
math.log(100, 10) #outputs 2
math.log(2, 2) #outputs 1
```

### Definition of logarithm

The logarithm of a number __x__, written _log(__x__)_, usually means the number you have to use as power over 10 to get __x__. Let's say you wanna find _log(10)_. This means you wanna find the number you have to raise 10 to to get 10. This gives us an equation: 
_log(10) = x_.

We can use this and apply it as a power of 10 on both sides. This changes the equation to:
_10<sup>log(10)</sup> = 10<sup>x</sup>_

The _10<sup>log(__x__)_</sup>, where __x__ is any number, will return __x__, as _10<sup>log</sup>_ cancels out. This means our equation is now 
_10 = 10<sup>x</sup>_

Given that _10<sup>x</sup>_ is equal to 10 times itself _x_ times, it means that 10 needs to be multiplied with itself enough times to be exactly 10, and _x_ is therefore 1. This is because
_10<sup>1</sup> = 10_


### Definition of the natural logarithm

This is strictly the same as the definition of logarithm, except what numbers are used. In the normal logarithm, the base number is usually 10, wheras in the natural logarithm, often written _ln_, uses _e_, euler's number as base. This means that 
_ln(e) = 1_, instead of _log(10) = 1_. 
So, we are instead finding the power you need to raise _e_ to in _ln(__x__)_.


#### More Information
<!-- Please add any articles you think might be helpful to read before writing the article -->
* https://betterexplained.com/articles/using-logs-in-the-real-world/
* https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms
* https://mathinsight.org/logarithm_basics
