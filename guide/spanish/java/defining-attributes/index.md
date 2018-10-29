---
title: Defining Attributes
localeTitle: Definiendo atributos
---
## Definiendo atributos

Una clase tiene atributos y métodos. Los atributos son básicamente variables dentro de una clase.

**_Ejemplo:_**

```java
public class Vehicle { 
  int maxSpeed; 
  int wheels; 
  String color; 
 
  void horn() { 
    System.out.println("Beep beep!"); 
  } 
 } 
```

`maxSpeed` , las `wheels` y el `color` son todos atributos de nuestra clase de Vehículo y la `horn()` es el único método.

### Creando objetos

Podemos crear varios objetos de nuestra clase Vehículo y usar la sintaxis de puntos para acceder a sus atributos y métodos.

```java
class MyClass { 
  public static void main(String[] args) { 
    Vehicle v1 = new Vehicle(); 
    Vehicle v2 = new Vehicle(); 
    v1.color = "red"; 
    v2.horn(); 
  } 
 } 
```

### Modificadores de visibilidad

En el ejemplo de Vehículo anterior, los atributos se declaran sin un modificador de visibilidad (por ejemplo, público, privado o protegido). Cuando no se incluye ningún modificador en una delaración de atributo, se establece de manera predeterminada algo llamado "paquete privado", lo que significa que se puede acceder al atributo directamente usando "." Notación de puntos por cualquier otra clase dentro del mismo paquete.

Se puede acceder a las variables 'públicas' desde cualquier clase Las variables 'protegidas' pueden ser accedidas por cualquier clase dentro del mismo paquete, así como por subclases en cualquier otro paquete que tenga una relación padre-hijo. Las variables 'privadas' solo se pueden acceder desde la clase donde se declaran Las clases en el mismo paquete pueden acceder a los miembros del 'paquete privado'

'público', variables, métodos, constructores y clases (solo uno) pueden ser declarados como públicos. 'protegido', las variables, los métodos y los constructores se pueden declarar como privados pero no como clases e interfaces. 'privado', las variables, los métodos y los constructores se pueden declarar como privados pero no como clases e interfaces. 'predeterminado', las variables, los métodos, los constructores y las clases pueden ser del tipo predeterminado (declarado al no escribir nada).

#### público> protegido> predeterminado> privado (en función de la facilidad de acceso)

En general, es una buena idea hacer que todos los atributos de una clase sean privados y controlar el acceso a ellos mediante el uso de los métodos "getter" y "setter".