---
title: Repeat a String Repeat a String
localeTitle: Повторить строку Повторить строку
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Программа очень проста, мы должны взять переменную и вернуть эту переменную, повторяющуюся определенное количество раз. Не нужно добавлять пространство или что-то еще, просто повторяйте его в одну строку.

#### Связанные ссылки

*   [Глобальный объект String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вы не можете редактировать строки, вам нужно будет создать переменную для хранения новой строки.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Создайте цикл, чтобы повторять код столько раз, сколько необходимо.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Создайте переменную, которая сохранит текущее значение и добавит к нему слово.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function repeatStringNumTimes(str, num) { 
  var accumulatedStr = ''; 
 
  while (num > 0) { 
    accumulatedStr += str; 
    num--; 
  } 
 
  return accumulatedStr; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/19)

### Код Объяснение:

*   Создайте пустую строковую переменную, чтобы сохранить повторяющееся слово.
*   Используйте цикл while или цикл для повторения кода столько раз, сколько необходимо в соответствии с `num`
*   Затем нам просто нужно добавить строку к переменной, созданной на первом шаге, и увеличить или уменьшить `num` зависимости от того, как вы устанавливаете цикл.
*   В конце цикла верните переменную для повторного слова.

#### Связанные ссылки

*   JS while Loop
*   [JS для пояснений](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
```
function repeatStringNumTimes(str, num) { 
  if(num < 0) 
    return ""; 
  if(num === 1) 
    return str; 
  else 
    return str + repeatStringNumTimes(str, num - 1); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/21)

### Код Объяснение:

*   Это решение использует рекурсию.
*   Мы проверяем, является ли `num` отрицательным и возвращает пустую строку, если true.
*   Затем мы проверяем, равен ли он 1, и в этом случае мы возвращаем строку.
*   Если нет, мы добавляем строку к вызову нашей функции с уменьшением `num` на 1, что добавит еще одну `str` и другую .. до тех пор, пока `num` равно 1. И верните весь этот процесс.

#### Связанные ссылки

*   [Функции - Рекурсия](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
```
function repeatStringNumTimes(str, num) { 
  return num > 0 ? str.repeat(num) : ''; 
 } 
 
 repeatStringNumTimes("abc", 3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/85)

### Код Объяснение:

*   Это решение принимает декларативный подход.
*   Это похоже на третье решение, за исключением того, что использует форму тернарного оператора оператора `if` .

#### Связанные ссылки

*   [JS Ternary](https://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Увидеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.