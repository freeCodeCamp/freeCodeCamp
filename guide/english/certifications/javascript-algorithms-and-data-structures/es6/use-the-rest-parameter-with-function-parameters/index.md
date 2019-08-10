---
title: Use the Rest Parameter with Function Parameters
---
# Use the Rest Parameter with Function Parameters

#### Relevant LInks

- [Rest parameter explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Mozilla Developer Network")

- [Spread operator compared to rest parameter](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Stack Overflow") 

- <a href="http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
" target="_blank"><img src="http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg" 
alt="Image of youtube video link spread and rest parameter " width="240" height="180" border="10" />Video explaining spread and rest</a>

### Example
This code

```javascript
const product = (function() {
  "use strict";
  return function product(n1, n2, n3) {
    const args = [n1, n2, n3];
    return args.reduce((a, b) => a * b, 1);
  };
})();
console.log(product(2, 4, 6)); //48
```

Can be written as such
```javascript
const product = (function() {
  "use strict";
  return function product(...n) {
    return n.reduce((a, b) => a * b, 1);
  };
})();
console.log(product(2, 4, 6)); //48
```
