---
title: Define an HTML Class in JSX
localeTitle: 在JSX中定义HTML类
---
## 在JSX中定义HTML类

*   HTML和JSX可能看起来完全相同，但它们之间存在一些差异。
*   其中一个差异是命名约定。
*   JSX中的HTML属性和事件引用变为camelCase（onclick => onClick）。
*   在JavaScript中可能还会保留一些单词。例如，“class”这个词不能用于定义HTML类 在JSX中。因此，您可以使用“className”而不是使用“class”。

## 提示1：

*   您可能希望将“class”更改为“className”。

## 解

```javascript
const JSX = ( 
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1> 
  </div> 
 ); 

```