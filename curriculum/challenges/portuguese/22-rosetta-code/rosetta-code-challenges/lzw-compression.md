---
id: 5ea2815e364d9a2222ea55f8
title: Compressão LZW
challengeType: 1
forumTopicId: 385288
dashedName: lzw-compression
---

# --description--

O algoritmo de Lempel-Ziv-Welch (LZW) fornece compressão de dados sem perda.

# --instructions--

Escreva uma função que receba dois parâmetros. O primeiro parâmetro é um booleano onde `true` indica compressão e `false` indica descompactação. O segundo parâmetro é uma string ou um array a ser processado. Se é uma string que deve ser comprimida, retorne um array de números. Se for um array de números a serem descompactados, retorne uma string.

# --hints--

`LZW` deve ser uma função.

```js
assert(typeof LZW === 'function');
```

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` deve retornar um array.

```js
assert(Array.isArray(LZW(true, 'TOBEORNOTTOBEORTOBEORNOT')));
```

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` deve retornar uma string.

```js
assert(
  typeof LZW(false, [
    84,
    79,
    66,
    69,
    79,
    82,
    78,
    79,
    84,
    256,
    258,
    260,
    265,
    259,
    261,
    263
  ]) === 'string'
);
```

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` deve retornar `[84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]`.

```js
assert.deepEqual(LZW(true, 'TOBEORNOTTOBEORTOBEORNOT'), [
  84,
  79,
  66,
  69,
  79,
  82,
  78,
  79,
  84,
  256,
  258,
  260,
  265,
  259,
  261,
  263
]);
```

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` deve retornar `"TOBEORNOTTOBEORTOBEORNOT"`.

```js
assert.equal(
  LZW(false, [
    84,
    79,
    66,
    69,
    79,
    82,
    78,
    79,
    84,
    256,
    258,
    260,
    265,
    259,
    261,
    263
  ]),
  'TOBEORNOTTOBEORTOBEORNOT'
);
```

`LZW(true, "0123456789")` deve retornar `[48, 49, 50, 51, 52, 53, 54, 55, 56, 57]`.

```js
assert.deepEqual(LZW(true, '0123456789'), [
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57
]);
```

`LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57])` deve retornar `"0123456789"`.

```js
assert.equal(
  LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
  '0123456789'
);
```

`LZW(true, "BABAABAAA")` deve retornar `[66, 65, 256, 257, 65, 260]`.

```js
assert.deepEqual(LZW(true, 'BABAABAAA'), [66, 65, 256, 257, 65, 260]);
```

`LZW(false, [66, 65, 256, 257, 65, 260])` deve retornar `"BABAABAAA"`.

```js
assert.equal(LZW(false, [66, 65, 256, 257, 65, 260]), 'BABAABAAA');
```

# --seed--

## --seed-contents--

```js
function LZW (compressData, input) {

}
```

# --solutions--

```js
function LZW (compressData, input) {
  function compress(uncompressed) {
    // Build the dictionary.
    var i,
      dictionary = {},
      c,
      wc,
      w = "",
      result = [],
      dictSize = 256;
    for (i = 0; i < 256; i += 1) {
      dictionary[String.fromCharCode(i)] = i;
    }

    for (i = 0; i < uncompressed.length; i += 1) {
      c = uncompressed.charAt(i);
      wc = w + c;
      //Do not use dictionary[wc] because javascript arrays
      //will return values for array['pop'], array['push'] etc
      // if (dictionary[wc]) {
      if (dictionary.hasOwnProperty(wc)) {
        w = wc;
      } else {
        result.push(dictionary[w]);
        // Add wc to the dictionary.
        dictionary[wc] = dictSize++;
        w = String(c);
      }
    }

    // Output the code for w.
    if (w !== "") {
      result.push(dictionary[w]);
    }
    return result;
  }


  function decompress(compressed) {
    // Build the dictionary.
    var i,
      dictionary = [],
      w,
      result,
      k,
      entry = "",
      dictSize = 256;
    for (i = 0; i < 256; i += 1) {
      dictionary[i] = String.fromCharCode(i);
    }

    w = String.fromCharCode(compressed[0]);
    result = w;
    for (i = 1; i < compressed.length; i += 1) {
      k = compressed[i];
      if (dictionary[k]) {
        entry = dictionary[k];
      } else {
        if (k === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }

      result += entry;

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);

      w = entry;
    }
    return result;
  }

  if(compressData){
    return compress(input)
  }else{
    return decompress(input)
  }
}
```
