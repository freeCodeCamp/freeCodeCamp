---
title: Interfaces
localeTitle: Интерфейсы
---
# Интерфейсы

Интерфейс в Java немного похож на класс, но с существенной разницей: `interface` может иметь _только_ сигнатуры методов, поля и методы по умолчанию. Начиная с Java 8, вы также можете создавать [методы по умолчанию](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) . В следующем блоке вы можете увидеть пример интерфейса:

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

Интерфейс выше содержит два поля, два метода и метод по умолчанию. В одиночку это не очень полезно, но они обычно используются вместе с классами. Как? Простой, вы должны убедиться, что какой-то класс `implements` его.

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CItd/0)

Теперь существует **основное правило** : класс должен реализовать **все** методы в интерфейсе. Методы должны иметь _одну и ту же_ подпись (имя, параметры и исключения), как описано в интерфейсе. Класс _не_ обязательно должен объявлять поля, но только методы.

## Экземпляры интерфейса

После создания класса Java, который `implements` любой интерфейс, экземпляр объекта может ссылаться как экземпляр интерфейса. Эта концепция аналогична концепции экземпляра Inheritance.

```java
// following our previous example 
 
 Vehicle tesla = new Car(); 
 
 tesla.start(); // starting engine ... 
```

Интерфейс **не может** содержать методы конструктора, поэтому вы **не можете** создать экземпляр самого интерфейса. Вы должны создать экземпляр некоторого класса, реализующего интерфейс для его ссылки. Подумайте о интерфейсах в виде пустой формы контракта или шаблона.

Что вы можете сделать с этой функцией? Полиморфизм! Вы можете использовать только интерфейсы для обращения к экземплярам объектов!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CItm/0)

## Но как насчет нескольких интерфейсов?

Да, вы можете реализовать несколько интерфейсов в одном классе. В то время как в [Inheritance](//forum.freecodecamp.com/t/java-docs-inheritance) внутри Classes вам было запрещено наследовать только один класс, здесь вы можете расширить любое количество интерфейсов. Но не забудьте реализовать _все_ методы всех интерфейсов, иначе компиляция завершится неудачно!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CIto/0)

## Некоторые функции интерфейсов

*   Вы можете размещать переменные в интерфейсе, хотя это не будет разумным решением, поскольку классы не должны иметь одну и ту же переменную. Короче говоря, избегайте размещения переменных!
*   Все переменные и методы в интерфейсе являются общедоступными, даже если вы не используете ключевое слово `public` .
*   Интерфейс не может указать реализацию конкретного метода. Это до Классы, чтобы сделать это. Несмотря на недавнее исключение (см. Ниже).
*   Если класс реализует несколько интерфейсов, тогда существует дистанционная вероятность перекрытия сигнатуры метода. Так как Java не допускает нескольких методов одной и той же сигнатуры, это может привести к проблемам. См. [Этот вопрос](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) для получения дополнительной информации.

## Методы интерфейса по умолчанию

До Java 8 у нас не было никакого способа направить интерфейс для реализации конкретного метода. Это приводит к большому путанице и разрыву кода, если определение интерфейса внезапно изменяется.

Предположим, вы написали библиотеку с открытым исходным кодом, которая содержит интерфейс. Скажем, ваши клиенты, т.е. практически все разработчики по всему миру, используют его в большой степени и счастливы. Теперь вам нужно обновить библиотеку, добавив новое определение метода в интерфейс для поддержки новой функции. Но это сломает _все_ сборки, поскольку все классы, реализующие этот интерфейс, должны теперь измениться. Какая катастрофа!

К счастью, Java 8 теперь предоставляет нам методы по `default` для интерфейсов. Метод по `default` _может_ содержать собственную реализацию _непосредственно_ в интерфейсе! Итак, если класс не реализует метод по умолчанию, компилятор выполнит реализацию, упомянутую в интерфейсе. Приятно, не так ли? Поэтому в вашей библиотеке вы можете добавить любое количество методов по умолчанию в интерфейсах, не опасаясь ничего сломать!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CItp/0)

### Но что произойдет, если два интерфейса имеют одну и ту же подпись метода?

Удивительный вопрос. В этом случае, если вы не предоставите реализацию в классе, плохой компилятор будет запутан и просто провалится! Вы также должны обеспечить реализацию метода по умолчанию в классе. Существует также отличный способ использовать `super` чтобы назвать, какая реализация вам нравится:

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CIts/0)

## Статические методы в интерфейсах

Также новым для Java 8 является возможность добавления статических методов в интерфейсы. Статические методы в интерфейсах почти идентичны статическим методам в конкретных классах. Единственное большое различие заключается в том, что `static` методы не наследуются в классах, реализующих интерфейс. Это означает, что интерфейс ссылается при вызове статического метода, а не в классе, который его реализует.

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CIts/9)

## Наследование интерфейса

В Java также возможно, чтобы интерфейс _наследовал_ другой интерфейс, используя, как вы уже догадались, `extends` ключевое слово:

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

Это означает, что класс, реализующий интерфейс `MusicPlayer` должен реализовывать _все_ методы `MusicPlayer` а также `Player` :

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CIty/0)

Ой, я забыл `next()` ? См., Поскольку это был метод по `default` , мне не пришлось реализовывать реализацию вообще. (Не будет работать для JDK <8)

Итак, теперь у вас есть хорошее понимание интерфейсов! Познакомьтесь с абстрактными классами, чтобы узнать, как Java дает вам еще один способ определения контрактов.