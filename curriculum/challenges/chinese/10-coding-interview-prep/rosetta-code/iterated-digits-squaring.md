---
id: 5a23c84252665b21eecc7ec1
title: 迭代的数字平方
challengeType: 5
videoUrl: ''
---

# --description--

如果添加自然数（大于零的整数）的数字的平方，则始终以1或89结尾：

```
 15  - > 26  - > 40  - > 16  - > 37  - > 58  - > 89
7  - > 49  - > 97  - > 130  - > 10  - > 1 
```

编写一个函数，该函数将数字作为参数，并在执行上述过程后返回1或89。

# --hints--

`iteratedSquare`应该是一个函数。

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)`应该返回一个数字。

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)`应该返回`89` 。

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)`应该返回`1` 。

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)`应该返回`89` 。

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)`应该返回`89` 。

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)`应该返回`1` 。

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)`应该返回`1` 。

```js
assert.equal(iteratedSquare(100), 1);
```

# --solutions--

