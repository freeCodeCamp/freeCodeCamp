---
title: Construct JavaScript Objects with Functions
---
Using constructors it is easy to create new objects using a blueprint or constructor. The declaration syntax is a little different but still easy to remember.

    // Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers.
    var Car = function() {
      this.wheels = 4;
      this.engines = 1;
      this.seats = 1;
    };

    var myCar = new Car();
    
The name of a constructor function usually begins with a capital letter (unlike other functions, which tend to begin with a lowercase character). The uppercase letter is supposed to help remind developers to use the new keyword when they create an object using that function.
