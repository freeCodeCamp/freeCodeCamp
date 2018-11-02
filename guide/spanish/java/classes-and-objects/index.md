---
title: Classes and Objects
localeTitle: Clases y objetos
---
# Clases y objetos

Las clases son grupos de variables y operaciones sobre ellas. Una clase puede tener variables, métodos (o funciones) y constructores (o métodos que se utilizan para iniciar, ¡más adelante!).

Una clase puede contener cualquiera de los siguientes tipos de variables.

*   Variables de clase: estas son las variables que se declaran dentro de la definición de clase, fuera de cualquier método, con la palabra clave estática. Una variable de clase se comparte en todas las instancias de una clase. Las variables de clase también se conocen como las variables estáticas, se inicializan solo una vez en el momento de la compilación de la clase, por lo tanto, solo una copia de esta está disponible para todas las instancias.
*   Variables de instancia: la diferencia con las variables de clase es que las variables de instancia se inicializan dentro del constructor de la clase y no se comparten entre todos los objetos. En el momento de la creación de instancias, se crea una nueva copia de la variable de instancia.

```java
public class Example { 
 
    private static int myVar = 1; // Class Variable 
 
    private int mySecondVar; // Instance Variable 
    Example(int mySecondVar) { 
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor 
```

Piense en una `Class` como un plan para crear algo concreto. Una `Class` le dice cómo se verá el 'qué' y 'cómo' un `object` de dicha Clase una vez que se `instantiated` . En esencia, define las `properties` (por ejemplo, el color, la capacidad del motor) y el `behavior` (detener, acelerar, cambiar de marcha, etc.) para un Coche en el caso a continuación.

Los objetos son _instancias_ de una clase. Todos los objetos son instancias de una determinada clase. Imagina que una clase es una "plantilla", de la que se copia cada Objeto. Cuando creas un Objeto, básicamente crea un nuevo objeto en el plano de una clase. Ahora veamos esto en un pequeño trozo de código:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJZP/0)

Por lo tanto, `Car` es una clase, que tiene los campos o propiedades `name` y `manufacturerName` . `modelS` es un objeto de la clase `Car` . Así que `modelS` también tiene las mismas propiedades y métodos.

Es bastante estándar asegurar que la 'información' del objeto, en este caso el `name` `manufacturerName` variables de un `name` `manufacturerName` , sea privada y solo se pueda acceder a través de estos captadores y definidores. Esto evita un problema con el código de depuración que involucra las variables miembro de un objeto. Si las variables miembro se hicieron públicas, y por cualquier motivo el programa se bloquea, podría obtener un seguimiento de pila bastante complejo que puede ser difícil señalar el error. Mantener las variables privadas y solo accesibles a través de captadores y definidores simplificará este mensaje de error.