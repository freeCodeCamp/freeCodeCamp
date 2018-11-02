---
title: Create a Stack Class
localeTitle: إنشاء فئة مكدس
---
## إنشاء فئة مكدس

### طريقة:

*   Stack هو بنية بيانات مجردة.
*   يتبع Stack مبدأ LIFO / FILO.

## \- في هذا التحدي ، نحتاج إلى إضافة `.push()` و `.pop()` و `.peek()` و `.isEmpty()` و `.clear()` للفئة.

*   `push()` طريقة دفع القيمة إلى المكدس.
*   أسلوب `pop()` ينبثق القيمة الأولى من المكدس.
*   الأسلوب `peek()` إرجاع القيمة الأولى من المكدس.
*   يتحقق الأسلوب `isEmpty()` إذا كان مكدس ths فارغ.

## \- `.clear()` الأسلوب يزيل جميع العناصر من المكدس.

| DS | الوصول | البحث | إدراج | حذف | | ----- | ------ | ------ | ------ | ------ | | كومة | ن | ن | 1 | 1 |

### حل:

#### الأساسية:

 `function Stack() { 
    var collection = []; 
    this.print = function() { 
        console.log(collection); 
    }; 
    this.push = function(val){ 
        return collection.push(val); 
    } 
    this.pop = function(){ 
        return collection.pop(); 
    } 
    this.peek = function(){ 
        return collection[collection.length-1]; 
    } 
    this.isEmpty = function(){ 
        return collection.length === 0; 
    } 
    this.clear = function(){ 
        collection.length = 0; 
    } 
 } 
` 

#### متقدم - بنية ES6 Class:

 `class Stack { 
    constructor() { 
        this.collection = []; 
    } 
    print(){ 
        console.log(this.collection); 
    } 
    push(val){ 
        retiurn this.collection.push(val); 
    } 
    pop(){ 
        return this.collection.pop(); 
    } 
    peek(){ 
        return this.collection[this.collection.length-1]; 
    } 
    isEmpty(){ 
        return this.collection.length === 0; 
    } 
    clear(){ 
        return this.collection.length = 0; 
    } 
 } 
` 

\### مصادر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))