---
title: Logical Operators
localeTitle: Логические операторы
---
# Логические операторы

Логические операторы сравнивают логические значения и возвращают булевский ответ. Существует два типа логических операторов: логическое И и логическое ИЛИ. Эти операторы часто записываются как && для AND, а || для OR.

#### Логическое И (&&)

Оператор AND сравнивает два выражения. Если первый оценивается как [«правдивый»](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) , оператор возвращает значение второго выражения. Если первый оценивается как [«ложный»](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) , оператор возвращает значение первого выражения.

Если задействовать только логические значения ( `true` или `false` ), он возвращает true, если только если оба выражения истинны. Если одно или оба выражения ложны, весь оператор вернет false.

```js
true && true //returns  the second value, true 
 true && false //returns the second value, false 
 false && false //returns the first value, false 
 123 && 'abc' // returns the second value, 'abc' 
 'abc' && null //returns the second value, null 
 undefined && 'abc' //returns the first value, undefined 
 0 && false //returns the first value, 0 
```

#### Логическое ИЛИ (||)

Оператор OR сравнивает два выражения. Если первый оценивается как «ложный», оператор возвращает значение второго второго выражения. Если первый оценивается как «правдивый», оператор возвращает значение первого выражения.

Если задействовать только логические значения ( `true` или `false` ), он возвращает true, если любое выражение истинно. Оба выражения могут быть истинными, но для достижения истины необходимо только одно.

```js
true || true //returns the first value, true 
 true || false //returns the first value, true 
 false || false //returns the second value, false 
 123 || 'abc' // returns the first value, 123 
 'abc' || null //returns the first value, 'abc' 
 undefined || 'abc' //returns the second value, 'abc' 
 0 || false //returns the second value, false 
```

#### Оценка короткого замыкания

&& и || ведут себя как операторы короткого замыкания.

В случае логического И, если первый операнд возвращает false, второй операнд никогда не оценивается и возвращается первый операнд.

В случае логического ИЛИ, если первое значение возвращает true, второе значение никогда не оценивается и возвращается первый операнд.

#### Логическое НЕ (!)

Оператор NOT не сравнится с операторами AND и OR. Кроме того, он работает только с 1 операндом.

«!» (восклицательный знак) используется для представления оператора NOT.

###### Использование операторов NOT

1.  преобразование выражения в булево.
2.  возвращает обратное значение булева, полученное на последнем шаге.

```js
var spam = 'rinki'; //spam may be equal to any non empty string 
 var booSpam = !spam; 
 /*returns false 
  since when a non-empty string when converted to boolean returns true 
  inverse of which is evaluated to false. 
 */ 
 
 var spam2 = ''; //spam2 here is equal to empty string 
 var booSpam2 = !spam2; 
 /*returns true 
  since when a empty string when converted to boolean returns false 
  inverse of which is evaluated to true. 
 */ 
```

#### Советы:

Оба логических оператора вернут значение последнего оцениваемого выражения. Например:

```js
"cat" && "dog" //returns "dog" 
 "cat" && false //returns false 
 0 && "cat"  //returns 0 (which is a falsy value) 
 
 "cat" || "dog" //returns "cat" 
 "cat" || false //returns "cat" 
 0 || "cat" //returns "cat" 
```

Обратите внимание: где `&&` возвращает первое значение, `||` возвращает второе значение и наоборот.

#### Дополнительная информация:

*   [Таблица истины Javascript](https://guide.freecodecamp.org/javascript/truth-table)
    
*   [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)