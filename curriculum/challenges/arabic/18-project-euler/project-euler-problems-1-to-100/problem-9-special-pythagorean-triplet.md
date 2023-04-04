---
id: 5900f3761000cf542c50fe88
title: 'Problem 9: Special Pythagorean triplet'
challengeType: 1
forumTopicId: 302205
dashedName: problem-9-special-pythagorean-triplet
---

# --description--

A Pythagorean triplet is a set of three natural numbers, `a` &lt; `b` &lt; `c`, for which,

<div style='text-align: center;'><var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>

For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

There exists exactly one Pythagorean triplet for which `a` + `b` + `c` = 1000. Find the product `abc` such that `a` + `b` + `c` = `n`.

# --hints--

`specialPythagoreanTriplet(24)` should return a number.

```js
assert(typeof specialPythagoreanTriplet(24) === 'number');
```

`specialPythagoreanTriplet(24)` should return 480.

```js
assert.strictEqual(specialPythagoreanTriplet(24), 480);
```

`specialPythagoreanTriplet(120)` should return 49920, 55080 or 60000.

```js
assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));
```

`specialPythagoreanTriplet(1000)` should return 31875000.

```js
assert.strictEqual(specialPythagoreanTriplet(1000), 31875000);
```

# --seed--

## --seed-contents--

```js
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;

 return true;
}

specialPythagoreanTriplet(1000);
```

# --solutions--

```js
const specialPythagoreanTriplet = (n)=>{
 let sumOfabc = n;
 let a,b,c;
 for(a = 1; a<=sumOfabc/3; a++){
 for(b = a+1; b<=sumOfabc/2; b++){
 c = Math.sqrt(a*a+b*b);
 if((a+b+c) == sumOfabc){
 return a*b*c;
 }
 }
 }
}
```
