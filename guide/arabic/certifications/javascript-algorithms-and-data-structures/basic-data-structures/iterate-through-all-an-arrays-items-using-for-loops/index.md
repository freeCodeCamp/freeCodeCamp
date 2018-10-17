---
title: Iterate Through All an Array's Items Using For Loops
localeTitle: يتكرر من خلال جميع عناصر المصفوفة عن طريق استخدام الحلقات
---
## يتكرر من خلال جميع عناصر المصفوفة عن طريق استخدام الحلقات

## تلميح 1

*   ومتداخلة `for` حلقة يجب أن تستخدم للبحث من خلال كل عنصر في المصفوفة.

 ` for (let i = 0; i < arr.length; i++) { 
` 

\`

## تلميح 2

*   يجب بعد ذلك مقارنة كل عنصر من الصفيف بمعلمة `elem` تم تمريرها من خلال الدالة `filteredArray()` .

 `if (arr[i].indexOf(elem)==-1){ 
` 

## تلميح 3

*   إذا لم يتم العثور على تطابق ، فهذا `newArr` أن `newArr` تمت إضافته بالكامل. وظيفة `push()` مفيدة جدًا هنا.

 `newArr.push(arr[i]); 
` 

*   وبمجرد إضافة هذا `newArr` بأكمله إلى `newArr` ، تستمر الحلقة مع العنصر التالي.

## حل:

 `function filteredArray(arr, elem) { 
  let newArr = []; 
  // change code below this line 
 
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code 
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array 
            }; 
          }; 
 
  // change code above this line 
  return newArr; 
 }; 
 // change code here to test different cases: 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 
`