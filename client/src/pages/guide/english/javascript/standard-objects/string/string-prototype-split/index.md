---
title: String.prototype.split
---
## String.prototype.split

The `split()` function separates an original string into substrings, based on a _separator string_ that you pass as input.

The output of the `split()` function is an `Array` of strings, which represent the separated substrings from the original string.

The original string is not altered by the `split()` function.

Examples:

```js
// We have a regular string
"Hello. I am a string. You can separate me."

// Let's use the split function to separate the string by the period character:
"Hello. I am a string. You can separate me.".split(".");
// output is [ "Hello", " I am a string", " You can separate me", "" ]
```

Since we used the period (`.`) as the _separator string_, the strings in the output array do not contain the period in them; the output separated strings _do not include the input separator string itself_.

The _string separator_ does not have to be a single character, it can be any other string:

```js
"Hello... I am another string... keep on learning!".split("...");
// output is [ "Hello", " I am another string", " keep on learning!" ]

const names = "Kratos- Atreus- Freya- Hela- Thor- Odin";
// notice separator is a dash and a space
names.split("- ");
// output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ]
```

#### More Information:
- [String.prototype.split on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

