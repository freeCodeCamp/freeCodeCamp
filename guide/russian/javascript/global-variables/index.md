---
title: Global Variables
localeTitle: Глобальные переменные
---
Глобальные переменные объявляются вне функции для доступности всей программы, в то время как локальные переменные хранятся в функции , используя `var` для использования только в пределах этой функции в [объеме](https://developer.mozilla.org/en-US/docs/Glossary/Scope) . Если вы объявите переменную без использования `var` , даже если она находится внутри функции, она будет по-прежнему рассматриваться как глобальная:

```javascript
var x = 5; //global 
 function someThing(y) { 
 var z = x + y; 
 console.log(z); 
 } 
 
 function someThing(y) { 
 x = 5; //still global! 
 var z = x + y; 
 console.log(z); 
 } 
 
 
 function someThing(y) { 
 var x = 5; //local 
 var z = x + y; 
 console.log(z); 
 } 
```

Глобальная переменная также является объектом текущей области, такой как окно браузера:

```javascript
var dog = “Fluffy”; 
 console.log(dog); //Fluffy; 
 
 var dog = “Fluffy”; 
 console.log(window.dog); //Fluffy 
```

Рекомендуется минимизировать глобальные переменные. Поскольку переменную можно получить в любом месте программы, они могут вызвать странное поведение.

Рекомендации:

*   [var -Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [Вы не знаете JavaScript: области и закрытие](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

Дополнительная информация:

*   [Рекомендации по использованию JavaScript: избегайте глобальных](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)

## \* В [чем разница между глобальным var и window.variable в javascript?](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)

Объем переменных JavaScript является глобальным или локальным. Глобальные переменные объявляются НАРУЖНОЙ функцией, и ее значение доступно / изменено в течение всей программы.

Вы должны ВСЕГДА использовать **var,** чтобы объявить свои переменные (сделать локально), иначе он установит GLOBALY

Будьте осторожны с глобальными переменными, потому что они рискованны. Большую часть времени вы должны использовать закрытие для объявления переменных. Пример:

```javascript
    (function(){ 
      var myVar = true; 
    })(); 
```

#### Дополнительная информация:

*   [Рекомендации по использованию JavaScript: избегайте глобальных](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
*   [Глобальные переменные плохи](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
*   [MDN - глобальные переменные](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)