---
title: Array.prototype.filter
localeTitle: Array.prototype.filter
---
## Array.prototype.filter

El método de filtro toma una matriz como entrada. Toma cada elemento de la matriz y aplica una declaración condicional contra él. Si este condicional devuelve verdadero, el elemento se "empuja" a la matriz de salida.

Una vez que cada elemento de la matriz de entrada se "filtra" como tal, genera una nueva matriz que contiene cada elemento que devolvió verdadero.

En este ejemplo a continuación, hay una matriz que tiene varios objetos dentro de ella. Normalmente, para iterar a través de esta matriz, puede usar un bucle for.

En este caso, queremos obtener todos los estudiantes cuyas calificaciones sean mayores o iguales a 90.

```javascript
var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 //Define an array to push student objects to. 
 var studentsGrades = [] 
 for (var i = 0; i < students.length; i++) { 
  //Check if grade is greater than 90 
  if (students[i].grade >= 90) { 
    //Add a student to the studentsGrades array. 
    studentsGrades.push(students[i]) 
  } 
 } 
 
 return studentsGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
```

Este for loop funciona, pero es bastante largo. También puede volverse tedioso escribir para bucles una y otra vez para muchos arreglos que necesita recorrer.

Este es un gran caso de uso para el filtro!

Aquí está el mismo ejemplo usando filtro:

```javascript
var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 
 var studentGrades = students.filter(function (student) { 
  //This tests if student.grade is greater than or equal to 90. It returns the "student" object if this conditional is met. 
  return student.grade >= 90; 
 }); 
 
 return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
```

El método de filtro es mucho más rápido de escribir y más limpio de leer mientras se sigue logrando lo mismo. Usando la sintaxis de ES6 podemos incluso replicar el bucle for de 6 líneas con filtro:

```javascript
var students = [ 
  { name: 'Quincy', grade: 96 }, 
  { name: 'Jason', grade: 84 }, 
  { name: 'Alexis', grade: 100 }, 
  { name: 'Sam', grade: 65 }, 
  { name: 'Katie', grade: 90 } 
 ]; 
 
 var studentGrades = students.filter(student => student.grade >= 90); 
 return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] 
```

El filtro es muy útil y es una excelente opción para los bucles que filtran matrices contra sentencias condicionales.

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)