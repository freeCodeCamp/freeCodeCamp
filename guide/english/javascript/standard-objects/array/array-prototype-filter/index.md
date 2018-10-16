---
title: Array.prototype.filter
---
## Array.prototype.filter

The filter method takes an array as an input. It takes each element in the array and it applies a conditional statement against it. If this conditional returns true, the element gets "pushed" to the output array. 

Once each element in the input array is "filtered" as such, it outputs a new array containing each element that returned true.

In this example below, there is an array that has multiple objects within it. Normally, to iterate through this array, you might use a for loop. 

In this case, we want to get all the students whose grades are greater than or equal to 90.

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

This for loop works, but it is pretty lengthy. It can also become tedious to write for loops over and over again for many arrays that you need to iterate through.

This is a great use case for filter!

Here is the same example using filter:

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
The filter method is much faster to write and cleaner to read while still accomplishing the same thing. Using ES6 syntax we can even replicate the 6-line for-loop with filter:

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
Filter is very useful and a great choice over for loops to filter arrays against conditional statements.

#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter' target='_blank' rel='nofollow'>MDN</a>
