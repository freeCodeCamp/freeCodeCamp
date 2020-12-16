---
id: 5900f3891000cf542c50fe9c
title: 问题29：不同的权力
challengeType: 5
videoUrl: ''
---

# --description--

考虑2≤a≤5和2≤b≤5的ab的所有整数组合：

22 = 4、23 = 8、24 = 16、25 = 32

32 = 9、33 = 27、34 = 81、35 = 243

42 = 16、43 = 64、44 = 256、45 = 1024

52 = 25、53 = 125、54 = 625、55 = 3125

如果然后按数字顺序放置它们，并删除所有重复项，则会得到以下15个不同术语的序列：

4，8，9，16，25，27，32，64，81，125，243，256，625，1024，3125

对于2≤a≤n和2≤b≤n，由ab生成的序列中有多少个不同的项？

# --hints--

`distinctPowers(15)`应该返回177。

```js
assert.strictEqual(distinctPowers(15), 177);
```

`distinctPowers(20)`应该返回324。

```js
assert.strictEqual(distinctPowers(20), 324);
```

`distinctPowers(25)`应该返回519。

```js
assert.strictEqual(distinctPowers(25), 519);
```

`distinctPowers(30)`应该返回755。

```js
assert.strictEqual(distinctPowers(30), 755);
```

# --solutions--

