---
title: Interfaces
---
# Interfaces

Interface in Java is a bit like the Class, but with a significant difference : an `interface` can _only_ have method signatures, fields and default methods. Since Java 8, you can also create [default methods](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html). In the next block you can see an example of interface :

```java
public interface Vehicle {
    public String licensePlate = "";
    public float maxVel
    public void start();
    public void stop();
    default void blowHorn(){
      System.out.println("Blowing horn");
   }
}
```

The interface above contains two fields, two methods, and a default method. Alone, it is not of much use, but they are usually used along with Classes. How? Simple, you have to make sure some class `implements` it.

```java
public class Car implements Vehicle {
    public void start() {
        System.out.println("starting engine...");
    }
    public void stop() {
        System.out.println("stopping engine...");
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CItd/0' target='_blank' rel='nofollow'>Run Code</a>

Now, there is a **ground rule** : The Class must implement **all** of the methods in the Interface. The methods must have _the exact same_ signature (name, parameters and exceptions) as described in the interface. The class _does not_ need to declare the fields though, only the methods.

## Instances of an Interface

Once you create a Java Class which `implements` any Interface, the object instance can be referenced as an instance of the Interface. This concept is similar to that of Inheritance instantiation.

```java
// following our previous example

Vehicle tesla = new Car();

tesla.start(); // starting engine ...
```

An Interface **can not** contain a constructor methods,therefore,you **can not** create an instance of an Interface itself. You must create an instance of some class implementing an Interface to reference it. Think of interfaces as a blank contract form, or a template.

What can you do with this feature? Polymorphism! You can use only interfaces to refer to object instances!

```java
class Truck implements Vehicle {
    public void start() {
        System.out.println("starting truck engine...");
    }
    public void stop() {
        System.out.println("stopping truck engine...");
    }
}

class Starter {
    // static method, can be called without instantiating the class
    public static void startEngine(Vehicle vehicle) {
        vehicle.start();
    }
}

Vehicle tesla = new Car();
Vehicle tata = new Truck();

Starter.startEngine(tesla); // starting engine ...
Starter.startEngine(tata); // starting truck engine ...
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CItm/0' target='_blank' rel='nofollow'>Run Code</a>

## But how about multiple interfaces?

