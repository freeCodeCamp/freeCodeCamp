---
title: Define an Action Creator
localeTitle: Определить создателя действий
---
## Определить создателя действий

### Подсказка 1

Функция определяется с помощью следующего синтаксиса:

```javascript
functionName(){ 
  console.log("Do something"); 
 } 
```

Где console.log можно изменить в соответствии с потребностью.

### Подсказка 2

Значение возвращается с использованием ключевого слова `return`

### Решение

```javascript
function actionCreator(){ 
    return action; 
 } 

```