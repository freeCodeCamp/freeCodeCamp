---
id: 5900f3761000cf542c50fe88
title: 'Problem 9: Spezielles pythagoreisches Tripel'
challengeType: 1
forumTopicId: 302205
dashedName: problem-9-special-pythagorean-triplet
---

# --description--

Ein pythagoreisches Tripel ist eine Menge von drei natürlichen Zahlen, `a` &lt; `b` &lt; `c`, für die,

<div style='text-align: center;'><var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>

Zum Beispiel, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

Es gibt genau ein pythagoreisches Tripel für `a` + `b` + `c` = 1000. Finde das Produkt `abc` so, dass `a` + `b` + `c` = `n`.

# --hints--

`specialPythagoreanTriplet(24)` sollte eine Zahl zurückgeben.

```js
assert(typeof specialPythagoreanTriplet(24) === 'number');
```

`specialPythagoreanTriplet(24)` sollte 480 zurückgeben.

```js
assert.strictEqual(specialPythagoreanTriplet(24), 480);
```

`specialPythagoreanTriplet(120)` sollte 49920, 55080 oder 60000 zurückgeben.

```js
assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));
```

`specialPythagoreanTriplet(1000)` sollte 31875000 zurückgeben.

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
