---
id: 5900f4081000cf542c50ff1a
title: '問題 155: キャパシタ回路を数え上げる'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

ある電気回路は、C (電気容量) の値が同じである同一のキャパシタのみを使用しています。

いくつかのキャパシタを直列または並列に接続してサブユニットを作ります。そのサブユニットを別のキャパシタやサブユニットと直列または並列に接続して、サブユニットを拡張することができます。これを繰り返すことで最終的な回路が完成します。

この簡単な手順と、最大 n 個の同一キャパシタを使用して、さまざまな総容量の回路を作ることができます。 例えば、それぞれ $60 μF$ のキャパシタを最大 $n = 3$ 個使用すると、次に示す 7 種類の総容量値が得られます。

<img class="img-responsive center-block" alt="各 60 μF のキャパシタを最大 3 個持つ回路の例" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

最大 $n$ 個の同一値のキャパシタと、上述の簡単な手順とを使って得られる総容量値の種類の数を $D(n)$ とすると、$D(1) = 1, D(2) = 3, D(3)=7, \ldots$ となります。

$D(18)$ を求めなさい。

注: キャパシタ $C_1$, $C_2$ などを並列に接続したときの総電気容量は $C_T = C_1 + C_2 + \cdots$ であり、直列に接続したときの総電気容量は $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$ です。

# --hints--

`capacitanceValues()` は `3857447` を返す必要があります。

```js
assert.strictEqual(capacitanceValues(), 3857447);
```

# --seed--

## --seed-contents--

```js
function capacitanceValues() {

  return true;
}

capacitanceValues();
```

# --solutions--

```js
// solution required
```
