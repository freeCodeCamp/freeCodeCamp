---
title: Object Freeze
---
## Object Freeze
The `Object.freeze()` method freezes an object. A frozen object will *prevent you* from:

* Adding new properties to it
* Removing existing proprerties from it
* Changing the enumerability, configurability, or writeability of it's existing properties

### Syntax
```javascript
Object.freeze(obj)
```

### Parameters
`obj`
* The object to freeze.

### Returns
The frozen object.

### Important Note
Attempting to add, remove, or modify properties of a frozen object will result in a failure. This failure will either be silent or a thrown `TypeError` (if Strict Mode is enabled). Additionally, `Object.freeze()` is a shallow operation. This means that nested object, of a frozen object, are modifiable.

### Example
```javascript
// Create your object
let person = {
  name: 'Johnny',
  age: 23,
  guild: 'Army of Darkness',
  hobbies: ['music', 'gaming', 'rock climbing']
}

// Modify your object
person.name = 'John'
person.age = 24
person.hobbies.splice(1,1)
delete person.guild

// Verify your object has been modified
console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing']

// Freeze your object
Object.freeze(person)

// Verify that your object can no longer be modified
person.name = 'Johnny' // fails silently
person.age = 23 // fails silently
console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing']

// The freeze is "shallow" and nested objects (including arrays) can still be modified
person.hobbies.push('basketball')
consol.log(person.hobbies) // ['music', 'rock climbing', 'basketball']

```

#### More Information:
[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
