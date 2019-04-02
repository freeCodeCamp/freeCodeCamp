---
title: Specify Upper and Lower Number of Matches
localeTitle: Указать верхнее и нижнее число совпадений
---
## Указать верхнее и нижнее число совпадений

Помните `/a{2,4}/` вернет `true` пока между двумя-четырьмя а будут вместе. Он вернет `true` для любой строки, которая содержит более четырех а вместе.

Все эти строки вернут `true` :

```javascript
let threeAs = "aaa"; 
 let fourAs = "aaaa"; 
 let sevenAs = "aaaaaaa"; 
 
 let myRegex = /a{2,4}/; 
 myRegex.test(threeAs) ; // true 
 myRegex.test(fourAs) ; // true 
 myRegex.test(sevenAs) ; // true 
```

## Спойлер!

Не забудьте использовать `\s` после `Oh{3,6}` чтобы включить пробел, а затем `no` пройти все тестовые примеры. Все тестовые примеры записываются с использованием капитала O, однако тестовые файлы также могут быть переданы с использованием `/oh{3,6}\sno/i` `ignore-case` : `/oh{3,6}\sno/i`

## Решение:

```javascript
let ohStr = "Ohhh no"; 
 let ohRegex = /Oh{3,6}\sno/; // Change this line 
 let result = ohRegex.test(ohStr); 

```