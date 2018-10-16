---
title: Arrow Functions
localeTitle: Функции стрелки
---
## Функции стрелок

Функции в ES6 немного изменились. Я имею в виду синтаксис.

```javascript
// Old Syntax 
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // New Syntax 
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
```

Новый синтаксис может немного запутать. Но я попытаюсь объяснить синтаксис. Есть две части синтаксиса.

1.  var newOne = ()
2.  \=> {}

Первая часть просто объявляет переменную и присваивает ей функцию (т.е.) (). Он просто говорит, что переменная на самом деле является функцией.

Затем вторая часть объявляет часть тела функции. Часть стрелки с фигурными скобками определяет часть тела.

Другой пример с параметрами:

```javascript
let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
```

Скобки необязательны, если есть только одно имя параметра:

```javascript
let newOneWithOneParam = a => { 
 console.log(a); 
 } 
```

Невероятным преимуществом функции стрелок является то, что вы не можете восстановить функцию стрелки. Он всегда будет вызываться с контекстом, в котором он был определен. Просто используйте обычную функцию.

```javascript
// Old Syntax 
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // New Syntax 
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
```

Я не думаю, что мне нужно объяснить это. Это просто.