---
id: 5900f4091000cf542c50ff1c
title: 'Problema 157: Risolvere l''equazione diofantina'
challengeType: 1
forumTopicId: 301788
dashedName: problem-157-solving-the-diophantine-equation
---

# --description--

Considera l'equazione diofantina $\frac{1}{a} + \frac{1}{b} = \frac{p}{{10}^n}$ con $a$, $b$, $p$, $n$ interi positivi e $a ≤ b$.

Per $n = 1$ questa equazione ha 20 soluzioni che sono elencate di seguito:

$$\begin{array}{lllll} \frac{1}{1}  + \frac{1}{1}  = \frac{20}{10} & \frac{1}{1} + \frac{1}{2}  = \frac{15}{10} & \frac{1}{1}  + \frac{1}{5}  = \frac{12}{10} & \frac{1}{1} + \frac{1}{10} = \frac{11}{10} & \frac{1}{2}  + \frac{1}{2}  = \frac{10}{10} \\\\
  \frac{1}{2}  + \frac{1}{5}  = \frac{7}{10}   & \frac{1}{2} + \frac{1}{10} = \frac{6}{10} & \frac{1}{3}  + \frac{1}{6}  = \frac{5}{10}   & \frac{1}{3} + \frac{1}{15} = \frac{4}{10} & \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10} \\\\
  \frac{1}{4}  + \frac{1}{4}  = \frac{5}{10}  & \frac{1}{5}  + \frac{1}{5}  = \frac{4}{10} & \frac{1}{5}  + \frac{1}{10} = \frac{3}{10}  & \frac{1}{6}  + \frac{1}{30} = \frac{2}{10} & \frac{1}{10} + \frac{1}{10} = \frac{2}{10} \\\\
  \frac{1}{11} + \frac{1}{110} = \frac{1}{10} & \frac{1}{12} + \frac{1}{60}  = \frac{1}{10} & \frac{1}{14} + \frac{1}{35}  = \frac{1}{10} & \frac{1}{15} + \frac{1}{30}  = \frac{1}{10} & \frac{1}{20} + \frac{1}{20}  = \frac{1}{10} \end{array}$$

Quante soluzioni ha questa equazione per $1 ≤ n ≤ 9$?

# --hints--

`diophantineEquation()` dovrebbe restituire `53490`.

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
