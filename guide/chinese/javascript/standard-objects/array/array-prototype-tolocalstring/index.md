---
title: Array.prototype.toLocaleString
localeTitle: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

`toLocaleString()`方法返回表示数组元素的字符串。使用toLocaleString方法将所有元素转换为字符串。调用此函数的结果旨在特定于语言环境。

##### 句法：
```
arr.toLocaleString(); 
```

##### 参数

*   `locales` （可选） - 包含字符串或语言标记数组的参数[BCP 47语言标记](http://tools.ietf.org/html/rfc5646) 。
*   `options` （可选） - 具有配置属性的对象

##### 返回值

表示由特定于语言环境的String（例如逗号“，”）分隔的数组元素的字符串

## 例子

```javascript
var number = 12345; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myString = myArray.toLocaleString(); 
 
 console.log(myString); 
 // OUTPUT '12345,10/25/2017, 4:20:02 PM,foo' 
```

可以基于语言和区域标识符（区域设置）显示不同的输出。

```javascript
var number = 54321; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myJPString = myArray.toLocaleString('ja-JP'); 
 
 console.log(myJPString); 
 // OUTPUT '54321,10/26/2017, 5:20:02 PM,foo' 
```

### 更多信息：

资料来源： [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)