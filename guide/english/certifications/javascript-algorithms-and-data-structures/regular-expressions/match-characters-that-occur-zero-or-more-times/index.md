---
title: Match Characters that Occur Zero or More Times
---

## Match Characters that Occur Zero or More Times

Any letter in a regex expression that is followed by a `*` does not have to occur in the string tested whereas any letter in a regex expression followed by a `+` must occur in a string at least once, as shown below, 

```javascript
let phrase = "ba humbug";

let regexPlus = /bah+/;
let regexStar = /bah*/;

regexPlus.test(phrase);  // returns false
regexStar.test(phrase);  // returns true
```

Both allow for any number of occurrences of the same letter in a row, for example,

```javascript
let phrase = "wooooow look at that!";

let regexPlus = /wo+w/;
let regexStar = /wo*w/;

regexPlus.test(phrase); // returns true
regexStar.test(phrase); // returns true
```

### Solution:

```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
```

