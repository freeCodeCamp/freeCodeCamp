---
title: Diff Two Arrays
localeTitle: Diff Два массива
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Проверьте два массива и верните новый массив, содержащий только элементы, которые не находятся ни в одном из исходных массивов.

#### Связанные ссылки

*   [для Loop (Devdocs)](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Объедините список, чтобы упростить сравнение функций.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Используйте фильтр, чтобы получить новый массив, вам нужно будет создать функцию обратного вызова.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Лучший способ выполнения функции обратного вызова - проверить, не совпадает ли номер из нового объединенного массива в **обоих** исходных массивах и вернуть его.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода (императивное решение):

```javascript
    function diffArray(arr1, arr2) { 
      var newArr = []; 
 
      function onlyInFirst(first, second) { 
      // Looping through an array to find elements that don't exist in another array 
        for (var i=0;i<first.length;i++) { 
          if (second.indexOf(first[i]) === -1) { 
            // Pushing the elements unique to first to newArr 
            newArr.push(first[i]); 
          } 
        } 
      } 
 
      onlyInFirst(arr1, arr2); 
      onlyInFirst(arr2, arr1); 
 
      return newArr; 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLme/0)

### Код Объяснение:

Прочитайте комментарии в коде.

#### Связанные ссылки

*   [для Loop (Devdocs)](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода (декларативное решение):

```javascript
    function diffArray(arr1, arr2) { 
      return arr1 
        .concat(arr2) 
        .filter( 
            item => !arr1.includes(item) || !arr2.includes(item) 
        ) 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CNYb/0)

### Код Объяснение:

Объясните решение здесь и добавьте соответствующие ссылки

#### Связанные ссылки

*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение кода (декларативное решение):
```
function diffArray(arr1, arr2) { 
    return arr1 
      .filter(el => !arr2.includes(el)) 
      .concat( 
        arr2.filter(el => !arr1.includes(el)) 
      ) 
 } 
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CNYU/0)

### Код Объяснение:

Объясните решение здесь и добавьте соответствующие ссылки

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Альтернативный вариант расширенного кода (декларативное решение):
```
function diffArray(arr1, arr2) { 
  return [ 
    ...diff(arr1, arr2), 
    ...diff(arr2, arr1) 
  ] 
 
  function diff(a, b) { 
    return a.filter(item => b.indexOf(item) === -1); 
  } 
 } 
```

#### Связанные ссылки

*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.