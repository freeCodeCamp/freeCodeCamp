---
title: Accessing Nested Objects
---
## Accessing Nested Objects
Clue: ***" Use bracket notation for properties with a space in their name."***

If we look at our object:

```javascript
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
```

Our object name is `myStorage`.

|-- Inside that we have a nested object called `car`.

|--- Inside that we have two more called `inside` and `outside` each with their 
own properties

You can visualize the object structure like this, if it helps:

```
myStorage
|-- car
|--- inside
|----- glove box: maps
|----- passenger seat: crumbs
|--- outside
|----- trunk: jack
```

We are asked to assign the contents of `glove box` ,
which we can see is nested in the `inside` object, 
which in turn, is nested in the `car` object.

We can use dot notation to access the `glove box` as follows:

```javascript
var gloveBoxContents = myStorage.car.inside'complete here'
```
You must replace `complete here` with the correct way to access the property. 
See clue above if you get stuck.