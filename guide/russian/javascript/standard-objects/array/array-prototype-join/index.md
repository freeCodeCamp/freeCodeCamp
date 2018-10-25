---
title: Array.prototype.join
localeTitle: Array.prototype.join
---
Метод массива JavaScript `.join()` объединяет все элементы массива в одну строку.

**Синтаксис**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor", "Sit"]; 
  var str = array.join([separator]); 
```

## параметры

**разделитель**

Необязательный. Указывает строку, используемую для разделения каждого элемента исходного массива. Если разделитель не является строкой, он будет преобразован в строку. Если параметр разделителя не указан, элементы массива по умолчанию разделяются запятой. Если разделитель представляет собой пустую строку `""` , все элементы массива соединяются без разделительного символа между ними.

## Описание

`.join()` объединяет все элементы массива в одну строку. Если какой-либо из элементов массива не `undefined` или равен `null` , этот элемент преобразуется в пустую строку `""` .

## Примеры

**Использование `.join()` четыре разных способа**

```javascript
  var array = ["Lorem", "Ipsum", "Dolor" ,"Sit"]; 
 
  var join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable 
                                         (because no separator was provided .join() 
                                         defaulted to using a comma) */ 
  var join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable 
  var join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable 
  var join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable 
```

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)