Yes, you can implement multiple Interfaces in a single class. While in [Inheritance](//forum.freecodecamp.com/t/java-docs-inheritance) within Classes you were restricted to inherit only one class, here you can extend any number of interfaces. But do not forget to implement _all_ of the methods of all the Interfaces, otherwise compilation will fail!

```java
public interface GPS {
    public void getCoordinates();
}

public interface Radio {
    public void startRadio();
    public void stopRadio();
}

public class Smartphone implements GPS,Radio {
    public void getCoordinates() {
        // return some coordinates
    }
    public void startRadio() {
      // start Radio
    }
    public void stopRadio() {
        // stop Radio
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CIto/0' target='_blank' rel='nofollow'>Run Code</a>

## Some features of Interfaces

*   You can place variables within an Interface, although it won't be a sensible decision as Classes are not bound to have the same variable. In short, avoid placing variables!
*   All variables and methods in an Interface are public, even if you leave out the `public` keyword.
*   An Interface cannot specify the implementation of a particular method. Its up to the Classes to do it. Although there has been a recent exception (see below).
*   If a Class implements multiple Interfaces, then there is a remote chance of method signature overlap. Since Java does not allow multiple methods of the exact same signature, this can lead to problems. See <a href='http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java' target='_blank' rel='nofollow'>this question</a> for more info.

## Interface Default Methods

Before Java 8, we had no way to direct an Interface to have a particular method implementation. This lead to lot of confusion and code breaks if an Interface definition is suddenly changed.

Suppose, you wrote an open source library, which contains an Interface. Say, your clients, i.e. practically all developers around the world, are using it heavily and are happy. Now you have had to upgrade the library by adding a new method definition to the Interface to support a new feature. But that would break _all_ builds since all Classes implementing that Interface have to change now. What a catastrophe!

Thankfully, Java 8 now provides us `default` methods for Interfaces. A `default` method _can_ contain its own implementation _directly_ within the Interface! So, if a Class does not implement a default method, the compiler will take the implementation mentioned within the Interface. Nice, isn't it? So in your library, you may add any number of default methods in interfaces without the fear of breaking anything!

```java
public interface GPS {
    public void getCoordinates();
    default public void getRoughCoordinates() {
        // implementation to return coordinates from rough sources
        // such as wifi & mobile
        System.out.println("Fetching rough coordinates...");
    }
}

public interface Radio {
    public void startRadio();
    public void stopRadio();
}

public class Smartphone implements GPS,Radio {
    public void getCoordinates() {
        // return some coordinates
    }
    public void startRadio() {
      // start Radio
    }
    public void stopRadio() {
        // stop Radio
    }

    // no implementation of getRoughCoordinates()
}

Smartphone motoG = new Smartphone();
motog.getRoughCoordinates(); // Fetching rough coordinates...
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CItp/0' target='_blank' rel='nofollow'>Run Code</a>

### But, what happens if two interfaces have the same method signature?

Awesome question. In that case, if you do not provide the implementation in the Class, poor compiler will get confused and simply fail! You have to provide a default method implemention within the Class also. There is also a nifty way using `super` to call which implementation you like :

```java
public interface Radio {
    // public void startRadio();
    // public void stopRadio();

    default public void next() {
        System.out.println("Next from Radio");
    }
}

public interface MusicPlayer {
    // public void start();
    // public void pause();
    // public void stop();

    default public void next() {
        System.out.println("Next from MusicPlayer");
    }
}

public class Smartphone implements Radio, MusicPlayer {
    public void next() {
        // Suppose you want to call MusicPlayer next
        MusicPlayer.super.next();
    }
}

Smartphone motoG = new Smartphone();
motoG.next(); // Next from MusicPlayer
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CIts/0' target='_blank' rel='nofollow'>Run Code</a>

## Static Methods in Interfaces

Also new to Java 8 is the ability to add static methods to interfaces. Static methods in interfaces are almost identical to static methods in concrete classes.  The only big difference is that `static` methods are not inherited in the classes that implement the interface. This means that the interface is referenced when calling the static method not the class that implements it. 

```java
interface MusicPlayer {
  public static void commercial(String sponsor) {
    System.out.println("Now for a message brought to you by " + sponsor);
  }
  
  public void play();
}


class Smartphone implements MusicPlayer {
	public void play() {
		System.out.println("Playing from smartphone");
	}
}

class Main {
  public static void main(String[] args) {
    Smartphone motoG = new Smartphone();
    MusicPlayer.commercial("Motorola"); // Called on interface not on implementing class
    // motoG.commercial("Motorola"); // This would cause a compilation error 
  }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CIts/9' target='_blank' rel='nofollow'>Run Code</a>

## Inheriting an Interface

It is also possible in Java for an Interface to _inherit_ another Interface, by using, you guessed it, `extends` keyword :

```java
public interface Player {
    public void start();
    public void pause();
    public void stop();
}

public interface MusicPlayer extends Player {
    default public void next() {
        System.out.println("Next from MusicPlayer");
    }
}
```

That means, the Class implementing `MusicPlayer` Interface has to implement _all_ methods of `MusicPlayer` as well as `Player` :

```java
public class SmartPhone implements MusicPlayer {
    public void start() {
        System.out.println("start");
    }
    public void stop() {
        System.out.println("stop");
    }
    public void pause() {
        System.out.println("pause");
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CIty/0' target='_blank' rel='nofollow'>Run Code</a>

Whoops, did I forget `next()` ? See, since it was a `default` method, I didn't had to provide an implementation at all. (Won't work for JDK < 8)

So, now you have a good grasp of Interfaces! Go learn about Abstract Classes to know how Java gives you yet another way to define contracts.

#### More Information
- [Oracle Java Docs - Interfaces](https://docs.oracle.com/javase/specs/jls/se7/html/jls-9.html)
