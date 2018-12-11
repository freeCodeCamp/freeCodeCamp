---
title: Constructors
localeTitle: Конструкторы
---
Если объект копирует из класса, в чем смысл? Я должен иметь возможность хранить данные в нем правильно?

Именно тогда мы используем методы **getter** (например, getName ()) / **setter** (например, setName ()) или в этом случае конструкторы для инициализации класса. В принципе, каждый класс Java имеет конструктор, который является методом, называемым первым, когда инициализируется любой объект класса. Подумайте об этом как о стартовом коде.

Когда вы пишете класс без какого-либо конструктора, компилятор Java создает конструктор по умолчанию:

```java
public class Car { 
    private String name; 
 } 
 
 Car modelS = new Car(); 
```

Эта инициализация без параметров - способ вызова конструктора по умолчанию. Вы также можете написать конструктор по умолчанию:

```java
public class Car { 
    private String name; 
 
    // User Specified Default Constructor 
    public Car() { 
        name = "Tesla"; 
    } 
 } 
```

Затем при вызове `new Car()` `name` переменной будет автоматически инициализировано для «Tesla» для этого экземпляра объекта Car.

Ясно, что конструкторы в точности такие, какие они звучат: они используются для `construct` т. Е. Создают экземпляр объекта определенного класса.  
Конструкторы похожи на объявления методов, но немного отличаются в том смысле, что они:

1.  Названы точно так же, как класс.
2.  Не используйте тип возврата.

Следовательно, целью использования `constructors` является обеспечение:

1.  Способ создания объекта.
2.  Предоставить начальные значения свойствам объекта.
3.  Контролируйте, как создается объект.

Давайте посмотрим на другой пример. Скажем, Honda (производитель автомобилей) хочет, чтобы все ее автомобили назывались `Honda <a name>` . Чтобы обеспечить это, мы можем представить это с помощью класса следующим образом:

```java
public class Car { 
 
    private String name; 
 
    // Constructor. 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CTJ4/1)

Обратите внимание: когда мы пишем конструктор таким образом, то есть, предоставляя параметр, мы контролируем (пункт № 3) способ создания экземпляра `Car` . Короче говоря, мы говорим в этом примере, что **вы ДОЛЖНЫ предоставить имя модели, чтобы получить экземпляр класса Car** .

Почему это важно? Бывают случаи, когда вам нужен `one and only one` экземпляр класса для использования во всем приложении. Одним из способов достижения этого является использование `private` конструктора.

Предположим, вам нужен класс для представления банка. Вы бы не хотели, чтобы люди когда-либо создавали экземпляр `Bank` . Итак, вы разрабатываете свой класс:

```java
public class Bank { 
 
    private static Bank instance; 
 
    private Bank(){ 
    } 
 
    public static Bank getInstance(){ 
        if(null == instance){ 
            instance = new Bank(); 
        } 
        return instance; 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CTJz/0)

Обратите внимание, что конструктор является `private` . Это подтверждает тот факт, что никто другой не может создать экземпляр Банка.  
На самом деле, если в другом классе вы пытаетесь:

```java
Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank. 
```

Таким образом, единственный способ получить доступ к экземпляру - использовать `Bank.getInstance()` . Такие экземпляры называются `Singleton` так как вы получаете ровно один экземпляр (на каждую VM, чтобы быть точным) на протяжении всего срока действия вашего приложения.

В классе может быть много конструкторов. Но они должны отличаться в параметрах метода. Это перегрузка конструктора. Если быть точным, мы говорим, что перегрузка конструктора произошла, когда есть два или более конструктора с одинаковым именем, но разные параметры метода. В результате две функции имеют разные сигнатуры методов и полностью обрабатываются Java как разные конструкторы. Например:

```java
public class Car { 
 
    private String name; 
    private String carType; 
 
    // Constructor. 
    public Car(){ 
        this.name = "No Name"; 
        this.carType = "No Type"; 
    } 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public Car(String model, String carType){ 
        this.name = model; 
        this.carType = carType; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public String getCarType(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
 
        // Other Way To Initialize 
        Car car = new Car("Civic","Sedan"); 
        System.out.println( car.getName() + " "+ car.getCarType() ); 
 
    } 
 } 
```

Таким образом, единственный способ получить доступ к экземпляру - использовать `Bank.getInstance()` . Такие экземпляры называются `Singleton` так как вы получаете ровно один экземпляр (на каждую VM, чтобы быть точным) на протяжении всего срока действия вашего приложения.

## Копировать конструктор

Конструктор копирования - это конструктор, который создает объект, инициализируя его объектом того же класса, который был создан ранее. Конструктор копирования используется для-

1.  Инициализировать объект из другого типа.
2.  Скопируйте объект, чтобы передать его в качестве аргумента функции.
3.  Скопируйте объект, чтобы вернуть его из функции. Вот программа, которая показывает простое использование конструктора копирования:

```Java
class Complex { 
 
    private double re, im; 
 
    // A normal parametrized constructor 
    public Complex(double re, double im) { 
        this.re = re; 
        this.im = im; 
    } 
 
    // Copy constructor 
    Complex(Complex c) { 
        System.out.println("Copy constructor called"); 
        re = c.re; 
        im = c.im; 
    } 
 
    } 
 } 
```

[запустить полный код](https://repl.it/MwnJ)

// ## Цепочка конструктора