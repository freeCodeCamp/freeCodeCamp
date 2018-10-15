---
title: Render HTML Elements to the DOM
localeTitle: 将HTML元素渲染到DOM
---
# 将HTML元素渲染到DOM

要将元素呈现给DOm，我们使用以下语法

```javascript
ReactDOM.render(<item to be rendered>, <where to be rendered>); 
```

## 解

遵循语法，我们将添加这行代码以将JSX元素呈现给具有challenge-node的id的div。

```javascript
ReactDOM.render(JSX,document.getElementById('challenge-node')); 

```