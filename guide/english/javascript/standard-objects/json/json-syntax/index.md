---
title: JSON Syntax
---
## JSON Syntax

The JSON syntax is a subset of the JavaScript syntax.

### JSON Syntax Rules

- JSON Object is an unordered set of name/value pairs.
- Object names are followed by a colon (:).
- Curly braces {} are used to hold objects. Object begins with { (left curly brace) and ends with } (right curly brace).
- JSON Object data is represented as a collection of name/value pair.
- Each name/value pairs are separated by comma (,)
- Square braces [] are used to hold Arrays.

### JSON Data - A Name and a Value

JSON data is written as name/value pairs.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

```
"handle":"moghya"
```
- JSON names require double quotes.

### JSON - Evaluates to JavaScript Objects

The JSON format is almost identical to JavaScript objects. 

In JSON, keys must be strings, written with double quotes:

- JSON

```
"handle":"moghya"
```
- JavaScript

```
handle:"moghya"
```

### JSON Values

In JSON, values must be one of the following data types:
- a string
- a number
- an object (JSON object)
- an array
- a boolean
- null

In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
- a function
- a date
- undefined


### JSON Uses JavaScript Syntax

Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.

With JavaScript you can create an object and assign data to it, like this:

```
var person = { 
  "name":"Shubham",
  "age":21, 
  "handle":"moghya", 
  "website":"http://moghya.me/"
  };
  
```


You can access a JavaScript object like this:

```
//returns moghya
person.handle;
```

It can also be accessed like this:

```
//returns http://moghya.me/
person["website"];
```

### Arrays in JSON 

```
var team = {
  "name":"novatoscript",
  "members" : 
  [
    {
      "name":"Shubham Sawant",
      "age":21, 
      "handle":"moghya", 
      "website":"http://moghya.me",
    },
    {
      "name":"Saurabh Banore",
      "age":21, 
      "handle":"banoresaurabh", 
      "website":"http://banoresaurabh.me/",
    }
  ]
}

```

### Example 

A very large example of JSON is [here!](http://moghya.me/js/profile.json).
