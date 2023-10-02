---
id: a7bf700cd123b9a54eef01d5
title: 请不要重复
challengeType: 1
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

返回没有重复连续字母的提供字符串的总排列数。 假设提供的字符串中的所有字符都是唯一的。

例如，`aab` 应该返回 2，因为它有 6 个排列（`aab`、`aab`、`aba`、`aba`、`baa` 和 `baa`），但其中只有 2 个（`aba` 和 `aba`）没有重复相同字符（即 `a`）。

# --hints--

`permAlone("aab")` 应返回 2。

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` 应该返回 2。

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` 应该返回 0。

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")`应返回 8。

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")`应返回 3600。

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")`应该返回 2640。

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` 应返回 0。

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` 应该返回 1。

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` 应该返回 0。

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` 应返回 12.

```js
assert.strictEqual(permAlone('aaabb'), 12);
```

# --seed--

## --seed-contents--

```js
function permAlone(str) {
  return str;
}

permAlone('aab');
```

# --solutions--

```js
function permAlone(str) {
  return permuter(str).filter(function(perm) {
    return !perm.match(/(.)\1/g);
  }).length;
}

function permuter(str) {
  // http://staff.roguecc.edu/JMiller/JavaScript/permute.html
  //permArr: Global array which holds the list of permutations
  //usedChars: Global utility array which holds a list of "currently-in-use" characters
  var permArr = [], usedChars = [];
  function permute(input) {
    //convert input into a char array (one element for each character)
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      //get and remove character at index "i" from char array
      ch = chars.splice(i, 1);
      //add removed character to the end of used characters
      usedChars.push(ch);
      //when there are no more characters left in char array to add, add used chars to list of permutations
      if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
      //send characters (minus the removed one from above) from char array to be permuted
      permute(chars.join(""));
      //add removed character back into char array in original position
      chars.splice(i, 0, ch);
      //remove the last character used off the end of used characters array
      usedChars.pop();
    }
  }
  permute(str);
  return permArr;
}

permAlone('aab');
```
