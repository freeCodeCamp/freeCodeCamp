---
title: Falsy Values
localeTitle: Фальшивые ценности
---
## Описание

Значение фальши - это значение, которое оценивается как ЛОЖЬ, например, при проверке переменной. В JavaScript всего шесть значений false: `undefined` , `null` , `NaN` , `0` , `""` (пустая строка) и `false` конечно.

## Проверка значений фальши на переменные

Можно проверить значение фальши в переменной с простым условным:

```javascript
if (!variable) { 
  // When the variable has a falsy value the condition is true. 
 } 
```

## Общие примеры

```javascript
const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

const numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy
```

## Развлечения с массивами

```javascript
if ([] == false) // <-- truthy, will run code in if-block 
 
 if ([]) // <-- truthy, will also run code in if-block 
 
 if ([] == true) // <-- falsy, will NOT run code in if-block 
 
 if (![]) // <-- falsy, will also NOT run code in if-block 
```

## Предостережение

Помните о типе данных при оценке значения в булевом контексте. Если тип данных значения означает _число_ , оценка правдоподобия / ложности может привести к неожиданному результату:

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (match.teamA) 
  // The following won't run due to the falsy evaluation 
  console.log('Team A: ' + match.teamA); 
 } 
```

Альтернативой приведенному выше `typeof` использования является оценка значения с использованием `typeof` :

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (typeof match.teamA === 'number') 
  console.log('Team A: ' + match.teamA); 
 } 
```

## Больше информации

*   **правдивый** | [Сообщение блога - Truthy & Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
    
*   [Фальши | Глоссарий | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    
*   [Truthy and Falsy: когда все не равно в JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
