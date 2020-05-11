---
id: 5eb257ba998e23057d209754
title: Run-length Encoding
challengeType: 5
forumTopicId: 387031
---

## Description
<section id='description'>
Given a string containing uppercase characters (A-Z), compress repeated 'runs' of the same character by storing the length of that run, and provide a function to reverse the compression.

Example:<br>
Original: `ABBBCDDDD`<br>
Encoded: `[[1, 'A'], [3, 'B'], [1, 'C'], [4, 'D']]`
</section>

## Instructions
<section id='instructions'>

Write two functions, `encode` and `decode`.

`encode(str)` takes a string and returns the run-length encoding as a 2D array. Each element in the returned array is an array containing pairs, with the first element representing the number of occurrences and the second element representing the letter.

`decode(arr)` takes a 2D array of pairs representing a run-length encoded string and returns the decoded string.

You may assume that the input will only contain uppercase letters.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>encode</code> should return an array.
    testString: assert(typeof encode("ABBBCDDDD" == 'object');
  - text: <code>decode</code> should return a string.
    testString: assert(typeof decode([[1,'A'], [3,'B'], [1,'C'], [4,'D']]) == 'string');
  - text: <code>encode</code> should work for <code>Test 1</code>
    testString: assert(arrayEquals(encode("ABBBCDDDD"), [[1,'A'], [3,'B'], [1,'C'], [4,'D']]))
  - text: <code>decode</code> should work for <code>Test 1</code>
    testString: assert(decode([[1,'A'], [3,'B'], [1,'C'], [4,'D']]) === "ABBBCDDDD")
  - text: <code>encode</code> should work for <code>Test 2</code>
    testString: assert(arrayEquals(encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"), [[12,'W'], [1,'B'], [12,'W'], [3,'B'], [24,'W'], [1, 'B'], [14, 'W']]))
  - text: <code>decode</code> should work for <code>Test 2</code>
    testString: assert(decode([[12,'W'], [1,'B'], [12,'W'], [3,'B'], [24,'W'], [1, 'B'], [14, 'W']]) === "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")
  - text: <code>encode</code> should work for <code>Test 3</code>
    testString: assert(arrayEquals(encode(""), []))
  - text: <code>decode</code> should work for <code>Test 3</code>
    testString: assert(decode([]) === "")
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function encode(str) {
  // Implement encode here
}

function decode(arr) {
  // Implement decode here
}
```

</div>

### Before Test
<div id='js-setup'>

```js
function arrayEquals(a1, a2) {
  if (a1== null || a2 == null) return false;
  if (a1.length != a2.length) return false;

  for (var i = 0; i < a1.length; i++) {
    if (a1[i][0] !== a2[i][0] || a1[i][1] !== a2[i][1]) return false;
  }

  return true;
}
```

</div
</section>

## Solution
<section id='solution'>

```js
function encode(input) {
    var encoding = [];
    var prev, count, i;
    if (input === '') return [];
    for (count = 1, prev = input[0], i = 1; i < input.length; i++) {
        if (input[i] != prev) {
            encoding.push([count, prev]);
            count = 1;
            prev = input[i];
        }
        else 
            count ++;
    }
    encoding.push([count, prev]);
    return encoding;
}

function decode(encoded) {
    var output = "";
    encoded.forEach(function(pair){ output += new Array(1+pair[0]).join(pair[1]) })
    return output;
}
```

</section>
