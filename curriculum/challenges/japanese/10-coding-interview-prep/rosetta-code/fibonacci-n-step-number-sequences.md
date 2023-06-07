---
id: 598eef80ba501f1268170e1e
title: フィボナッチ n-ステップ 数列
challengeType: 1
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

These number series are an expansion of the ordinary Fibonacci sequence where:

<ol>
  <li>$n = 2$ の場合、初期値が$[1, 1]$ と $F_k^2 = F_{k-1}^2 + F_{k-2}^2$ であるフィボナッチ数列となります。</li>
  <li>$n = 3$の場合、初期値が $[1, 1, 2]$ と $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$ であるトリボナッチ数列となります。</li>
  <li>$n = 4$の場合、初期値が $[1, 1, 2, 4]$ と $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...であるテトラナッチ数列となります。</li>
  <li>通常の $n>2$ の場合は、フィボナッチ $n$-ステップ数列 - $F_k^n$となります。初期値は、$(n-1)$'th フィボナッチ $n$-ステップ数列 $F_k^{n-1}$ の最初の $n$ 値で、$n$ 番目の数列の $k$' 番目の値は、$F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$です。</li>
</ol>

For small values of $n$, Greek numeric prefixes are sometimes used to individually name each series.

フィボナッチ $n$-ステップ 数列:

| $n$ | 数列名    | 値                                                      |
| --- | ------ | ------------------------------------------------------ |
| 2   | フィボナッチ | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | トリボナッチ | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | テトラナッチ | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | ペンタナッチ | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | ヘキサナッチ | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | ヘプタナッチ | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | オクタナッチ | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | ノナナッチ  | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | デカナッチ  | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

Allied sequences can be generated where the initial values are changed: The Lucas series sums the two preceding values like the fibonacci series for $n=2$ but uses $\[2, 1]$ as its initial values.

# --instructions--

フィボナッチ $n$-ステップ 数列とルーカス数列を生成する関数を作成します。 最初のパラメータは $n$ です。 2 番目のパラメータは、返される要素の数です。 3つ目のパラメータはフィボナッチ数列とルーカス数列のどちらを出力するかを指定します。 パラメータが `"f"` の場合、フィボナッチ数列を返し、`"l"`の場合、ルーカス数列を返します。 数列は配列として返される必要があります。

# --hints--

`fib_luc` という関数です。

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` は `[1,1,2,3,5,8,13,21,34,55]` を返します。

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` は `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]` を返します。

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")`は `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]` を返します。

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` は `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]` を返します。

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` は `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]` を返します。

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` は `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]` を返します。

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` は `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]` を返します。

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
