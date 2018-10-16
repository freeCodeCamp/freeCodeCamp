---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
localeTitle: Назначение Destructuring для назначения переменных из вложенных объектов
---
## Назначение Destructuring для назначения переменных из вложенных объектов

Совет для прохождения окончательного теста: использовалось _вложенное деструктурирование_

Тест требует, чтобы вы получили только `max` и `max` . Если вы разрушаете константу, которая содержит как `max` и `min` , тест будет терпеть неудачу.

## Спойлер!

Вот решение кода:

```javascript
const { tomorrow: { max: maxOfTomorrow } } = forecast; 

```