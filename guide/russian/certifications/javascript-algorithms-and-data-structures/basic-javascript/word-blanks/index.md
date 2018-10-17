---
title: Word Blanks
localeTitle: Word Blanks
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Теперь мы будем использовать наши знания струн, чтобы построить игру слов стиля **Mad Libs,** которую мы называем «Word Blanks». Вы создадите (возможно, юмористическое) предложение стиля «Заполнить бланки».

Вам нужно будет использовать строковые операторы для построения новой строки, **результата** , используя предоставленные переменные: **myNoun** , **myAdjective** , **myVerb** и **myAdverb** .

Вам также понадобятся дополнительные строки, которые не будут меняться и должны находиться между всеми предоставленными словами. Результат должен быть полным предложением.

Мы предоставили основу для тестирования ваших результатов разными словами. Тесты будут запускать вашу функцию с несколькими различными входами, чтобы убедиться, что все предоставленные слова отображаются на выходе, а также ваши дополнительные строки.

*   Измените код ниже `//Your Code here` и до `//Change this line` .
*   Обратите внимание, что вы редактируете внутреннюю часть функции `wordBlanks()` .
*   В основном вы создадите предложение с предоставленными строковыми переменными.

#### Связанные ссылки

*   [Безумные лики](https://en.wikipedia.org/wiki/Mad_Libs)
*   [Задача: построение строк с переменными](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
*   [Задача: объединение строк с помощью Плюс-оператора](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
*   [Задача: объединить строки с помощью оператора равных равных](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

`+` может использоваться для _конкатенации_ строк.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Так же, как вы можете связать строки путем конкатенации, вы можете назначить их существующей переменной вместо новой.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

`+=` позволит вам использовать существующую переменную, тип строки в этом случае. Не забудьте добавить свои собственные **не-буквы** между каждой переменной.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { 
    var result = ""; 
    // Your code below this line 
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+"."; 
 
    // Your code above this line 
  return result; 
 } 
 
 // Change the words here to test your function 
 wordBlanks("dog", "big", "ran", "quickly"); 
```

**Пример Run**

*   Test `wordBlanks("dog", "big", "ran", "quickly");` пробеги.
*   **Результат** переменной объявляется пустой строкой `""` .
*   **результат** будет изменен с помощью новой строки, состоящей из конкатенированных строк «собака», «большой», «побежал», «быстро» через переменные **myNoun** , **myAdjective** , **myVerb** , **myAdverb** соответственно; порядок изменяется и добавляется пробел.
*   **результат** возвращается.

### Код Объяснение:

*   Используйте **результат,** чтобы объединить данные переменные.
*   Отдельные слова с пробелами и соответствующими словами для формирования полного предложения.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.