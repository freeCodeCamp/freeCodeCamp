---
title: Lambda Expressions 
localeTitle: Expresiones lambda
---
## Expresiones Lambda

Las expresiones Lambda se introdujeron en Java 8 y marcan la entrada de Java al paradigma de programación funcional. Ayudan a producir codigo legible y conciso simplificando mucho las aplicaciones.

Las funciones Lambda son unidades independientes de código que puedes usar en cualquier lugar donde usarias un objeto, como pasar un parámetro a un método. En este caso, en vez de crear una clase y luego crear el objeto en la clase o usar una clase anonima, escribes la expresión Lambda y la pasas al metodo en vez de una clase objeto.


### Stream API

El Stream Api se usa en java para permitir el encadenamiento de operaciones secuenciales y agregadas. Las operaciones de flujo son de naturaleza intermedia o terminal.

En este pequeño ejemplo, puede ver que una de las utilidades de un flujo es recibir una cierta propiedad de todos los objetos en una lista y devolverla en otra lista mediante operaciones intermedias y de terminal.

Supongamos que tienes una clase de objeto de Estudiante. 


```java
public class Estudiante {
  int studentId;
  String studentName;
  
  public String getStudentName() {
    return this.studentName;
  }
  
  public int getStudentId() {
    return this.studentId;
  }
   // setters
}
```

Ahora suponga que, de algún modo, tiene una lista de todos los estudiantes y desea obtener una lista de todos los nombres de los estudiantes. Tradicionalmente esto puede ser algo como esto.

```java
List<Student> students = /* lista de objetos estudiante */;
List<String> studentNames = new ArrayList<>();

for(Student student: students) {
  studentNames.add(student.getStudentName());
}
```

Si bien esto no es terrible, se puede simplificar. Usando streams esto es posible con una línea de código.


```java
List<Student> students = /* lista de objetos estudiante */;
List<String> studentNames = students.stream().map(String::getStudentName).collect(Collectors.toList());
```

La secuencia de api de los estudiantes recorre la lista de estudiantes y utiliza la función de `map` intermedio para devolver una nueva lista de secuencias utilizando el método que se encuentra a la derecha de `::`.

La operación de `collect` de terminal recopila el flujo como una lista de cadenas.

Este es solo un uso del Streams Api que se usa en Java 8. Hay muchas otras aplicaciones de streams que utilizan las otras operaciones como se ve aquí en la documentación. 

[Transmisiones api doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

#### Más información (En inglés):

- [Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
- [Java 8 Stream API](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html)
- [Java 8 Double Colon Operator](https://www.baeldung.com/java-8-double-colon-operator)

