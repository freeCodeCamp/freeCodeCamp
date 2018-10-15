---
title: Inheritance Basics
localeTitle: Основы наследования
---
# Основы наследования

Настолько замечательно, что вы успешно создали класс Car. Но, подожди, не являются ли машины Тесла электрическими вариантами? Я хочу класс Electric car, но он также должен обладать свойствами оригинального класса `Car` .

Решение: **Наследование** . Java обеспечивает опрятный способ «наследовать» родительские свойства:

```java
public class Car { 
 
    private String name; 
    private String manufacturerName; 
 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
    // Getter method 
    public String getName() { 
        return name; 
    } 
    // Getter method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 } 
 
 public class ElectricCar extends Car { 
 
    public ElectricCar(String name, String man) { 
        super(name, man); 
    } 
 
    public void charge() { 
     System.out.println("Charging ..."); 
    } 
 } 
 
 ElectricCar modelS = new ElectricCar("Model S","Tesla"); 
 // prints Tesla 
 System.out.println(modelS.getManufacturerName()); 
 // prints Charging ... 
 modelS.charge(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZY/0)

См. Здесь, что класс `ElectricCar` наследует или `extends` общедоступные методы класса `Car` , а также имеет свои собственные методы и свойства. Прохладный способ передать информацию!

Также обратите внимание на использование ключевого слова [super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) . Поскольку наш класс `Car` имел конструктор, мы должны инициализировать этот конструктор и из дочернего класса. Мы делаем это, используя ключевое слово `super` . Узнайте больше о Наследовании здесь .