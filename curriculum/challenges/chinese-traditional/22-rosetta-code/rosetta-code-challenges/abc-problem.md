---
id: 594810f028c0303b75339acc
title: ABC 問題
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

# --instructions--

實現一個函數，該函數接受一個字符串（單詞），並確定該單詞是否可以用給定的塊集合拼寫。

要記住的一些規則：

<ul>
  <li>Once a letter on a block is used, that block cannot be used again.</li>
  <li>該函數應該不區分大小寫。</li>
</ul>

# --hints--

`canMakeWord` 應該是一個函數。

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` 應該返回一個布爾值。

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` 應該返回 true。

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` 應該返回 false。

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` 應該返回 true。

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` should return false.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` 應該返回 true。

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` 應該返回 true。

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
