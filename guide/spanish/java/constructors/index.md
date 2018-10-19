---
title: Constructors
localeTitle: Constructores
---
Si un objeto copia de una clase, ¿cuál es el punto? Debería poder almacenar datos, ¿verdad?

Ahí es cuando usamos los métodos **getter** (por ejemplo, getName ()) / **setter** (por ejemplo, setName ()), o en este caso los constructores, para inicializar una clase. Básicamente, cada clase Java tiene un constructor que es el método al que se llama primero cuando se inicializa cualquier objeto de la clase. Piense en ello como un poco de código de inicio.

Cuando escribe una clase sin ningún constructor, el compilador de Java crea un constructor predeterminado:

```java
public class Car { 
    private String name; 
 } 
 
 Car modelS = new Car(); 
```

Esta inicialización sin parámetros es una forma de llamar al constructor predeterminado. También puede tener un constructor predeterminado escrito de esta manera:

```java
public class Car { 
    private String name; 
 
    // User Specified Default Constructor 
    public Car() { 
        name = "Tesla"; 
    } 
 } 
```

Luego, al llamar al `new Car()` , el `name` la variable se inicializará automáticamente a "Tesla" para esa instancia del objeto Car.

Claramente, los constructores son exactamente como suenan: se usan para `construct` , es decir, crear instancias de un objeto de una clase particular.  
Los constructores son similares a las declaraciones de métodos, pero son ligeramente diferentes en el sentido de que:

1.  Se nombran exactamente igual que la clase.
2.  No tengo un tipo de retorno.

Por lo tanto, el propósito de usar `constructors` es proporcionar:

1.  Una forma de instanciar un objeto.
2.  Proporcionar valores iniciales a las propiedades de un objeto.
3.  Controla cómo se crea un objeto.

Veamos otro ejemplo. Por ejemplo, Honda (el fabricante de automóviles), quiere que todos sus autos se `Honda <a name>` . Para hacer cumplir esto, podríamos representarlo usando una clase de la siguiente manera:

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CTJ4/1)

Tenga en cuenta que cuando escribimos un constructor de esta manera, es decir, al proporcionar un parámetro, controlamos (punto 3) la forma en que se crea una instancia de `Car` . En resumen, en este ejemplo estamos diciendo que **DEBE proporcionar un nombre de modelo para obtener una instancia de la clase Car** .

¿Porque es esto importante? Hay ocasiones en las que querría `one and only one` instancia de una clase para usar en toda su aplicación. Una forma de lograr esto es mediante el uso de un constructor `private` .

Supongamos que necesita una clase para representar a un banco. No querrías que la gente creara una instancia de `Bank` nunca. Entonces, diseñas tu clase:

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CTJz/0)

Observe que el constructor es `private` . Esto impone el hecho de que a nadie más se le permite crear una instancia del Banco.  
De hecho, si está en otra clase, intente:

```java
Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank. 
```

Por lo tanto, la única forma de obtener acceso a la instancia es mediante `Bank.getInstance()` . Dichas instancias se denominan `Singleton` ya que obtiene exactamente una instancia (por máquina virtual para ser precisos) durante toda la vida de su aplicación.

Puede haber muchos constructores en una clase. Pero deberían diferir en los parámetros del método. Esto es sobrecarga de constructor. Para ser precisos, decimos que se ha producido una sobrecarga del constructor cuando hay dos o más constructores con el mismo nombre, pero con diferentes parámetros de método. Como resultado, las dos funciones tienen firmas de métodos diferentes y son tratadas por Java como constructores completamente diferentes. Por ejemplo:

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

Por lo tanto, la única forma de obtener acceso a la instancia es mediante `Bank.getInstance()` . Dichas instancias se denominan `Singleton` ya que obtiene exactamente una instancia (por VM para ser precisos) a lo largo de la vida de su aplicación.

## Copia constructor

El constructor de copia es un constructor que crea un objeto al inicializarlo con un objeto de la misma clase, que se ha creado anteriormente. El constructor de copia se utiliza para

1.  Inicializa un objeto desde otro del mismo tipo.
2.  Copie un objeto para pasarlo como un argumento a una función.
3.  Copia un objeto para devolverlo desde una función. Aquí hay un programa que muestra un uso simple del constructor de copia:

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

[ejecuta el código completo](https://repl.it/MwnJ)

// ## Encadenamiento del constructor