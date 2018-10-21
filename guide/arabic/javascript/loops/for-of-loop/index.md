---
title: For...Of Loop
localeTitle: ل ... من حلقة
---
ينشئ `for...of` statement حلقة مكررة على كائنات متكررة (بما في ذلك Array و Map و Set و Arguments object وهكذا) ، مع استدعاء خط تكرار مخصص مع عبارات ليتم تنفيذها لقيمة كل خاصية مميزة.

 `    for (variable of object) { 
        statement 
    } 
` 

| | الوصف | | ---------- | ------------------------------------- | | متغير | في كل تكرار يتم تعيين قيمة خاصية مختلفة للمتغير. | | كائن الكائن الذي تتكرر خصائصه التي لا تعد ولا تحصى. |

## أمثلة

### مجموعة مصفوفة

 `    let arr = [ "fred", "tom", "bob" ]; 
 
    for (let i of arr) { 
        console.log(i); 
    } 
 
    // Output: 
    // fred 
    // tom 
    // bob 
` 

### خريطة

 `    var m = new Map(); 
    m.set(1, "black"); 
    m.set(2, "red"); 
 
    for (var n of m) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1,black 
    // 2,red 
` 

### جلس

 `    var s = new Set(); 
    s.add(1); 
    s.add("red"); 
 
    for (var n of s) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1 
    // red 
` 

### كائن الحجج

 `    // your browser must support for..of loop 
    // and let-scoped variables in for loops 
 
    function displayArgumentsObject() { 
        for (let n of arguments) { 
            console.log(n); 
        } 
    } 
 
 
    displayArgumentsObject(1, 'red'); 
 
    // Output: 
    // 1 
    // red 
` 

# موارد آخرى:

*   [وصلة MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for…of)
*   [رابط MSDN](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
*   [argumentsiterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)