---
id: 587d7db1367417b2b2512b87
title: Додавання методів після успадкування
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Функція конструктора, яка успадковує свій об'єкт `prototype` від функції супертипу конструктора, все ще може мати свої власні методи на додачу до успадкованих методів.

Наприклад, `Bird` – це конструктор, який успадковує `prototype` від `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Окрім того, що успадковано від `Animal`, за бажанням можна додати поведінку, унікальну для об'єктів `Bird`. У такому разі `Bird` отримує функцію `fly()`. Функції додаються до `Bird's` `prototype` так само, як і будь-яка функція конструктора:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Тепер екземпляри `Bird` матимуть обидва методи: `eat()` та `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` показуватиме рядок `nom nom nom` у консолі, а `duck.fly()` показуватиме рядок `I'm flying!`.

# --instructions--

Додайте все необхідне кодування так, щоб об’єкт `Dog` успадковував від `Animal`, а конструктор `Dog` `prototype` був встановлений для `Dog`. Потім використайте метод `bark()` `Dog` щодо об'єкта, щоб `beagle` міг водночас `eat()` й `bark()`. Метод `bark()` треба вводити `Woof!` на консоль.

# --hints--

`Animal` не повинен збігатися зі методом `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` повинен наслідувати метод `eat()` від `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` прототип повинен містити в собі метод `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle`повинен мати `instanceof` `Animal`.

```js
assert(beagle instanceof Animal);
```

Конструктор для `beagle` має бути встановлений на `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` має бути зазначеним на рядку `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` має бути зазначеним на рядку `Woof!`

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
