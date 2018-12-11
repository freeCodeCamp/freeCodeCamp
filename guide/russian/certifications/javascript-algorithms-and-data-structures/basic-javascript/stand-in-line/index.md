---
title: Stand in Line
localeTitle: Стоять в очереди
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

В информатике _очередь_ представляет собой абстрактную **структуру данных, в** которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конце **очереди,** а старые элементы сняты с передней части **очереди** .

Напишите функцию `nextInLine` которая принимает массив ( **arr** ) и число ( **элемент** ) в качестве аргументов. Добавьте число в конец массива, затем удалите первый элемент массива. Затем функция `nextInLine` возвращает элемент, который был удален.

*   Измените код ниже `//Your Code here` и до `//Change this line` .
*   Убедитесь, что вы редактируете внутреннюю часть функции `nextInLine` .
*   Используйте функцию массива, которую вы изучили, чтобы добавить **элемент** в конец массива **arr** .
*   Используйте функцию массива, которую вы изучили, чтобы удалить первый элемент из массива **arr** .
*   Верните элемент.

#### Связанные ссылки

*   [Задача: Манипулировать массивами С помощью push ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
*   [Задача: Манипулировать массивами со сдвигом ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
*   [Задача: передача значений в функции с аргументами](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Метод `push()` добавляет элемент в конец массива.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Метод `shift()` удаляет первый элемент массива. Он также возвращает элемент удален.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Функция `nextInLine` использует **arr** и **элемент** . Это те тесты, которые будут использоваться для передачи элементов массива, с которыми они будут тестироваться. Это позволяет использовать функцию повторно. Не производите жесткий код любого из тестов внутри функции.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function nextInLine(arr, item) { 
  // Your code here 
  arr.push(item); 
  var removed = arr.shift(); 
  return removed;  // Change this line 
 } 
```

### Код Объяснение:

*   Нажмите **пункт** в конце **обр** .
*   Вызовите метод `shift()` на **arr,** чтобы получить первый элемент и сохранить его при **удалении** .
*   Возврат **удален** .

**Пример Run**

*   Тест `nextInLine([2,1]);` пробеги.
*   `nextInLine` функция `nextInLine` . **arr** становится \[2\]. **item** становится 1.
*   `arr.push(item);` Выталкивает от 1 до \[2\]. Итак, **arr** теперь \[2,1\].
*   `var removed = arr.shift();` удаляет первый элемент. Итак, **arr** теперь \[1\]. 2 был удален и сохранен в **удалении** .
*   `return removed;` 2 возвращается.

**_Примечание_** . Фактически вам не требуется, чтобы переменная **удалялась** . `return arr.shift();` элемент можно вернуть напрямую, используя `return arr.shift();` ,