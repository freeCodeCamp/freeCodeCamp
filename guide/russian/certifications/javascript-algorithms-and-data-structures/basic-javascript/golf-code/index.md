---
title: Golf Code
localeTitle: Гольф-код
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

В игре в гольф каждое отверстие имеет **номинальной** означая среднее число **ударов** игрок в гольф , как ожидается , чтобы сделать для того , чтобы утопить мяч в отверстие , чтобы закончить игру. В зависимости от того , насколько выше или ниже **номинальной** ваши **ходы,** есть другой ник.

Ваша функция будет передана параметрам **par** и **strokes** . Вы должны вернуть правильную строку в соответствии с этой таблицей, которая отображает штрихи в порядке приоритета; верхняя (самая высокая) до нижней (самая низкая):

Штрихи | Вернуть  
: --------- | : -------------  
1 | "Отверстие в одном!"  
<= par - 2 | «Орел»  
par - 1 | "Птичка"  
par | «Пар»  
par + 1 | «Пугало»  
par + 2 | "Двойной Богей" > = par + 3 | "Иди домой!"

**par** и **штрихи** всегда будут числовыми и положительными.

*   Измените код ниже `// Only change code below this line` и выше `// Only change code above this line` .
*   Убедитесь, что вы редактируете внутреннюю часть функции `golfScore` .
*   Вам нужно будет заставить функцию возвращать точно такую ​​же строку, как показано в таблице, в зависимости от значения параметров **par** и **штрихов** , передаваемых вашей функции.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

`+number -number` можно использовать для увеличения или уменьшения параметра в вашем состоянии.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Вы используете `if / else if` цепочки возвращают разные значения в разных сценариях.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Управляйте потоком вашей функции на основе таблиц порядка приоритета - верхний (самый высокий) до нижнего (самый низкий), чтобы возвращать соответствующие строковые значения.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
```
function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return "Hole-in-one!"; 
  } else if (strokes <= par -2){ 
    return "Eagle"; 
  } else if (strokes == par -1) { 
    return "Birdie"; 
  } else if (strokes == par) { 
    return "Par"; 
  } else if (strokes == par +1) { 
    return "Bogey"; 
  } else if (strokes == par +2) { 
    return "Double Bogey"; 
  } else { 
    return "Go Home!"; 
  } 
  // Only change code above this line 
 } 
 // Change these values to test 
 golfScore(5, 4); 
```

### Код Объяснение:

*   Сравните параметры **par** и **stroke,** чтобы вернуть соответствующие строковые значения.
*   `if / else if` цепочка используется для управления потоком.
*   Строка «Иди домой!» возвращается для каждого условия, когда **штрихи** больше или равны **par + 3** .

## Альтернативное решение для кода:

```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 
 function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return names[0]; 
  } 
  else if (strokes <= par-2){ 
    return names[1]; 
  } 
  else if (strokes == par -1){ 
    return names[2]; 
  } 
  else if (strokes == par){ 
    return names[3]; 
  } 
  else if (strokes == par +1){ 
    return names[4]; 
  } 
  else if (strokes == par +2){ 
    return names[5]; 
  } 
  else {return names[6];} 
  // Only change code above this line 
 } 
 
 // Change these values to test 
 golfScore(5, 4); 
```

· Запустить на [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)

\## Обозначение кода Поскольку у нас уже есть массив, определенный в `names` переменных, мы можем воспользоваться им и использовать его для наших операторов return, используя индексы (например: `names[0] is the first one` ). Таким образом, если вам когда-либо понадобится изменить определенный результат, вам не нужно будет искать его внутри функции, это будет в начале в вашем массиве.

### Ресурсы

*   [Гольф](https://en.wikipedia.org/wiki/Golf)
*   [Задача: цепочка в случае других утверждений](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Задача: сравнение с тем, что больше, чем оператору](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
*   [Задача: сравнение с меньшим, чем равным оператору](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)
*   [«Массив» - _ссылка MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)