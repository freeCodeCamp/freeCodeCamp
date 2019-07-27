---
id: 5900f3ad1000cf542c50fec0
challengeType: 5
title: 'Problem 65: Convergents of e'
---

## Description
<section id='description'>
The square root of 2 can be written as an infinite continued fraction.

√2 = 1 +
1

2 +
1


2 +
1



2 +
1




2 + ...

The infinite continued fraction can be written, √2 = [1;(2)], (2) indicates that 2 repeats ad infinitum. In a similar way, √23 = [4;(1,3,1,8)].
It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for √2.


1 +
1
= 3/2

2

1 +
1
= 7/5

2 +
1


2

1 +
1
= 17/12

2 +
1



2 +
1




2

1 +
1
= 41/29

2 +
1


2 +
1




2 +
1





2


Hence the sequence of the first ten convergents for √2 are:
1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...
What is most surprising is that the important mathematical constant,e = [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...].
The first ten terms in the sequence of convergents for e are:
2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...
The sum of digits in the numerator of the 10th convergent is 1+4+5+7=17.
Find the sum of digits in the numerator of the 100th convergent of the continued fraction for e.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler65()</code> should return 272.
    testString: assert.strictEqual(euler65(), 272);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler65() {
  // Good luck!
  return true;
}

euler65();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
