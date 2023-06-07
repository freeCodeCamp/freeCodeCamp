---
id: 594810f028c0303b75339acc
title: ABC問題
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

ABCブロック一式が与えられます (例えば、子供用のアルファベットブロック)。 20個のブロックがあり、各ブロックに2文字入っています。 ブロックの全側面を見れば、すべてのアルファベットが必ずあります。 ブロックのサンプル一式:

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

文字列(単語)を取って、与えられたブロック一式で単語が作れるかを判定する関数を作成します。

留意すべきルール:

<ul>
  <li>ブロック上の文字を使用すると、そのブロックは再度使用することはできません。</li>
  <li>関数は大文字小文字を区別しません。</li>
</ul>

# --hints--

`canMakeWord` という関数です。

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` はブール値を返します。

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")`は真を返します。

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")`は偽を返します。

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")`は真を返します。

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")`は偽を返します。

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")`は真を返します。

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")`は真を返します。

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
