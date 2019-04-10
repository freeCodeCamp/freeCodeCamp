---
title: String Methods
localeTitle: Métodos de String
---
**TODO: `string` informação básica**

[Documentos em Python - Strings](https://docs.python.org/3/library/stdtypes.html#strings)

**Criação:**

Uma `string` vazia é criada usando um par de aspas ou apóstrofos:

```shell
>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
```

[Documentos em Python - Mais sobre strings](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')` Retorna a posição mais baixa em que a substring é encontrada.
    
*   `str.join(iterable)` todos os elementos em um `iterable` com uma string especificada.
    
*   `str.replace(old, new, max)` é usado para substituir a subseqüência `old` pela string `new` por um total `max` vezes. Este método retorna uma nova cópia da string com a substituição e a `str` original permanece inalterada.
    
*   `string.split(separator, maxsplit)` Retorna uma lista de substrings delimitadas pelo `separator` , um número `maxsplit` opcional de vezes, e se não for especificado, a string será dividida em todas as instâncias do `separator` .
    
*   `string.strip(to_strip)` Retorna uma string com `to_strip` removida do início e do final da string. Se `to_strip` não for especificado, isso `to_strip` todos os caracteres em branco.