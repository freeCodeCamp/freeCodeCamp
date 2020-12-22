---
id: a5229172f011153519423690
title: 求斐波那契数组中的奇数之和
challengeType: 5
forumTopicId: 16084
---

# --description--

在这道题目中，我们需要写一个函数，参数为一个正整数`num`。它的作用是计算斐波那契数列中，小于或等于`num`的奇数之和。

斐波那契数列中，第一和第二个数字都是 1，后面的每个数字由之前两数相加得出。斐波那契数列的前六个数字分别为：1、1、2、3、5、8。

比如，`sumFibs(10)`应该返回`10`。因为斐波那契数列中，比`10`小的数字只有 1、1、3、5。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`sumFibs(1)`应该返回一个数字。

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)`应该返回 1785。

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)`应该返回 4613732。

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)`应该返回 5。

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)`应该返回 60696。

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)`应该返回 135721。

```js
assert(sumFibs(75025) === 135721);
```

# --solutions--

