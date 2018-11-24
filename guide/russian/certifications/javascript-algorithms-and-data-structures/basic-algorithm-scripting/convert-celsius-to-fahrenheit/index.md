---
title: Convert Celsius to Fahrenheit
localeTitle: Преобразование Цельсия в Фаренгейт
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Алгоритм преобразования от Цельсия в Фаренгейт - это температура в градусах Цельсия `9/5` и плюс `32` .

Вам дается переменная **цельсия,** представляющая температуру в градусах Цельсия. Используйте переменную **Фаренгейта, которая** уже определена, и примените алгоритм, чтобы присвоить ей соответствующую температуру в Фаренгейте.

#### Связанные ссылки

*   [Порядок работы: PEMDAS](http://www.purplemath.com/modules/orderops.htm)
*   [Порядок работы: видео](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Взгляните на код. Существует область, которую вы не должны редактировать. Оттуда спросите себя - что там используется, чего я раньше не видел?

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Имейте в виду, что **порядок работы** проверяет ссылку в разделе _ссылок_ для получения дополнительной информации.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function convertToF(celsius) { 
      // Only change code below this line 
      var fahrenheit = (celsius * (9/5)) + 32; 
 
      // Only change code above this line 
      if ( typeof fahrenheit !== 'undefined' ) { 
      return fahrenheit; 
      } else { 
        return 'fahrenheit not defined'; 
      } 
    } 
 
    // Change the inputs below to test your code 
    convertToF(30); 
```

### Код Объяснение:

*   Объявите переменную **Фаренгейта** .
*   Убедитесь, что правильный порядок арифметических операций сопровождается использованием скобок ( `()` ), когда это необходимо.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.