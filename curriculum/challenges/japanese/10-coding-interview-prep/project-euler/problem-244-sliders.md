---
id: 5900f4601000cf542c50ff72
title: '問題 244: スライダー'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

「15 パズル」というゲームをおそらく知っているでしょう。 ここでは、番号付けされたタイルの代わりに、7 枚の赤タイルと 8 枚の青タイルがあります。

移動は、タイルがスライドされる方向 (L=左、R=右、U=上、D=下) の大文字イニシャルで表されます。 例えば、ある構成 ($S$) から始め、文字列 $LULUR$ で表される移動により、構成 ($E$) に到達します。

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;" /> ($E$) <img class="img-responsive" alt="構成 E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;" />

それぞれの経路について、下記 (擬似コード) によってそのチェックサムが計算されます。

$$\begin{align}   & \text{チェックサム} = 0 \\\\
  & \text{チェックサム} = (\text{チェックサム} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\   & \text{チェックサム} = (\text{チェックサム} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\ & \text{チェックサム} = (\text{チェックサム} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007 \end{align}$$

ここで、$m_k$ は移動を表す文字列の $k$ 番目の文字の ASCII コード値です。この移動の ASCII コードを下表に示します。

$$\begin{array}{|c|c|} \hline L & 76 \\\\ \hline R & 82 \\\\ \hline U & 85 \\\\ \hline D & 68 \\\\ \hline \end{array}$$

上述の文字列 $LULUR$ の場合、チェックサムは 19761398 になるでしょう。 構成 ($S$) から始めて構成 ($T$) に到達するための、最短の移動経路をすべて求めなさい。

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;" /> ($T$) <img class="img-responsive center-block" alt="構成 T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;" />

長さが最小である経路のチェックサムの総和を求めなさい。

# --hints--

`sliders()` は `96356848` を返す必要があります。

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```
