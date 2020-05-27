---
title: Fibonacci n-step number sequences
id: 598eef80ba501f1268170e1e
challengeType: 5
isHidden: false
forumTopicId: 302267
---

## Description
<section id='description'>
These number series are an expansion of the ordinary <a href="https://rosettacode.org/wiki/Fibonacci sequence" title="Fibonacci sequence" target="_blank">Fibonacci sequence</a> where:
<ol>
  <li>For $n = 2$ we have the Fibonacci sequence; with initial values $[1, 1]$ and $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>For $n = 3$ we have the tribonacci sequence; with initial values $[1, 1, 2]$ and $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>For $n = 4$ we have the tetranacci sequence; with initial values $[1, 1, 2, 4]$ and $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>For general $n>2$ we have the Fibonacci $n$-step sequence - $F_k^n$; with initial values of the first $n$ values of the $(n-1)$'th Fibonacci $n$-step sequence $F_k^{n-1}$; and $k$'th value of this $n$'th sequence being $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$</li>
</ol>
For small values of $n$, <a href="https://en.wikipedia.org/wiki/Number prefix#Greek_series" title="wp: Number prefix#Greek_series" target="_blank">Greek numeric prefixes</a> are sometimes used to individually name each series.
Fibonacci $n$-step sequences:

| $n$ | Series name | Values |
| --- | --- | --- |
|  2 |  fibonacci | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ... |
|  3 | tribonacci | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ... |
|  4 | tetranacci | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ... |
|  5 | pentanacci | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ... |
|  6 |  hexanacci | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ... |
|  7 | heptanacci | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
|  8 |  octonacci | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
|  9 |  nonanacci | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10 |  decanacci | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |
Allied sequences can be generated where the initial values are changed:
The <a href="https://en.wikipedia.org/wiki/Lucas number" title="wp: Lucas number" target="_blank">Lucas series</a> sums the two preceding values like the fibonacci series for $n=2$ but uses $[2, 1]$ as its initial values.
</section>

## Instructions
<section id='instructions'>
Write a function to generate Fibonacci $n$-step number sequences and Lucas sequences. The first parameter will be $n$. The second parameter will be the number of elements to be returned. The third parameter will specify whether to output the Fibonacci sequence or the Lucas sequence. If the parameter is <code>"f"</code> then return the Fibonacci sequence and if it is <code>"l"</code>, then return the Lucas sequence. The sequences must be returned as an array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fib_luc</code> should be a function.
    testString: assert(typeof fib_luc === 'function');
  - text: <code>fib_luc(2,10,"f")</code> should return <code>[1,1,2,3,5,8,13,21,34,55]</code>.
    testString: assert.deepEqual(fib_luc(2,10,"f"),ans[0]);
  - text: <code>fib_luc(3,15,"f")</code> should return <code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code>.
    testString: assert.deepEqual(fib_luc(3,15,"f"),ans[1]);
  - text: <code>fib_luc(4,15,"f")</code> should return <code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code>.
    testString: assert.deepEqual(fib_luc(4,15,"f"),ans[2]);
  - text: <code>fib_luc(2,10,"l")</code> should return <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code>.
    testString: assert.deepEqual(fib_luc(2,10,"l"),ans[3]);
  - text: <code>fib_luc(3,15,"l")</code> should return <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code>.
    testString: assert.deepEqual(fib_luc(3,15,"l"),ans[4]);
  - text: <code>fib_luc(4,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code>.
    testString: assert.deepEqual(fib_luc(4,15,"l"),ans[5]);
  - text: <code>fib_luc(5,15,"l")</code> should return <code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code>.
    testString: assert.deepEqual(fib_luc(5,15,"l"),ans[6]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fib_luc(n, len, w) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const ans = [[1,1,2,3,5,8,13,21,34,55],
[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136],
[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536],
[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76],
[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ],
[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ],
[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]];
```

</div>

</section>

## Solution
<section id='solution'>


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

</section>
