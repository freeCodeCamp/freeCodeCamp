---
title: Switch Statements
localeTitle: Записи переключателей
---
## Записи переключателей

Оператор `switch` в программировании похож на оператор `if-else` , но иногда его легче читать, когда есть много условий. Также он позволяет добавить блок по `default` который будет выполнен, если ни одно из других условий не будет истинным.

### Синтаксис:

```javascript
switch(expression) { 
  case 1: 
    console.log('1'); 
    break; 
   case 2: 
     console.log('2'); 
     break; 
   default: 
     console.log('No true condition, default'); 
 } 
```

В приведенном выше фрагменте показан синтаксис базового оператора `switch` . В этом примере существует 3 разных сценария для:

*   `expression = 1` : Первое условие истинно, и `1` печатается на консоль.
*   `expression = 2` : второе условие истинно, а `2` печатается на консоли.
*   `expression = 'anything else'` : случай 1 и случай 2 являются ложными, поэтому выполняется условие по умолчанию.

Условие по `default` - это условие, которое будет выполнено, если ни один из других случаев не является истинным.

Примечание. Здесь очень важно отметить, что в приведенном выше фрагменте `case 1:` и `case 2:` может показаться каким-то порядком, но `1` и `2` - не что иное, как ответы, которые могут быть оценены `(expression)` , Таким образом, вместо 1 и 2 это может быть все, что `(expression)` может оценивать и может быть проверено против.

Например:

```javascript
var someValue; 
 var expression = someValue; 
 switch(expression){ 
  case someValue: 
    console.log('10'); // 10 would be printed to the console 
    break; 
  case 23: 
    console.log('12'); 
    break; 
  default: 
    console.log('No matches'); 
 } 
```

Примечание: `expression` в приведенном выше фрагменте может быть строкой или номером.

### Перерыв

Ключевое слово `break` требуется в каждом случае, чтобы убедиться, что только код в этом случае будет выполнен. Без перерыва могут быть выполнены несколько случаев. Когда JavaScript достигает ключевого слова `break` , он выходит из блока переключателей. Если `break` был исключен из приведенного выше примера, это произойдет:

```javascript
var expression = 1; 
 switch(expression) { 
  case 1: 
    console.log('1');  // 1 would be printed to console 
  case 2: // As there is no break after case 1, this case is also executed. 
    console.log('2'); // 2 would be printed to the console. 
    break; // break -> Switch statement is exited 
  default: 
    console.log('No true condition, default'); 
 } 
```

### Выполните несколько случаев:

Операторы `switch` также позволяют выполнять один и тот же блок кода несколькими случаями. Это можно сделать, добавив 1 или более ключевых слов `case :` перед блоком кода.

Например:

```javascript
switch (day) { 
  case 4: 
  case 5: 
    console.log('it is nearly the weekend'); 
    break; 
  case 0: 
  case 6: 
    console.log('it is the weekend'); 
    break; 
  default: 
    console.log('Looking forward to the Weekend'); 
 } 
```

В приведенном выше фрагменте:

*   Если `day` `4` или `5` (четверг или пятница), `it is nearly the weekend` будут напечатаны на консоли, когда первый случай будет выполнен.
*   Если `day` равен `0` или `6` , (в субботу или воскресенье), `it is the weekend` будут напечатаны на консоли, когда второй случай будет выполнен.
*   Если `day` - любое другое значение, `Looking forward to the Weekend` он будет распечатан на консоль, так как случай по умолчанию будет выполнен.

### Дополнительная информация:

[Документация MDN для коммутатора](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)