---
title: Classes
---
## Classes

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
JavaScript does not have native syntax support for classes. 

However, we can simulate the functionalities of a class by taking advantage of the prototypal nature of JavaScript.

This article assumes that you have a basic understanding of <a href="/src/pages/javascript/prototypes/index.md">prototypes</a>.

For the sake of clarity, let us assume that we want to create a class which can do the following:

```javascript
var p = new Person('James','Bond'); // create a new instance of Person class
p.log() // Output: 'I am James Bond' // Accessing a function in the class
// Using setters and getters 
p.profession = 'spy'
p.profession // output: James bond is a spy
```

### Using the `class` keyword

Like in any other programming language, you can now use the `class` keyword to create a class.

This is not supported in older browsers and was introduced in ECMAScript 2015.

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

`class` is just a syntactic substitute for JavaScript's existing prototype-based inheritance model.

In general programmers use the following ways to create a class in JavaScript.

### Using methods added to prototypes

Here, all the methods are added to a prototype

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

You could also write prototype methods over function `Person` as below:

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

### Using methods added internally

Here the methods are added internally instead of prototype:

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

### Hiding details in classes with symbols


Most often some properties and methods have to be hidden to prevent access from outside the function. With classes, this functionality can be obtained by using symbols. A Symbol is a new, built-in type of JavaScript, which can be invoked to give a new symbol value. Every Symbol is unique and can be used as a key on object. One use case of symbols is adding something to an object you might not own, and you might not want to collide with any other keys of object, so creating a new one and adding it as property to that object using Symbol is the safest. Also, when a Symbol value is added to an object; no one else will know how to get it.

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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


