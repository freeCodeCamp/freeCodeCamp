---
title: Seek and Destroy
localeTitle: Найти и уничтожить
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Эта проблема немного сложна, потому что вам нужно ознакомиться с Аргументами, так как вам придется работать с двумя **или более,** но на скрипте вы видите только два. Многие люди жестко программируют эту программу для трех аргументов. Вы удалите любое число из первого аргумента, который будет таким же, как и любые другие аргументы.

#### Связанные ссылки

*   [Аргумент объекта](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вам нужно работать с `arguments` как если бы это был обычный массив. Лучший способ - преобразовать его в один.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вам необходимо отфильтровать, это также означает, что вам нужно создать функцию обратного вызова. Вы можете использовать различные методы, такие как: `indexOf()` , `includes()` . Если вам нужен другой подход, `reduce()` также может быть полезным; продолжайте читать эти документы!

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Для преобразования `arguments` в массив используйте этот код `var args = Array.prototype.slice.call(arguments);`

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function destroyer(arr) { 
  var args = Array.prototype.slice.call(arguments); 
 
  for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < args.length; j++) { 
      if (arr[i] === args[j]) { 
        delete arr[i]; 
      } 
    } 
  } 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/95)

### Код Объяснение:

1.  Создайте массив `arguments` используя `Array.prototype.slice.call()` и сохраните его в переменных `args` . Мы будем использовать это для проверки против `arr` .
    
2.  Начните базовую `for` контура перебирать `arr` . Гнездо другое `for` цикла внутри первого, меняя целочисленную переменную `j` и arr на args. Этот второй цикл будет проходить через `args` .
    
    *   Во втором цикле создайте оператор `if` , строго проверяя `===` что текущий val of `arr[i]` равен `args[j]` .
        
    *   Если значение в текущем индексе _равно_ в обеих массивах, используйте `delete` , чтобы удалить его из `arr` .
        
3.  Вне вложенных циклов: вернуть измененный массив с помощью `Boolean` объекта в качестве фильтра для любого `null` , созданного оператором `delete` .
    

#### Связанные ссылки

*   \[аргументы
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [удалять](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [логический](http://forum.freecodecamp.com/t/javascript-boolean/14311)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function destroyer(arr) { 
  var args = Array.from(arguments).slice(1); 
  return arr.filter(function(val) { 
    return !args.includes(val); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/Ck2m/0)

### Код Объяснение:

1.  Объявите переменную с именем `args` и установите ее равным новому объекту `Array` `from()` `arguments` переданных в функцию. В той же или следующей строке используйте метод `slice()` для `args` начиная со второго индекса, 1. Это разделяет аргументы, используемые для фильтрации, в собственный массив `args` .
    
2.  Возвращает фильтрованную массив, используя `includes()` в `val` `args` `includes()` в функции обратного вызова , чтобы проверить , если `val` _не_ в `args` ; возвращает `true` чтобы сохранить значение в исходном массиве или `false` чтобы удалить его.
    

#### Связанные ссылки

*   [аргументы](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Array.includes ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## Расширенное решение для кода:

```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
```

### Код Объяснение:

*   Код с использованием синтаксиса ES6 для объявления функции с использованием функций стрелок.
*   Использование оператора спреда для извлечения аргументов.
*   Верните фильтрованный массив, используя `includes()` .

#### Связанные ссылки

*   [Оператор распространения](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.