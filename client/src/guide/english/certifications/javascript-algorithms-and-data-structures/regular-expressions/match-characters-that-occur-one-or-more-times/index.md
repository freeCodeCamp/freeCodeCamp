
## Match Characters that Occur One or More Times
 
 ## Problem:
 You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.
 
 ## Solution:

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);
```
