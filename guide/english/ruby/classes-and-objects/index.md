---
title: Classes and Objects
---
## Classes and Objects


### Objects in Ruby

Let us quickly go over Ruby objects. In the real world, objects may be anything including a car, computer, or even a human. Each one of these objects have different states and behaviors.

For example, a car may have its state described by its make, model, and color and some of its behaviors as turning, honking, or braking.

An object in Ruby has very similar characteristics. Ruby Objects also have states and behaviors. In Ruby Objects, the state is stored in instance variables and the behaviors are stored in `methods` (functions within classes).


### Classes in Ruby

A class is basically an object's template. This template defines the available `properties` that make up the object using `instance variables`. Again, there are also `behaviors` defined in the form of `methods` to help change the object's state.

A new instance of a class is created (instantiated) by using the `initialize` method of a class.

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
        puts "brakes squealing noise"
    end
end
```

As you saw, classes are defined using the `class` keyword and the class code block ends with an `end` keywork. The `initialize` method is the constructor which is a special function to describe initial state. When we create this object, we define the attributes `@make`, `@model`, and `@color` with values we pass into the constructor.

### Creating an Instance of a Class

Now, to create an instance of this class you only need to call the `new` function which uses the class's `initalize` method.

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White')
```

Yay, we just created a `mazda3` which is an instance of the `Car` object. This is great, but sometimes you may need to change some of these attributes! Most of these attributes in this example would be static. Still, imagine that you decided to get a new paintjob. How would you go about updating the state of this `mazda3`?


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
        puts "brakes squealing noise"
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

Viewing the previous output from [`irb`](https://en.wikipedia.org/wiki/Interactive_Ruby_Shell), you can see that each one of the instance variables is readable. We can write to `@color`, but we end up causing a `NoMethodError` exception when we attempt to write to `@make`. This is because `@make` was only defined using an `attr_reader`, so `make=` is not defined. This could be fixed by adding the make to the `attr_accessor` like we did for color.

### Resources
- [Ruby Programming/Syntax/Classes](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
