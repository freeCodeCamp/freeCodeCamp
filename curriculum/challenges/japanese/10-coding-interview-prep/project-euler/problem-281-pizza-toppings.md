---
id: 5900f4861000cf542c50ff98
title: '問題 281: ピザのトッピング'
challengeType: 1
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

ピザ (完全な円) を $m·n$ 枚のスライスに等分し、各スライスにちょうど 1 つずつトッピングを載せます。

ちょうど $n$ 枚のスライス ($n ≥ 1$) にそれぞれのトッピングを使って、$m$ 種類のトッピング ($m ≥ 2$) でピザにトッピングを載せる方法が何通りあるかを、$f(m,n)$ で表します。 反転させたものは相異なるとみなされますが、回転させたものは同一とみなされます。

例えば、$f(2,1) = 1$, $f(2,2) = f(3,1) = 2$, $f(3,2) = 16$ です。 $f(3,2)$ を下に示します。

<img class="img-responsive center-block" alt="3 種類のトッピングを各 2 枚のスライスに載せる 16 通りの方法を示すアニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;" />

$f(m,n) ≤ {10}^{15}$ となる $f(m,n)$ の総和を求めなさい。

# --hints--

`pizzaToppings()` は `1485776387445623` を返す必要があります。

```js
assert.strictEqual(pizzaToppings(), 1485776387445623);
```

# --seed--

## --seed-contents--

```js
function pizzaToppings() {

  return true;
}

pizzaToppings();
```

# --solutions--

```js
// solution required
```
