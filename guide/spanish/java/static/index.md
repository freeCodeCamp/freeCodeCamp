---
title: Static
localeTitle: Estático
---
# Estático

Cuando declara una variable o un método como estático, pertenece a la clase, en lugar de a una instancia específica. Esto significa que solo existe una instancia de un miembro estático, incluso si crea varios objetos de la clase, o si no crea ninguno. Será compartido por todos los objetos.

La palabra clave estática se puede utilizar con variables, métodos, bloques de código y clases anidadas.

## Variables estáticas

**_Ejemplo:_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 } 
```

La variable `COUNT` será compartida por todos los objetos de esa clase. Cuando creamos objetos de nuestra clase Counter en main, y accedemos a la variable estática.

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter c1 = new Counter(); 
    Counter c2 = new Counter(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

La salida es 2, porque la variable `COUNT` es estática y se incrementa en uno cada vez que se crea un nuevo objeto de la clase Counter. También puede acceder a la variable estática utilizando cualquier objeto de esa clase, como `c1.COUNT` .

## Métodos estáticos

Un método estático pertenece a la clase en lugar de instancias. Por lo tanto, se puede llamar sin crear instancia de clase. Se utiliza para alterar contenidos estáticos de la clase. Hay algunas restricciones de métodos estáticos:

1.  El método estático no puede usar miembros no estáticos (variables o funciones) de la clase.
2.  El método estático no puede utilizar `this` o `super` palabras clave.

**_Ejemplo:_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 
  public static void increment(){ 
    COUNT++; 
  } 
 } 
```

Los métodos estáticos también se pueden llamar desde la instancia de la clase.

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter.increment(); 
    Counter.increment(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

La salida es 2 porque se incrementa por el incremento de método `increament()` . Al igual que las variables estáticas, también se puede acceder a los métodos estáticos utilizando variables de instancia.

## Bloques estáticos

Los bloques de código estático se utilizan para inicializar variables estáticas. Estos bloques se ejecutan inmediatamente después de la declaración de variables estáticas.

**_Ejemplo:_**

```java
public class Saturn { 
  public static final int MOON_COUNT; 
 
  static { 
    MOON_COUNT = 62; 
  } 
 } 
```

```java
public class Main { 
  public static void main(String[] args) { 
    System.out.println(Saturn.MOON_COUNT); 
  } 
 } 
 // Outputs "62" 
```

La salida es 62, porque la variable `MOON_COUNT` tiene asignado ese valor en el bloque estático.

## Clases anidadas estáticas

Una clase puede tener una clase anidada estática a la que se puede acceder usando un nombre de clase externo.

**_Ejemplo:_**

```java
public class Outer { 
 
  public Outer() { 
  } 
 
  public static class Inner { 
    public Inner() { 
    } 
  } 
 } 
```

En el ejemplo anterior, se puede acceder directamente a la clase `Inner` como miembro estático de la clase `Outer` .

```java
public class Main { 
  public static void main(String[] args) { 
    Outer.Inner inner = new Outer.Inner(); 
  } 
 } 
```

Uno de los casos de uso de clases anidadas estáticas en el [patrón de generador](https://en.wikipedia.org/wiki/Builder_pattern#Java) popularmente utilizado en java.