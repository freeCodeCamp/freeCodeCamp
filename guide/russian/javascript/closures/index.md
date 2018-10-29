---
title: Closures
localeTitle: Затворы
---
# Затворы

Закрытие представляет собой комбинацию функции и лексической среды (области), в которой была объявлена ​​эта функция. Закрытие - это фундаментальное и мощное свойство Javascript. В этой статье обсуждаются «как» и «почему» о закрытии:

### пример

```js
//we have an outer function named walk and an inner function named fly 
 
 function walk (){ 
 
  var dist = '1780 feet'; 
 
  function fly(){ 
    console.log('At '+dist); 
  } 
 
  return fly; 
 } 
 
 var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc 
 //you would expect that once the walk function above is run 
 //you would think that JavaScript has gotten rid of the 'dist' var 
 
 flyFunc(); //Logs out 'At 1780 feet' 
 //but you still can use the function as above 
 //this is the power of closures 
```

### Другой пример

```js
function by(propName) { 
    return function(a, b) { 
        return a[propName] - b[propName]; 
    } 
 } 
 
 const person1 = {name: 'joe', height: 72}; 
 const person2 = {name: 'rob', height: 70}; 
 const person3 = {name: 'nicholas', height: 66}; 
 
 const arr_ = [person1, person2, person3]; 
 
 const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ] 
```

Закрытие «запоминает» среду, в которой она была создана. Эта среда состоит из любых локальных переменных, которые были в области видимости на момент создания закрытия.

```js
function outside(num) { 
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers' 
  return function inside() { // This is the function which the closure 'remembers' 
    console.log(rememberedVar) 
  } 
 } 
 
 var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside' 
 var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside' 
 
 remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7 
 remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
```

Закрытие полезно, потому что они позволяют вам «запоминать» данные, а затем позволяют работать с этими данными через возвращаемые функции. Это позволяет javascript эмулировать частные методы, которые находятся на других языках программирования. Частные методы полезны для ограничения доступа к коду, а также для управления глобальным пространством имен.

### Частные переменные и методы

Закрытие также может использоваться для инкапсуляции частных данных / методов. Взгляните на этот пример:

```javascript
const bankAccount = (initialBalance) => { 
  const balance = initialBalance; 
 
  return { 
    getBalance: function() { 
      return balance; 
    }, 
    deposit: function(amount) { 
      balance += amount; 
      return balance; 
    }, 
  }; 
 }; 
 
 const account = bankAccount(100); 
 
 account.getBalance(); // 100 
 account.deposit(10); // 110 
```

В этом примере мы не сможем получить доступ к `balance` из любой точки вне функции `bankAccount` , а это значит, что мы только что создали приватную переменную. Где закрытие? Ну, подумайте о том, что `bankAccount()` . Он фактически возвращает объект с кучей функций внутри него, и все же, когда мы вызываем `account.getBalance()` , функция может «запомнить» свою начальную ссылку на `balance` . Это сила закрытия, когда функция «запоминает» ее лексическую область (область времени компиляции), даже если функция выполняется вне этой лексической области.

**Эмуляция переменных с блочной областью.**

В Javascript не было понятия переменных с блочным диапазоном. Это означает, что при определении переменной внутри forloop, например, эта переменная видима также снаружи forloop. Итак, как могут закрытия помочь нам решить эту проблему? Давайте взглянем.

```javascript
    var funcs = []; 
 
    for(var i = 0; i < 3; i++){ 
        funcs[i] = function(){ 
            console.log('My value is ' + i);  //creating three different functions with different param values. 
        } 
    } 
 
    for(var j = 0; j < 3; j++){ 
        funcs[j]();             // My value is 3 
                                // My value is 3 
                                // My value is 3 
    } 
```

Поскольку переменная i не имеет блочной области, ее значение во всех трех функциях обновлялось с помощью счетчика циклов и создавало вредоносные значения. Закрытие может помочь нам решить эту проблему, создав снимок среды, в которой была функция, когда она была создана, сохраняя ее состояние.

```javascript
    var funcs = []; 
 
    var createFunction = function(val){ 
        return function() {console.log("My value: " + val);}; 
    } 
 
    for (var i = 0; i < 3; i++) { 
        funcs[i] = createFunction(i); 
    } 
    for (var j = 0; j < 3; j++) { 
        funcs[j]();                 // My value is 0 
                                    // My value is 1 
                                    // My value is 2 
    } 
```

В поздних версиях javascript es6 + есть новое ключевое слово, называемое let, которое может использоваться для присвоения переменной blockscope. Существует также множество функций (forEach) и целых библиотек (lodash.js), предназначенных для решения таких проблем, как те, которые были описаны выше. Они, безусловно, могут повысить вашу производительность, однако крайне важно иметь знания обо всех этих проблемах при попытке создать что-то большое.

Закрытие имеет множество специальных приложений, которые полезны при создании больших javascript-программ.

1.  Эмуляция частных переменных или инкапсуляция
2.  Выполнение асинхронных вызовов на стороне сервера
3.  Создание переменной с блочным диапазоном.

**Эмулирование частных переменных.**

В отличие от многих других языков, Javascript не имеет механизма, который позволяет создавать инкапсулированные переменные экземпляра внутри объекта. Наличие переменных публичного экземпляра может вызвать множество проблем при построении средних и больших программ. Однако с закрытием эта проблема может быть смягчена.

Как и в предыдущем примере, вы можете создавать функции, которые возвращают литералы объектов с методами, которые имеют доступ к локальным переменным объекта, не подвергая их воздействию. Таким образом, они становятся частными.

Закрытие также может помочь вам управлять глобальным пространством имен, чтобы избежать столкновений с глобально разделяемыми данными. Обычно все глобальные переменные распределяются между всеми сценариями в вашем проекте, что определенно даст вам много проблем при создании средних и больших программ. Вот почему библиотеки и авторы модулей используют закрытие, чтобы скрыть методы и данные всего модуля. Это называется шаблоном модуля, он использует выражение, вызываемое непосредственно вызываемым, которое экспортирует только определенные функции во внешний мир, что значительно сокращает количество глобальных ссылок.

Вот краткий образец скелета модуля.

```javascript
var myModule = (function() = { 
    let privateVariable = 'I am a private variable'; 
 
    let method1 = function(){ console.log('I am method 1'); }; 
    let method2 = function(){ console.log('I am method 2, ', privateVariable); }; 
 
    return { 
        method1: method1, 
        method2: method2 
    } 
 }()); 
 
 myModule.method1(); // I am method 1 
 myModule.method2(); // I am method 2, I am a private variable 
```

Закрытие полезно для захвата новых экземпляров частных переменных, содержащихся в «запоминаемой» среде, и к этим переменным можно получить доступ только через возвращаемую функцию или методы.

### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[Закрытие Javascript](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)