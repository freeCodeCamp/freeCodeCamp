---
id: 5ea2815a8640bcc6cb7dab3c
title: 萊克瑞爾數
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>通過反轉 <code>n₀</code> 並將其添加到 <code>n₀</code> 中，形成系列的下一個數字 <code>n</code></li>
  <li>當 <code>n</code> 變成迴文時停止 - 即 <code>n</code> 的數字倒序 == <code>n</code>。</li>
</ol>

The above recurrence relation when applied to most starting numbers `n` = 1, 2, ... terminates in a palindrome quite quickly.

例如，如果 `n₀` = 12 我們得到：

```bash
12
12 + 21 = 33,  a palindrome!
```

如果 `n₀` = 55 我們得到：

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

請注意，迴文檢查發生在添加 *之後*。

一些起始數字似乎永遠持續下去； 196 的遞推關係已經計算了數百萬次重複，形成數百萬位的數字，而不形成迴文。 這些不以迴文結尾的數字稱爲 **萊克瑞爾數字**。

出於此任務的目的，Lychrel 數是在 500（或更多）次迭代內不形成迴文的任何起始數。

**種子和相關的 Lychrel 數：**

在利克瑞爾數的序列中產生的任何整數也是利克瑞爾數。

一般來說，來自一個 Lychrel 數的任何序列 *可能* 收斂以加入來自先前 Lychrel 數候選的序列；例如數字 196 和 689 的序列開始：

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

所以我們看到從 689 開始的序列收斂到，並以與 196 相同的數字繼續。

因此，我們可以將 Lychrel 數進一步拆分爲真正的 **Seed** 候選 Lychrel 數；以及沒有產生迴文，但在它們的序列中有整數被視爲從較低的 Lychrel 數生成的序列的一部分的 ** Related ** 數。

# --instructions--

編寫一個以數字爲參數的函數。 如果數字是 Lynchrel 數字，則返回 true。 否則，返回 false。 請記住，迭代限制爲 500。

# --hints--

`isLychrel` 應該是一個函數。

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` 應該返回一個布爾值。

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` 應該返回 `false`。

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` 應該返回 `false`。

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` 應該返回 `true`。

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` 應該返回 `true`。

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` 應該返回 `false`。

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` 應該返回 `true`。

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
