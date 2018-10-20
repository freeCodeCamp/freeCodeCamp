---
title: Object Destructuring
---

# Object Destructuring

Destructuring is a convenient way of extracting multiple values from data stored in Objects. It can be used in locations that receive data (such as the left-hand side of an assignment). This feature is introduced in `ECMAScript 6`.

How to extract the values is specified via patterns (read on for examples).

### Basic assignment

```
var userInfo = {name: 'neel', age: 22};
var {name, age} = userInfo;

console.log(name); // neel
console.log(age); // 22
```

### Assignment without declaration
A variable can be assigned its value with destructuring separate from its declaration.

```
var name, age;

({name, age} = {name: 'neel', age: 22});
```

> The `( .. )` around the assignment statement is required syntax when using object literal destructuring assignment without a declaration.

> `{name, age} = {name: 'neel', age: 22}` is not valid stand-alone syntax, as the `{name, age}` on the left-hand side is considered a block and not an object literal.

> However, `({name, age} = {name: 'neel', age: 22})` is valid, as is `var {name, age} = {name: 'neel', age: 22}`

### Assigning to new variable names
A property can be unpacked from an object and assigned to a variable with a different name than the object property.

```
var userInfo = {a: 'neel', b: 22};
var {a: name, b: bar} = userInfo;
 
console.log(name); // neel 
console.log(bar); // 22
```

### Default values
A variable can be assigned a default, in the case that the value unpacked from the object is `undefined`.

```
var {name = 'ananonumys', age = 20} = {name: 'neel'};

console.log(name); // neel
console.log(age); // 20
```

### Assigning to new variables names and providing default values
A property can be both 
1. unpacked from an object and assigned to a variable with a different name and 
2. assigned a default value in case the unpacked value is `undefined`.

```
var {a:name = 'ananonumys', b:age = 20} = {age: 22};

console.log(name); // ananonumys
console.log(age); // 22
```

### Setting a function parameter's default value

#### ES5 version

```
function getUserInfo(data) {
  data = data === undefined ? {} : data;
  var name = data.name === undefined ? 'ananonumys' : data.name;
  var age = data.age === undefined ? 20 : data.age;
  var location = data.location === undefined ? 'india' : data.location;
  console.log(name, age, location);
  // print user data
}

getUserInfo({
  name: 'neel',
  age: 22,
  location: 'canada'
});
```

#### ES2015 version

```
function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) {
  console.log(name, age, location);
  // print user data
}

getUserInfo({
  name: 'neel',
  age: 22,
  location: 'canada'
});
```

> In the function signature for `getUserInfo` above, the destructured left-hand side is assigned to an empty object literal on the right-hand side: `{name = 'ananonumys', age = 20, location = 'india'} = {}`. You could have also written the function without the right-hand side assignment. However, if you leave out the right-hand side assignment, the function will look for at least one argument to be supplied when invoked, whereas in its current form, you can simply call `getUserInfo()` without supplying any parameters. The current design is useful if you want to be able to call the function without supplying any parameters, the other can be useful when you want to ensure an object is passed to the function.

### Nested object and array destructuring

```
var metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

### For of iteration and destructuring

```
var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Unpacking fields from objects passed as function parameter

```
function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}

var user = { 
  id: 42, 
  displayName: 'jdoe',
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  }
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```
This unpacks the `id`, `displayName` and `firstName` from the user object and prints them.

### Computed object property names and destructuring

```
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"
```

See also: <a>**Object Destructuring**</a> | <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring' target='_blank' rel='nofollow'>MDN</a>
