---
title: Lambda Expressions 
localeTitle: Expresiones lambda
---
## Expresiones lambda

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/quadratic-equations/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

El Stream Api se usa en java para permitir el encadenamiento de operaciones secuenciales y agregadas. Las operaciones de flujo son de naturaleza intermedia o terminal.

En este pequeño ejemplo, puede ver que una de las utilidades de un flujo es recibir una cierta propiedad de todos los objetos en una lista y devolverla en otra lista mediante operaciones intermedias y de terminal.

Supongamos que tienes una clase de objeto de Estudiante. \`\` java clase publica estudiante int studentId; String studentName;

Public String getStudentName () { devuelve this.studentName; }

public int getStudentId () { devuelve this.studentId; } // setters } \`\`

Ahora suponga que, de algún modo, tiene una lista de todos los estudiantes y desea obtener una lista de todos los nombres de los estudiantes. Tradicionalmente esto puede ser algo como esto.

\`\` java Lista estudiantes = alguna lista de objetos de estudiantes

Lista studentNames = new ArrayList <> (); para (Estudiante estudiante: estudiantes) { studentNames.add (student.getStudentName ()); } \`\` Si bien esto no es terrible, se puede simplificar. Usando streams esto es posible con una línea de código.

\`\` java Lista estudiantes = alguna lista de objetos de estudiantes

Lista studentNames = students.stream (). map (String :: getStudentName) .collect (Collectors.toList ()); \`\`

La secuencia de api de los estudiantes recorre la lista de estudiantes y utiliza la función de mapa intermedio para devolver una nueva lista de secuencias utilizando el método que se encuentra a la derecha de:

La operación de recopilación de terminal recopila el flujo como una lista de cadenas.

Este es solo un uso del Streams Api que se usa en Java 8. Hay muchas otras aplicaciones de streams que utilizan las otras operaciones como se ve aquí en la documentación. [Transmisiones api doc](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)

#### Más información: