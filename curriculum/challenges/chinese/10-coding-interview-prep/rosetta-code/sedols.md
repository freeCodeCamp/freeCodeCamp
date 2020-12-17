---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 5
videoUrl: ''
---

# --description--

任务：

对于6位[SEDOL](https://en.wikipedia.org/wiki/SEDOL "wp：SEDOL")的每个数字列表，计算并附加校验和数字。

也就是说，给定左侧的输入字符串，您的函数应返回右侧的相应字符串：

```
 <pre> 710889 => 7108899 B0YBKJ => B0YBKJ7 406566 => 4065663 B0YBLH => B0YBLH2 228276 => 2282765 B0YBKL => B0YBKL9 557910 => 5579107 B0YBKR => B0YBKR5 585284 => 5852842 B0YBKT => B0YBKT7 B00030 => B000300 </pre> 
```

还要检查每个输入是否正确形成，尤其是对于SEDOL字符串中允许的有效字符。您的函数应在无效输入时返回`null` 。

# --hints--

`sedol`是一个功能。

```js
assert(typeof sedol === 'function');
```

`sedol('a')`应该返回null。

```js
assert(sedol('a') === null);
```

`sedol('710889')`应返回'7108899'。

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')`应该返回null。

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')`应该返回'228276'。

```js
assert(sedol('228276') === '2282765');
```

# --solutions--

