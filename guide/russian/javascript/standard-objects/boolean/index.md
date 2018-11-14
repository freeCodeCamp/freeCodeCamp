---
title: Boolean
localeTitle: логический
---
## логический

Булевский объект является оберткой объекта для логического (истинного или ложного) значения. Вы можете явно определить логическое значение как `new Boolean([value])` . Необязательный аргумент `value` преобразуется в значение boolean. Если значение не указано, `0` , `-0` , `null` , `false` , `NaN` , `undefined` или пустая строка ( `""` ), для объекта установлено значение false. Все остальные значения, включая любой объект или строку «false», создают объект со значением true. Интересным исключением является то, что `document.all` DOM передается в качестве аргумента для `Boolean` конструктора, он оценивается как `false` 1 .

Булевое примитивное значение ( `true` и `false` ) не такое же, как значения `Boolean` object ( `true` и `false` ).

#### Дополнительная информация:

[Разница между булевыми объектами и булевыми примитивами в JavaScript - капелька JavaScript](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### источники

1.  [Вы не знаете JavaScript, глава 4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md) , строка: 364. Доступен 31 октября 2017 года.