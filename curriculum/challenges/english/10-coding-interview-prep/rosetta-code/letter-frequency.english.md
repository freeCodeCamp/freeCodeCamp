---
id: 5e4ce2bbac708cc68c1df25f
title: Letter frequency
challengeType: 5
isHidden: false
forumTopicId: 385263
---

## Description
<section id='description'>
Given a string, calculate the frequency of each character.
All characters should be counted. This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.
</section>

## Instructions
<section id='instructions'>
Write a function to count the occurrences of each character in a given string.
The function should return a 2D array with each of the elements in the following form: <code>['char', freq]</code>. The character should be a string with a length of 1, and frequency is a number denoting the count.
For example, given the string "ab", your function should return <code>[['a', 1], ['b', 1]]</code>.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>letterFrequency</code> should be a function.
    testString: assert(typeof letterFrequency == 'function');
  - text: <code>letterFrequency("Not all that Mrs. Bennet, however")</code> should return an array.
    testString: assert(Array.isArray(letterFrequency("Not all that Mrs. Bennet, however")));
  - text: <code>letterFrequency("Not all that Mrs. Bennet, however")</code> should return <code>[[" ", 5], [", ", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1], ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2], ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]]</code>.
    testString: assert.deepEqual(letterFrequency("Not all that Mrs. Bennet, however"), [[' ', 5], [',', 1], ['.', 1], ['B', 1], ['M', 1], ['N', 1], ['a', 2], ['e', 4], ['h', 2], ['l', 2], ['n', 2], ['o', 2], ['r', 2], ['s', 1], ['t', 4], ['v', 1], ['w', 1]]);
  - text: <code>letterFrequency("daughters, could ask on the ")</code> should return <code>[[' ',5],[',',1],['a',2],['c',1],['d',2],['e',2],['g',1],['h',2],['k',1],['l',1],['n',1],['o',2],['r',1],['s',2],['t',2],['u',2]]</code>.
    testString: assert.deepEqual(letterFrequency("daughters, could ask on the "), [[' ', 5], [',', 1], ['a', 2], ['c', 1], ['d', 2], ['e', 2], ['g', 1], ['h', 2], ['k', 1], ['l', 1], ['n', 1], ['o', 2], ['r', 1], ['s', 2], ['t', 2], ['u', 2]]);
  - text: <code>letterFrequency("husband any satisfactory description")</code> should return <code>[[" ", 3], ["a", 4], ["b", 1], ["c", 2], ["d", 2], ["e", 1], ["f", 1], ["h", 1], ["i", 3], ["n", 3], ["o", 2], ["p", 1], ["r", 2], ["s", 4], ["t", 3], ["u", 1], ["y", 2]]</code>.
    testString: assert.deepEqual(letterFrequency("husband any satisfactory description"), [[' ', 3], ['a', 4], ['b', 1], ['c', 2], ['d', 2], ['e', 1], ['f', 1], ['h', 1], ['i', 3], ['n', 3], ['o', 2], ['p', 1], ['r', 2], ['s', 4], ['t', 3], ['u', 1], ['y', 2]]);
  - text: <code>letterFrequency("in various ways--with barefaced")</code> should return <code>[[" ", 3], ["-", 2], ["a", 4], ["b", 1], ["c", 1], ["d", 1], ["e", 2], ["f", 1], ["h", 1], ["i", 3], ["n", 1], ["o", 1], ["r", 2], ["s", 2], ["t", 1], ["u", 1], ["v", 1], ["w", 2], ["y", 1]]</code>.
    testString: assert.deepEqual(letterFrequency("in various ways--with barefaced"), [[' ', 3], ['-', 2], ['a', 4], ['b', 1], ['c', 1], ['d', 1], ['e', 2], ['f', 1], ['h', 1], ['i', 3], ['n', 1], ['o', 1], ['r', 2], ['s', 2], ['t', 1], ['u', 1], ['v', 1], ['w', 2], ['y', 1]]);
  - text: <code>letterFrequency("distant surmises; but he eluded")</code> should return <code>[[" ", 4], ["; ", 1], ["a", 1], ["b", 1], ["d", 3], ["e", 4], ["h", 1], ["i", 2], ["l", 1], ["m", 1], ["n", 1], ["r", 1], ["s", 4], ["t", 3], ["u", 3]]</code>.
    testString: assert.deepEqual(letterFrequency("distant surmises; but he eluded"), [[' ', 4], [';', 1], ['a', 1], ['b', 1], ['d', 3], ['e', 4], ['h', 1], ['i', 2], ['l', 1], ['m', 1], ['n', 1], ['r', 1], ['s', 4], ['t', 3], ['u', 3]]);
  - text: <code>letterFrequency("last obliged to accept the second-hand,")</code> should return <code>[[" ", 5], [", ", 1], ["-", 1], ["a", 3], ["b", 1], ["c", 3], ["d", 3], ["e", 4], ["g", 1], ["h", 2], ["i", 1], ["l", 2], ["n", 2], ["o", 3], ["p", 1], ["s", 2], ["t", 4]]</code>.
    testString: assert.deepEqual(letterFrequency("last obliged to accept the second-hand,"), [[' ', 5], [',', 1], ['-', 1], ['a', 3], ['b', 1], ['c', 3], ['d', 3], ['e', 4], ['g', 1], ['h', 2], ['i', 1], ['l', 2], ['n', 2], ['o', 3], ['p', 1], ['s', 2], ['t', 4]]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function letterFrequency(txt) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function letterFrequency(txt) {
    var cs = txt.split(''),
        i = cs.length,
        dct =  {},
        c = '',
        keys;

    while (i--) {
        c = cs[i];
        dct[c] = (dct[c] || 0) + 1;
    }

    keys = Object.keys(dct);
    keys.sort();
    return keys.map(function (c) { return [c, dct[c]]; });
}
```

</section>
