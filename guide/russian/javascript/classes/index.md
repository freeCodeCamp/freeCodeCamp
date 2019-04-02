---
title: Classes
localeTitle: Классы
---
## Классы

JavaScript не имеет понятия классов по своей сути.

Но мы могли бы имитировать функциональность класса, используя прототипный характер JavaScript.

В этой статье предполагается, что у вас есть базовое понимание [прототипов](/src/pages/javascript/prototypes/index.md) .

Для ясности предположим, что мы хотим создать класс, который может сделать следующее

```javascript
var p = new Person('James','Bond'); // create a new instance of Person class 
    p.log() // Output: 'I am James Bond' // Accessing a function in the class 
    // Using setters and getters 
    p.profession = 'spy' 
    p.profession // output: James bond is a spy 
```

### Использование ключевого слова class

Как и на любом другом языке программирования, теперь вы можете использовать ключевое слово `class` для создания класса.

Это не поддерживается в старых браузерах и было представлено в ECMAScript 2015.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

  
  

`class` - это просто синтаксический сахар над существующей моделью наследования на основе прототипов JavaScript.

В общем, программисты используют следующие способы создания класса в JavaScript.

### Использование методов, добавленных в прототипы:

Здесь все методы добавляются к прототипу

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 } 
 
 Person.prototype.log = function() { 
    console.log('I am', this._firstName, this._lastName); 
 } 
 
 // This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above. 
 // Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript 
 Object.defineProperty(Person.prototype, 'profession', { 
    set: function(val) { 
        this._profession = val; 
    }, 
    get: function() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 }) 
```

Вы также можете написать прототипы для функции `Person` как `Person` ниже

```javascript
Person.prototype = { 
    log: function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
    set profession(val) { 
        this._profession = val; 
    } 
 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

### Использование встроенных методов

Здесь методы добавляются внутренне вместо прототипа

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 
    this.log = function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
 
    Object.defineProperty(this, 'profession', { 
        set: function(val) { 
            this._profession = val; 
        }, 
        get: function() { 
            console.log(this._firstName, this._lastName, 'is a', this._profession); 
        } 
    }) 
 } 
```

### Скрытие деталей в классах с символами

Чаще всего некоторые свойства и методы должны быть скрыты для предотвращения доступа извне функции. С помощью классов, чтобы получить эту функциональность, один из способов сделать это - использовать символы. Символ - это новый встроенный тип JavaScript, который можно вызвать, чтобы дать новое значение символа. Каждый символ уникален и может использоваться как ключ на объекте. Таким образом, один случай использования символов состоит в том, что вы можете добавить что-то к объекту, который у вас может не быть, и вы можете не захотеть столкнуться с любыми другими ключами объекта, поэтому создание нового и добавление как свойство этого объекта с использованием символа является самым безопасным , Кроме того, когда значение символа добавляется к объекту; никто другой не узнает, как это получить.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 // With the above code, even though we can access the properties outside the function to change their content what if we don't want that. 
 // Symbols come to rescue. 
 let s_firstname  = new Symbol(); 
 
 class Person { 
    constructor(firstName, lastName) { 
        this[s_firstName] = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this[s_firstName], this._lastName, 'is a', this._profession); 
    } 
```

#### Дополнительная информация: