---
id: 5900f4bd1000cf542c50ffcf
title: '問題 336: 最も不ぞろいな配置'
challengeType: 1
forumTopicId: 301994
dashedName: problem-336-maximix-arrangements
---

# --description--

4 つの貨物 $ABCD$ をこの順序に並べ、機関車で運びます。 しかし、機関車が貨物を受け取るために到着したとき、貨物が正しい順序に並んでいないことがあります。

順序を入れ替えるために、すべての貨物が大きな回転台に載せられます。 特定の個所で貨物が切り離された後、機関車はそれ自体に連結されている貨物をけん引しながら回転台から離れます。 残りの貨物は 180° 回転されます。 その後、すべての貨物が再び連結され、回転台の使用回数が最も少なくなるような方法で、正しい順序になるまでこの作業が繰り返されます。

$ADCB$ などの配置は簡単に直せます。貨物を $A$ と $D$ の間で切り離し、$DCB$ を回転すると正しい順序になります。

しかし、機関車を運転するシンプル・サイモンは効率が悪い人なので、いつも最初に貨物 $A$ を正しい位置に置き換え、次に貨物 $B$ を正しい位置に置き換え、以降も同様にすることで正しく並べ替えます。

貨物が 4 つある場合、サイモンにとって起こり得る最悪の配置 (「最も不ぞろいな配置」と呼ぶことにします) は $DACB$ と $DBAC$ で、それぞれ 5 回の回転が必要です (最も効率的な方法なら 3 回の回転で済むのですが)。 サイモンが $DACB$ に使用した手順を下に示します。

<img class="img-responsive center-block" alt="最も不ぞろいな配置 DACB で行われる 5 回の回転" src="https://cdn.freecodecamp.org/curriculum/project-euler/maximix-arrangements.gif" style="background-color: white; padding: 10px;" />

貨物が 6 つある場合、最も不ぞろいな配置は最大 24 個あり、そのうち辞書順で 10 番目の最も不ぞろいな配置が $DFAECB$ であることを確認できます。

貨物が 11 個があるとき、辞書順で ${2011}$ 番目の最も不ぞろいな配置を求めなさい。

# --hints--

`maximixArrangements()` は文字列を返す必要があります。

```js
assert(typeof maximixArrangements() === 'string');
```

`maximixArrangements()` は文字列 `CAGBIHEFJDK` を返す必要があります。

```js
assert.strictEqual(maximixArrangements(), 'CAGBIHEFJDK');
```

# --seed--

## --seed-contents--

```js
function maximixArrangements() {

  return true;
}

maximixArrangements();
```

# --solutions--

```js
// solution required
```
