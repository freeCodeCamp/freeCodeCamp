---
title: Slice and Splice
localeTitle: Нарезка и сращивание
---
## Нарезка и сращивание

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Нам нужно скопировать каждый элемент из первого массива во второй массив, начиная с индекса n. Мы также должны убедиться, что исходные массивы не мутированы. То есть мы не можем внести никаких изменений в исходные массивы.

#### Связанные ссылки

*   [str.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [str.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Создайте копию второго массива внутри функции. Это гарантирует, что исходный массив не будет мутирован. Это можно сделать, используя операцию среза во втором массиве и присвоить его переменной.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Прокрутите все элементы в первом массиве. Для каждого элемента в первом массиве сплайсируйте его в скопированный массив в указателе, указанном в качестве аргумента.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Увеличьте индекс после выполнения сращивания.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function frankenSplice(arr1, arr2, n) { 
  // It's alive. It's alive! 
  let localArray = arr2.slice(); 
  for (let i = 0; i < arr1.length; i++) { 
    localArray.splice(n, 0, arr1[i]); 
    n++; 
  } 
  return localArray; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU)

### Код Объяснение:

*   Наша цель - взять все элементы из `arr1` и вставить их в `arr2` начиная с позиции индекса `n` . В то же время мы должны гарантировать, что ни `arr` ни `arr2` не были мутированы.
    
*   Используя функцию `slice()` мы можем создать точную реплика `arr2` и присвоить результат операции переменной `localArray` .
    
*   Теперь, когда у нас есть массив, с которым мы можем мутировать, мы можем перебирать каждый элемент в первом массиве. Для каждого элемента в первом массиве мы можем использовать функцию `splice()` чтобы вставить элемент в индекс `n` `localArray` .
    
*   Мы увеличиваем индекс `n` на единицу. Это гарантирует, что каждый элемент из `arr1` будет вставлен в `localArray` в правильное положение индекса.
    
*   Наконец, мы возвращаем `localArray` и `localArray` функцию.
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.