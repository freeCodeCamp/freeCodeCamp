---
title: for-of loop
localeTitle: for-of循环
---## for-of Loop

for-of循环可用于迭代不是数组但可迭代的东西，如DOM集合，字符串，集合，参数或映射。

```javascript
const fruits = ['Orange','Apple','Grapes','Banana']; 
 for (const fruit of fruits) 
 { 
    console.log(fruit); 
 } 
```

上面的代码片段将返回上面数组中的项目。

## 了解索引的for-of循环

如果我们想知道每个项目的索引怎么办。在这种情况下，我们可以遍历fruits.entries（），它给我们ArrayIterator。

```javascript
for (const fruit of fruits.entries()) 
 { 
    console.log(fruit); 
 } 
```

在上面的代码片段中，水果将是一个包含两个项目的数组。第0项将包含索引，第1项将包含实际的水果名称。输出将如下：
```
[0, "Orange"] 
 
 [1, "Apple"] 
 
 [2, "Grapes"] 
 
 [3, "Banana"] 
```

我们可以进一步解构如下的水果：

```javascript
for (const [index,fruit] of fruits.entries()) 
 { 
    console.log(index,fruit); 
 } 
```

## for-of循环迭代未知数量的参数

for-of循环非常有助于迭代函数的未知数量的参数。

假设我们想要添加传递给函数的数字，并且参数的数量不固定。

'arguments'是javascript中的一个特殊关键字，它为我们提供了Array-ish（非数组）类型，并为我们提供了所有参数。

```javascript
function addNumbers() 
 { 
    let sum = 0; 
    for (const num of arguments) 
       sum+=num; 
    return sum; 
 } 
 addNumbers(1, 2, 3, 4, 5); // 15 
```

这里的参数不是一个真正的数组，我们仍然可以使用for-of循环迭代它。

## for-of循环迭代字符串

我们可以使用for-of循环来迭代字符串，以便按字符串的字符给出字符。

```javascript
const name = 'John Doe'; 
 for (const char of name) 
    console.log(char); 
```

这导致以下输出： 字符'J'，'o'，'h'，'n'，''，'D'，'o'，'e'

## for-of循环迭代DOM集合

DOM集合不是真正的数组类型。它们通常是大多数浏览器的NodeList。如果我们创建了许多段落并希望迭代它们以在每个段落上分配一些事件，我们可以使用for-of循环。

```javascript
const paragraphs = document.querySelectorAll('p'); 
```

这里的段落是一个NodeList，它可以使用for-of循环进行迭代。

```javascript
for (const para of paragraphs) 
 { 
    console.log(para); 
    // We can add event listeners to each para here 
 } 

```