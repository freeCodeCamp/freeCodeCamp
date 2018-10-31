---
title: Template Literals
localeTitle: 模板文字
---## 模板文字

## 介绍：

当我们想使用变量来创建一个字符串时，它变得非常痛苦，因为我们必须使用+符号来连接和跟踪引号。

现在使用ES6，我们可以使用反引号和使用带有美元符号和花括号的占位符来创建字符串，例如$ {expression}。

```javascript
const name='John'; 
 const city='London'; 
 
 Older Style: 
 const sentence ='My name is '+ name +'. I live in '+city. 
 ES6 way: 
 const sentence = `My name is ${name}. I live in ${city}`; 
 Here ${name} and ${city}are going to be interpolated by the variable name and city respectively. 
```

## MultiLine字符串：

旧款式：

当我们想要将字符串跨越到多行时，我们不得不使用反斜杠。

```javascript
const multipleLineString= "We have \ 
 multiple lines \ 
 here"; 
```

现在，当我们想要创建多行字符串时，我们可以使用模板字符串。我们可以使用反引号来包围我们的字符串。当我们想要创建一些动态html标记时，这种方法非常有用。

```javascript
const htmlMarkup = ` 
 <html> 
 <head></head> 
 <title>Template string</title> 
 <body>Hello World</body> 
 </html>`; 
```

## 嵌套模板字符串：

我们可以将它们嵌套在一起。

```javascript
const cities =[ 
 {name:'Delhi', year: 2010}, 
 {name:'Mumbai', year: 2015}, 
 {name:'Kolkata', year: 2017}]; 
 
 
 const markup = ` 
 <ul> 
 ${cities.map(city=>`<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')} 
 </ul>`; 
```

这里，map函数之后的join运算符删除了每个li之后添加的额外逗号。

## 如果声明和功能

我们也可以在模板字符串中使用If语句。

```javascript
const data = {name: 'John', city: 'London', birthyear: 1900}; 
 const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`; 
```

在上面的例子中，如果定义了birthyear，那么生成内容为“他出生在一年中”的div，否则将不会创建div。

我们还可以在模板字符串中调用函数。