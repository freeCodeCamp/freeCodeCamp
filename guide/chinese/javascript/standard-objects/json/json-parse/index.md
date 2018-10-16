---
title: JSON Parse
localeTitle: JSON Parse
---
## JSON Parse

`JSON.parse()`方法解析字符串并构造由字符串描述的新对象。

#### 句法：

```javascript
    JSON.parse(text [, reviver]) 
```

##### 参数：

`text` 要解析为JSON的字符串

`reviver` （可选） 该函数将接收`key`和`value`作为参数。此函数可用于转换结果值。

以下是如何使用`JSON.parse()`的示例：

```javascript
var data = '{"foo": "bar"}'; 
 
 console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo` 
 
 // You can use JSON.parse to create a new JSON object from the given string 
 var convertedData = JSON.parse(data); 
 
 console.log(convertedData.foo); // This will print `bar 
```

[Repl.it演示](https://repl.it/MwgK/0)

这是`reviver`一个例子：

```javascript
var data = '{"value": 5}'; 
 
 var result = JSON.parse(data, function(key, value) { 
    if (typeof value === 'number') { 
        return value * 10; 
    } 
    return value; 
 }); 
 
 // Original Data 
 console.log("Original Data:", data); // This will print Original Data: {"value": 5} 
 // Result after parsing 
 console.log("Parsed Result: ", result); // This will print Parsed Result:  { value: 50 } 
```

在上面的示例中，所有数字值都乘以`10` - [Repl.it Demo](https://repl.it/Mwfp/0)

#### 更多信息：

[JSON.parse - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)