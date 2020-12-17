---
id: 5900f50f1000cf542c510021
title: 问题418：三重分解
challengeType: 5
videoUrl: ''
---

# --description--

令n为正整数。 在以下情况下，整数三元组（a，b，c）称为n的分解三元组：

a·b·c = n。

将f（n）定义为n的因式分解三元组（a，b，c）的a + b + c，使c / a最小。 可以证明这一三元组是独特的。

例如，f（165）= 19，f（100100）= 142，f（20！）= 4034872。

查找f（43！）。

# --hints--

`euler418()`应该返回1177163565297340400。

```js
assert.strictEqual(euler418(), 1177163565297340400);
```

# --solutions--

