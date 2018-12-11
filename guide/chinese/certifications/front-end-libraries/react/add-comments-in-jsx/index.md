---
title: Add Comments in JSX
localeTitle: 在JSX中添加注释
---
## 在JSX中添加注释

您可以像在Javascript `/* some JS code */`那样使用代码块进行注释，但它们需要用花括号括起来在JSX中添加注释： 例如：

*   单行评论：

```jsx
{/*<h1>Hanoi University of Science</h1>*/} 
```

*   多行评论：

```jsx
{/* 
 <h1>Hanoi University of Science</h1> 
 <p>Falculty of Mathematics, Mechanics and Informatics</p> 
 */} 
```

注意：您不能在JSX中使用HTML注释，如下所示：

```html

<!-- not working --> 

```