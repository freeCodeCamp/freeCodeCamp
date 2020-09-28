---
id: 5ea2815e364d9a2222ea55f8
title: LZW compression
challengeType: 5
forumTopicId: 385288
---

## Description
<section id='description'>
The Lempel-Ziv-Welch (LZW) algorithm provides loss-less data compression.
You can read a complete description of it in the <a href="https://en.wikipedia.org/wiki/Lempel-Ziv-Welch" target="_blank">Wikipedia article</a> on the subject.
</section>

## Instructions
<section id='instructions'>
Write a function that takes two parameters. The first parameter is a boolean where `true` indicates compress and `false` indicates decompress. The second parameter is either a string or an array to be processed. If it is a string to be compressed, return an array of numbers. If it's an array of numbers to be decompressed, return a string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>LZW</code> should be a function.
    testString: assert(typeof LZW === 'function');
  - text: <code>LZW(true, "TOBEORNOTTOBEORTOBEORNOT")</code> should return a array.
    testString: assert(Array.isArray(LZW(true, "TOBEORNOTTOBEORTOBEORNOT")));
  - text: <code>LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])</code> should return a string.
    testString: assert(typeof LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]) === 'string');
  - text: <code>LZW(true, "TOBEORNOTTOBEORTOBEORNOT")</code> should return <code>[84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]</code>.
    testString: assert.deepEqual(LZW(true, "TOBEORNOTTOBEORTOBEORNOT"), [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]);
  - text: <code>LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])</code> should return <code>"TOBEORNOTTOBEORTOBEORNOT"</code>.
    testString: assert.equal(LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]), "TOBEORNOTTOBEORTOBEORNOT");
  - text: <code>LZW(true, "0123456789")</code> should return <code>[48, 49, 50, 51, 52, 53, 54, 55, 56, 57]</code>.
    testString: assert.deepEqual(LZW(true, "0123456789"), [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
  - text: <code>LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57])</code> should return <code>"0123456789"</code>.
    testString: assert.equal(LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]), "0123456789");
  - text: <code>LZW(true, "BABAABAAA")</code> should return <code>[66, 65, 256, 257, 65, 260]</code>.
    testString: assert.deepEqual(LZW(true, "BABAABAAA"), [66, 65, 256, 257, 65, 260]);
  - text: <code>LZW(false, [66, 65, 256, 257, 65, 260])</code> should return <code>"BABAABAAA"</code>.
    testString: assert.equal(LZW(false, [66, 65, 256, 257, 65, 260]), "BABAABAAA");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LZW (compressData, input) {

}
```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
