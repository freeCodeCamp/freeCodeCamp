---
title: Continue Statement
localeTitle: Продолжить заявление
---
## Введение

Оператор **continue** завершает выполнение операторов в текущей итерации текущего или помеченного цикла и продолжает выполнение цикла со следующей итерацией.
```
continue; 
```

Если оператор **continue** используется в помеченной инструкции, синтаксис выглядит следующим образом:
```
continue labelName; 
```

В отличие от оператора **break** , **continue** не прекращает выполнение цикла полностью; вместо:

*   В `while` цикл, он возвращается к условию.
*   В цикле `for` он переходит к выражению обновления.

## Примеры

Следующий пример демонстрирует `while` цикл , который имеет по- **прежнему** о том , что выполняется , когда значение **I** равно 3. Таким образом, **п** принимает значения 1, 3, 7 и 12.
```
var i = 0; 
 var n = 0; 
 
 while (i < 5) { 
  i++; 
 
  if (i === 3) { 
    continue; 
  } 
 
  n += i; 
  console.log (n); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7hx/0)

В следующем примере цикл повторяется с 1 по 9. Операторы между **продолжением** и концом `for` тела пропускаются из-за использования оператора **continue** вместе с выражением `(i < 5)` .
```
for (var i = 1; i < 10; i++) { 
    if (i < 5) { 
        continue; 
    } 
    console.log (i); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7hs/0)

## Другие источники

*   [Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [Ссылка MSDN](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)