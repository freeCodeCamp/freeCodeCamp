---
title: Find Characters with Lazy Matching
---
## Find Characters with Lazy Matching

#### Challange: 

Fix the regex `/<.*>/` to return the HTML tag `<h1>` and not the text `<h1>Winter is coming</h1>`. Remember the wildcard . in a regular expression matches any character.

#### Solution:  
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // it's the answer!
let result = text.match(myRegex);
```
