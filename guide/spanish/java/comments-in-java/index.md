---
title: Comments in Java
localeTitle: Comentarios en Java
---
## Comentarios en Java

Los comentarios en java son como las notas post-it de la vida real que se usan para mostrar cierta información, que otros programadores o desarrolladores pueden leer y comprender.

Es una buena práctica agregar comentarios a su código, especialmente cuando trabaja con un equipo o en una empresa. Esto ayuda a los futuros desarrolladores o compañeros de equipo a saber qué sucede más fácilmente cuando miran su código. Los comentarios hacen su código más ordenado y organizado.

Los comentarios de Java no son ejecutados por el compilador y el intérprete.

### Tipos de comentarios de Java

#### 1\. Comentario de una sola línea

Para crear un comentario de una sola línea, simplemente agregue dos `//` barras diagonales antes del texto.

```java
// Así luce una sola línea de comentario
```

#### 2\. Comentario multilínea

Para crear un comentario de línea múltiple, ajuste las líneas entre `/*` línea va aquí `*/`

```java
public class MyFirstJava { 
    public static void main(String[] args) { 
    /* Este fragmento de código en Java 
       imprime "Hola mundo"
       y estas mirando a un comentario de línea múltiple 
    */ 
        System.out.println("Hello World"); 
    } 
 } 
```

#### 3\. Documentación Comentario

La herramienta Javadoc utiliza el comentario de la documentación para crear la documentación del código. Los desarrolladores utilizan el comentario de documentación para documentar el código, como lo que hace una clase o lo que hace un método. Esto lo utiliza una herramienta javadoc que compilará un conjunto preformateado de archivos html que contiene toda la información disponible en el comentario.

```java
/** 
 * Este siguiente programa en Java mostrará un número aleatorio entre 0 - 50 
 * La mayoría de desarrolladores no documentan un programa así de simple 
 * 
 * @author      Quincy Larson 
 * @version     1.0 
 */ 
 
 public class RandomNumbers{ 
    public static void main(String[] args) { 
        int random = (int)(Math.random() * 50 + 1); 
        System.out.println("Hello World"); 
    } 
 } 
```

#### Más información:

*   [Recursos de Java](http://guide.freecodecamp.org/java/resources/)
    
*   [Ejemplo compilado de Javadoc](https://docs.oracle.com/javase/8/docs/api/)
