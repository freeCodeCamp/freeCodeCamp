---
id: 5992e222d397f00d21122931
title: 斐波那契字
challengeType: 5
videoUrl: ''
---

# --description--

<p>编写一个函数将Fibonacci字返回到N.N将作为参数提供给函数。该函数应返回一个对象数组。对象的形式应为：{N：1，长度：1，熵：0，单词：'1'}。更多细节如下： </p><p> Fibonacci Word可以类似于Fibonacci Sequence的方式创建， <a href='http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf' title='链接：http：//hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf'>如下所述</a> ： </p><p>将F_Word <sub>1</sub>定义为1 </p><p>将F_Word <sub>2</sub>定义为0 </p><p>将F_Word <sub>3表示</sub>为F_Word <sub>2</sub>与F_Word <sub>1</sub>连接，即：01 </p><p>将F_Word <sub>n表示</sub>为F_Word <sub>n-1</sub>与F_word <sub>n-2连接</sub> </p>

# --hints--

`fibWord`是一个功能。

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)`应该返回一个数组。

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)`应该返回`'+JSON.stringify(ans)+'` 。

```js
assert.deepEqual(fibWord(5), ans);
```

# --solutions--

