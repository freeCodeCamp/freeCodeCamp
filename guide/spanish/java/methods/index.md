---
title: Methods
localeTitle: Métodos
---
# Métodos

El método más reconocible en Java es probablemente `public static void main(String[]args)` donde `public` significa que los usuarios tienen acceso al método, `static` significa que el método se basa en una "clase" en lugar de una "instancia", `void` significa que nada se devolverá del método a otro método (nivel superior), y `main` que es el nombre de este método en particular.

`getName()` y `getManufacturerName()` son dos métodos "Getter" que hemos utilizado aquí. Generalmente, los métodos en Java consisten en estas partes:

*   Modificador de acceso (opcional): `public` , `private` o `protected` . Por defecto, paquete privado si se omite
*   Tipo de devolución: es obligatorio, indica el valor que devuelve el método o se `void` si no se devuelve nada
*   Nombre del método: sigue la convención de camelCase
*   Lista de parámetros: lista de parámetros con su nombre y tipo, vacía si no se aceptan parámetros
*   Cuerpo del método rodeado por `{ }`

Los métodos también pueden tener opcionalmente la palabra clave `static` , lo que significa que está asociada con la clase en sí, en lugar de una instancia de la clase, ex - `public static void main()` .

Aviso, a diferencia de JavaScript, **tenemos** que definir el tipo de retorno de cualquier método que escribimos, de lo contrario se producirá un error en tiempo de compilación. Si no desea que un método devuelva nada, use `void` return type.

Cada método tiene una firma, que es la combinación del tipo de datos, el nombre y la cantidad de argumentos que toma el método. En `public static void main` el método no tiene un tipo de datos especificado y en su lugar usa `void` para declarar que no se devuelve ningún dato. En un método denominado `public static double ave(double val, double val)` el tipo de datos es "doble" (0.0), el nombre es "ave" (promedio) y el método toma 2 argumentos. Cada método **debe** tener una firma única.

```java
public class Car { 
    private String name; 
    private String manufacturersName; 
 
    public void changeName() { 
        name = "Tesla"; 
    } 
 
    public String getName(){ 
        return name; 
    } 
 
    public String getManufacurername(){ 
        return manufacturersName; 
    } 
 
 } 
```

Los parámetros se pueden pasar a los métodos. Los parámetros se declaran justo después del nombre del método, entre paréntesis. La sintaxis para la declaración de parámetros es \[Tipo de datos\] \[Nombre\].

```java
public class Car { 
    private String name; 
 
    public void changeName(String newName) { 
        name = newName; 
    } 
 } 
```

Al igual que con cualquier otro lenguaje, los métodos (o funciones, si usted está aquí en el mundo JS) se utilizan a menudo por su modularidad y reutilización.

Los métodos a menudo sirven para muchos propósitos, como actualizar la información en un objeto o proporcionar datos a la persona que llama. Aquí hay unos ejemplos.

```java
public class Car { 
    private int numberOfWheels; 
 
    public void setNumberOfWheels(int newNumberOfWheels) { 
        numberOfWheels = newNumberOfWheels; 
    } 
 
    public int getNumberOfWheels() { 
        return numberOfWheels; 
    } 
 } 
```

En el caso de `getNumberOfWheels()` el tipo de retorno es `int` que es un número entero. La palabra clave `return` le dice a java que devuelva el valor de la variable de instancia `numberOfWheels` . `setNumberOfWheels(int newNumberOfWheels)` sin embargo, no tiene un tipo de retorno, ya que es un método de establecimiento como se vio anteriormente. En este caso, aunque toma un argumento de tipo `int` y hace que la instancia sea `numberOfWheels` variable igual a `newNumberOfWheels` .

También hay un método especial llamado constructor que permite establecer datos o realizar operaciones cuando se crea una instancia de la clase. Este constructor no tiene tipo de retorno.

```java
public class Car { 
    private String model; 
    private int numberOfWheels; 
 
    public Car(String model, int numberOfWheels) { 
        this.model = model; 
        this.numberOfWheels = numberOfWheels; 
    } 
 } 
```

La clase `Car` y el método `Car(String model, int numberOfWheels)` deben tener el mismo nombre para que Java sepa que es el constructor. Ahora, cada vez que cree una instancia nueva de `Car` con la `new` palabra clave, deberá llamar a este constructor y pasar los datos necesarios.