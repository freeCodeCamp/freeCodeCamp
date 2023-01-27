---
id: 59c3ec9f15068017c96eb8a3
title: ファレイ数列
challengeType: 1
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

The Farey sequence <code>F<sub>n</sub></code> of order `n` is the sequence of completely reduced fractions between `0` and `1` which, when in lowest terms, have denominators less than or equal to `n`, arranged in order of increasing size.

*ファレイ数列* は、 間違って *ファレイseries* と呼ばれることがあります。

各ファレイ数列：

<ul>
  <li>値は 0 から始まり、分数 $ \frac{0}{1}$ で表されます。</li>
  <li>値は 1 で終わり、分数 $ \frac{1}{1}$ で表されます。</li>
</ul>

`1` から `5` のファレイ数列は以下のとおりです。

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

位数 `n` のファレイ数列を返す関数を作成します。 関数にはパラメータ `n` が必要です。 関数は数列を配列として返します。

# --hints--

`farey` という関数です。

```js
assert(typeof farey === 'function');
```

`farey(3)` は配列を返します。

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` は `["1/3","1/2","2/3"]` を返します。

```js
assert.deepEqual(farey(3), ['1/3', '1/2', '2/3']);
```

`farey(4)` は `["1/4","1/3","1/2","2/4","2/3","3/4"]` を返します。

```js
assert.deepEqual(farey(4), ['1/4', '1/3', '1/2', '2/4', '2/3', '3/4']);
```

`farey(5)` は `["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]` を返します。

```js
assert.deepEqual(farey(5), [
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '2/4',
  '3/5',
  '2/3',
  '3/4',
  '4/5'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n){
    let farSeq=[];
    for(let den = 1; den <= n; den++){
        for(let num = 1; num < den; num++){
            farSeq.push({
                str:num+"/"+den,
                val:num/den});
        }
    }
    farSeq.sort(function(a,b){
        return a.val-b.val;
    });
    farSeq=farSeq.map(function(a){
        return a.str;
    });
    return farSeq;
}
```
