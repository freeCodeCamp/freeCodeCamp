---
title: Object Instantiation
---

## Object Instantiation
In Javascript and most other languages, an object contains a series of properties, which are a key, value pair. There are multiple options available to you when you need to construct an object.

### Initialize an object variable
You can create an object with pre-defined properties like so:

```javascript
let myObject = {
  name: "Dave",
  age: 33
}
```

### Creating an empty object

This creates an empty object inside our myObject variable:

```javascript

let myObject = new Object();
```

When you wish to add properties to your object, you simply use either dot notation or bracket notation with the property name of your choice:

```javascript

myObject.name = "Johnny Mnemonic"
myObject["age"] = 55
```

### Using a constructor function

You can define a constructor function that you can use to create your objects:

```javascript

function Kitten(name, cute, color) {
  this.name = name,
  this.cute = cute,
  this.color = color
}
```

You can define a variable containing an instantiation of this object by calling the constructor function:

```javascript

let myKitten = new Kitten("Nibbles", true, "white")
```

### Object.create()

The Object.create() method (first defined in ECMAScript 5.1) allows you to create objects. it allows you to choose the prototype object for your new object without needing to define a constructor function beforehand.

```javascript
// Our pre-defined object
let kitten = {
  name: "Fluff",
  cute: true,
  color: "gray"
}
// Create a new object using Object.create(). kitten is used as the prototype
let newKitten = Object.create(kitten)

console.log(newKitten.name) // Will output "Fluff"


```


#### More Information

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' target='_blank' rel='nofollow'>MDN article on working with objects</a>
