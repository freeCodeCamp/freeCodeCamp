---
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: استخدم Spread Operator لتقييم Arrays في - مكان
---
## استخدم Spread Operator لتقييم Arrays في - مكان

### وأوضح انتشار المشغل

[Mozilla Developer Network Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "شبكة مطوري موزيلا")

### انتشار المشغل مقارنة مع بقية المعلمة

[Stack Overflow](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Stack Overflow")

### فيديو شرح المشغل انتشار وبقية المعلمة

[!["صورة](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[

### معلومات حول تطبيق () طريقة

](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)[موزيلا مطور شبكة تطبيق طريقة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "شبكة مطوري موزيلا")

### 3 أمثلة سريعة

 `let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min.apply(null, numbers); 
 console.log(minNum);//-12 
` 

 `let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(numbers); 
 console.log(minNum);//NaN 
` 

 `let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(...numbers); 
 console.log(minNum);//-12 
`