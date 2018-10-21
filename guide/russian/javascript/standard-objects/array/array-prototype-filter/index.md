---
title: Array.prototype.filter
localeTitle: Array.prototype.filter
---
## Array.prototype.filter

Метод фильтра принимает массив как вход. Он принимает каждый элемент в массиве и применяет к нему условное утверждение. Если это условие возвращает true, элемент получает «push» в выходной массив.

Как только каждый элемент входного массива «фильтруется» как таковой, он выводит новый массив, содержащий каждый элемент, который возвращал true.

В этом примере ниже представлен массив, в котором есть несколько объектов. Как правило, для итерации через этот массив вы можете использовать цикл for.

В этом случае мы хотим получить всех учеников, чьи оценки больше или равны 90.

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

Это для цикла работает, но он довольно длинный. Также может потребоваться много времени писать для циклов для многих массивов, которые вам нужно перебирать.

Это отличный вариант для фильтра!

Вот тот же пример с использованием фильтра:

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

Метод фильтра намного быстрее записывается и чистят, чтобы читать, все еще выполняя одно и то же. Используя синтаксис ES6, мы можем даже реплицировать 6-строчный цикл for-loop с фильтром:

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

Фильтр очень полезен и имеет большой выбор для циклов для фильтрации массивов по условным операторам.

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)