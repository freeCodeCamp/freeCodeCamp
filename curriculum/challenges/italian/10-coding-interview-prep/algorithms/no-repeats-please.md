---
id: a7bf700cd123b9a54eef01d5
title: Nessuna ripetizione per favore
challengeType: 1
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

Restituisci il numero di permutazioni totali della stringa fornita che non hanno lettere consecutive ripetute. Supponiamo che tutti i caratteri della stringa fornita siano univoci.

Ad esempio, `aab` dovrebbe restituire 2 perché ha 6 permutazioni totali (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`), ma solo 2 di loro (`aba` e `aba`) non hanno la stessa lettera (in questo caso `a`) ripetuta.

# --hints--

`permAlone("aab")` dovrebbe restituire un numero.

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` dovrebbe restituire 2.

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` dovrebbe restituire 0.

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")` dovrebbe restituire 8.

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")` dovrebbe restituire 3600.

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")` dovrebbe restituire 2640.

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` dovrebbe restituire 0.

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` dovrebbe restituire 1.

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` dovrebbe restituire 0.

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` dovrebbe restituire 12.

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
