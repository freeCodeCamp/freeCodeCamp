---
title: Final
localeTitle: Final
---
## final

La palabra clave `final` usa para marcar una constante constante, de modo que solo se puede asignar una vez. Así que debes inicializar una variable final con un valor. Si no se inicializa (cuando se declara, dentro de Constructor o dentro de bloques estáticos), se producirá un error de tiempo de compilación.

**_Ejemplo:_**

```java
class MyClass { 
  public static final double PI = 3.14; 
  public static void main(String[] args){ 
    System.out.println(PI); 
  } 
 } 
```

PI es ahora una constante. Cualquier intento de asignarle un valor causará un error.

* * *

Si crea algún método como definitivo, no puede anularlo.

```java
class Bike{ 
  final void run(){System.out.println("running");} 
 } 
 
 class Honda extends Bike{ 
   void run(){System.out.println("running safely with 100kmph");} 
 
   public static void main(String args[]){ 
   Honda honda= new Honda(); 
   honda.run(); 
   } 
 } 
```

La salida será - Salida: Error de tiempo de compilación

* * *

Si haces cualquier clase como final, no puedes extenderla.

```java
final class Bike{} 
 
 class Honda1 extends Bike{ 
  void run(){System.out.println("running safely with 100kmph");} 
 
  public static void main(String args[]){ 
  Honda1 honda= new Honda(); 
  honda.run(); 
  } 
 } 
```

La salida será Salida: Error de tiempo de compilación