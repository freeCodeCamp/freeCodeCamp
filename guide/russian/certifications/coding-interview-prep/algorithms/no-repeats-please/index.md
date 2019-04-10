---
title: No Repeats Please
localeTitle: Нет повторений Пожалуйста
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Эта задача требует от нас вернуть количество полных перестановок предоставленной строки, которые не имеют повторяющихся последовательных букв. Предполагается, что все символы в предоставленной строке уникальны. Например, `aab` должен возвращать 2, поскольку имеет 6 полных перестановок ( `aab` , `aab` , `aba` , `aba` , `baa` , `baa` ), но только 2 из них ( `aba` и `aba` ) не имеют одинаковой буквы (в данном случае `a` ) повторяющееся.

Для этого нам нужно будет посмотреть каждую возможную перестановку строки. Существует несколько способов сделать это. Общим вопросом интервью является построение функции, которая собирает все перестановки строки. В Интернете есть несколько учебных пособий о том, как это сделать.

#### Потенциальные методы, используемые в качестве решения

##### Рекурсивный метод

Эта задача может быть сложной даже после просмотра учебника. Чтобы написать рекурсивное решение, вы хотите отправить каждое новое использование функции три входа:

1.  Создается новая строка (или массив символов).
2.  Позиция в новой строке, которая будет заполнена дальше.
3.  Идея о том, какие символы (более конкретно, позиции) из исходной строки еще не используются.

Псевдокод будет выглядеть примерно так:
```
var str = ???; 
 permAlone(current position in original string, characters used already in original string, created string) { 
  if (current string is finished) { 
    print current string; 
  } else { 
    for (var i = 0; i < str.length; i++) { 
      if (str[i] has not been used) { 
        put str[i] into the current position of new string; 
        mark str[i] as used; 
        permAlone(current position in original string, characters used already in original string, created string); 
        remove str[i] as used because another branch in the tree for i + 1 will likely use it; 
      } 
    } 
  } 
 } 
 permAlone(0, nothing used yet, empty new string (or array the same size as str)); 
```

Другой способ подумать об этой проблеме - начать с пустого пространства. Введите первую букву в пространство. Это пространство теперь будет содержать первую подперемещение. Вот диаграмма, иллюстрирующая идею:

![диаграмма](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### Нерекурсивный метод
```
// An approach to introduce a new character to a permutation 
 var ch = '?'; 
 var source = ['?', '?', '?'];     // Current sub-permutation 
 var temp, dest = []; 
 
 for (var i = 0; i <= source.length; ++i) { 
  temp = source.slice(0);         // Copy the array 
  temp.splice(i, 0, ch);          // Insert the new character 
  dest.push(temp);                // Store the new sub-permutation 
 } 
```

Затем поиск каждой перестановки можно было бы сделать нерекурсивно, включив вышеперечисленное в функцию, принимающую исходный массив и возвращающую целевой массив. Для каждой буквы входной строки передайте этот символ, а также массив, возвращенный из предыдущего вызова функции.

Способ визуализации этого заключается в рассмотрении дерева, которое начинается с первого символа вашей строки:

![Дерево перестановок](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### Связанные ссылки

*   [Перестановки](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
*   [Алгоритм кучи](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
*   Ресурсы JS Regex
*   [Объект JS String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

*   Самый простой способ - использовать алгоритм Хипа для рекурсивного получения списка всех перестановок.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

*   После того, как у вас есть список, просто создайте регулярное выражение, чтобы поймать повторяющиеся символы.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

*   Вы захотите иметь перестановки в виде массива соединенных строк вместо отдельных символов.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function permAlone(str) { 
 
  // Create a regex to match repeated consecutive characters. 
  var regex = /(.)\1+/g; 
 
  // Split the string into an array of characters. 
  var arr = str.split(''); 
  var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; 
  var tmp; 
 
  // Return 0 if str contains same character. 
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0; 
 
  // Function to swap variables' content. 
  function swap(index1, index2) { 
    tmp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = tmp; 
  } 
 
  // Generate arrays of permutations using the algorithm. 
  function generate(int) { 
    if (int === 1) { 
      // Make sure to join the characters as we create  the permutation arrays 
      permutations.push(arr.join('')); 
    } else { 
      for (var i = 0; i != int; ++i) { 
        generate(int - 1); 
        swap(int % 2 ? 0 : i, int - 1); 
      } 
    } 
  } 
 
  generate(arr.length); 
 
  // Filter the array of repeated permutations. 
  var filtered = permutations.filter(function(string) { 
    return !string.match(regex); 
  }); 
 
  // Return how many have no repetitions. 
  return filtered.length; 
 } 
 
 // Test here. 
 permAlone('aab'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLop/0)

### Код Объяснение:

*   **regex** содержит регулярное выражение для соответствия повторяющимся последовательным символам.
*   Строка **str** разделяется на массив символов **arr** .
*   0 возвращается, если **str** содержит одинаковые символы.
*   Функция `swap()` используется для замены содержимого двух переменных.
*   Следующий блок кода использует алгоритм Хипа для генерации массивов перестановок в **перестановках** .
*   **Отфильтрованная** переменная фильтрует **перестановки** для включения только непереписанных перестановок.
*   `filtered.length` возвращает количество полных перестановок предоставленной строки, которые не имеют повторяющихся последовательных букв.

#### Связанные ссылки

*   [Разделение прототипа JS String](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Совместимость с JS String Prototype](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Присоединиться](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)
*   [JS для пояснений](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [Фильтр прототипов JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.