---
id: 5900f3b01000cf542c50fec3
title: '問題 68: 魔法の五角リング'
challengeType: 1
forumTopicId: 302180
dashedName: problem-68-magic-5-gon-ring
---

# --description--

下図は 1 から 6 までの数字が埋められた「魔法」の三角リングで、それぞれの線に沿って数字を足していくと 9 になります。

<img class="img-responsive center-block" alt="三角リングの完成例" src="https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png" style="background-color: white; padding: 10px;" />

外側のノードのうち値が最も低いノードから伸びる線上にある 3 つのノードのグループ (この例では 4, 3, 2) から始めて、**時計回り** に進むと、それぞれの解を一意に記述できます。 例えば、上の解は 4,3,2; 6,2,1; 5,1,3 という集合で表すことができます。

4 種類の和 (9, 10, 11, 12) でリングを完成させることができます。 全部で 8 つの解があります。

<div style='text-align: center;'>

| !!crwdBlockTags_6_sgaTkcolBdwrc!! |!!crwdBlockTags_7_sgaTkcolBdwrc!! |
| -------------------------------------- | --------------------------------------------- |
| 9                                      | 4,2,3; 5,3,1; 6,1,2                           |
| 9                                      | 4,3,2; 6,2,1; 5,1,3                           |
| 10                                     | 2,3,5; 4,5,1; 6,1,3                           |
| 10                                     | 2,5,3; 6,3,1; 4,1,5                           |
| 11                                     | 1,4,6; 3,6,2; 5,2,4                           |
| 11                                     | 1,6,4; 5,4,2; 3,2,6                           |
| 12                                     | 1,5,6; 2,6,4; 3,4,5                           |
| 12                                     | 1,6,5; 3,5,4; 2,4,6                           |

</div>

各グループを連結すると 9 桁の文字列になります。三角リングの最大文字列は 432621513 です。

1 から 10 の数字を使用した場合、それらの配置に応じて 16 桁および 17 桁の文字列が得られます。 「魔法」の五角リングで得られる **16 桁** の文字列のうち最大のものを求めなさい。

<img class="img-responsive center-block" alt="数字のない五角リングの図" src="https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png" style="background-color: white; padding: 10px;" />

# --hints--

`magic5GonRing()` は数値を返す必要があります。

```js
assert(typeof magic5GonRing() === 'number');
```

`magic5GonRing()` は 6531031914842725 を返す必要があります。

```js
assert.strictEqual(magic5GonRing(), 6531031914842725);
```

# --seed--

## --seed-contents--

```js
function magic5GonRing() {

  return true;
}

magic5GonRing();
```

# --solutions--

```js
// solution required
```
