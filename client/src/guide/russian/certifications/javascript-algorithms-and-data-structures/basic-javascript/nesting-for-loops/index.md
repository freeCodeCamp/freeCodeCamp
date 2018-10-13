---
title: Nesting For Loops
localeTitle: Вложение в петли
---
## Вложение в петли

**Не забудьте использовать Read-Search-Ask, если вы застряли. Попробуйте пара программ: бюсты _в_ силуэте: и напишите свой собственный код: карандаш:**

: checkered\_flag: **Проблема Объяснение:**

Если у вас многомерный массив, вы можете использовать ту же логику, что и предыдущая путевая точка, чтобы прокручивать как массив, так и любые подмассивы.

Вот пример:
```
var arr = [ 
  [1,2], [3,4], [5,6] 
 ]; 
 for (var i=0; i < arr.length; i++) { 
  for (var j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
 } 
```

Это выводит каждый подэлемент в `arr` одному за раз. Заметим, что для внутреннего цикла мы проверяем длину arr \[i\], так как arr \[i\] является самим массивом.

*   Модифицировать функцию `multiplyAll` так, чтобы она умножала переменную `product` на каждое число в подмассивах `arr` .
*   Убедитесь, что второй для цикла вложен внутри первого.

**Связанные ссылки**

*   [Гнездо Один массив внутри другого массива](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)
*   [Итерация через массив с A для цикла](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
*   [Доступ к вложенным массивам](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

: speech\_balloon: Подсказка: 1

Обязательно проверяйте `length` а не общий массив.

_попытаться решить проблему сейчас_

: speech\_balloon: Подсказка 2

Используйте `i` и `j` при умножении продукта.

_попытаться решить проблему сейчас_

: speech\_balloon: Подсказка 3

Не забудьте использовать `arr[i]` когда вы умножаете подмассивы на переменную `product` .

_попытаться решить проблему сейчас_

_Осторожно, спойлеры!_ ![](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

: начинающий: **базовый код Решение:**
```
function multiplyAll(arr) { 
  var product = 1; 
  // Only change code below this line 
  for(var i=0; i < arr.length; i++){ 
    for (var j=0; j < arr[i].length; j++){ 
      product = product * arr[i][j]; 
    } 
  } 
  // Only change code above this line 
  return product; 
 } 
 
 // Modify values below to test your code 
 multiplyAll([[1,2],[3,4],[5,6,7]]); 
```

: ракета: **[Код запуска](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/)**

**Код Объяснение:**

*   Мы проверить длину `arr` в `i` цикл и `arr[i]` длины в `j` для цикла.
*   Мы умножаем переменную `product` самостоятельно, потому что она равна 1, а затем умножаем ее на подмассивы.
*   Два подмассива для умножения - это `arr[i]` и `j` .

: буфер обмена: **ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:**

*   : warning: **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это похоже, но лучше, попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - Basic, Intermediate и Advanced. :светофор:
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили соответствующее основное содержимое. (: предупреждение: _**НЕ**_ удалять существующие имена пользователей)

См.: Point\_right: [Wiki Challenge Solution Шаблон](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.