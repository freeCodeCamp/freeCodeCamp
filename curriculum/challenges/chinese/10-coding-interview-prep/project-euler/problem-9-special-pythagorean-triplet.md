---
id: 5900f3761000cf542c50fe88
title: 问题9：特殊的毕达哥拉斯三重奏
challengeType: 5
videoUrl: ''
---

# --description--

毕达哥拉斯三元组是一组三个自然数， `a` &lt; `b` &lt; `c` ，其中，

`a` 

<sup>2</sup>

-   `b` 

<sup>2</sup>

 = `c` 

<sup>2</sup>

例如，3 

<sup>2</sup>

-   4 

<sup>2</sup>

 = 9 + 16 = 25 = 5 

<sup>2</sup>

 。恰好存在一个毕达哥拉斯三元组，其中`a` + `b` + `c` = 1000.求产品`abc`使得`a` + `b` + `c` = `n` 。

# --hints--

`specialPythagoreanTriplet(1000)`应返回31875000。

```js
assert.strictEqual(specialPythagoreanTriplet(1000), 31875000);
```

`specialPythagoreanTriplet(24)`应该返回480。

```js
assert.strictEqual(specialPythagoreanTriplet(24), 480);
```

`specialPythagoreanTriplet(120)`应该返回49920。

```js
assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));
```

# --solutions--

