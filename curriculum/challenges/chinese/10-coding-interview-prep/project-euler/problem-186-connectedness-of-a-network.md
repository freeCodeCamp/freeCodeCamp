---
id: 5900f4281000cf542c50ff39
title: 问题186：网络的连通性
challengeType: 5
videoUrl: ''
dashedName: problem-186-connectedness-of-a-network
---

# --description--

以下是来自拥有100万用户的繁忙电话系统的记录：

RecNrCallerCalled120000710005326001835004393600863701497 .........来电者的电话号码和记录n中的被叫号码是来电者（n）= S2n-1和被叫（n）= S2n，其中S1,2,3，...来来自“Lagged Fibonacci Generator”：

对于1≤k≤55，Sk = \[100003 - 200003k + 300007k3]（模1000000）对于56≤k，Sk = \[Sk-24 + Sk-55]（模1000000）

如果Caller（n）= Called（n），则假定用户误操作并且呼叫失败;否则通话成功。

从记录的开头，我们说如果X调用Y，则任何一对用户X和Y都是朋友，反之亦然。类似地，如果X是Y的朋友并且Y是Z的朋友，则X是Z的朋友的朋友;等等更长的链条。

总理的电话号码是524287.经过多少次成功的电话，不计算误操作，99％的用户（包括PM）将成为总理的朋友，朋友的朋友等？

# --hints--

`euler186()`应返回2325629。

```js
assert.strictEqual(euler186(), 2325629);
```

# --seed--

## --seed-contents--

```js
function euler186() {

  return true;
}

euler186();
```

# --solutions--

```js
// solution required
```
