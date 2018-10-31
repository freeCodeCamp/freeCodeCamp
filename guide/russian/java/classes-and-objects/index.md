---
title: Classes and Objects
localeTitle: Классы и объекты
---
# Классы и объекты

Классы - это группы переменных и операции над ними. Класс может иметь переменные, методы (или функции) и конструкторы (или методы, которые используются для инициирования, подробнее об этом позже!).

Класс может содержать любой из следующих типов переменных.

*   Переменные класса. Это переменные, которые объявляются внутри определения класса, вне любого метода, с ключевым словом static. Переменная класса используется для всех экземпляров класса. Переменные класса также известны как статические переменные, они инициализируются только один раз во время компиляции класса, поэтому для всех экземпляров доступна только одна копия.
*   Переменные экземпляра. Разница с переменными класса заключается в том, что переменные экземпляра инициализируются внутри конструктора классов, и они не используются для всех объектов. Во время создания экземпляра создается новая копия переменной экземпляра.

```java
public class Example { 
 
    private static int myVar = 1; // Class Variable 
 
    private int mySecondVar; // Instance Variable 
    Example(int mySecondVar) { 
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor 
```

Подумайте о `Class` как о плане создания чего-то конкретного. `Class` сообщает вам, как будет выглядеть `instantiated` «что» и «как» `object` указанного класса. По сути, он определяет `properties` (например, цвет, мощность двигателя) и `behavior` (остановка, ускорение, переключения передач, хонк и т. Д.) Для автомобиля в приведенном ниже случае.

Объекты - это _экземпляры_ класса. Все объекты являются экземплярами определенного класса. Представьте, что класс является «шаблоном», из которого копируется каждый объект. Когда вы создаете объект, он в основном создает новый объект в проекте класса. Теперь давайте рассмотрим это в небольшом фрагменте кода:

```java
// Car class 
 public class Car { 
    // car name 
    private String name; 
 
    // car manufacturer name 
    private String manufacturerName; 
 
    // constructor 1 
    public Car() { 
    } 
 
    // constructor 2 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
 
    // getter name method 
    public String getName() { 
        return name; 
    } 
 
    // getter manufacture method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 
    //setter name method 
    public void setName(String name){ 
        this.name = name; 
    } 
 
    //setter manufacture method 
    public void setManufacture(String man){ 
        this.manufacturerName = man; 
    } 
 } 
 
 // sample code 
 
 Car modelS = new Car("Model S","Tesla"); 
 // prints Tesla Model S 
 System.out.println("Full Car Model S= " + modelS.getManufacturerName() + " : " + modelS.getName()); 
 
 Car modelX = new Car(); 
 modelX.setName("Model X"); 
 modelX.setManufacture("BMW"); 
 // prints Tesla Model X 
 System.out.println("Full Car Model X= " + modelX.getManufacturerName() + " : " + modelX.getName()); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CJZP/0)

Итак, `Car` - это класс, который имеет `name` полей или свойств и `name` `manufacturerName` . `modelS` является объектом класса `Car` . Таким образом, `modelS` также имеет те же свойства и методы.

Это почти стандарт, чтобы обеспечить «информацию» объекта, в этом случае `name` переменных `manufacturerName` , быть приватным и доступ к ним только через эти геттеры и сеттеры. Это предотвращает проблему с кодом отладки, которая включает переменные-члены объекта. Если переменные-члены были опубликованы, и по какой-либо причине программа выйдет из строя, вы можете получить довольно сложную трассировку стека, которая может быть трудно указать на ошибку. Сохранение переменных в частном порядке и доступ только через геттеры и сеттеры упростит это сообщение об ошибке.