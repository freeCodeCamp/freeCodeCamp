---
title: Cash Register
localeTitle: Кассовый аппарат
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

*   Вам нужно создать программу, которая вернет объект, содержащий ключ `status` ключ `change` . Значение `status` - это строка `INSUFFICIENT_FUNDS` , `CLOSED` или `OPEN` , а значение `change` - это 2D-массив изменения.

#### Связанные ссылки

*   Массивы структуры данных

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Это легче, когда вы знаете, сколько денег в вашем регистре заранее. Для этого рекомендуется иметь функцию для назначения этой информации переменной. Затем вы можете увидеть, есть ли у вас достаточно денег для завершения транзакции и возврата изменений, или если вы должны закрыть регистр.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   Эта проблема проще, когда вы знаете ценность каждого купюра или монеты, с которой работаете, а не просто сумму каждого в регистре. Например, полезно знать, что никель стоит 0,05, а также тот факт, что у вас в кассе есть никель в размере 2,05 доллара.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Вам нужно будет получить столько же изменений от одного типа счета или монеты, прежде чем переходить к следующему, от большего к меньшему. Продолжайте движение, пока вы не рассчитали все изменения.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение для начинающего кода:
```
// Create an array of objects which hold the denominations and their values 
 var denom = [ 
  { name: 'ONE HUNDRED', val: 100.00}, 
  { name: 'TWENTY', val: 20.00}, 
  { name: 'TEN', val: 10.00}, 
  { name: 'FIVE', val: 5.00}, 
  { name: 'ONE', val: 1.00}, 
  { name: 'QUARTER', val: 0.25}, 
  { name: 'DIME', val: 0.10}, 
  { name: 'NICKEL', val: 0.05}, 
  { name: 'PENNY', val: 0.01} 
 ]; 
 
 function checkCashRegister(price, cash, cid) { 
  var output = { status: null, change: [] }; 
  var change = cash - price; 
 
  // Transform CID array into drawer object 
  var register = cid.reduce(function(acc, curr) { 
    acc.total += curr[1]; 
    acc[curr[0]] = curr[1]; 
    return acc; 
  }, { total: 0 }); 
 
  // Handle exact change 
  if (register.total === change) { 
    output.status = 'CLOSED'; 
    output.change = cid; 
    return output; 
  } 
 
  // Handle obvious insufficient funds 
  if (register.total < change) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Loop through the denomination array 
  var change_arr = denom.reduce(function(acc, curr) { 
    var value = 0; 
    // While there is still money of this type in the drawer 
    // And while the denomination is larger than the change remaining 
    while (register[curr.name] > 0 && change >= curr.val) { 
      change -= curr.val; 
      register[curr.name] -= curr.val; 
      value += curr.val; 
 
      // Round change to the nearest hundreth deals with precision errors 
      change = Math.round(change * 100) / 100; 
    } 
    // Add this denomination to the output only if any was used. 
    if (value > 0) { 
        acc.push([ curr.name, value ]); 
    } 
    return acc; // Return the current change_arr 
  }, []); // Initial value of empty array for reduce 
 
  // If there are no elements in change_arr or we have leftover change, return 
  // the string "Insufficient Funds" 
  if (change_arr.length < 1 || change > 0) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Here is your change, ma'am. 
  output.status = 'OPEN'; 
  output.change = change_arr; 
  return output; 
 } 
 
 // test here 
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/@scissorsneedfoo/cash-register-example)

### Код Объяснение:

Сначала создайте массив объектов со значением каждого номинала купюры или монеты вместе с выходным объектом со статусом и клавишами изменения. Затем преобразуйте массив CID в объект ящика. Затем обрабатывайте условия точного изменения и недостаточные средства. Проведите цикл через массив `denom` и обновите изменения и значения, пока в ящике все еще есть деньги каждого типа, а номинал больше оставшегося изменения. Добавьте этот деноминат в аккумулятор `change_arr` если какой-либо из этих типов был использован. После цикла `change_arr` представляет собой 2D-массив изменения из-за, отсортированный от наивысшего до наименьшего наименования. Если в `change_arr` нет элементов, или вы все еще должны изменить, верните выходной объект со статусом `INSUFFICIENT_FUNDS` . Наконец, вы можете внести правильные изменения. Вернуть выходной объект со статусом `OPEN` и `change_arr` как значение изменения.

#### Связанные ссылки

*   [Уменьшение массива JS](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS упростит работу](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS Array Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.