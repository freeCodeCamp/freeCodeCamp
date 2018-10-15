---
title: Factorialize a Number
localeTitle: Факториализация номера
---
![Рекурсия](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Верните факториал предоставленного целого числа. Если целое число представлено буквой n, факториал является произведением всех положительных целых чисел, меньших или равных n.

Факториалы часто представлены сокращенной нотой n!

Например: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Это легко начинается с `0! = 1` , так что вы можете идти вперед и просто `return 1` туда `return 1` .

Мы можем использовать это как `if` , чтобы разбить цикл, который мы собираемся создать, используя **рекурсивную функцию** . Он будет проверять, является ли номер, который вы дали функции, 0 (это будет конец вашей факториала). Функции «заканчиваются», когда они возвращают что-либо. На самом деле, **все** функции без явного `return` заявления вернут `undefined` .

Именно поэтому **вместо** того, чтобы _«закончить»_ , функция всегда говорит _«вернулась»_ . А теперь это ...

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

**Понимание рекурсии**

Рекурсия относится к функции, повторяющей (вызывающую). В этом случае мы, в основном , возвращая заданное число (то есть 5), умноженное на функции сам по себе , но на этот раз значение , переданное в параметр _NUM_ является `num-1` (который первоначально переводит до 4). Сама функция будет **запущена внутри самой** интересной, а?

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

**Понимание потока**

Первое **возвращаемое** значение может быть визуализировано лучше, если вы подумаете о тех операциях скобок, которые вы сделали в средней школе, где вы делаете математику внутри каждой круглой скобки изнутри, скобки и квадратной скобки, пока не получите окончательный результат (всего). На этот раз это то же самое, посмотрите на поток программы:

### Во время первого выполнения функции:

\[ **num** = 5\]

Является ли 5 _равным_ 1 или 0? **Нет** ---> Оки доки, давайте продолжим ...

**Возвращает:**

( **5** _(_ второе исполнение\_: **4** \_ ( _третье исполнение_ : **3** _(_ четвертое исполнение\_: **2** \_ _пятое выполнение_ : **1** ))))

То, что он возвращает, можно рассматривать как `(5*(4*(3*(2*1))))` или просто `5 * 4 * 3 * 2 * 1` , и функция вернет результат этой операции: `120` . Теперь давайте посмотрим, что делают остальные казни:

### Во время остальных казней:

**Второе выполнение** : _num_ = 5-1 = **4** -> _num_ 0 или 1? нет

\-> вернуть умножение между 4 и следующим результатом, когда _num_ теперь 4-1.

**Третье выполнение** : _num_ = 4 - 1 = **3** -> _num_ 0 или 1? нет

\-> вернуть умножение между 3 и следующим результатом, когда _num_ теперь 3-1.

**Четвертое выполнение** : _num_ = 3-1 = **2** -> _num_ 0 или 1? нет

\-> вернуть умножение между 2 и следующим результатом, когда _num_ теперь 2-1.

**Пятое выполнение** : _num_ = 2-1 = **1** -> _num_ 0 или 1? Ага

\-> возврат **1** . И здесь рекурсия прекращается, потому что больше нет казней.

Понял? ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ": Подмигивать:")

> _попытаться решить проблему сейчас_

#### Связанные ссылки

*   [Функции JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Рекурсия в JS](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Код решения:
```
function factorialize(num) { 
  if (num === 0) { return 1; } 
  return num * factorialize(num-1); 
 } 
 
 factorialize(5); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLjU/1)

## Код Объяснение:

Обратите внимание, что в первой строке мы имеем терминальное условие, то есть условие проверки конца рекурсии. Если `num == 0` , то мы возвращаем 1, то есть эффективно заканчиваем рекурсию и информируем стек, чтобы распространить это значение на верхние уровни. Если у нас нет этого условия, рекурсия будет продолжаться до тех пор, пока пространство стека не будет потреблено, что приведет к [переполнению стека](https://en.wikipedia.org/wiki/Stack_overflow) .

### Связанные ссылки

*   [Рекурсия](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
*   [Factorialization](https://en.wikipedia.org/wiki/Factorial)
*   [Арифметические операторы](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.