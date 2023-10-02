---
id: 5900f3851000cf542c50fe98
title: '問題 25: 1000 桁のフィボナッチ数'
challengeType: 1
forumTopicId: 301897
dashedName: problem-25-1000-digit-fibonacci-number
---

# --description--

フィボナッチ数列は次の漸化関係によって定義されます。

<div style='padding-left: 4em;'>F<sub>n</sub> = F<sub>n−1</sub> + F<sub>n−2</sub> ここで、F<sub>1</sub> = 1 かつ F<sub>2</sub> = 1</div>

最初の 12 項は次のとおりです。

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div>F<sub>1</sub> = 1</div><div>F<sub>2</sub> = 1</div><div>F<sub>3</sub> = 2</div><div>F<sub>4</sub> = 3</div><div>F<sub>5</sub> = 5</div><div>F<sub>6</sub> = 8</div><div>F<sub>7</sub> = 13</div><div>F<sub>8</sub> = 21</div><div>F<sub>9</sub> = 34</div><div>F<sub>10</sub> = 55</div><div>F<sub>11</sub> = 89</div><div>F<sub>12</sub> = 144</div></div>

12 番目の項、F<sub>12</sub> で初めて 3 桁に達します。

フィボナッチ数列で初めて `n` 桁に達する項は何番目の項ですか。

# --hints--

`digitFibonacci(5)` は数値を返す必要があります。

```js
assert(typeof digitFibonacci(5) === 'number');
```

`digitFibonacci(5)` は 21 を返す必要があります。

```js
assert.strictEqual(digitFibonacci(5), 21);
```

`digitFibonacci(10)` は 45 を返す必要があります。

```js
assert.strictEqual(digitFibonacci(10), 45);
```

`digitFibonacci(15)` は 69 を返す必要があります。

```js
assert.strictEqual(digitFibonacci(15), 69);
```

`digitFibonacci(20)` は 93 を返す必要があります。

```js
assert.strictEqual(digitFibonacci(20), 93);
```

# --seed--

## --seed-contents--

```js
function digitFibonacci(n) {

  return n;
}

digitFibonacci(20);
```

# --solutions--

```js
const digitFibonacci = (n) => {
  const digits = (num) => {
    return num.toString().length;
  };
  let f1 = 1;
  let f2 = 1;
  let index = 3;
  while (true) {
    let fn = f1 + f2;
    if (digits(fn) === n) return index;
    [f1, f2] = [f2, fn];
    index++;
  }
};
```
