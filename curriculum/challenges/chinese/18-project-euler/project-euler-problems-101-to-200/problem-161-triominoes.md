---
id: 5900f40d1000cf542c50ff20
title: '问题161：三连方'
challengeType: 1
forumTopicId: 301795
dashedName: problem-161-triominoes
---

# --description--

A triomino is a shape consisting of three squares joined via the edges.

这是两种基本形式：

<img class="img-responsive center-block" alt="两种基本三连方形式" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-1.gif" style="background-color: white; padding: 10px;" />

如果考虑到所有可能的方向，就有六种情况：

<img class="img-responsive center-block" alt="包含旋转状态的三连方形式" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-2.gif" style="background-color: white; padding: 10px;" />

任意一个 n×m 的网格满足 n*m 可以被3整除，则可以使用三连方平铺。 如果我们设定通过其他瓦片镜像或旋转获得是不相同的，那么就有41种方式可以用三连方铺满一个2x9的网格：

<img class="img-responsive center-block" alt="41种用三连方填充2x9网格的方式动画" src="https://cdn.freecodecamp.org/curriculum/project-euler/triominoes-3.gif" style="background-color: white; padding: 10px;" />

请问有多少种方式可以用三连方铺满一个9x12的网格？

# --hints--

`triominoes()` 应该返回 `20574308184277972`

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
