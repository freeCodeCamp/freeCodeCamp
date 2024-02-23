---
id: 587d7db1367417b2b2512b87
title: Додавання методів після успадкування
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Функція-конструктор, яка успадковує об’єкт `prototype` від функції-конструктора супертипу, всеодно може мати власні методи на додачу до успадкованих.

Наприклад, `Bird` є конструктором, який успадковує `prototype` від `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Окрім успадкованого від `Animal`, за бажанням можна додати поведінку, унікальну для об’єктів `Bird`. У такому разі `Bird` отримує функцію `fly()`. Функції додаються до прототипу `Bird` так само, як і будь-яка функція-конструктор:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Тепер екземпляри `Bird` матимуть методи `eat()` та `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` показуватиме рядок `nom nom nom` на консолі, а `duck.fly()` показуватиме рядок `I'm flying!`.

# --instructions--

Додайте необхідний код так, щоб об’єкт `Dog` успадковував від `Animal`, а прототип конструктора `Dog` був налаштований на `Dog`. Потім додайте метод `bark()` до об’єкта `Dog`, щоб `beagle` міг `eat()` та `bark()`. Метод `bark()` має вивести `Woof!` на консоль.

# --hints--

`Animal` не має відповідати на метод `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` має успадкувати метод `eat()` від `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

Прототип `Dog` повинен мати метод `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` має бути екземпляром `Animal`.

```js
assert(beagle instanceof Animal);
```

Значенням конструктора для `beagle` має бути `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` має вивести рядок `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` має вивести рядок `Woof!`

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
