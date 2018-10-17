---
title: Inheritance
localeTitle: Herencia
---
# Herencia

La herencia Java se refiere a la capacidad de una clase Java para `inherit` las propiedades de otra clase. Piense en ello como un hijo que hereda propiedades de sus padres, el concepto es muy similar a eso. En la jerga de Java, también se le llama _extender_ una clase. Algunas cosas simples para recordar:

*   La clase que se extiende o hereda se llama una **subclase**
*   La clase que se está extendiendo o heredando se llama **superclase**

Por lo tanto, la herencia le da a Java la genial capacidad de _reutilizar_ código, o compartir código entre clases.

Vamos a describirlo con el ejemplo clásico de una clase de `Vehicle` y una clase de `Car` :

```java
public class Vehicle { 
    public void start() { 
        // starting the engine 
    } 
 
    public void stop() { 
        // stopping the engine 
    } 
 } 
 
 public class Car extends Vehicle { 
    int numberOfSeats = 4; 
 
    public int getNumberOfSeats() { 
        return numberOfSeats; 
    } 
 } 
```

Aquí, podemos ver la clase `Car` hereda las propiedades de la clase `Vehicle` . Por lo tanto, no tenemos que escribir el mismo código para los métodos `start()` y `stop()` para `Car` también, ya que esas propiedades están disponibles desde su padre o superclase. Por lo tanto, los objetos creados a partir de la clase `Car` _también_ tendrán esas propiedades.

```java
Car tesla = new Car(); 
 
 tesla.start(); 
 
 tesla.stop(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJXz/0)

Pero, ¿la clase padre tiene los métodos del niño? No, no lo hace.

Por lo tanto, siempre que necesite compartir una parte del código común entre varias clases, siempre es bueno tener una clase para padres, y luego extender esa clase cuando sea necesario. Reduce el número de líneas de código, hace que el código sea modular y simplifica las pruebas.

## ¿Qué se puede heredar?

*   Todos `public` campos y métodos `protected` y `public` de los padres.

## ¿Qué no se puede heredar?

*   campos y métodos `private`
*   Constructores. Aunque, el constructor de la subclase _tiene_ que llamar al constructor de la superclase si está definido (¡Más sobre eso más adelante!)
*   Clases multiples. Java solo admite **herencia simple** , es decir, solo puede heredar una clase a la vez.
*   Campos. Los campos individuales de una clase no pueden ser sustituidos por la subclase.

## Tipo de fundición y referencia

En Java, es posible hacer referencia a una subclase como una _instancia_ de su superclase. Se llama _Polimorfismo_ en Programación Orientada a Objetos (OOP), la capacidad de un objeto para tomar muchas formas. Por ejemplo, se puede hacer referencia al objeto de clase de `Car` como una instancia de clase de `Vehicle` como esta:

```java
Vehicle car = new Car(); 
```

Aunque, lo contrario no es posible:

```java
Car car = new Vehicle(); // ERROR 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYB/0)

Como puede hacer referencia a una subclase de Java como una instancia de superclase, puede convertir fácilmente una instancia de un objeto de subclase a una instancia de superclase. Es posible convertir un objeto de superclase en un tipo de subclase, pero _solo si el objeto es realmente una instancia de la subclase_ . Así que ten esto en cuenta:

```java
Car car = new Car(); 
 Vehicle vehicle = car; // upcasting 
 Car car2 = (Car)vechile; //downcasting 
 
 Bike bike = new Bike(); // say Bike is also a subclass of Vehicle 
 Vehicle v = bike; // upcasting, no problem here. 
 Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYM/0)

Ahora sabes cómo compartir código a través de una relación padre-hijo. Pero, ¿qué pasa si no le gusta la implementación de un método particular en la clase secundaria y desea escribir uno nuevo para él? ¿Que haces entonces?

## Anularlo!

Java le permite _anular_ o redefinir los métodos definidos en la superclase. Por ejemplo, su clase `Car` tiene una implementación diferente de `start()` que el `Vehicle` principal, por lo que hace esto:

```java
public class Vehicle { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void start() { 
      System.out.println("Car start code"); 
  } 
 } 
 
 Car car = new Car(); 
 car.start(); // "Car start code" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYZ/1)

Por lo tanto, es bastante sencillo anular los métodos en la subclase. Aunque, hay una _trampa_ . Solo se anulará ese método de superclase con la _misma firma exacta del método_ que el método de subclase. Eso significa que la definición del método de subclase debe tener el mismo nombre exacto, el mismo número y tipo de parámetros, y en la misma secuencia exacta. Por lo tanto, `public void start(String key)` no anularía `public void start()` .

**Notas** :

*   No puede anular los métodos privados de la superclase. (Bastante obvio, ¿no?)
*   ¿Qué sucede si el método de superclase que está anulando en la subclase se borra repentinamente o se cambian los métodos? ¡Fallaría en tiempo de ejecución! ¡Así que Java te proporciona una ingeniosa anotación `@Override` que puedes colocar sobre el método de subclase, que advertirá al compilador de esos incidentes!

Las anotaciones en Java son una buena práctica de codificación, pero no son una necesidad. Sin embargo, el compilador es lo suficientemente inteligente como para descifrar la anulación por sí solo. A diferencia de otros lenguajes OOP, Annotations in Java no modifica necesariamente el método ni agrega funcionalidad adicional.

## ¿Cómo llamar a los métodos de super clase?

¡Qué gracioso lo preguntas! Solo usa la palabra clave `super` :

```java
public class Vehicle() { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void run() { 
      super.start(); 
  } 
 } 
 
 Car car = new Car(); 
 car.run(); // "Vehicle start code" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJY4/0)

**Nota:** Aunque se puede llamar al método de los padres mediante el uso de un `super` llamada, no se puede subir por la jerarquía de herencia con encadenados `super` llamadas.

## ¿Cómo saber el tipo de una clase?

Usando la palabra clave `instanceof` . Tener muchas clases y subclases sería un poco confuso saber qué clase es una subclase de cuál en tiempo de ejecución. Por lo tanto, podemos usar `instanceof` para determinar si un objeto es una instancia de una clase, una instancia de una subclase o una instancia de una interfaz.

```java
Car car = new Car(); 
 
 boolean flag = car instanceof Vehicle; // true in this case! 
```

## Constructores y Herencia

Como se mencionó anteriormente, los constructores no pueden ser heredados directamente por una subclase. Aunque, se _requiere_ una subclase para llamar al constructor de su padre como la [primera operación](http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor) en su propio constructor. ¿Cómo? Lo has adivinado, usando `super`

```java
public class Vehicle { 
    public Vehicle() { 
        // constructor 
    } 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public Car() { 
      super(); 
    } 
    public void run() { 
      super.start(); 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJY8/0)

Recuerde, si la superclase no tiene ningún constructor definido, no tiene que llamarlo explícitamente en la subclase. Java maneja eso internamente por ti! La invocación al `super` constructor se realiza en el caso de que la súper clase se llame con cualquier otro constructor que no sea el _constructor predeterminado_ .

Si no se definen otros constructores, entonces Java invoca al constructor de la superclase por defecto ( _incluso si no está definido explícitamente_ ).

Felicidades, ahora sabes todo sobre la herencia! ¡Lea más sobre las formas avanzadas de heredar cosas en clases e [interfaces](//forum.freecodecamp.com/t/java-docs-interfaces) abstractas!