---
title: Python Iterators
localeTitle: بايثون ايتراتورز
---
تدعم بايثون مفهوم التكرار على الحاويات. يتم تنفيذ ذلك باستخدام طريقتين متميزتين. يتم استخدام هذه للسماح الفئات المعرفة من قبل المستخدم لدعم التكرار.

[Python Docs - Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)

التكرار هو عملية تكرار خطوة برمجية لعدد معين من المرات. يمكن للمبرمج استخدام التكرار لأداء نفس العملية على كل عنصر في مجموعة من البيانات ، على سبيل المثال طباعة كل عنصر في قائمة.

*   يمكن أن تقوم الكائنات بتنفيذ أسلوب `__iter__()` الذي يقوم بإرجاع كائن مكرر لدعم التكرار.
    
*   يجب أن تنفذ كائنات التكرار:
    
    *   `__iter__()` : إرجاع كائن `__iter__()` .
        
    *   `__next__()` : إرجاع الكائن التالي للحاوية.
        
    
    iterator _object = 'abc'. **iter** () طباعة (_ كائن _التكرار_ ) طباعة (id ( _كائن_ التكرار _)) print (id (iterator_ object. **iter** ())) # Returns the iterator itself. print (iterator _object. **next** ()) # Returns 1st object and advances iterator. print (iterator_ object. **next** ()) # Returns 2nd object and advances iterator. طباعة ( _كائن_ التكرار _. **التالي** ()) # إرجاع الكائن الثالث والسلف المكره. print (iterator_ object. **next** ()) # Raises StopIteration Exception.
    

انتاج :

 `<str_iterator object at 0x102e196a0> 
 4343305888 
 4343305888 
 a 
 b 
 c 
 --------------------------------------------------------------------------- 
 StopIteration                             Traceback (most recent call last) 
 <ipython-input-1-d466eea8c1b0> in <module>() 
      6 print(iterator_object.__next__())     # Returns 2nd object and advances iterator. 
      7 print(iterator_object.__next__())     # Returns 3rd object and advances iterator. 
 ----> 8 print(iterator_object.__next__())     # Raises StopIteration Exception. 
 
 StopIteration: 
`