---
title: Use Advanced JavaScript in React Render Method
localeTitle: 在React Render方法中使用高级JavaScript
---
## 在React Render方法中使用高级JavaScript

### 方法

当您在render方法内部而不在return方法内部时，您可以编写JavaScript **而不**将其包装在花括号内。

首先，您必须将常量“回答”设置为值。使用'randomIndex'的值访问'possibleAnswers'数组，该值位于组件的状态中。请记住，您使用`this.state`访问状态。

### 解

```js
const answer = possibleAnswers[this.state.randomIndex]; 
```

接下来，将const“answer”插入p-tags。确保用花括号`{ }`包裹它。

```jsx
<p> 
  {answer} 
 </p> 

```