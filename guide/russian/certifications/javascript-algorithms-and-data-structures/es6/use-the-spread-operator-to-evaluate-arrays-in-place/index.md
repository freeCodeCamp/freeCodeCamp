---
title: Use the Spread Operator to Evaluate Arrays In-Place
localeTitle: Используйте оператора распространения для оценки массивов на месте
---
## Используйте оператора распространения для оценки массивов на месте

### Оператор спреда объяснен

[Оператор разворачивания сети разработчика Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Сеть разработчиков Mozilla")

### Оператор распространения по сравнению с параметром останова

[Переполнение стека](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6 "Переполнение стека")

### Описание объяснения оператора разворота и отдыха

[!["Изображение](http://img.youtube.com/vi/iLx4ma8ZqvQ/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[

### Информация о методе apply ()

](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)

[](http://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ
)[Метод применения платформы Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Сеть разработчиков Mozilla")

### 3 быстрых примера

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min.apply(null, numbers); 
 console.log(minNum);//-12 
```

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(numbers); 
 console.log(minNum);//NaN 
```

```javascript
let numbers = [-12, 160, 0, -3, 51]; 
 let minNum = Math.min(...numbers); 
 console.log(minNum);//-12 

```