---
id: 5900f4091000cf542c50ff1c
title: '問題 157: ディオファントス方程式を解く'
challengeType: 1
forumTopicId: 301788
dashedName: problem-157-solving-the-diophantine-equation
---

# --description--

$a$, $b$, $p$, $n$ を正の整数とし、$a ≤ b$ を満たすディオファントス方程式 $\frac{1}{a} + \frac{1}{b} = \frac{p}{{10}^n}$ について考えます。

$n = 1$ のとき、この方程式は次の 20 個の解を持ちます。

$$\begin{array}{lllll} \frac{1}{1}  + \frac{1}{1}  = \frac{20}{10} & \frac{1}{1} + \frac{1}{2}  = \frac{15}{10} & \frac{1}{1}  + \frac{1}{5}  = \frac{12}{10} & \frac{1}{1} + \frac{1}{10} = \frac{11}{10} & \frac{1}{2}  + \frac{1}{2}  = \frac{10}{10} \\\\
  \frac{1}{2}  + \frac{1}{5}  = \frac{7}{10}   & \frac{1}{2} + \frac{1}{10} = \frac{6}{10} & \frac{1}{3}  + \frac{1}{6}  = \frac{5}{10}   & \frac{1}{3} + \frac{1}{15} = \frac{4}{10} & \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10} \\\\
  \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10}  & \frac{1}{5}  + \frac{1}{5}  = \frac{4}{10} & \frac{1}{5}  + \frac{1}{10} = \frac{3}{10}  & \frac{1}{6}  + \frac{1}{30} = \frac{2}{10} & \frac{1}{10} + \frac{1}{10} = \frac{2}{10} \\\\
  \frac{1}{11} + \frac{1}{110} = \frac{1}{10} & \frac{1}{12} + \frac{1}{60}  = \frac{1}{10} & \frac{1}{14} + \frac{1}{35}  = \frac{1}{10} & \frac{1}{15} + \frac{1}{30}  = \frac{1}{10} & \frac{1}{20} + \frac{1}{20}  = \frac{1}{10} \end{array}$$

$1 ≤ n ≤ 9$ のとき、この方程式の解はいくつありますか。

# --hints--

`diophantineEquation()` は `53490` を返す必要があります。

```js
assert.strictEqual(diophantineEquation(), 53490);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation() {

  return true;
}

diophantineEquation();
```

# --solutions--

```js
// solution required
```
