---
title: New String Functions
localeTitle: 新的字符串函数
---## 新的字符串函数

以下四个函数在ES6中添加了新的字符串。

*   以。。开始
*   以。。结束
*   包括
*   重复

## 以。。开始：

这是一个区分大小写的函数，它可以帮助我们查找特定字符串是否以某个子字符串开头。

startsWith接受名为position的第二个可选参数，当我们想要在搜索之前从字符串的开头跳过特定数量的字符时，我们可以使用它。

```javascript
const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false as it is case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true as we are searching from the second position 
 str.startsWith('ch',3) //false 
```

## 以。。结束

这是一个区分大小写的函数，它可以帮助我们查找特定字符串是否以某个子字符串结尾。

endsWith接受一个名为endPosition的第二个可选参数，我们可以使用它来包含搜索前的字符数。

```javascript
const city= 'Delhi'; 
 city.endsWith('Hi'); //false as it is case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - include only first three characters before searching 
 city.endsWith('l',4);//false 
```

## 包括

includes函数也是一个区分大小写的函数，用于检查searchString是否存在于字符串中的任何位置。

```javascript
const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
```

## 重复

重复允许我们取一个字符串并重复多次。

```javascript
const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
```

repeat函数可用于从左侧填充带有多个空格的字符串。