---
id: 5900f5411000cf542c510054
title: 问题468：二项式系数的平滑除数
challengeType: 5
videoUrl: ''
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

如果没有一个整数因子大于B，则整数称为B-smooth。

设SB（n）是n的最大B-平滑除数。示例：S1（10）= 1 S4（2100）= 12 S17（2496144）= 5712

定义F（n）=Σ1≤B≤nΣ0≤r≤nSB（C（n，r））。这里，C（n，r）表示二项式系数。示例：F（11）= 3132 F（1 111）mod 1 000 000 993 = 706036312 F（111 111）mod 1 000 000 993 = 22156169

求F（11 111 111）mod 1 000 000 993。

# --hints--

`euler468()`应该返回852950321。

```js
assert.strictEqual(euler468(), 852950321);
```

# --seed--

## --seed-contents--

```js
function euler468() {

  return true;
}

euler468();
```

# --solutions--

```js
// solution required
```
