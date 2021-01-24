---
id: 5a23c84252665b21eecc8043
title: Sum to 100
challengeType: 5
forumTopicId: 302335
dashedName: sum-to-100
---

# --description--

Find solutions to the *sum to one hundred* puzzle.

Add (insert) the mathematical operators **+** or **─** (plus or minus) before any of the digits in the decimal numeric string **123456789** such that the resulting mathematical expression adds up to a particular sum (in this iconic case, **100**).

Example:

<pre><b>123 + 4 - 5 + 67 - 89   =   100</b></pre>

# --instructions--

Write a function that takes a number as parameter. The function should return an array containing all solutions for the given number. The solutions should be strings representing the expressions. For example: "1+23-456+78-9". Sort the array before returning it.

# --hints--

`sumTo100` should be a function.

```js
assert(typeof sumTo100 == 'function');
```

`sumTo100(199)` should return an array.

```js
assert(Array.isArray(sumTo100(199)));
```

`sumTo100(199)` should return `["-1+2-3+45+67+89", "123-4+5+6+78-9", "123-4+56+7+8+9"]`.

```js
assert.deepEqual(sumTo100(199), [
  '-1+2-3+45+67+89',
  '123-4+5+6+78-9',
  '123-4+56+7+8+9'
]);
```

`sumTo100(209)` should return `["1+234+56+7-89"]`.

```js
assert.deepEqual(sumTo100(209), ['1+234+56+7-89']);
```

`sumTo100(243)` should return `["-1-234+567-89", "-12+345+6-7-89", "123+45+6+78-9"]`.

```js
assert.deepEqual(sumTo100(243), [
  '-1-234+567-89',
  '-12+345+6-7-89',
  '123+45+6+78-9'
]);
```

`sumTo100(199)` should return `["-1+2-3+45+67+89", "123-4+5+6+78-9", "123-4+56+7+8+9"]`.

```js
assert.deepEqual(sumTo100(199), [
  '-1+2-3+45+67+89',
  '123-4+5+6+78-9',
  '123-4+56+7+8+9'
]);
```

`sumTo100(197)` should return `["1-2-3+45+67+89", "12+34-5+67+89", "123+4-5+6+78-9"]`.

```js
assert.deepEqual(sumTo100(197), [
  '1-2-3+45+67+89',
  '12+34-5+67+89',
  '123+4-5+6+78-9'
]);
```

# --seed--

## --seed-contents--

```js
function sumTo100(n) {

}
```

# --solutions--

```js
function sumTo100(n) {
    // Permutations with Repetition algorithm
    const permutationsWithRepetition = (n, as) => 
        as.length > 0
        ? foldl1(curry(cartesianProduct)(as), replicate(n, as))
        : [];
    const cartesianProduct = (xs, ys) => [].concat.apply([],xs.map((x) => [].concat.apply([],ys.map((y)=>[[x].concat(y)]))));
    const curry = (f) => (a) => (b) => f(a, b);
    const foldl1 = (f, xs) => xs.length > 0 ? xs.slice(1).reduce(f, xs[0]) : [];
    const replicate = (n, a) => {
        let v = [a], o = [];
        if (n < 1) return o;
        while (n > 1) {
            if (n & 1) o = o.concat(v);
            n >>= 1;
            v = v.concat(v);
        }
        return o.concat(v);
    }
    // Calc the permutations of [0,1,-1] to find out if its === n 
    const asSum = xs => {
        const dct = xs.reduceRight((a, sign, i)=>
            sign !== 0 
            ? { digits: [], n: a.n + sign * parseInt([i + 1].concat(a.digits).join(''), 10)}
            : { digits: [i + 1].concat(a.digits), n: a.n }
            , { digits: [], n: 0}
        );
        return dct.n + (dct.digits.length > 0 ? parseInt(dct.digits.join(''), 10) : 0)
    };
    // permutations of [0,1-1] to string
    const asString = (xs) => {
        const ns = xs.reduce((a, sign, i) => 
            sign === 0 
            ? a + (i + 1).toString() 
            : a + (sign > 0 ? '+' : '-') + (i + 1).toString(),"");
        return ns[0] === '+' ? tail(ns) : ns;
    }
    //generate 3^9 aka 19683 permutations and filter to the result
    return permutationsWithRepetition(9, [0, 1, -1])
        .filter((x) => x[0] !== 1 && asSum(x) === n)
        .map(asString)
        .sort();
}
```
