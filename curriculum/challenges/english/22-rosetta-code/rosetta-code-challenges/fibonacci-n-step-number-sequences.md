---
id: 598eef80ba501f1268170e1e
title: Fibonacci n-step number sequences
challengeType: 1
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

These number series are an expansion of the ordinary Fibonacci sequence where:

<ol>
  <li>For $n = 2$ we have the Fibonacci sequence; with initial values $[1, 1]$ and $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>For $n = 3$ we have the tribonacci sequence; with initial values $[1, 1, 2]$ and $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>For $n = 4$ we have the tetranacci sequence; with initial values $[1, 1, 2, 4]$ and $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>For general $n>2$ we have the Fibonacci $n$-step sequence - $F_k^n$; with initial values of the first $n$ values of the $(n-1)$'th Fibonacci $n$-step sequence $F_k^{n-1}$; and $k$'th value of this $n$'th sequence being $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$</li>
</ol>

For small values of $n$, Greek numeric prefixes are sometimes used to individually name each series.

Fibonacci $n$-step sequences:

| $n$ | Series name | Values                                                 |
| --- | ----------- | ------------------------------------------------------ |
| 2   | fibonacci   | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | tribonacci  | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | tetranacci  | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | pentanacci  | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | hexanacci   | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | heptanacci  | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | octonacci   | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | nonanacci   | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | decanacci   | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

Allied sequences can be generated where the initial values are changed: The Lucas series sums the two preceding values like the fibonacci series for $n=2$ but uses $\[2, 1]$ as its initial values.

# --instructions--

Write a function to generate Fibonacci $n$-step number sequences and Lucas sequences. The first parameter will be $n$. The second parameter will be the number of elements to be returned. The third parameter will specify whether to output the Fibonacci sequence or the Lucas sequence. If the parameter is `"f"` then return the Fibonacci sequence and if it is `"l"`, then return the Lucas sequence. The sequences must be returned as an array.

# --hints--

`fib_luc` should be a function.

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` should return `[1,1,2,3,5,8,13,21,34,55]`.

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` should return `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]`.

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")` should return `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]`.

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` should return `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]`.

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` should return `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]`.

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` should return `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]`.

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` should return `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]`.

```js
assert.deepEqual(fib_luc(5, 15, 'l'), ans[6]);
```

# --seed--

## --after-user-code--

```js
const ans = [[1,1,2,3,5,8,13,21,34,55],
[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136],
[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536],
[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76],
[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ],
[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ],
[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]];
```

## --seed-contents--

```js
function fib_luc(n, len, w) {

}
```

# --solutions--

```js
function fib_luc(n, len, w) {
    function nacci(a, n, len) {
        while (a.length < len) {
            let sum = 0;
            for (let i = Math.max(0, a.length - n); i < a.length; i++)
                sum += a[i];
            a.push(sum);
        }
        return a;
    }
    if(w=="f"){
        return nacci(nacci([1,1], n, n), n, len);
    }else{
        return nacci(nacci([2,1], n, n), n, len);
    }
}
```
