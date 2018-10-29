---
title: Garbage Collection
localeTitle: Recolección de basura
---
# Recolección de basura en Java

En lenguajes como C / C ++, es deber del programador crear y destruir objetos. Pero si el programador no cumple con su deber, es posible que no haya suficiente memoria disponible para la creación de un nuevo objeto y que el programa pueda terminar causando **OutOfMemoryErrors** .

Java libera al programador de la tarea de administración de memoria y reclama la memoria ocupada por los objetos que ya no están en uso. La recolección de basura en java se lleva a cabo mediante un subproceso de demonio llamado **Recolector de basura** . **JVM (Java Virtual Machine) lo** invoca cuando hay falta de memoria (montón) para objetos nuevos.

## Cuando un objeto se convierte en elegible para la recolección de basura?

*   Un objeto se convierte en elegible para la recolección de basura si no es accesible desde cualquier hilo en vivo o cualquier referencia estática.
*   Un objeto se vuelve elegible para la recolección de basura si todas las referencias son nulas.

```java
         Integer n = new Integer(); 
         n = null;                                //the Integer object is no longer accessible 
```

*   Las dependencias cíclicas no se cuentan como referencia, por lo que si el Objeto X tiene la referencia del Objeto Y y el Objeto Y tiene la referencia del Objeto X y no tienen ninguna otra referencia activa, entonces los Objetos X e Y serán elegibles para la recolección de basura.

## ¿Cómo hacer manualmente un objeto elegible para la recolección de basura?

*   A pesar de que no es tarea del programador destruir los objetos, es una buena práctica de programación hacer que un objeto sea inalcanzable (por lo tanto, sea elegible para GC) después de ser utilizado.
*   En general, existen cuatro formas diferentes de hacer que un objeto sea elegible para la recolección de basura.

1.  Anulando la variable de referencia
2.  Reasignando la variable de referencia
3.  El objeto se crea dentro de un bloque y la referencia queda fuera del alcance una vez que el control sale de ese bloque.
4.  [Isla de aislamiento](http://www.geeksforgeeks.org/island-of-isolation-in-java/)

## Formas de solicitar JVM para ejecutar Garbage Collector 1

*   Aunque hace que un objeto sea elegible para la recolección de basura, depende de la única discreción de JVM para ejecutar el recolector de basura para destruirlo.
*   También podemos solicitar JVM para ejecutar Garbage Collector. Hay dos maneras de hacerlo :

1.  Uso del método _**System.gc ()**_ : la clase del sistema contiene el método estático gc () para solicitar a JVM que ejecute Garbage Collector.
2.  Uso del método _**Runtime.getRuntime () .gc ()**_ : la clase Runtime permite que la aplicación interactúe con la JVM en la que se ejecuta la aplicación. Por lo tanto, al utilizar su método gc (), podemos solicitar a JVM que ejecute el recolector de basura.

```java
         // Java program to request 
    // JVM to run Garbage Collector 
 public class Test 
 { 
    public static void main(String[] args) throws InterruptedException 
    { 
        Test test1 = new Test(); 
        Test test2 = new Test(); 
 
        // Nullifying the reference variable 
        test1 = null; 
 
        // requesting JVM for running Garbage Collector 
        System.gc(); 
 
        // Nullifying the reference variable 
        test2 = null; 
 
        // requesting JVM for running Garbage Collector 
        Runtime.getRuntime().gc(); 
 
    } 
 
    @Override 
    // finalize method is a method which is called on object once 
    // before garbage collector is destroying it and reclaiming its memory 
    protected void finalize() throws Throwable 
    { 
        System.out.println("Garbage collector is called"); 
        System.out.println("Object garbage collected : " + this); 
    } 
 } 
```

```java
  OUTPUT - 
    Garbage collector called 
    Object garbage collected : Test@46d08f12 
    Garbage collector called 
    Object garbage collected : Test@481779b8 
```

Nota :

1.  No hay garantía de que alguno de los dos métodos anteriores ejecutará Garbage Collector.
2.  La llamada System.gc () es efectivamente equivalente a la llamada: Runtime.getRuntime (). Gc ()

## Finalización de objetos

*   Los objetos tienen recursos asociados con ellos. Es su responsabilidad liberar los recursos.
*   El finalize (), se declara en la clase Object y es llamado por el recolector de basura una vez, justo antes de destruir el objeto. Un objeto puede realizar cualquier última acción utilizando este método jst antes de que el recolector de basura recupere su área.
*   El método finalize () está presente en la clase de objetos con el siguiente prototipo.

```java
    protected void finalize() throws Throwable 
```

## NOTA 1 :

1.  El método finalize () llamado por Garbage Collector no JVM. Aunque Garbage Collector es uno de los módulos de JVM.
2.  El método finalize () de la clase de objeto tiene una implementación vacía, por lo que se recomienda anular el método finalize () para deshacerse de los recursos del sistema o para realizar otra limpieza.
3.  El método finalize () nunca se invoca más de una vez para ningún objeto dado.
4.  Si el método finalize () genera una excepción no detectada, la excepción se ignora y la finalización de ese objeto termina.

### FUENTES

1.  [geeksforgeeks.](http://www.geeksforgeeks.org/garbage-collection-java/) Accedido: octubre 24,2017.