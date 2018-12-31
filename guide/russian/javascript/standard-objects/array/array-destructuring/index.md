---
title: Array Destructuring
localeTitle: Разрушение массива
---
# Разрушение массива

Деструктурирование - удобный способ извлечения нескольких значений из данных, хранящихся в массивах. Он может использоваться в местах, которые получают данные (например, левую часть задания). Эта функция представлена ​​в `ECMAScript 6` .

Как извлечь значения задается с помощью шаблонов (читайте далее для примеров).

### Основное назначение переменных
```
var names = ['neel', 'meet', 'darshan']; 
 var [nameOne, nameTwo, nameThree] = names; 
 console.log(nameOne); // "neel" 
 console.log(nameTwo); // "meet" 
 console.log(nameThree); // "darshan" 
```

### Назначение отдельно от декларации

Переменной может быть присвоено ее значение через деструктурирование отдельно от объявления переменной.
```
var a, b; 
 
 [a, b] = [1, 2]; 
 console.log(a); // 1 
 console.log(b); // 2 
```

### Значения по умолчанию

Переменной может быть присвоено значение по умолчанию, в случае, если значение, распакованное из массива, не `undefined` .
```
var a, b; 
 
 [a=5, b=7] = [1]; 
 console.log(a); // 1 
 console.log(b); // 7 
```

### Анализ массива, возвращаемого функцией

Всегда можно было возвращать массив из функции. Деструктурирование может сделать работу с возвращаемым значением массива более кратким.

В этом примере `getNames()` возвращает значения `['neel', 'meet']` качестве своего вывода, которые могут быть проанализированы в одной строке с деструктурированием.
```
function getNames() { 
  return ['neel', 'meet']; 
 } 
 
 var neel, meet; 
 [nameOne, nameTwo] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameTwo); // meet 
```

### Игнорирование некоторых возвращаемых значений

Вы можете игнорировать возвращаемые значения, которые вам не интересны:
```
function getNames() { 
  return ['neel', 'meet', 'darshan']; 
 } 
 
 var [nameOne, , nameThree] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameThree); // darshan 
```

Вы также можете игнорировать все возвращаемые значения:
```
[,,] = getNames(); 
```

### Присвоение остальной части массива переменной

При деструкции массива вы можете распаковать и назначить оставшуюся часть переменной переменной, используя шаблон rest:
```
var [a, ...b] = [1, 2, 3]; 
 console.log(a); // 1 
 console.log(b); // [2, 3] 
```

Обратите внимание, что `SyntaxError` будет `SyntaxError` , если задняя запятая используется с левой стороны с элементом отдыха:
```
var [a, ...b,] = [1, 2, 3]; 
 // SyntaxError: rest element may not have a trailing comma 
```

См. Также: **Разрушение массива** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)