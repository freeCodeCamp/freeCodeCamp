---
title: RegExp prototype exec
localeTitle: Исполнение прототипа RegExp
---
## Исполнение прототипа RegExp

Метод **`exec()`** выполняет поиск совпадения в указанной строке. Возвращает массив результатов или [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "Значение null представляет собой намеренное отсутствие какого-либо значения объекта. Это один из примитивных значений JavaScript.") .

Если вы выполняете сопоставление, просто чтобы найти true или false, используйте метод [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "Метод test () выполняет поиск совпадения между регулярным выражением и указанной строкой. Возвращает true или false.") или метод [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "Метод search () выполняет поиск совпадения между регулярным выражением и этим объектом String.") .

### Синтаксис
```
regexObj.exec(str) 
```

### параметры

`str`

Строка, для которой соответствует регулярное выражение.

### Возвращаемое значение

Если совпадение выполнено успешно, метод `exec()` возвращает массив и обновляет свойства объекта регулярного выражения. Возвращенный массив имеет согласованный текст в качестве первого элемента, а затем один элемент для каждой скобки для записи, который соответствует содержащему текст, который был захвачен.

Если совпадение не выполняется, метод `exec()` возвращает значение [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "Значение null представляет собой намеренное отсутствие какого-либо значения объекта. Это один из примитивных значений JavaScript.") .

### Описание

Рассмотрим следующий пример:
```
// Match "quick brown" followed by "jumps", ignoring characters in between 
 // Remember "brown" and "jumps" 
 // Ignore case 
 var re = /quick\s(brown).+?(jumps)/ig; 
 var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 
```

В следующей таблице показаны результаты для этого скрипта:

### Примеры

#### Поиск последовательных матчей

Если ваше регулярное выражение использует флаг « `g` », вы можете использовать метод `exec()` несколько раз, чтобы найти последовательные совпадения в одной строке. Когда вы это сделаете, поиск начинается с подстроки `str` заданной свойством [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex - это свойство integer чтения / записи экземпляров регулярных выражений, которое указывает индекс, с которого следует начинать следующее совпадение.") регулярного выражения ( [`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "Метод test () выполняет поиск совпадения между регулярным выражением и указанной строкой. Возвращает true или false.") также [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex - это свойство integer чтения / записи экземпляров регулярных выражений, которое указывает индекс, с которого следует начинать следующее совпадение.") свойство [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex - это свойство integer чтения / записи экземпляров регулярных выражений, которое указывает индекс, с которого следует начинать следующее совпадение.") ). Например, предположим, что у вас есть этот скрипт:
```
var myRe = /ab*/g; 
 var str = 'abbcdefabh'; 
 var myArray; 
 while ((myArray = myRe.exec(str)) !== null) { 
  var msg = 'Found ' + myArray[0] + '. '; 
  msg += 'Next match starts at ' + myRe.lastIndex; 
  console.log(msg); 
 } 
```

Этот скрипт отображает следующий текст:
```
Found abb. Next match starts at 3 
 Found ab. Next match starts at 9 
```

Примечание. Не помещайте литерал регулярных выражений (или конструктор [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "Конструктор RegExp создает объект регулярного выражения для сопоставления текста с шаблоном.") ) в условие `while` или он будет создавать бесконечный цикл, если есть совпадение из-за сброса свойства [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex - это свойство integer чтения / записи экземпляров регулярных выражений, которое указывает индекс, с которого следует начинать следующее совпадение.") на каждой итерации. Также убедитесь, что глобальный флаг установлен или здесь также будет цикл.

#### Использование `exec()` с литералами `RegExp`

Вы также можете использовать `exec()` без создания объекта [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "Конструктор RegExp создает объект регулярного выражения для сопоставления текста с шаблоном.") :
```
var matches = /(hello \S+)/.exec('This is a hello world!'); 
 console.log(matches[1]); 
```

Это запустит сообщение, содержащее «hello world!».