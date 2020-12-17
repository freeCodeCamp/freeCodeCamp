---
id: 597f24c1dda4e70f53c79c81
title: 斐波那契序列
challengeType: 5
videoUrl: ''
---

# --description--

<p>编写一个函数来生成第<big>n <sup>个</sup></big> Fibonacci数。 </p> /// <p>第<big>n <sup>个</sup></big> Fibonacci数由下式给出：/// </p><p> F <sub>n</sub> = F <sub>n-1</sub> + F <sub>n-2</sub> </p> /// <p>该系列的前两个术语是0,1。 </p> /// <p>因此，该系列是：0,1,1,2,3,5,8,13 ...... </p> /// 

# --hints--

`fibonacci`是一种功能。

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)`应该返回一个数字。

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)`应该返回1.“）

```js
assert.equal(fibonacci(3), 1);
```

`fibonacci(5)`应该返回3.“）

```js
assert.equal(fibonacci(5), 3);
```

`fibonacci(10)`应该返回34.“）

```js
assert.equal(fibonacci(10), 34);
```

# --solutions--

