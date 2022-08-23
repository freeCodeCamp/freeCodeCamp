---
id: a7bf700cd123b9a54eef01d5
title: Keine Wiederholungen, bitte
challengeType: 1
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

Hierbei soll die Anzahl möglicher Permutationen eines übergebenen Strings zurückgegeben werden, die keine gleichen aufeinanderfolgenden Buchstaben enthalten. Es kann davon ausgegangen werden, dass alle Zeichen eines übergebenen Strings einzigartig sind.

Zum Beispiel sollte `aab` 2 zurückgeben, da es hierfür 6 Permutationen (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`) gibt, jedoch nur 2 (`aba` und `aba`) enthalten keine Wiederholungen (in diesem Fall `a`).

# --hints--

`permAlone("aab")` sollte eine Zahl zurückgeben.

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` sollte 2 zurückgeben.

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` sollte 0 zurückgeben.

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")` sollte 8 zurückgeben.

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")` sollte 3600 zurückgeben.

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")` sollte 2640 zurückgeben.

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` sollte 0 zurückgeben.

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` sollte 1 zurückgeben.

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` sollte 0 zurückgeben.

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` sollte 12 zurückgeben.

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
