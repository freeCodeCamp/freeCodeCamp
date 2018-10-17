---
title: Counting Cards
localeTitle: Счетные карточки
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

В игре **Blackjack** в казино игрок может получить преимущество над домом, отслеживая относительное количество высоких и низких карт, оставшихся в колоде. Это называется подсчет карт.

Наличие более высоких карт, оставшихся в колоде, способствует игроку. Каждой карте присваивается значение в соответствии с приведенной ниже таблицей. Когда счет положителен, игрок должен делать ставки на высокий уровень. Когда счетчик равен нулю или отрицателен, игрок должен делать ставки на низком уровне.

Значение | Карты  
\----- | : -------------------:  
+1 | 2, 3, 4, 5, 6  
0 | 7, 8, 9  
\-1 | 10, 'J', 'Q', 'K', 'A'

Вы будете писать функцию подсчета карт. Он получит параметр **карты** и увеличит или уменьшит глобальную переменную **счета в** соответствии со значением карты (см. Таблицу). Затем функция вернет строку с текущим счетчиком и строкой `Bet` если счетчик положителен, или `Hold` если счетчик равен нулю или отрицателен. Текущий счетчик и решение игрока ( `Bet` или `Hold` ) должны быть разделены одним пробелом.

*   Изменить код ниже `// Only change code below this line` и до `// Only change code above this line`
*   Убедитесь, что вы редактируете внутреннюю часть функции `cc` .
*   Используйте то, что вы изучили, чтобы проверить значение каждого параметра **карты,** переданного в функцию.
*   Сохраните подсчет этого числа.
*   Если конечный счет равен 1 или больше, верните **\# Удержание** .
*   Если итоговый счет равен 0 или меньше, верните **\# ставка** .

**Пример:**

*   \-3 Удержание
*   5 ставок

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Используйте оператор `switch` (или `else if` ), чтобы подсчитать значение каждой карты.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Добавьте / вычтите значение каждой карты для **подсчета** переменных. Если карта стоит 0, ничего не делайте.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

После того, как вы подсчитали карты, используйте инструкцию `if` чтобы проверить значение **count** . Кроме того, убедитесь, что у вашего `return` есть пробел между номером и строкой.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

```javascript
    function cc(card) { 
      // Only change code below this line 
      switch(card){ 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
          count++; 
          break; 
        case 10: 
        case "J": 
        case "Q": 
        case "K": 
        case "A": 
          count--; 
          break; 
      } 
      if (count > 0){ 
        return count + " Bet"; 
      } else { 
        return count + " Hold"; 
      } 
      // Only change code above this line 
    } 
```

### Код Объяснение:

*   Проверьте значение каждой карточки с помощью оператора `switch` .
*   **Счетчик** переменных:
    *   Увеличивает на 1, если карта равна 2, 3, 4, 5 или 6.
    *   Поскольку 7, 8 и 9 ничего не стоят, мы игнорируем эти карты в инструкции `switch` .
    *   Уменьшает на 1, если карта равна 10, 'J', 'Q', 'K' или 'A'.
*   Проверьте значение **счетчика** и верните соответствующий ответ.

**Пример Run**

*   `cc(2);` пробеги.
*   Оператор `switch` обращается к `case 2` , спрыгивает вниз и добавляет 1 к `count` переменных.
*   Затем оператор `switch` попадает в `break` и `cc(3);` пробеги.
*   Этот цикл продолжается до окончательного вызова, `cc('A');` ,
*   После оператора `switch` оператор `if` проверяет `count` , который теперь равен 0.
*   Затем он опускается до инструкции `else` , которая вернет **0 Hold** .

**_Примечание_** . Как упоминалось ранее, оператор `switch` мог также быть инструкцией `else if` .

## Дополнительное решение для кода:

```javascript
function cc(card) { 
  // Only change code below this line 
  var regex = /[JQKA]/; 
  if (card > 1 && card < 7){count++;} 
  else if (card === 10 || String(card).match(regex)){count--;} 
 
  if (count > 0) return count + " Bet"; 
  return count + " Hold"; 
 
  // Only change code above this line 
 } 
```

· Запустить код в [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards)

### Обозначение кода

· Функция сначала оценивает, является `if` `card` условия значением больше `1` и ниже `7` , и в этом случае она увеличивает `count` на единицу. · Если карта равна `10` или выше, она уменьшает `count` на единицу. · Переменное `regex` является [регулярным выражением](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) , представляющее значение (буквы) для высших карт. · Оператор `else` проверяет эти значения с помощью `|| (logical OR)` оператор; сначала для `10` а затем для любой строки, которая соответствует регулярному выражению с помощью [String.match ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) .

#### Ресурсы

*   [Счет в Википедии](https://en.wikipedia.org/wiki/Card_counting)
*   [Задача: выбор из множества опций с помощью операторов Switch](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
*   [Задача: цепочка в случае других утверждений](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Задача: увеличить номер с помощью Javascript](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)