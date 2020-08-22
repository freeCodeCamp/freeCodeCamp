---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
---

## Description
<section id='description'>
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
Here is a nested object:

```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
```

</section>

## Instructions
<section id='instructions'>
Access the <code>myStorage</code> object and assign the contents of the <code>glove box</code> property to the <code>gloveBoxContents</code> variable. Use dot notation for all properties where possible, otherwise use bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code> should equal "maps".
    testString: assert(gloveBoxContents === "maps");
  - text: Your code should use dot and bracket notation to access <code>myStorage</code>.
    testString: assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```

</section>
