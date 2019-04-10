---
title: Array.prototype.filter
localeTitle: Array.prototype.filter
---
## Array.prototype.filter

filter方法将数组作为输入。它接受数组中的每个元素，并对它应用条件语句。如果此条件返回true，则元素被“推送”到输出数组。

一旦输入数组中的每个元素都被“过滤”，它就会输出一个包含返回true的每个元素的新数组。

在下面的示例中，有一个数组，其中包含多个对象。通常，要遍历此数组，您可以使用for循环。

在这种情况下，我们希望得到所有成绩大于或等于90的学生。

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

这个for循环有效，但它非常冗长。对于需要迭代的许多数组，一遍又一遍地编写循环也会变得很繁琐。

这是过滤器的一个很好的用例！

以下是使用过滤器的相同示例：

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

编写过滤器的方法要快得多，读取时更清晰，同时仍然可以完成同样的事情。使用ES6语法，我们甚至可以使用过滤器复制6行for循环：

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

过滤器非常有用，是一个很好的选择for循环来过滤数组对条件语句。

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)