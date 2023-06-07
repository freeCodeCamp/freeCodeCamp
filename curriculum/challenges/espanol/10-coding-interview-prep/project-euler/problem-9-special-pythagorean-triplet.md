---
id: 5900f3761000cf542c50fe88
title: 'Problema 9: Terna Pitagórica Especial'
challengeType: 1
forumTopicId: 302205
dashedName: problem-9-special-pythagorean-triplet
---

# --description--

Una Terna Pitagórica es un conjunto de tres números naturales, `a` &lt; `b` &lt; `c`, para los cuales,

<div style='text-align: center;'><var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>

Por ejemplo, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

Existe exactamente una Terna Pitagórica en la cual `a` + `b` + `c` = 1000. Encuentra el producto `abc` tal que `a` + `b` + `c` = `n`.

# --hints--

`specialPythagoreanTriplet(24)` debe devolver un número.

```js
assert(typeof specialPythagoreanTriplet(24) === 'number');
```

`specialPythagoreanTriplet(24)` debe devolver 480.

```js
assert.strictEqual(specialPythagoreanTriplet(24), 480);
```

`specialPythagoreanTriplet(120)` debe devolver 49920, 55080 o 60000.

```js
assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));
```

`specialPythagoreanTriplet(1000)` debe devolver 31875000.

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
