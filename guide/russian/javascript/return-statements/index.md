---
title: Return Statement
localeTitle: Операция возврата
---
## Введение

Когда в функции вызывается оператор **return** , выполнение этой функции останавливается. Если указано, данное значение возвращается вызывающему функции. Если выражение опущено, вместо него возвращается `undefined` .

```js
    return expression; 
```

Функции могут возвращаться:

*   Примитивные значения (строка, число, логическое значение и т. Д.)
*   Типы объектов (массивы, объекты, функции и т. Д.)

Никогда не возвращайте что-то на новую строку без использования круглых скобок. Это JavaScript quirk, и результат будет неопределенным. Старайтесь всегда использовать круглые скобки, когда возвращаете что-то на несколько строк.

```javascript
function foo() { 
    return 
      1; 
 } 
 
 function boo() { 
    return ( 
      1 
    ); 
 } 
 
 foo(); --> undefined 
 boo(); --> 1 
```

## Примеры

Следующая функция возвращает квадрат своего аргумента **x** , где **x** - число.

```js
    function square(x) { 
       return x * x; 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7VT/0)

Следующая функция возвращает произведение своих аргументов **arg1** и **arg2** .

```js
    function myfunction(arg1, arg2){ 
       var r; 
       r = arg1 * arg2; 
       return(r); 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C7VU/0)

Когда функция `return` значение sa, значение может быть присвоено переменной с помощью оператора привязки ( `=` ). В приведенном ниже примере функция возвращает квадрат аргумента. Когда функция разрешается или заканчивается, ее значение является `return` значением ed. Затем значение присваивается переменной `squared2` .

```javascript
    function square(x) { 
        return x * x; 
    } 
 
    let squared2 = square(2); // 4 
```

Если нет явного оператора return, то есть в функции отсутствует ключевое слово `return` , функция автоматически возвращает `undefined` . В следующем примере в `square` функции отсутствует ключевое слово `return` . Когда результат вызова функции присваивается переменной, переменная имеет значение `undefined` .

```javascript
    function square(x) { 
        let y = x * x; 
    } 
 
    let squared2 = square(2); // undefined 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/M8BE)

#### Дополнительная информация:

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

[Ссылка MSDN](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)