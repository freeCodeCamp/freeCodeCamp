---
title: Build JavaScript Objects
---
Objects are useful for storing data in a structured way, and can be used to represent real world objects, like cars or hotels to a computer. 

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. There are two ways main to create objects: the Object Literal and the Constructor way.

Using the Object Literal way, here's how we would create sample object:

    var cat = {
        name: "Whiskers",
        legs: 4,
        tails: 1,
        enemies: ["Water", "Dogs"]
     };

Using the Constructor way, here's how we would create sample object:

    var cat = new Object();
    cat.name = "Whiskers";
    cat.legs = 4;
    cat.tails = 1;
    cat.enemies = ["Water", "Dogs"];
    
In the Constructor way, we use the `new` keyword together with `Object` (with capital 'O') to create a new object instance. Afterward, we use dot notation to assign the property names and values of the object.
    
