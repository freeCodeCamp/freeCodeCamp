---
title: Free Code Camp JavaScript Style Guide
localeTitle: Руководство по стилю JavaScript для Code Code
---
или Как крутые люди пишут JavaScript.

## индент

Всегда использовать два пространства  
Никаких жестких вкладок, никогда. На самом деле, просто не делай этого.

## Фигурные скобки

Всегда используйте фигурные скобки при использовании ключевых слов `if/else/else if` . Это предотвращает большую двусмысленность и предотвращает ошибки синтаксиса в некоторых случаях.

Плохо:
```
if (foo) bar(); 
```

Хорошо:
```
if (foo) { bar(); } 
```

## Кудрявые скобы везде!

Пробел после `function` Ключевое слово, кроме анонимных функций

Хорошо:
```
function foo() { 
 } 
 
 var foo = function() { 
  // ... 
 }; 
```

Плохо:
```
function foo () 
 { 
  // ... 
 } 
 
 var foo = function () { 
  // ... 
 }; 
```

## Комментарии

*   нет встроенных комментариев
*   одиночное пространство после `//`
*   Не используйте многострочный комментарий `/* */` , мы резервируем их для использования с jsDocs.

## Ключевые слова

*   пространство сразу после if, else, while и т. д.
*   открытие фигурной скобки всегда должно быть на одной линии.

Хорошо:
```
if (true) { 
 // do the thing 
 } 
```

Плохо:
```
if(true) 
 { 
 // do the thing 
 } 
```

## еще

Избегайте других и «рано заканчивайте». В JavaScript часто бывает много отступов (обычно при работе с асинхронным кодом и с именем «callback hell»). Все, что вы можете сделать, уменьшает количество отступов. Одно дело - [избегать](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) ключевого слова [else](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) .

Это также имеет побочный эффект, заключающийся в том, чтобы сделать код чище и легче читать.

Плохо:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    callback(err); 
  } else { 
    // do stuff with data 
  } 
 }); 
```

Хорошо:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    return callback(err); 
  } 
  // do stuff with data 
  // saves one indent 
 }); 
```

## Длинные строки

Длинные многострочные строки должны быть в одной из двух форм:
```
var longString = 
  'long strings should ' + 
  'be in this form, with the ' + 
  'operator ending the line'; 
 
 var foo = 'bar'; 
 
 var longString = [ 
  'long strings with variables such as ', 
  foo, 
  'should ', 
  'be in this form, an array of strings ', 
  'that are joined with the join array instance method', 
 ].join(''); 
```

…еще не все