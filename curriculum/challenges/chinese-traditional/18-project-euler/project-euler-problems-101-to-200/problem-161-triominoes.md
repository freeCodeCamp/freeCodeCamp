---
id: 5900f40d1000cf542c50ff20
title: '問題161：三連方'
challengeType: 1
forumTopicId: 301795
dashedName: problem-161-triominoes
---

# --description--

A triomino is a shape consisting of three squares joined via the edges.

這是兩種基本形式：

<img class="img-responsive center-block" alt="兩種基本三連方形式" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-1.gif" style="background-color: white; padding: 10px;" />

如果考慮到所有可能的方向，就有六種情況：

<img class="img-responsive center-block" alt="包含旋轉狀態的三連方形式" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-2.gif" style="background-color: white; padding: 10px;" />

任意一個 n×m 的網格滿足 n*m 可以被3整除，則可以使用三連方平鋪。 如果我們設定通過其他瓦片鏡像或旋轉獲得是不相同的，那麼就有41種方式可以用三連方鋪滿一個2x9的網格：

<img class="img-responsive center-block" alt="41種用三連方填充2x9網格的方式動畫" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-3.gif" style="background-color: white; padding: 10px;" />

請問有多少種方式可以用三連方鋪滿一個9x12的網格？

# --hints--

`triominoes()` 應該返回 `20574308184277972`

```js
assert.strictEqual(triominoes(), 20574308184277972);
```

# --seed--

## --seed-contents--

```js
function triominoes() {

  return true;
}

triominoes();
```

# --solutions--

```js
// solution required
```
