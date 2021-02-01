---
id: 5900f4b71000cf542c50ffc9
title: 问题330：欧拉数
challengeType: 5
videoUrl: ''
dashedName: problem-330-eulers-number
---

# --description--

为所有整数n定义了无限的实数序列a（n），如下所示：

例如，a（0）= 11！ + 12！ + 13！ + ... = e - 1 a（1）= e - 11！ + 12！ + 13！ + ... = 2e - 3 a（2）= 2e - 31！ + e - 12！ + 13！ + ... = 72 e - 6

e = 2.7182818 ......是欧拉常数。

可以证明a（n）是形式

```
 A(n) e + B(n)n! for integers A(n) and B(n). 
```

例如a（10）=

```
 328161643 e − 65269448610! . 
```

求A（109）+ B（109）并给出答案mod 77 777 777。

# --hints--

`euler330()`应该返回15955822。

```js
assert.strictEqual(euler330(), 15955822);
```

# --seed--

## --seed-contents--

```js
function euler330() {

  return true;
}

euler330();
```

# --solutions--

```js
// solution required
```
