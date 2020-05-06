---
id: 5eb257ba998e23057d209754
title: Run-length Encoding
challengeType: 5
---

## Description
<section id='description'>
Given a string containing uppercase characters (A-Z), compress repeated 'runs' of the same character by storing the length of that run, and provide a function to reverse the compression.
</section>

## Instructions
<section id='instructions'>
Write two functions <code>encode</code> and <code>decode</code>.

<code>encode(input)</code> takes a string and return the run-length encoding as an array
containing pairs with the first element representing the number of occurences and the second
element representing the letter.

<code>decode(input)</code> takes an array of pairs representing a run-length encoded string
and returns the decoded string.

You may assume that the input will only contain uppercase letters.

Example:
<br>
Original: <code>ABBBCDDDD</code>
<br>
Encoded: <code>[[1,'A'], [3,'B'], [1,'C'], [4,'D']]</code>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>encode</code> should return an array.
    testString: assert(typeof encode(input_1) == 'object');
  - text: <code>decode</code> should return a string.
    testString: assert(typeof decode(output_1) == 'string');
  - text: <code>encode</code> should work for <code>Test 1</code>
    testString: assert(arrayEquals(encode(input_1), output_1))
  - text: <code>decode</code> should work for <code>Test 1</code>
    testString: assert(decode(output_1) === input_1)
  - text: <code>encode</code> should work for <code>Test 2</code>
    testString: assert(arrayEquals(encode(input_2), output_2))
  - text: <code>decode</code> should work for <code>Test 2</code>
    testString: assert(decode(output_2) === input_2)
  - text: <code>encode</code> should work for <code>Test 3</code>
    testString: assert(arrayEquals(encode(input_3), output_3))
  - text: <code>decode</code> should work for <code>Test 3</code>
    testString: assert(decode(output_3) === input_3)
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function encode(input) {
  // Implement encode here
}

function decode(input) {
  // Implement decode here
}
```

</div>

### Before Test
<div id='js-setup'>

```js
var input_1 = "ABBBCDDDD";
var output_1 = [[1,'A'], [3,'B'], [1,'C'], [4,'D']]
var input_2 = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW";
var output_2 = [[12,'W'], [1,'B'], [12,'W'], [3,'B'], [24,'W'], [1, 'B'], [14, 'W']]
var input_3 = "";
var output_3 = [];

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