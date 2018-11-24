---
title: Classes and Objects
---
## Classes and Objects


### Objects in Ruby

Let us quickly go over Ruby objects. In the real world, objects may be anything including a car, computer, or even a human. Each one of these objects has a state and behaviors.

Considering a car, then its state could be described as its model, make, and color. The behavior of the car could be turning, honking, or braking.

An object in Ruby has very similar characteristics. Ruby Objects also have a state and behavior. In Ruby Objects, the state is stored in instance variables and the behavior is stored in functions.


### Classes in Ruby

A class is basically a program template. This template defines the initial `properties` using `instance variables`. Again, there are also again `behaviors` defined in the form of functions.

A new instance of a class is created using the `initialize` method of a class.

Take for example the following sample code of a class:

```Ruby
class Car
    def initialize(make, model, color)
        @make = make
        @model = model
        @color = color
    end

    def turn(direction)
    end

    def honk
        puts "beep beep"
    end
    
    def brake
    end
end
```

As you saw, classes are defined using the `class` keyword and the class code block ends with an `end` keywork. The `.initialize` function is the constructor. When we create this object, we define the attributes `@make`, `@model`, and `@color` with values we pass into the constructor.

### Creating an Instance of a Class

Now, to create an instance of this class you only need to call the `.new` function.

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White')
```

This is great, but sometimes you may need to change some of these attributes! Most of these attributes in this example would be static. Still, imagine that you decided to get a new paint job, and wanted to change the color of your Car. How would you go about updating the state of this instance of the `Car` object?

### Modifying Instance State

Thankfully, it is rather simple to update the state of an object. First, we would need a `setter` method! Ruby defines **getter** and **setter** settings as the `attr_reader` and `attr_accessor` respectively. For both getter and setter settings on a given attribute, you can also just use `attr_accessor`.

To demonstrate this, I have modified the previous Car object with these newly defined settings.

```Ruby
class Car
    attr_accessor :color
    attr_reader :make, :model

    def initialize(make, model, color)
        @make = make
        @model = model
        @color = color
    end

    def turn(direction)
    end

    def honk
        puts "beep beep"
    end
    
    def brake
    end
end
```

So now we can change state and read the state of the object.

```Ruby
irb(main):023:0> c = Car.new('Mazda', 'Mazda3', 'White')
=> #<Car:0x00007fd3ca13fdd0 @make="Mazda", @model="Mazda3", @color="White", @speed=nil>
irb(main):024:0> c.color
=> "White"
irb(main):025:0> c.make
=> "Mazda"
irb(main):026:0> c.model
=> "Mazda3"
irb(main):027:0> c.color = 'Brutal Blue'
=> "Brutal Blue"
irb(main):028:0> c.make = 'Prius'
Traceback (most recent call last):
        2: from /usr/local/bin/irb:11:in `<main>'
        1: from (irb):28
NoMethodError (undefined method `make=' for #<Car:0x00007fd3ca13fdd0>)
Did you mean?  make
```

Viewing the previous output from `irb`, you can see that each one of the instance variables is readable. We can write to `@color`, but we end up causing a `NoMethodError` exception when we attempt to write to `@make`. This is because `@make` was only defined using an `attr_reader`, so `make=` is not defined. 

### Resources
- [Ruby Programming/Syntax/Classes](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
