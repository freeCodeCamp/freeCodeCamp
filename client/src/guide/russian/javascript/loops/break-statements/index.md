---
title: Break Statement
localeTitle: Заявление о нарушении
---
## Введение

Оператор **break** завершает текущий цикл, оператор `switch` или `label` и передает управление программой в оператор после завершающего оператора.
```
break; 
```

Если оператор **break** используется в выражении с надписью, синтаксис выглядит следующим образом:
```
break labelName; 
```

## Примеры

Следующая функция имеет заявление **разрыва** , который прерывает `while` цикл , когда **я** равен 3, а затем возвращает значение **3 \* х.**
```
function testBreak(x) { 
  var i = 0; 
 
  while (i < 6) { 
    if (i == 3) { 
      break; 
    } 
    i += 1; 
  } 
 
  return i * x; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7VM/0)

В следующем примере счетчик настроен на количество от 1 до 99; однако оператор **break** завершает цикл после 14 отсчетов.
```
for (var i = 1; i < 100; i++) { 
  if (i == 15) { 
    break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7VO/0)

## Другие источники:

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)