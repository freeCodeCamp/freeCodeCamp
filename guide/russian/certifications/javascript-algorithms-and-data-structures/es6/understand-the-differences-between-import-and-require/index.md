---
title: Understand the Differences Between import and require
localeTitle: Понимание различий между импортом и требованием
---
## Понимание различий между импортом и требованием

Давайте поясним: `require()` загружает весь файл и его компоненты (функции, переменные), а `import _ from` позволяет вам выбирать, какие компоненты вы хотите.

На этом занятии вам поручено импортировать функцию `capitalizeStrings()` , которая поступает из файла `"string-functions"` .

## Подсказка 1:

Заполните пробелы: `import { function_name } from "file_name"` . Имя вашей функции - `capitalizeStrings` , а ваше имя файла - `"string-functions"` .

## Оповещение о спойлере - решение впереди!

## Решение

```javascript
"use strict"; 
 import { capitalizeString } from "string-functions"; 
 capitalizeString("hello!"); 

```