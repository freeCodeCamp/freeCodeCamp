---
title: this reference
localeTitle: эта ссылка
---
## `this` ссылка

В JavaScript каждая функция имеет `this` ссылку, автоматически создаваемую при ее объявлении. Эта ссылка очень похожа на `this` ссылку на других языках на основе классов, таких как Java или C # (JavaScript - это язык, основанный на прототипе, и не понятие «класс»): _он указывает, какой объект вызывает функцию_ (этот объект иногда называемый _контекстом_ ). Однако в JavaScript _`this` ссылка внутри функций может быть привязана к различным объектам в зависимости от того, где вызывается функция_ . Вот 5 основных правил для `this` привязки в JavaScript:

### Правило 1

Когда функция вызывается в глобальной области, `this` ссылка по умолчанию привязана к **глобальному объекту** ( `window` в браузере или `global` в Node.js). Например:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 foo(); 
 console.log(a); // 2 
```

Примечание. Если вы объявляете функцию `foo()` выше в строгом режиме, вы вызываете эту функцию в глобальной области, `this` будет `undefined` и присваивание `this.a = 2` будет `Uncaught TypeError` исключение `this.a = 2` .

### Правило 2

Рассмотрим ниже пример:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 var obj = { 
  foo: foo 
 }; 
 
 obj.foo(); 
 console.log(obj.a); // 2 
```

Очевидно, что в приведенном выше фрагменте функция `foo()` вызывается с _контекстом,_ является объектом `obj` и `this` ссылка теперь привязана к `obj` . Поэтому, когда функция вызывается с объектом контекста, `this` ссылка будет привязана к этому объекту.

### Правило 3

`.call` , `.apply` и `.bind` могут быть использованы на сайте вызова, чтобы явно привязать `this` . Использование `.bind(this)` - это то, что вы можете увидеть в довольно многих компонентах React.

```javascript
var foo = function() { 
  console.log(this.bar) 
 } 
 
 foo.call({ bar: 1 }) // 1 
```

Вот краткий пример того , как каждый из них используется , чтобы связать `this` :

*   `.call()` : `fn.call(thisObj, fnParam1, fnParam2)`
*   `.apply()` : `fn.apply(thisObj, [fnParam1, fnParam2])`
*   `.bind()` : `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### Правило 4

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
 
 var p1 = new Point2D(1, 2); 
 console.log(p1.x); // 1 
 console.log(p1.y); // 2 
```

То, что вы должны заметить, это функция `Point2D` `new` ключевым словом, и `this` ссылка привязана к объекту `p1` . Поэтому, когда функция вызывается с `new` ключевым словом, она создаст новый объект, и `this` ссылка будет привязана к этому объекту.

Примечание. Когда вы вызываете функцию с `new` ключевым словом, мы также называем ее _конструкторной функцией_ .

### Правило 5

JavaScript определяет значение `this` во время выполнения, исходя из текущего контекста. Таким образом, `this` может иногда указывать на то, что вы ожидаете.

Рассмотрим этот пример класса Cat с методом под названием `makeSound()` , следуя шаблону в правиле 4 (выше) с помощью функции-конструктора и `new` ключевого слова.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.makeSound(); // Fat Daddy says: Mrrooowww 
```

Теперь давайте попробуем дать кошке способ `annoy()` людей, повторяя его звук 100 раз, каждые полсекунды.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(function() { 
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

Это не работает, потому что внутри обратного вызова `setInterval` мы создали новый контекст с глобальной областью, поэтому `this` больше не указывает на наш экземпляр киски. В веб - браузере, `this` будет вместо этого указывать на объект Window, который не имеет `makeSound()` метод.

Несколько способов заставить его работать:

1) Перед созданием нового контекста, присвоить `this` значение локальной переменной с именем `me` , или `self` , или что вы хотите назвать его, и использовать эту переменную внутри функции обратного вызова.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var self = this; 
        var t = setInterval(function() { 
            self.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

2) С ES6 вы можете не назначать `this` локальную переменную с помощью функции стрелки, которая связывает `this` с контекстом окружающего кода, где она определена.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(() => { 
            this.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

### Другие источники

*   [javascriptissexy.com](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
*   [Вы не знаете JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)