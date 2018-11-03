---
title: Python Iterators
localeTitle: Iteradores Python
---
O Python suporta um conceito de iteração sobre contêineres. Isso é implementado usando dois métodos distintos; eles são usados ​​para permitir que classes definidas pelo usuário suportem a iteração.

[Documentos do Python - Tipos de Iteradores](https://docs.python.org/3/library/stdtypes.html#iterator-types)

Iteração é o processo de repetir programaticamente uma etapa um determinado número de vezes. Um programador pode fazer uso da iteração para executar a mesma operação em cada item de uma coleção de dados, por exemplo, imprimindo todos os itens de uma lista.

*   Objetos podem implementar um `__iter__()` que retorna um objeto iterador para suportar a iteração.
    
*   Objetos iteradores devem implementar:
    
    *   `__iter__()` : retorna o objeto iterador.
        
    *   `__next__()` : retorna o próximo objeto do container.
        
    
    _objeto_ iterador _\= 'abc'. **iter** () print (_ objeto _iterador_ ) print (id ( _objeto_ iterador _)) print (id (_ objeto _iterador_ . **iter** ())) # Retorna o próprio iterador. print ( _objeto_ iterador _. **next** ()) # Retorna o primeiro objeto e avança o iterador. print (_ objeto _iterador_ . **next** ()) # Retorna o segundo objeto e avança o iterador. print ( _objeto_ iterador _. **next** ()) # Retorna o terceiro objeto e avança o iterador. print (_ objeto _iterador_ . **next** ()) # Aumenta a exceção StopIteration.
    

Saída:
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