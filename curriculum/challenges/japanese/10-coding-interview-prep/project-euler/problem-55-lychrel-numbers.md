---
id: 5900f3a31000cf542c50feb6
title: '問題 55: リクレル数'
challengeType: 1
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

47 と、それを反転させた数字を足すと 47+ 74 = 121 となり、これは回文数です。

すべての数がこれほど早く回文数になるわけではありません。 下に例を示します。

<div style="margin-left: 4em;">
  349 + 943 = 1292<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

つまり、349 は操作を 3 回繰り返してようやく回分数になりました。

まだ証明されていませんが、196 などの一部の数は回文数にならないと考えられています。 反転と加算を行っても回文数にならない数は、リクレル数と呼ばれます。 これらの数値の理論的性質により、そしてこの問題の目的上、ある数がリクレル数でないと証明されるまでは、その数はリクレル数であると仮定します。 さらに、10000 未満のすべての数は、(i) 50 回未満の繰り返しで回文数になるか、(ii) いかなる計算能力を持つ人もこれまで回文数を作れていないかのいずれかである、と仮定します。 実際、回文数になるためにこの操作を 50 回より多く繰り返す必要のある最小の数は 10677 で、回文数は 4668731596684224866951378664 (53 回、28 桁) です。

驚くべきことに、それ自体がリクレル数である回文数が存在し、その最初の数は 4994 です。

`num` 未満のリクレル数はいくつありますか。

**注:** 2007 年 4 月 24 日、リクレル数の理論的性質を強調するために文言が若干修正されました。

# --hints--

`countLychrelNumbers(1000)` は数値を返す必要があります。

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` は 13 を返す必要があります。

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` は 39 を返す必要があります。

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` は 76 を返す必要があります。

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` は 140 を返す必要があります。

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` は 249 を返す必要があります。

```js
assert.strictEqual(countLychrelNumbers(10000), 249);
```

# --seed--

## --seed-contents--

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

# --solutions--

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```
