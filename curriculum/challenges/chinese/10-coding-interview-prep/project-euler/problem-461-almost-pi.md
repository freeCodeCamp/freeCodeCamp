---
id: 5900f53a1000cf542c51004c
title: 问题461：几乎是Pi
challengeType: 5
videoUrl: ''
---

# --description--

对于所有非负整数k，设fn（k）= ek / n-1。值得注意的是，f200（6）+ f200（75）+ f200（89）+ f200（226）= 3.141592644529 ...≈π。事实上，对于n = 200，它是fn（a）+ fn（b）+ fn（c）+ fn（d）形式的π的最佳近似值。设g（n）= a2 + b2 + c2 + d 2为a，b，c，d最小化错误：| fn（a）+ fn（b）+ fn（c）+ fn（d） - π| （其中| x |表示x的绝对值）。给出g（200）= 62 + 752 + 892 + 2262 = 64658.求g（10000）。

# --hints--

`euler461()`应该返回159820276。

```js
assert.strictEqual(euler461(), 159820276);
```

# --solutions--

