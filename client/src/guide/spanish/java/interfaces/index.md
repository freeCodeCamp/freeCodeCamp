---
title: Interfaces
localeTitle: Interfaces
---
# Interfaces

La interfaz en Java es un poco como la Clase, pero con una diferencia significativa: una `interface` _solo_ puede tener firmas de método, campos y métodos predeterminados. Desde Java 8, también puede crear [métodos predeterminados](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) . En el siguiente bloque puedes ver un ejemplo de interfaz:

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

La interfaz anterior contiene dos campos, dos métodos y un método predeterminado. Solo, no es de mucha utilidad, pero generalmente se usan junto con las Clases. ¿Cómo? Simple, tienes que asegurarte de que alguna clase lo `implements` .

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CItd/0)

Ahora, hay una **regla básica** : la Clase debe implementar **todos** los métodos en la Interfaz. Los métodos deben tener _exactamente la misma_ firma (nombre, parámetros y excepciones) como se describe en la interfaz. Sin _embargo, la_ clase _no_ necesita declarar los campos, solo los métodos.

## Instancias de una interfaz

Una vez que cree una Clase Java que `implements` cualquier Interfaz, se puede hacer referencia a la instancia del objeto como una instancia de la Interfaz. Este concepto es similar al de la instanciación de herencia.

```java
// following our previous example 
 
 Vehicle tesla = new Car(); 
 
 tesla.start(); // starting engine ... 
```

Una interfaz **no puede** contener métodos de un constructor, por lo tanto, no **puede** crear una instancia de una interfaz en sí misma. Debe crear una instancia de alguna clase que implemente una interfaz para hacer referencia a ella. Piense en las interfaces como un formulario de contrato en blanco, o una plantilla.

¿Qué puedes hacer con esta característica? ¡Polimorfismo! ¡Puede usar solo interfaces para referirse a instancias de objetos!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CItm/0)

## Pero ¿qué hay de múltiples interfaces?

Sí, puede implementar múltiples interfaces en una sola clase. Mientras que en [Herencia](//forum.freecodecamp.com/t/java-docs-inheritance) dentro de clases estaba restringido a heredar solo una clase, aquí puede extender cualquier número de interfaces. ¡Pero no olvide implementar _todos_ los métodos de todas las interfaces, de lo contrario la compilación fallará!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CIto/0)

## Algunas características de las interfaces

*   Puede colocar variables dentro de una interfaz, aunque no será una decisión sensata ya que las clases no están obligadas a tener la misma variable. En resumen, ¡evite colocar variables!
*   Todas las variables y métodos en una interfaz son públicos, incluso si se omite la palabra clave `public` .
*   Una interfaz no puede especificar la implementación de un método en particular. Depende de las clases hacerlo. Aunque ha habido una excepción reciente (ver más abajo).
*   Si una clase implementa múltiples interfaces, existe una posibilidad remota de que la firma del método se superponga. Como Java no permite múltiples métodos de la misma firma exacta, esto puede llevar a problemas. Vea [esta pregunta](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) para más información.

## Métodos predeterminados de la interfaz

Antes de Java 8, no teníamos forma de dirigir una Interfaz para tener una implementación de método particular. Esto lleva a mucha confusión y saltos de código si una definición de interfaz se cambia repentinamente.

Supongamos que usted escribió una biblioteca de código abierto, que contiene una interfaz. Digamos que sus clientes, es decir, prácticamente todos los desarrolladores de todo el mundo, lo están utilizando mucho y están contentos. Ahora ha tenido que actualizar la biblioteca agregando una nueva definición de método a la Interfaz para admitir una nueva función. Pero eso rompería _todas las_ compilaciones ya que todas las Clases que implementan esa Interfaz tienen que cambiar ahora. ¡Qué catástrofe!

Afortunadamente, Java 8 ahora nos proporciona métodos `default` para interfaces. ¡Un método `default` _puede_ contener su propia implementación _directamente_ dentro de la interfaz! Por lo tanto, si una Clase no implementa un método predeterminado, el compilador tomará la implementación mencionada en la Interfaz. Niza, ¿no es así? ¡Así que en tu biblioteca, puedes agregar cualquier número de métodos predeterminados en las interfaces sin el temor de romper nada!

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CItp/0)

### Pero, ¿qué pasa si dos interfaces tienen la misma firma de método?

Pregunta impresionante En ese caso, si no proporciona la implementación en la Clase, ¡el compilador pobre se confundirá y simplemente fallará! También debe proporcionar una implementación del método predeterminado dentro de la Clase. También hay una forma ingeniosa de usar `super` para llamar a la implementación que te gusta:

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CIts/0)

## Métodos estáticos en interfaces

Otra novedad de Java 8 es la posibilidad de agregar métodos estáticos a las interfaces. Los métodos estáticos en las interfaces son casi idénticos a los métodos estáticos en clases concretas. La única gran diferencia es que `static` métodos `static` no se heredan en las clases que implementan la interfaz. Esto significa que se hace referencia a la interfaz al llamar al método estático, no a la clase que lo implementa.

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CIts/9)

## Heredando una interfaz

También es posible en Java que una Interfaz _herede_ otra Interfaz, usando, lo adivinaste, `extends` palabra clave:

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

Eso significa que la Clase que implementa la Interfaz `MusicPlayer` tiene que implementar _todos los_ métodos de `MusicPlayer` , así como el `Player` :

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CIty/0)

Vaya, ¿me olvidé de `next()` ? Ver, como era un método `default` , no tuve que proporcionar una implementación en absoluto. (No funcionará para JDK <8)

Entonces, ahora tienes un buen conocimiento de Interfaces! Conozca las clases abstractas para saber cómo Java le ofrece otra forma de definir contratos.