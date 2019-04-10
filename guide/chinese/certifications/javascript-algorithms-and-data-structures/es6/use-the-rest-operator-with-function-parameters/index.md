---
title: Use the Rest Operator with Function Parameters
localeTitle: 将Rest运算符与函数参数一起使用
---
## 将Rest运算符与函数参数一起使用

### 休息参数说明

[Mozilla开发者网络](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Mozilla开发者网络")

### 与rest参数相比，Spread运算符

[堆栈溢出](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "堆栈溢出")

### 视频解释传播和休息

[![“youtube视频链接传播和休息运算符的图像”width](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[### 例

这段代码

```javascript
const product = (function() { 
    "use strict"; 
    return function product(n1, n2, n3) { 
        const args = [n1, n2, n3]; 
        return args.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 
```

可以这样写

```javascript
const product = (function() { 
    "use strict"; 
    return function product(...n) { 
        return n.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 

```](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)