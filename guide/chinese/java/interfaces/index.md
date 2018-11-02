---
title: Interfaces
localeTitle: 接口
---
# 接口

Java中的接口有点像Class，但有一个显着的区别： `interface` _只能_有方法签名，字段和默认方法。从Java 8开始，您还可以创建[默认方法](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) 。在下一个块中，您可以看到一个接口示例：

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

上面的接口包含两个字段，两个方法和一个默认方法。单独使用它并没有多大用处，但它们通常与Classes一起使用。怎么样？很简单，你必须确保一些类`implements`它。

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CItd/0)

现在，有一个**基本规则** ：Class必须实现Interface中的**所有**方法。这些方法必须具有_完全相同的_签名（名称，参数和例外），如界面中所述。类_不需要_声明，虽然领域，只有方法。

## 接口实例

创建`implements`任何接口的Java类后，可以将对象实例作为接口的实例引用。这个概念类似于继承实例化。

```java
// following our previous example 
 
 Vehicle tesla = new Car(); 
 
 tesla.start(); // starting engine ... 
```

接口**不能**包含构造函数方法，因此，您**无法**创建接口本身的实例。您必须创建一个实现接口的类的实例来引用它。将接口视为空白合同表单或模板。

你能用这个功能做什么？多态性！您只能使用接口来引用对象实例！

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CItm/0)

## 但是多个接口怎么样？

是的，您可以在一个类中实现多个接口。在[继承](//forum.freecodecamp.com/t/java-docs-inheritance)的类中，您被限制为仅继承一个类，在这里您可以扩展任意数量的接口。但是不要忘记实现_所有_接口的所有方法，否则编译将失败！

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CIto/0)

## 接口的一些功能

*   您可以在接口中放置变量，但这不是一个合理的决定，因为类不必具有相同的变量。简而言之，避免放置变量！
*   即使您省略了`public`关键字，接口中的所有变量和方法都是公共的。
*   接口无法指定特定方法的实现。它由类来完成。虽然最近有例外（见下文）。
*   如果一个类实现多个接口，那么方法签名重叠的可能性很小。由于Java不允许多个方法具有完全相同的签名，因此可能会导致问题。有关详细信息，请参阅[此问题](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) 。

## 接口默认方法

在Java 8之前，我们无法指示接口具有特定的方法实现。如果突然改变接口定义，这会导致很多混乱和代码中断。

假设您编写了一个包含接口的开源库。比如说，您的客户，即几乎所有世界各地的开发人员，都在大量使用它并且很开心。现在，您必须通过向接口添加新方法定义来升级库以支持新功能。但是这会破坏_所有_构建，因为实现该接口的所有类现在都必须改变。真是个大灾难！

值得庆幸的是，Java 8现在为我们提供了接口的`default`方法。 `default`方法_可以_ _直接_在Interface中包含自己的实现！因此，如果类没有实现默认方法，编译器将采用接口中提到的实现。不错，不是吗？因此，在您的库中，您可以在界面中添加任意数量的默认方法，而不必担心破坏任何东西！

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CItp/0)

### 但是，如果两个接口具有相同的方法签名会发生什么？

真棒的问题。在这种情况下，如果你没有在Class中提供实现，那么糟糕的编译器会感到困惑并且简单地失败！您还必须在类中提供默认方法实现。还有一种使用`super`来调用你喜欢的实现的漂亮方式：

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CIts/0)

## 接口中的静态方法

Java 8的另一个新功能是能够向接口添加静态方法。接口中的静态方法几乎与具体类中的静态方法相同。唯一的区别是`static`方法不会在实现接口的类中继承。这意味着在调用静态方法而不是实现它的类时会引用接口。

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CIts/9)

## 继承接口

在Java中，接口可以_继承_另一个接口，通过使用，你猜对了， `extends`关键字：

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

这意味着，实施类`MusicPlayer`接口必须实现的_所有_方法`MusicPlayer`以及`Player` ：

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CIty/0)

哎呀，我忘记了`next()`吗？请注意，因为它是一种`default`方法，所以我根本不需要提供实现。 （不适用于JDK <8）

所以，现在你已经很好地掌握了接口！了解抽象类以了解Java如何为您提供另一种定义合同的方法。