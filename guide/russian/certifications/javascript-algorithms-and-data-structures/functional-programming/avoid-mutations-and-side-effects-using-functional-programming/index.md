---
title: Avoid Mutations and Side Effects Using Functional Programming
localeTitle: Избегайте мутаций и побочных эффектов с помощью функционального программирования
---
## Избегайте мутаций и побочных эффектов с помощью функционального программирования

### Проблема Объяснение

Заполните код для `incrementer` функции, чтобы он возвращал значение глобальной переменной `fixedValue` увеличиваемое на единицу. `fixedValue` не должен меняться, независимо от того, сколько раз `incrememter` функция `incrememter` .

### Подсказка 1

Использование оператора increment ( `++` ) на `fixedValue` будет мутировать `fixedValue` , что означает, что он больше не будет ссылаться на то же значение, которому он был назначен.

### Решение:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 function incrementer () { 
  // Add your code below this line 
  return fixedValue + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(); // Should equal 5 
 console.log(fixedValue); // Should print 4 

```