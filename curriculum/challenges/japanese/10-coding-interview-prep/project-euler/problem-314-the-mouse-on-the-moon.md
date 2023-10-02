---
id: 5900f4a71000cf542c50ffb9
title: '問題 314: 『小鼠 月世界を征服』'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

月が開拓され、土地を無料で取得できるようになりました。しかし、1 つ問題があります。 確保した土地を壁で囲まなければなりませんが、月では壁を作るのにとてもお金がかかるのです。 各国には 500 m × 500 m の正方形の土地が割り当てられていますが、所有できるのは壁で囲んだ部分だけです。251001 本の杭が 1 m 間隔で長方形の格子状に配置されています。 壁は、閉じられた連続的直線でなければならず、それぞれの直線は杭と杭を結ぶものでなければなりません。

もちろん大国は 2000 m の壁を建設し、面積 250 000 $\text{m}^2$ の土地の全体を囲んでいます。 グランド・フェンウィック大公国は予算が厳しいため、皇帝プログラマーであるあなたに、$\frac{\text{囲まれた土地の面積}}{\text{壁の長さ}}$の比率が最も高くなるのはどのような形状かを計算するよう指示しました。

あなたは紙の上で予備的な計算を行いました。 2000 メートルの壁で 250 000 $\text{m}^2$ の土地を囲んだ場合、$\frac{\text{囲まれた土地の面積}}{\text{壁の長さ}}$の比率は 125 です。

規則には沿っていませんが、次の方法で比率が高くなるかどうかを考えてみます。正方形の土地の四辺に接するように円を入れると、面積は $π \times {250}^2 \text{m}^2$、周長は $π \times 500 \text{m}$ となり、この場合も、$\frac{\text{囲まれた土地の面積}}{\text{壁の長さ}}$の比率は 125 です。

しかし、辺が 75 m, 75 m, $75\sqrt{2}$ m の 三角形を土地の 4 隅 から切り離すと、面積は238750 $\text{m}^2$、周長は $1400 + 300\sqrt{2}$ m になります。 すると、$\frac{\text{囲まれた土地の面積}}{\text{壁の長さ}}$の比率は 130.87 で、先程より大幅に高くなります。

<img class="img-responsive center-block" alt="picture showing difference in enclosed-area between circle and square with cut off four triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;" />

$\frac{\text{囲まれた土地の面積}}{\text{壁の長さ}}$の比率の最大値を求めなさい。 回答は、四捨五入して小数第 8 位まで求め、abc.defghijk の形式にすること。

# --hints--

`theMouseOnTheMoon()` は `132.52756426` を返す必要があります。

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```
