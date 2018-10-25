---
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: Пропустить аргументы, чтобы избежать внешней зависимости в функции
---
## Пропустить аргументы, чтобы избежать внешней зависимости в функции

## Подсказка: 1

Попробуйте передать аргумент функции и вернуть увеличенное значение этого аргумента.

**Решение впереди!**

## Решение базового кода:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 // Add your code below this line 
 function incrementer (value) { 
  return value + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(fixedValue); // Should equal 5 
 console.log(fixedValue); // Should print 4 
```

### метод

Этот код даст тот же результат, что и последний вызов, только в этот раз мы передадим `fixedValue` в функцию в качестве параметра.