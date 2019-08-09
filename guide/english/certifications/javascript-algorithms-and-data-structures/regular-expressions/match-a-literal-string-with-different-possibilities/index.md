---
title: Match a Literal String with Different Possibilities
---
# Match a Literal String with Different Possibilities

---
## Problem Explanation
Suppose you want to match many different words with your regular expression; using the `|` symbol, that becomes possible. In this challenge, you are using that symbol to identify four different pets hidden within strings!


---
## Hints

### Hint 1

Inside the string literal, place the pet names, each seperated by the `|` symbol.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```

</details>