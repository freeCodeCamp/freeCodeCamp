---
title: Refactor Global Variables Out of Functions
localeTitle: المتغيرات العالمية ريفاكتور من الوظائف
---
## المتغيرات العالمية ريفاكتور من الوظائف

*   إذا كنت تواجه مشكلة في تغيير bookList ، فحاول استخدام نسخة من الصفيف في وظائفك.
    
*   إليك بعض المعلومات الإضافية حول \[كيفية معالجة معاملات الدالة JavaScript\] (https://codeburst.io/javascript-passing-by-value-vs- reference-explain-in-plain-english-8d00fd06a47c).
    

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

## الحل 1

 `function add (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  newArr.push(bookName);  // Add bookName parameter to the end of the new array. 
  return newArr; // Return the new array. 
 } 
 
 function remove (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array. 
    /. 
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array. 
    return newArr; // Return the new array. 
    } 
 } 
` 

## الحل 2

 `function add (list,bookName) { 
  return [...list, bookName]; 
 } 
 
 function remove (list,bookName) { 
  if (list.indexOf(bookName) >= 0) { 
    return list.filter((item) => item !== bookName); 
    } 
 } 
`