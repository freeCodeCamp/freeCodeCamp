---
title: Factory
---
The factory is a design pattern which aims to reduce the dependencies between classes instantiating (creating) objects and the objects themselves, by creating a "factory" class which handles the creation of classes. By doing this, we allow can allow subclasses to redefine which class to instantiate, and group potentially complex creation logic into a single interface.

Programmers use factory design patterns to because it allows them to create instances of objects which implement a common interface, without necessarily knowing beforehand the exact concrete class (implementation) being used. A common situation in which this is useful is when a parent class is relying on it's children classes to specify the type of object it should be instantiating. It is also useful when the creation of an object is complex, as it allows the programmer to group the code into a single class and reduce duplication. 


## Using the Factory Pattern in Java

To use the factory design pattern, you first need to have a interface - an object with class and variable names, but no definitions. For example, here we have a Java interface for animals. 

```    
public interface Animal {
        void talk();
    }
```

We now need to have "concrete classes" - classes which implement our interface and define the associated functions/ variables. 

```
    public class Dog implements Animal {

        @Override
        public void talk() {
            System.out.println("Woof");
        }
    }
```

```
    public class Cat implements Animal {

        @Override
        public void talk() {
            System.out.println("Meow!");
        }
    }
```

We now define our "AnimalFactory" - the class which will handle the creation of these classes. 

```
    public class AnimalFactory {

        public Animal getAnimal(String animalType) {
            if (animalType.equals("dog")) {
                return new Dog();
            } else if (animalType.equals("cat")) {
                return new Cat();
            }
            return null;
        }
    }
```

Now when we want to create a new Cat object, instead of saying something like ``` Cat cat = new Cat(); ```, we use the factory class that we have defined. For example: 
```
        AnimalFactory animalFactory = new AnimalFactory();

        Animal cat = animalFactory.getAnimal("cat");
        cat.talk();
```

Here we can see that the class with this instance of "Cat" doesn't really know which animal it has. But this doesn't matter - because all the classes the factory creates are concrete classes of the same interface, the parent class doesn't need to know the exact class it is using.

 
## Factory in Python3
We can implement a Factory easily with static methods.

```python
class Drink(object):
    def __init__(self, name, price=None):
        self.name = name
        self.price = price


class Tea(Drink):
    def __str__(self):
        return 'This is tea: {} in ${}'.format(self.name, self.price)


class Milk(Drink):
    def __str__(self):
        return 'This is milk: {} in ${}'.format(self.name, self.price)


class DrinkFactory(object):
    @staticmethod
    def generate(drink_type=None, *args, **kwargs):
        if drink_type == 'tea':
            return Tea(*args, **kwargs)
        elif drink_type == 'milk':
            return Milk(*args, **kwargs)
        raise NotImplementedError("{} drink do not exist.".format(drink_type))


# Testing
black_tea = DrinkFactory.generate('tea', 'Black Tea', price=4.39)
whole_milk = DrinkFactory.generate('milk', 'Whole Milk', price=5.49)
print(black_tea)
print(whole_milk)
```
