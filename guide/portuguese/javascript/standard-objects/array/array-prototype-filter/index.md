---
title: Array.prototype.filter
localeTitle: Array.prototype.filter
---
## Array.prototype.filter

O método de filtro usa um array como entrada. Leva cada elemento na matriz e aplica uma instrução condicional contra ele. Se esta condição retornar true, o elemento será "empurrado" para a matriz de saída.

Uma vez que cada elemento na matriz de entrada é "filtrado" como tal, gera uma nova matriz contendo cada elemento que retornou verdadeiro.

Neste exemplo abaixo, há uma matriz que possui vários objetos dentro dela. Normalmente, para percorrer esse array, você pode usar um loop for.

Nesse caso, queremos que todos os alunos cujas notas sejam maiores ou iguais a 90.

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

Esse loop funciona, mas é bem demorado. Também pode tornar-se tedioso escrever repetidamente loops para muitos arrays que você precisa percorrer.

Este é um ótimo caso de uso para filtro!

Aqui está o mesmo exemplo usando o filtro:

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

O método de filtro é muito mais rápido de escrever e mais limpo de ler enquanto ainda realiza a mesma coisa. Usando a sintaxe do ES6, podemos até replicar o loop for de 6 linhas com filtro:

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

O filtro é muito útil e é uma excelente opção em loops forçados para filtrar matrizes contra instruções condicionais.

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)