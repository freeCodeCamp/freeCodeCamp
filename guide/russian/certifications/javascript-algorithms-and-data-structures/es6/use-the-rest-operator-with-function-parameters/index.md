---
title: Use the Rest Operator with Function Parameters
localeTitle: Используйте оператор «Отдых» с параметрами функции
---
## Используйте оператор «Отдых» с параметрами функции

### Описание параметра Rest

[Сеть разработчиков Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Сеть разработчиков Mozilla")

### Оператор распространения по сравнению с параметром отдыха

[Переполнение стека](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Переполнение стека")

### Видео, объясняющее распространение и отдых

[!["Изображение](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[### пример

Этот код

```javascript
const product = (function() { 
    "use strict"; 
    return function product(n1, n2, n3) { 
        const args = [n1, n2, n3]; 
        return args.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 
```

Может быть написано как таковое

```javascript
const product = (function() { 
    "use strict"; 
    return function product(...n) { 
        return n.reduce((a, b) => a * b, 1); 
    }; 
 })(); 
 console.log(product(2, 4, 6));//48 

```](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)