---
title: Build JavaScript Objects
---
Objects are useful for storing data in a structured way, and can be used to represent real world objects, like cars, hotels or a computer. 

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. There are two main ways to create objects: the Object Literal and the Constructor.

Using the Object Literal, here's how we would create a sample object:

    var cat = {
        name: "Whiskers",
        legs: 4,
        tails: 1,
        enemies: ["Water", "Dogs"]
     };

Using the Constructor, here's how we would create a sample object:

    var cat = new Object();
    cat.name = "Whiskers";
    cat.legs = 4;
    cat.tails = 1;
    cat.enemies = ["Water", "Dogs"];
    
An Object Constructor makes use of the `new` keyword together with `Object` ( capital 'O') to create a new object instance. 
We can then use dot notation to assign property names and values of the object.
    
