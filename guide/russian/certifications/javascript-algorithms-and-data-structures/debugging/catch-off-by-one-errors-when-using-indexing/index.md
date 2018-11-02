---
title: Catch Off By One Errors When Using Indexing
localeTitle: Устранение ошибок при использовании индексирования
---
## Устранение ошибок при использовании индексирования

### основы

Из-за того, как работают индексы JavaScript, `firstFive` имеет **пять элементов,** но индексируется от **0 до 4** !

```javascript
console.log(len); // 5 
 console.log(firstFive[0]); // 1 
 /**/ 
 console.log(firstFive[4]); // 5 
 console.log(firstFive[5]); // undefined 
```

Это должно дать вам достаточно, чтобы понять пределы `firstFive` . Направляйте ваше внимание на цикл. Что оно делает? Вы можете попробовать отладить его, чтобы узнать!

### отладка

Вам предоставляется этот код:

```javascript
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Чтобы отладить этот фрагмент кода, используйте `console.clear()` . Каким было бы лучшее место для этого? Ответ прямо перед заявлением `for` !

```javascript
  console.clear(); 
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Консольный выход:

```text
  Console was cleared. 
  2 
  3 
  4 
  5 
  undefined 
```

### Анализ

Изучите выход. В этих условиях петля сначала печатает элемент, расположенный на 1 ... который равен 2! Он также пытается распечатать элемент с индексом 5, который не `undefined` .

Это можно считать пунктом этой задачи. Сохраните `console.log()` и `console.clear()` . Они помогут вам понять, как работает ваш код.

### Решение

Самый простой способ исправить это - изменить условия for (). Запустите `i` в 0. Также цикл **не** должен выполняться для i == 5. Другими словами, связь между `i` и `len` должна быть `false` при i == 5. Этого можно достичь, используя `i < len` (Is 5 <len? false, и цикл не будет выполнен!).

```javascript
  for (let i = 0; i < len; i++) { 
```

**Счастливое кодирование!** : Компьютер:

### Ресурсы

*   [Для запросов вызов на FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
*   [Для заявлений в веб-документах MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)