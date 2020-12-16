---
id: 5a23c84252665b21eecc7ec5
title: 约瑟夫斯问题
challengeType: 5
videoUrl: ''
---

# --description--

[约瑟夫斯问题](<https://en.wikipedia.org/wiki/Josephus problem>)是一个严峻描述的数学难题：$ n $囚犯站在一个圆圈上，顺序编号从$ 0 $到$ n-1 $。一名刽子手沿着圈子走，从囚犯$ 0 $开始，移走每个$ k $囚犯并杀死他。随着过程的继续，圆圈变得越来越小，直到只剩下一个囚犯，然后被释放。例如，如果$ n = 5 $囚犯和$ k = 2 $，囚犯被杀的命令（我们称之为“杀戮序列”）将是1,3,0和4，幸存者将是＃2。鉴于任何$ n，k> 0 $ ，找出哪个囚犯将成为最后的幸存者。在一个这样的事件中，有41个囚犯和每3 <sup>次</sup>囚犯被杀死（$ K = 3 $）。其中有一个聪明的名字约瑟夫斯，他解决了这个问题，站在幸存的位置，并继续讲述这个故事。他是哪个号码？写一个函数，以囚犯的初始数量和'k'作为参数，并返回幸存的囚犯的数量。

# --hints--

`josephus`应该是一个功能。

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)`应该返回一个数字。

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)`应该回`29` 。

```js
assert.equal(josephus(30, 3), 29);
```

`josephus(30,5)`应该返回`3` 。

```js
assert.equal(josephus(30, 5), 3);
```

`josephus(20,2)`应该返回`9` 。

```js
assert.equal(josephus(20, 2), 9);
```

`josephus(17,6)`应该回归`2` 。

```js
assert.equal(josephus(17, 6), 2);
```

`josephus(29,4)`应该返回`2` 。

```js
assert.equal(josephus(29, 4), 2);
```

# --solutions--

