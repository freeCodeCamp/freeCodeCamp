---
title: Inheritance Basics
localeTitle: Fundamentos de Herencia
---
# Fundamentos de Herencia

Tan genial que ha creado con éxito una clase de coches. Pero, espera, ¿no se supone que los autos de Tesla son variantes eléctricas? Quiero una clase de automóvil eléctrico, pero también debería tener las propiedades de la clase de `Car` original.

Solución: **Herencia** . Java proporciona una forma sencilla de "heredar" las propiedades principales:

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZY/0)

Vea aquí que la clase `ElectricCar` hereda o `extends` los métodos públicos de la clase `Car` , así como también tiene sus propios métodos y propiedades. Buena forma de transmitir información!

También tenga en cuenta el uso de la palabra clave [super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) aquí. Como nuestra clase `Car` tenía un constructor, también tenemos que inicializar ese constructor desde la clase secundaria. Hacemos eso usando la `super` palabra clave. Lea más sobre la herencia aquí .