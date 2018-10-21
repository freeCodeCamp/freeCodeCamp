---
title: Use the Spread Operator to Evaluate Arrays In-Place
---
## Use the Spread Operator to Evaluate Arrays In-Place

### Spread Operator explained
[Mozilla Developer Network Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Mozilla Developer Network")

### Spread Operator compared to Rest Parameter
[Stack Overflow](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Stack Overflow")

### Video Explaining Spread Operator and Rest Parameter
<a href="http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
" target="_blank"><img src="http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg" 
alt="Image of youtube video link spread and rest operator " width="240" height="180" border="10" /></a>

### Information About apply() Method
[Mozilla Developer Network Apply Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Mozilla Developer Network")

### 3 Quick Examples
```javascript
let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min.apply(null, numbers);
console.log(minNum);//-12
```

```javascript
let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min(numbers);
console.log(minNum);//NaN 
```

```javascript
let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min(...numbers);
console.log(minNum);//-12
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
