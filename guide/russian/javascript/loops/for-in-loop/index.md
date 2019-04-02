---
title: For...In Loop
localeTitle: Для ... В Loop
---
Оператор `for...in` выполняет итерацию по перечислимым свойствам объекта в произвольном порядке. Для каждого отдельного свойства могут выполняться операторы.
```
for (variable in object) { 
 ... 
 } 
```

| Требуется / Дополнительно | Параметр | Описание | | ------------------- | ----------- | ----------------- -------------------------------------------------- --- | | Требуется | Переменная | Другое имя свойства назначается переменной на каждой итерации. | | Дополнительно | Объект | Объект, перечислимые свойства которого повторяются. |

## Примеры
```
// Initialize object. 
 a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" } 
 
 // Iterate over the properties. 
 var s = "" 
 for (var key in a) { 
    s += key + ": " + a[key]; 
    s += "<br />"; 
    } 
 document.write (s); 
 
 // Output: 
 // a: Athens 
 // b: Belgrade 
 // c: Cairo 
 
 // Initialize the array. 
 var arr = new Array("zero", "one", "two"); 
 
 // Add a few expando properties to the array. 
 arr["orange"] = "fruit"; 
 arr["carrot"] = "vegetable"; 
 
 // Iterate over the properties and elements. 
 var s = ""; 
 for (var key in arr) { 
    s += key + ": " + arr[key]; 
    s += "<br />"; 
 } 
 
 document.write (s); 
 
 // Output: 
 //   0: zero 
 //   1: one 
 //   2: two 
 //   orange: fruit 
 //   carrot: vegetable 
 
 // Efficient way of getting an object's keys using an expression within the for-in loop's conditions 
 var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0; 
 for (myKeys[i++] in myObj); 
 
 document.write(myKeys); 
 
 //Output: 
 //   a 
 //   b 
 //   c 
```

# Ресурсы Ohter:

*   [Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for…in)
*   [Ссылка MSDN](https://msdn.microsoft.com/library/55wb2d34.aspx)