---
title: Numbers
localeTitle: Числа
---
## Числа

Реализация в JavaScript `number` базируется на стандарте `IEEE 754`, который часто называют «плавающей точкой» .

[Ссылка на Википедию IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) [IEEE 754 Двухточечная визуализация с плавающей точкой](http://bartaz.github.io/ieee754-visualization/)

Числовые литералы выражаются в общем виде десятичными буквами `base-10` .

```javascript
var foo = 47; 
 var bar = 47.9; 
```

Ведущая часть десятичного значения, если `0` , является необязательной:

```javascript
var same = 0.47; 
 var stillSame = .47; 
```

Аналогично, конечная часть (дробная) десятичного значения после `.` , если `0` , является необязательным:

```javascript
var a = 47.0; 
 var b = 47.; 
```

По умолчанию большинство чисел будут выводиться в виде десятичных знаков `base-10` , при этом удаляется дробная `0` с. Так:

```javascript
var foo = 47.300; 
 var bar = 47.0; 
 
 foo; // 47.3 
 bar; // 47 
```

Очень большие или очень маленькие `numbers` могут быть записаны как:

```javascript
var foo = 47e8; // 4700000000 
 var baz = 47e-8; // 00.00000047 
```

Метод `toExponential` может использоваться для преобразования `number` в его `exponential notation` .

```javascript
var foo = 47e8; 
 foo;  // 4700000000 
 foo.toExponential()   //"47e8" 
```

Числа имеют доступ к методам, встроенным в `Number.prototype` .

Например: `toFixed()` форматирует число с определенным числом цифр справа от десятичной.

```javascript
var foo = 47.69; 
 foo.toFixed(0);  // "48" 
 foo.toFixed(1);  // "47.7" 
 foo.toFixed(2);  // "47.69" 
```

> Введите `Number.prototype` в своем браузере и посмотрите другие доступные методы самостоятельно.

#### Дополнительная информация:

1.  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
2.  [Номера JavaScript](https://www.w3schools.com/js/js_numbers.asp)

#### Рекомендации

1.  [Типы и грамматика](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar) Кайла Симпсона.
2.  [Спецификация языка ECMAScript: 4.3.20](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20)
3.  [Спецификация языка ECMAScript: 15.7 Числовые объекты](https://www.ecma-international.org/ecma-262/5.1/#sec-15.7)
