---
title: Profile Lookup
localeTitle: Поиск профиля
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

У нас есть набор объектов, представляющих разные люди в наших списках контактов.

Функция `lookUpProfile()` которая принимает **firstName** и свойство ( **prop** ) в качестве аргументов, была предварительно написана для вас.

Функция должна проверять, является ли **firstName** фактическим контактом **firstName,** и данное свойство ( **prop** ) является свойством этого контакта.

Если оба значения true, верните _значение_ этого свойства.

Если **firstName** не соответствует никаким контактам, тогда возвращайте `No such contact` .

Если **prop** не соответствует каким-либо действительным свойствам, тогда возвращайте `No such property` .

*   Измените код ниже `// Only change code below this line` и до `// Only change code above this line` .
*   Убедитесь, что вы редактируете внутреннюю часть функции `lookUpProfile()` .
    *   Эта функция включает в себя два параметра: **firstName** и **prop** .
*   Функция должна просматривать список **контактов** для данного параметра **firstName** .
    *   Если найдено совпадение, тогда функция должна искать данный параметр **prop** .
    *   Если найдено имя **firstName** и связанная **поддержка** , вы должны вернуть значение **prop** .
    *   Если **firstName** найдено и никакой связанной **опоры** не найдено, вы должны вернуть `No such property` .
*   Если **firstName** не найдено нигде, вы должны вернуть `No such contact` .

#### Связанные ссылки

*   [Задача: доступ к объектам с помощью условных обозначений](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
*   [Задача: Итерация с помощью JavaScript для циклов](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте цикл `for` циклического перехода по списку **контактов** .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Используйте вложенный оператор `if` чтобы сначала проверить, совпадает ли **firstName** , и затем проверяет, соответствует `if` **поддержка** .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Оставьте свое `return "No such contact"` из цикла `for` в качестве окончательного улова.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
for (var x = 0; x < contacts.length; x++){ 
    if (contacts[x].firstName === name) { 
        if (contacts[x].hasOwnProperty(prop)) { 
            return contacts[x][prop]; 
        } else { 
            return "No such property"; 
        } 
    } 
 } 
 return "No such contact"; 
```

### Код Объяснение:

*   Цикл `for` запускается, начиная с первого объекта в списке **контактов** .
*   Если параметр **firstName,** переданный в функцию, соответствует значению ключа `"firstName"` в первом объекте, выполняется оператор `if` .
*   Затем мы используем `.hasOwnProperty()` (проверяет, есть ли заданное свойство и возвращает логическое значение) с **prop** в качестве аргумента. Если это правда, возвращается значение **prop** .
    *   Если второй оператор `if` терпит неудачу, `No such property` не возвращается.
*   Если первый оператор `if` не работает, цикл `for` переходит к следующему объекту в списке **контактов** .
*   Если параметр **firstName** не соответствует объекту конечных **контактов** , цикл `for` завершается, и `No such contact` не возвращается.

**Пример Run**

*   `lookUpProfile("Akira","likes");` пробеги.
*   `"Akira"` сопоставляется с ключом `"firstName"` в первом объекте, поэтому оператор `if` возвращает true.
*   `"likes"` находится внутри первого объекта, поэтому второй оператор `if` возвращает true.
*   Возвращается значение `"likes"` - `"Pizza", "Coding", "Brownie Points"` .

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") **`Wiki Challenge Solution Template`** для **`Wiki Challenge Solution Template`** для справки.