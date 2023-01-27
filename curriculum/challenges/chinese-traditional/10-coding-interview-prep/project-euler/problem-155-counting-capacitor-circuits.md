---
id: 5900f4081000cf542c50ff1a
title: 'Problem 155: Counting Capacitor Circuits'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

An electric circuit uses exclusively identical capacitors of the same value C.

電容器可以串聯或並聯連接以形成子單元，子單元然後可以與其他電容器或其他子單元串聯或並聯連接以形成更大的子單元，以此類推直到最終電路。

使用這個簡單的程序和最多 n 個相同的電容器，我們可以製作具有不同總電容範圍的電路。 例如，最多使用 $n = 3$ 個 $60 μF$ 的電容器， 我們可以獲得以下 7 個不同的總電容值：

<img class="img-responsive center-block" alt="示例電路最多有三個電容器，每個 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

如果我們用 $D(n)$ 表示當使用最多 $n$ 個等值電容器時，我們採用上述簡單程序可以獲得的不同總電容值的數量，我們得到：$D(1) = 1, D(2) = 3, D(3)=7, \ldots$。

求 $D(18)$。

提醒：當並連 $C_1$, $C_2$ 等電容器時，總容量爲 $C_T = C_1 + C_2 + \cdots$；而當串連它們時，總容量爲 $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$。

# --hints--

`capacitanceValues()` 應得 `3857447`。

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
