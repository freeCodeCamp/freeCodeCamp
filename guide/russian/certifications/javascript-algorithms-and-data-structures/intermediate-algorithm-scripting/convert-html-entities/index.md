---
title: Convert HTML Entities
localeTitle: Преобразование HTML-объектов
---
![Объекты HTML & '<> "](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

*   Вам нужно создать программу, которая будет конвертировать объекты HTML из строки в соответствующие HTML-объекты. Есть только несколько, поэтому вы можете использовать разные методы.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Вы можете использовать регулярные выражения, но в этом случае я этого не делал.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   Вы выиграете от диаграммы со всеми html-объектами, чтобы вы знали, какие из них являются правильными.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Вы должны отделить строку и работать с каждым символом, чтобы преобразовать правильные, а затем присоединиться ко всему резервному копированию.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function convertHTML(str) { 
      // Split by character to avoid problems. 
 
      var temp = str.split(''); 
 
      // Since we are only checking for a few HTML elements I used a switch 
 
      for (var i = 0; i < temp.length; i++) { 
        switch (temp[i]) { 
          case '<': 
            temp[i] = '&lt;'; 
            break; 
          case '&': 
            temp[i] = '&amp;'; 
            break; 
          case '>': 
            temp[i] = '&gt;'; 
            break; 
          case '"': 
            temp[i] = '&quot;'; 
            break; 
          case "'": 
            temp[i] = "&apos;"; 
            break; 
        } 
      } 
 
      temp = temp.join(''); 
      return temp; 
    } 
 
    //test here 
    convertHTML("Dolce & Gabbana"); 
```

### Код Объяснение:

Объясните решение здесь и добавьте соответствующие ссылки

#### Связанные ссылки

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [инструкция switch](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function convertHTML(str) { 
 //Chaining of replace method with different arguments 
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;"); 
 return str; 
 } 
 
 // test here 
 convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnQ/0)

### Код Объяснение:

Объясните решение здесь и добавьте соответствующие ссылки

#### Связанные ссылки

*   [str.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [Регулярные выражения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

```javascript
    function convertHTML(str) { 
      // Use Object Lookup to declare as many HTML entities as needed. 
      const htmlEntities={ 
        '&':'&amp;', 
        '<':'&lt;', 
        '>':'&gt;', 
        '"':'&quot;', 
        '\'':"&apos;" 
      }; 
      //Use map function to return a filtered str with all entities changed automatically. 
      return str.split('').map(entity => htmlEntities[entity] || entity).join(''); 
    } 
 
    // test here 
    convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnR/0)

### Код Объяснение:

*   Создайте объект, чтобы использовать функциональность Lookup, чтобы легко находить символы.
*   Разделите исходную строку символами и используйте карту, чтобы проверить измененный объект html или использовать тот же самый. В качестве альтернативы вы можете использовать Regex `str.replace(/&|<|>|"|'/gi` .
*   Добавлена ​​функция a, которая возвращает преобразованный объект или исходный, если конверсия отсутствует. Если вы перейдете по маршруту регулярного выражения, вам просто нужно вернуть совпадающие удары. `return html[entity];`
*   Наконец, мы снова присоединяем все символы.

**Обратите внимание,** что если вы отправили маршрут регулярного выражения, вам не нужно ничего присоединяться, просто убедитесь, что вы вернули всю операцию или сохранили ее в переменной, а затем вернете ее.

#### Связанные ссылки

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.