is-property
===========
Tests if a property of a JavaScript object can be accessed using the dot (.) notation or if it must be enclosed in brackets, (ie use x[" ... "])

Example
-------

```javascript
var isProperty = require("is-property")

console.log(isProperty("foo"))  //Prints true
console.log(isProperty("0"))    //Prints false
```

Install
-------

    npm install is-property
    
### `require("is-property")(str)`
Checks if str is a property

* `str` is a string which we will test if it is a property or not

**Returns** true or false depending if str is a property

## Credits
(c) 2013 Mikola Lysenko. MIT License