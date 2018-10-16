---
title: Use Capture Groups to Search and Replace
localeTitle: Использование групп захвата для поиска и замены
---
## Использование групп захвата для поиска и замены

Используя `.replace()` с первым набором параметров, чтобы найти часть исходной строки для замены, а второй параметр должен быть заменой.

## Подсказка 1:

Измените регулярное выражение так, чтобы `fixRegex` обнаружил часть заменяемой строки, и переменная `replaceText` должна быть изменена на строку, которая заменит `fixRegex` .

## Оповещение о спойлере - решение впереди!

## Решение

```javascript
let huhText = "This sandwich is good."; 
 let fixRegex = /good/; // Change this line 
 let replaceText = "okey-dokey"; // Change this line 
 let result = huhText.replace(fixRegex, replaceText); 

```