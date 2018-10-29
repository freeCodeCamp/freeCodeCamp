---
title: Render HTML Elements to the DOM
localeTitle: Выделение HTML-элементов в DOM
---
# Выделение HTML-элементов в DOM

Чтобы отобразить элемент в DOm, мы используем следующий синтаксис

```javascript
ReactDOM.render(<item to be rendered>, <where to be rendered>); 
```

## Решение

Следуя синтаксису, мы добавили бы эту строку кода, чтобы отобразить элемент JSX в div с идентификатором узла-вызова.

```javascript
ReactDOM.render(JSX,document.getElementById('challenge-node')); 

```