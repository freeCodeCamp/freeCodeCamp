---
id: 5900f4081000cf542c50ff1a
title: 'Problem 155: Counting Capacitor Circuits'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

An electric circuit uses exclusively identical capacitors of the same value C.

电容器可以串联或并联连接以形成子单元，子单元然后可以与其他电容器或其他子单元串联或并联连接以形成更大的子单元，以此类推直到最终电路。

使用这个简单的程序和最多 n 个相同的电容器，我们可以制作具有不同总电容范围的电路。 例如，最多使用 $n = 3$ 个 $60 μF$ 的电容器， 我们可以获得以下 7 个不同的总电容值：

<img class="img-responsive center-block" alt="示例电路最多有三个电容器，每个 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

如果我们用 $D(n)$ 表示当使用最多 $n$ 个等值电容器时，我们采用上述简单程序可以获得的不同总电容值的数量，我们得到：$D(1) = 1, D(2) = 3, D(3)=7, \ldots$。

求 $D(18)$。

提醒：当并连 $C_1$, $C_2$ 等电容器时，总容量为 $C_T = C_1 + C_2 + \cdots$；而当串连它们时，总容量为 $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$。

# --hints--

`capacitanceValues()` 应得 `3857447`。

```js
assert.strictEqual(capacitanceValues(), 3857447);
```

# --seed--

## --seed-contents--

```js
function capacitanceValues() {

  return true;
}

capacitanceValues();
```

# --solutions--

```js
// solution required
```
