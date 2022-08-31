---
id: a7bf700cd123b9a54eef01d5
title: 繰り返しなし
challengeType: 1
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

与えられた文字列の全順列のうち、同じ文字の連続的な繰り返しを含まない順列がいくつあるかを返します。 与えられた文字列のすべての文字がそれぞれ一意であると仮定します。

例えば `aab` は、計 6 つの順列 (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`) を持ちますが、そのうち 2 つ (`aba` と `aba`) だけは同じ文字 (この場合は `a`) が繰り返されていないので、2 を返す必要があります。

# --hints--

`permAlone("aab")` は数値を返す必要があります。

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` は 2 を返す必要があります。

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` は 0 を返す必要があります。

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")` は 8 を返す必要があります。

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")` は 3600 を返す必要があります。

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")` は 2640 を返す必要があります。

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` は 0 を返す必要があります。

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` は 1 を返す必要があります。

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` は 0 を返す必要があります。

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` は 12 を返す必要があります。

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
