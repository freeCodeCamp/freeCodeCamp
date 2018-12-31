---
title: With
---
## With

JavaScript's `with` statement is a shorthand way for editing several properties on one object. Most developers discourage usage of `with`, and you are best not using this keyword.

**Note**: `"strict mode"` in ECMAScript 5 forbids usage of `with`.


### Syntax
```syntax
with (expression)
  statement
```


### Example Usage
In JavaScript, you can individually modify an object's properties like below:
```javascript
let earth = {};
earth.moons = 1;
earth.continents = 7;
```
`with` gives you a shorthand to modify the properties on an object:
```javascript
with (earth) {
  moons = 1;
  continents = 7;
}
```

While this example is contrived, you can understand use cases of `with` more if you have larger objects like below:
```javascript
earth.continents.australia.geography.ocean = "Pacific";
earth.continents.australia.geography.river = "Murray";
earth.continents.australia.geography.mountain = "Kosciuszko";
```

### Alternatives
You should not use `with` as it has subtle bugs and compatibility issues. A highly recommended approach is to assign the object to a variable, and then modify the variable's properties. Here is an example using a larger object:
```javascript
let earth = {
  continents: {
    australia: {
      geography: {}
    }
  }
};

let geo = earth.continents.australia.geography;

geo.ocean = "Pacific";
geo.river = "Murray";
geo.mountain = "Kosciuszko";
```

### Try It Out
https://repl.it/Mixg/5


#### More Information:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with</a>

<a href="https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/" target="_blank">https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/</a>

<a href="http://2ality.com/2011/06/with-statement.html" target="_blank">http://2ality.com/2011/06/with-statement.html</a>
