---
title: Iterate Through All an Array's Items Using For Loops
localeTitle: 使用for循环遍历所有数组的项目
---
## 使用for循环遍历所有数组的项目

## 提示1

*   必须使用嵌套的`for`循环来搜索数组中的每个元素。

```javascript
 for (let i = 0; i < arr.length; i++) { 
```

\`

## 提示2

*   然后必须将数组的每个元素与通过`filteredArray()`函数传递的`elem`参数进行比较。

```javascript
if (arr[i].indexOf(elem)==-1){ 
```

## 提示3

*   如果未找到匹配，则`newArr`会添加整个子阵列。 `push()`函数在这里非常有用。

```javascript
newArr.push(arr[i]); 
```

*   将整个子阵列添加到`newArr` ，循环继续下一个元素。

## 解：

```javascript
function filteredArray(arr, elem) { 
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

```