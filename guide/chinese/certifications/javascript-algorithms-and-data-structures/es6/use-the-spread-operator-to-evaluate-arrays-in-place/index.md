---
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: 使用Spread运算符来就地评估数组
---
## 使用Spread运算符来就地评估数组

### 传播运营商解释道

[Mozilla开发人员网络传播运营商](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Mozilla开发者网络")

### Spread Operator与Rest Parameter相比较

[堆栈溢出](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "堆栈溢出")

### 视频解释扩散算子和静止参数

[![“youtube视频链接传播和休息运算符的图像”width](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[

### 有关apply（）方法的信息

](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)[Mozilla开发者网络应用方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Mozilla开发者网络")

### 3个快速示例

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