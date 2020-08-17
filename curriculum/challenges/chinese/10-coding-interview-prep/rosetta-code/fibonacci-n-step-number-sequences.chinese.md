---
title: Fibonacci n-step number sequences
id: 598eef80ba501f1268170e1e
challengeType: 5
videoUrl: ''
localeTitle: 斐波那契n步数序列
---

## Description
<section id="description"><p>编写一个函数来生成Fibonacci n步数序列和Lucas序列。第一个参数是n。第二个参数是要返回的元素数。第三个参数将指定是输出Fibonacci序列还是Lucas序列。如果参数为“f”，则返回Fibonacci序列，如果为“l”，则返回Lucas序列。序列必须作为数组返回。更多细节如下： </p><p>这些数字序列是普通<a href="http://rosettacode.org/wiki/Fibonacci sequence" title="斐波那契序列">斐波纳契数列</a>的扩展，其中： </p>对于$ n = 2 $，我们有Fibonacci序列;初始值$ [1,1] $和$ F_k ^ 2 = F_ {k-1} ^ 2 + F_ {k-2} ^ 2 $对于$ n = 3 $，我们有tribonacci序列;初始值$ [1,1,2] $和$ F_k ^ 3 = F_ {k-1} ^ 3 + F_ {k-2} ^ 3 + F_ {k-3} ^ 3 $ $ $ = 4 $我们有tetranacci序列;初始值$ [1,1,2,4] $和$ F_k ^ 4 = F_ {k-1} ^ 4 + F_ {k-2} ^ 4 + F_ {k-3} ^ 4 + F_ {k -4} ^ 4 $ ...对于一般的$ n&gt; 2 $，我们有斐波那契$ n $ -step序列 -  $ F_k ^ n $; $（n-1）$&#39;斐波那契$ n $ -step序列$ F_k ^ {n-1} $的前$ n $值的初始值;和$ k $&#39;这个$ n $&#39;序列的值是$ F_k ^ n = \ sum_ {i = 1} ^ {（n）} {F_ {ki} ^ {（n）}} $ <p>对于$ n $的小值， <a href="https://en.wikipedia.org/wiki/Number prefix#Greek_series" title="wp：数字前缀＃Greek_series">希腊数字前缀</a>有时用于单独命名每个系列。 </p><p> {| style =“text-align：left;” border =“4”cellpadding =“2”cellspacing =“2” </p><p> | + Fibonacci $ n $ -step序列</p><p> |  -  style =“background-color：rgb（255,204,255）;” </p><p> ！ $ n $ !!系列名称!!值</p><p> |  - </p><p> | 2 ||斐波那契|| 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...... </p><p> |  - </p><p> | 3 || tribonacci || 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...... </p><p> |  - </p><p> | 4 || tetranacci || 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...... </p><p> |  - </p><p> | 5 || pentanacci || 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...... </p><p> |  - </p><p> | 6 || hexanacci || 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...... </p><p> |  - </p><p> | 7 || heptanacci || 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ...... </p><p> |  - </p><p> | 8 || octonacci || 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... </p><p> |  - </p><p> | 9 || nonanacci || 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ...... </p><p> |  - </p><p> | 10 || decanacci || 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... </p><p> |} </p><p>可以在更改初始值的位置生成联合序列： </p><p> <a href="https://en.wikipedia.org/wiki/Lucas number" title="wp：卢卡斯号码">Lucas系列</a>将两个前面的值相加，例如$ n = 2 $的斐波那契数列，但使用$ [2,1] $作为其初始值。 </p><p><!-- Lucas numbers, Lucas number, Lucas series     [added to make searches easier.] --></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fib_luc</code>是一个功能。
    testString: assert(typeof fib_luc === 'function');
  - text: <code>fib_luc(2,10,"f")</code>应返回<code>[1,1,2,3,5,8,13,21,34,55]</code> 。
    testString: assert.deepEqual(fib_luc(2,10,"f"),ans[0]);
  - text: <code>fib_luc(3,15,"f")</code>应返回<code>[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]</code> 。
    testString: assert.deepEqual(fib_luc(3,15,"f"),ans[1]);
  - text: <code>fib_luc(4,15,"f")</code>应返回<code>[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]</code> 。
    testString: assert.deepEqual(fib_luc(4,15,"f"),ans[2]);
  - text: <code>fib_luc(2,10,"l")</code>应返回<code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code> <code>fib_luc(2,10,"l")</code> <code>[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]</code> 。
    testString: assert.deepEqual(fib_luc(2,10,"l"),ans[3]);
  - text: <code>fib_luc(3,15,"l")</code>应返回<code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code> <code>fib_luc(3,15,"l")</code> <code>[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]</code> 。
    testString: assert.deepEqual(fib_luc(3,15,"l"),ans[4]);
  - text: <code>fib_luc(4,15,"l")</code>应该返回<code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code> <code>fib_luc(4,15,"l")</code> <code>[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]</code> 。
    testString: assert.deepEqual(fib_luc(4,15,"l"),ans[5]);
  - text: <code>fib_luc(5,15,"l")</code>应该返回<code>[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]</code> 。
    testString: assert.deepEqual(fib_luc(5,15,"l"),ans[6]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fib_luc (n, len, w) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
