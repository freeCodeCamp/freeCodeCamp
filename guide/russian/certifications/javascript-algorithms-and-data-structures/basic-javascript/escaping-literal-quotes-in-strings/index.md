---
title: Escaping Literal Quotes in Strings
localeTitle: Исключение буквенных котировок в строках
---
## Исключение буквенных котировок в строках

*   Когда вам нужно использовать специальный символ , такие как `"` внутри строки , вам нужно , чтобы избежать его использования `\` .
*   Если вы используете двойные кавычки `"` для строки, одинарные кавычки `'` в строке, ее не нужно экранировать.
*   Если вы используете одиночные кавычки `'` для строки, двойные кавычки `"` в строке не нужно экранировать.

## Решение

```javascript
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.'; 
 var noEscapeSingle = "There is no need to 'escape' the single quotes."; 
 var noEscapeDouble = 'There is no need to "escape" the double quotes.'; 

```