---
id: 5949b579404977fbaefcd736
title: 90億の神の御名 整数
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(ソルバーは、このタスクの完了結果を認識している必要があります。)

「名前」が意味するものを詳細に示します。

<ul>
  <li>整数1には、「1」という名前があります。</li>
  <li>整数2には、「1+1」と「2」という2つの名前があります。</li>
  <li>整数3には、「1+1+ 1」と「2+1」と「3」という3つの名前があります。</li>
  <li>整数4には、「1+1+1+1」と「2+1」と「2+2」と「3+1」と「4」という5つの名前があります。</li>
  <li>整数 5 には、「1+1+1+1+1」と「2+1+1+ 1」と「2+2+1」と「3+1+1」と「3+2」と「4+1」と「5」という7つの名前があります。</li>
</ul>

これは以下の形式で表すことができます。

<pre>          1
        1 1
      1 1 1
    1 2 1 1
  1 2 1 1 1
1 3 3 2 1 1
</pre>

$n$ 行は、整数 $n$に相当し、左から右への $m$行内の$C$の各列は、$C$で始まる名前の数に相当します。

また、$n$番目の $P(n)$ 行の合計は、整数パーティション関数であることに注意してください。

# --instructions--

$n$番目の行の合計を返す関数を作成します。

# --hints--

`numberOfNames` という関数です。

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` は7に等しいです。

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` は77に等しいです。

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` は385に等しいです。

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` は1255に等しいです。

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` は53174に等しいです。

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` は2552338241に等しいです。

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
