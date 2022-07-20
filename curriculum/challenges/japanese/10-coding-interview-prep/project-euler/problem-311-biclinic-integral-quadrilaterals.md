---
id: 5900f4a31000cf542c50ffb6
title: '問題 311: 二斜整数四辺形'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

四角形 $ABCD$ は、$1 ≤ AB &lt; BC &lt; CD &lt; AD$ かつ辺長が整数である凸四角形です。

$BD$ の長さは整数です。 $O$ は $BD$ の中点です。 $AO$ の長さは整数です。

$AO = CO ≤ BO = DO$ の場合、$ABCD$ を「二斜整数四辺形」(biclinic integral quadrilateral) と呼ぶことにします。

例えば、下の四辺形は $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$, $AO = CO = 23$ であり、二斜整数四角形です。

<img class="img-responsive center-block" alt="BD の中点を点 O とする四辺形 ABCD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$ を満たす相異なる二斜整数四角形 $ABCD$ の数を、$B(N)$ とします。 $B(10\\000) = 49$, $B(1\\,000\\000) = 38239$ であることを確認できます。

$B(10\\,000\\,000\\,000)$ を求めなさい。

# --hints--

`biclinicIntegralQuadrilaterals()` は `2466018557` を返す必要があります。

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function biclinicIntegralQuadrilaterals() {

  return true;
}

biclinicIntegralQuadrilaterals();
```

# --solutions--

```js
// solution required
```
