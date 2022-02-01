---
id: 5ea2815e364d9a2222ea55f8
title: LZW 圧縮
challengeType: 5
forumTopicId: 385288
dashedName: lzw-compression
---

# --description--

Lempel-Ziv-Welch (LZW) アルゴリズムは、可逆圧縮 (ロスレス圧縮) を提供します。

この主題に関する説明の全体は、 [Wikipediaの記事](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) で読むことができます。

# --instructions--

2つのパラメータを取る関数を記述してください。 最初のパラメータはブール値で、`true` は圧縮を、`false` は解凍を示します。 2番目のパラメータは、処理する文字列または配列のいずれかです。 文字列を圧縮する場合は、数値の配列を返します。 数値の配列を解凍する場合は、文字列を返します。

# --hints--

`LZW` は関数とします。

```js
assert(typeof LZW === 'function');
```

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` は配列を返す必要があります。

```js
assert(Array.isArray(LZW(true, 'TOBEORNOTTOBEORTOBEORNOT')));
```

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` は文字列を返す必要があります。

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

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` は `[84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]` を返す必要があります。

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

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` は `"TOBEORNOTTOBEORTOBEORNOT"` を返す必要があります。

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

`LZW(true, "0123456789")` は `[48, 49, 50, 51, 52, 53, 54, 55, 56, 57]` を返す必要があります。

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

`LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57])` は `"0123456789"` を返す必要があります。

```js
assert.equal(
  LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
  '0123456789'
);
```

`LZW(true, "BABAABAAA")` は `[66, 65, 256, 257, 65, 260]` を返す必要があります。

```js
assert.deepEqual(LZW(true, 'BABAABAAA'), [66, 65, 256, 257, 65, 260]);
```

`LZW(false, [66, 65, 256, 257, 65, 260])` は `"BABAABAAA"` を返す必要があります。

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
