---
id: a7bf700cd123b9a54eef01d5
title: No repetir por favor
challengeType: 1
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

Devuele el numero total de permutaciones posibles de una cadena (string) que no tiene soa letras iguales consecutivas. Supongamos que todos los caracteres de la cadena proporcionada son únicos de cada una.

Por ejemplo `aab` deberá retornar 2 por qué tiene 6 permutaciones (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`), pero solo 2 (`aba` y `aba`) no tiene la misma letra repetida consecutivamente (en este caso `a`).

# --hints--

`permAlone("aab")` deberá retornar un número.

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` deberá retornar 2.

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` deberá retornar 0.

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")` deberá retornar 8.

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")` deberá retornar 3600.

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")` deberá retornar 2640.

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` deberá retornar 0.

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` deberá retornar 1.

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` deberá retornar 0.

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` deberá retornar 12.

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
