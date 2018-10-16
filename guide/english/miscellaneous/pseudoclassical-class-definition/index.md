---
title: Pseudoclassical Class Definition
---
Pseudoclassical class definition happens in 2 code blocks instead of one, which happens in other languages like Python and PHP.

The first block is called the "Constructor Function" which is where attributes of the class is declared. These are the aspects of the class that are unique to each new instance. Example with cars is that brand, color, and location can differ. In the second block of code you declare the methods that will be shared by each instance of the class. Examples are things the car can do, drive forward, stop, open door.

## Example

    var Car = function(brand, color, location) {
     this.brand = brand;
     this.color = color;
     this.location = location
    };

    Car.prototype = {
     move: function() { this.location++; },
     stop: function() { this.location = 0; },
    };

## Explanation

The reason for declaring the entire class in 2 blocks is to save on memory when you start creating instances of the class. If the class declaration was "Functional" style then there is a new copy of the method(s) made for **each** instance. By declaring the class "Pseudoclassical" style only a _single_ of copy of the methods are stored in memory.

When a instance of the class attempt to access a method:

    var x_car = new Car('lexus', 'white', 0);
    x_car.move();

The interpreter will actually _first_ fail to find the called method in the object itself since it was made from the Car constructor function. As you can see above there is no reference to any of the methods in the Car constructor function. From there the interpreter searches to the `Car.prototype` which is now shared between all instances. There the interpreter find the method that was called!

### Further reading:

<a href='https://natacseanc.wordpress.com/2015/08/04/javascript-object-create-and-classes/' target='_blank' rel='nofollow'>Natac's Blog</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript' target='_blank' rel='nofollow'>MDN Classes</a>