---
title: Record Collection
localeTitle: Коллекция записей
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Вам предоставляется объект JSON, представляющий (небольшую часть) вашу коллекцию записей. Каждый альбом идентифицируется уникальным номером id и имеет несколько свойств. Не все альбомы имеют полную информацию.

Напишите функцию, которая принимает **id** , свойство ( **prop** ) и **значение** .

Для данного **идентификатора** в **коллекции** :

Если **значение** не пустое ( **значение! == ""** ), обновите или установите **значение** для параметра **prop** .

Если **prop** - это **«дорожки»,** а **значение** не пустое, проверьте, имеет ли данный элемент в массиве свойство «дорожек». Если элемент имеет свойство «дорожек», нажмите **значение** в конец массива «дорожки». Если элемент не обладает **свойством** , создайте пару свойств и значений.

Если **значение** пустое, удалите эту **опцию** .

Всегда возвращайте весь объект коллекции.

*   Измените код ниже `// Only change code below this line` и до `// Alter values below to test your code` .
*   Обратите внимание, что вы редактируете внутреннюю часть функции `updateRecords` .
*   Для данного параметра **id** , связанного с объектом **коллекции** :
    *   Если параметр **значения** не является пустой строкой, обновите (или установите) параметр **значения** для параметра **prop** .
    *   Если параметр **prop** равен `"tracks"` а **значение** не является пустой строкой, нажмите **значение** на конец массива **треков** .
    *   Если **значение** является пустой строкой, удалите эту **опору** из объекта.
*   Наконец, верните объект **коллекции** .

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте инструкцию `else if` чтобы проверить необходимые шаги.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Второй шаг, указанный в инструкциях, должен быть первым в инструкции `else if` .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Чтобы получить доступ к значению ключа в этом объекте, вы будете использовать `collection[id][prop]` .

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function updateRecords(id, prop, value) { 
  if (prop === "tracks" && value !== "") { 
   if(collection[id][prop]) { 
    collection[id][prop].push(value); 
   } 
   else { 
    collection[id][prop]=[value]; 
   } 
  } else if (value !== "") { 
    collection[id][prop] = value; 
  } else { 
    delete collection[id][prop]; 
  } 
 
  return collection; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/C2AZ/0)

### Код Объяснение:

*   Сначала проверяет, равна ли **prop** равным **трекам** И если **значение** не является пустой строкой. Если оба теста пройдены, **значение** вставляется в массив **треков** .
*   Если эта первая проверка не проходит, она будет проверяться только в том случае, если **значение** не является пустой строкой. Если этот тест проходит, к нему добавляется либо новый ключ ( **prop** ), либо значение ( **значение** ), либо существующий ключ обновляется, если **поддержка** уже существует.
*   Если обе эти проверки терпят неудачу ( **значение** должно быть пустой строкой), тогда ключ ( **prop** ) удаляется из объекта.

**Пример Run**

*   `updateRecords(5439, "artist", "ABBA");` пробеги.
*   **prop** равно «художнику», а не «трекам», поэтому первая часть инструкции `else if` не выполняется.
*   **Значение** не является пустой строкой, поэтому выполняется вторая часть инструкции else if.
*   `artist: "ABBA"` добавляется к `id` `5439` .

### Ресурсы:

*   [Задача fCC: доступ к объектам с помощью условных обозначений](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [Задача fCC: Добавить новые свойства в объект JavaScript](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [Задача fCC: удалить свойства из объекта JavaScript](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [Задача fCC: доступ к вложенным объектам](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*   ["Array.prototype.push ()" - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   ["delete operator" - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)