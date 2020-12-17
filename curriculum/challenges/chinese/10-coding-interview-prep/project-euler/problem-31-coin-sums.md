---
id: 5900f38b1000cf542c50fe9e
title: 问题31：硬币总和
challengeType: 5
videoUrl: ''
---

# --description--

在英格兰，货币由英镑，英镑和便士p组成，并且有八种普通硬币流通：

1p，2p，5p，10p，20p，50p，£1（100p）和£2（200p）。

可以通过以下方式赚取£2：

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

使用任意数量的硬币可以制成多少种便士？

# --hints--

`digitnPowers(50)`应该返回451。

```js
assert(coinSums(50) == 451);
```

`digitnPowers(100)`应该返回4563。

```js
assert(coinSums(100) == 4563);
```

`digitnPowers(150)`应该返回21873。

```js
assert(coinSums(150) == 21873);
```

`digitnPowers(200)`应该返回73682。

```js
assert(coinSums(200) == 73682);
```

# --solutions--

