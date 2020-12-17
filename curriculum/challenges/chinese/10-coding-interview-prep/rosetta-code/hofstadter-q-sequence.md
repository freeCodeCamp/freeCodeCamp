---
id: 59637c4d89f6786115efd814
title: Hofstadter Q序列
challengeType: 5
videoUrl: ''
---

# --description--

<p> <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence' title='wp：Hofstadter_sequence＃Hofstadter_Q_sequence'>Hofstadter Q序列</a>定义为： </p><p> $ Q（1）= Q（2）= 1，\\ Q（n）= Q \ big（nQ（n-1）\ big）+ Q \ big（nQ（n-2）），\ quad n> 2. $ </p><p>它定义为<a href='http://rosettacode.org/wiki/Fibonacci sequence' title='斐波那契序列'>Fibonacci序列</a> ，但<a href='http://rosettacode.org/wiki/Fibonacci sequence' title='斐波那契序列'>Fibonacci序列中</a>的下一个术语是前两个术语的总和，在Q序列中，前两个术语告诉您在Q序列中返回多远以找到两个数字总结以制作序列的下一个术语。 </p>任务：将Hofstadter Q Sequence方程实现为JavaScript 

# --hints--

`hofstadterQ`是一个函数。

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()`应该返回`integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)`应该返回`502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)`应该返回`755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)`应该返回`1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)`应该返回`1261`

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --solutions--

