---
title: Reuse Patterns Using Capture Groups
localeTitle: Повторное использование шаблонов с использованием групп захвата
---
## Повторное использование шаблонов с помощью группы захвата

## Подсказка 1:

Приведенный ниже код:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)\s\1/; 
 let result = reRegex.test(testString); 
```

`result` будет соответствовать только `test test` потому что `\1` в этом примере обозначает тот же текст, что и последний, сопоставленный первой группой захвата `(test)` .

Если бы мы должны были перевести регулярное выражение, это выглядело бы примерно так:

```js
let re = /(test)\s\1/; 
 let literalRe = /test\stest/; 
```

И `rea` и `literalRe` будут соответствовать одному и тому же.

## Подсказка 2:

Учитывая приведенный ниже код:

```javascript
let testString = "test test test "; 
 let reRegex =/(test)(\s)\1\2\1/; 
 let result = reRegex.test(testString); 
```

будет соответствовать всем `test test test` потому что: `\1` повтор (тест) `\2` повторяет (\\ s)

## Подсказка 3:

Код ниже:

```javascript
let testString = "test test test test test test"; 
 let reRegex =/(test)(\s)\1\2\1/g; 
 let result = reRegex.test(testString); 
```

потому что мы использовали `\g` , наше Regex не возвращается после первого полного соответствия ( `test test test` ) и соответствует всем повторениям.

## Оповещение о спойлере - решение впереди!

## Решение:

```javascript
let repeatNum = "42 42 42"; 
 let reRegex =  /^(\d+)\s\1\s\1$/; 
 let result = reRegex.test(repeatNum); 

```
