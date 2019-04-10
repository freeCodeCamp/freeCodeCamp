---
title: Python Iterators
localeTitle: Итераторы на Python
---
Python поддерживает концепцию итерации по контейнерам. Это реализовано с использованием двух различных методов; они используются, чтобы позволить пользовательским классам поддерживать итерацию.

[Документы Python - Типы итераторов](https://docs.python.org/3/library/stdtypes.html#iterator-types)

Итерация - это процесс программного повторения шага определенное количество раз. Программист может использовать итерацию для выполнения одной и той же операции для каждого элемента в коллекции данных, например, для распечатки каждого элемента в списке.

*   Объекты могут реализовать `__iter__()` который возвращает объект итератора для поддержки итерации.
    
*   Объекты Iterator должны реализовывать:
    
    *   `__iter__()` : возвращает объект итератора.
        
    *   `__next__()` : возвращает следующий объект контейнера.
        
    
    итератор _object = 'abc'. **iter** () print (_ объект _итератора_ ) print (id ( _объект_ итератора _)) print (id (iterator_ object. **iter** ())) # Возвращает сам итератор. print (iterator _object. **next** ()) # Возвращает 1-й объект и продвигает итератор. print (iterator_ object. **next** ()) # Возвращает 2-й объект и продвигает итератор. print (iterator _object. **next** ()) # Возвращает 3-й объект и продвигает итератор. print (_ объект _итератора_ **next** ()) # вызывает исключение StopIteration.
    

Выход :
```
<str_iterator object at 0x102e196a0> 
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

```