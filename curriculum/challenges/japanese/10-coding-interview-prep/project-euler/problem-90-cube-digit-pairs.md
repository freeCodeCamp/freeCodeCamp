---
id: 5900f3c61000cf542c50fed9
title: '問題 90: 立方体に記された数字の対'
challengeType: 1
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

1 つの立方体の 6 面に、それぞれ異なる数字 (0 から 9 のいずれか) が記されています。2 つ目の立方体も同様です。 2 つの立方体を並べ、見える面を変えていくことで、さまざまな 2 桁の数字を作ることができます。

例えば、次のように平方数 64 を作れます。

<img class="img-responsive center-block" alt="一方が 6、他方が 4 を示している 2 つの立方体" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;" />

事実、両方の立方体の数字を慎重に選ぶことによって、100 未満の平方数 (01, 04, 09, 16, 25, 36, 49, 64, 81) をすべて作ることができます。

例えば、これを可能にする方法の一つは、一方の立方体に {0, 5, 6, 7, 8, 9}、他方の立方体に {1, 2, 3, 4, 8, 9} を記すことです。

ただしこの問題では、6 または 9 を上下逆さにして使うことが許されます。そうすると、例えば {0, 5, 6, 7, 8, 9} と {1, 2, 3, 4, 6, 7} でも 9 つの平方数をすべて作れます (上下逆さにすることが許されないと 09 を作れません)。

相異なる配列かどうかの判断基準は、各立方体に記された数字の大きさであり、その順序は関係ありません。

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} は {3, 6, 4, 1, 2, 5} と等しい<br>
  {1, 2, 3, 4, 5, 6} は {1, 2, 3, 4, 5, 9} と相異なる
</div>

ただし 6 と 9 を上下逆さにして使用できるので、上の例にある相異なる 2 つの集合はいずれも、2 桁の数字を作るという目的上は拡張集合 {1, 2, 3, 4, 5, 6, 9} を表しています。

それらの平方数をすべて作れる 2 つの立方体の相異なる配列は何通りありますか。

# --hints--

`cubeDigitPairs()` は数値を返す必要があります。

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` は 1217 を返す必要があります。

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
