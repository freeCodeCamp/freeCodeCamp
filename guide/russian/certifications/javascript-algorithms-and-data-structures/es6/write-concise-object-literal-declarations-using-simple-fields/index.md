---
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: Записывать краткие декларации объектов с использованием простых полей
---
## Записывать краткие декларации объектов с использованием простых полей

Здесь нам поручено вернуть объект, который принимает параметры функции в качестве своих атрибутов.

# Подсказка 1:

Избавьтесь от двоеточий и дубликатов слов.

## Предупреждение о спойлере - решение впереди

## Решение

```javascript
const createPerson = (name, age, gender) => { 
  "use strict"; 
  // change code below this line 
  return { 
    name, 
    age, 
    gender 
  }; 
  // change code above this line 
 }; 

```