---
title: Python f-strings
localeTitle: F-strings em Python
---
# F-strings em Python

No Python versão 3.6, um novo método de formatação de strings foi implementado. O novo método é chamado de interpolação de cadeia literal (embora comumente referido como uma string f).

O uso de f-string permite que o programador insira dinamicamente uma variável em uma string de uma maneira limpa e concisa. Além de inserir variáveis ​​em uma string, esse recurso também fornece a capacidade de um programador avaliar expressões, unir o conteúdo da coleção e até invocar funções dentro da string f.

Para realizar esses comportamentos dinâmicos dentro de uma string f, os envolvemos dentro de chaves dentro da string, e prefixamos uma letra minúscula f no início da string (antes da aspas iniciais.

### Exemplos

1.  Inserindo dinamicamente uma variável em uma string no tempo de execução:
    
    ```python
    name = 'Jon Snow' 
     greeting = f'Hello! {name}' 
     print(greeting) 
    
    ```
    
2.  Avalie uma expressão em uma string: `python val1 = 2 val2 = 3 expr = f'The sum of {val1} + {val2} is {val1 + val2}' print(expr)`
    
3.  Chamando uma função e inserindo saída dentro de uma string:
    
    ```python
    def sum(*args): 
        result = 0 
        for arg in args: 
            result += arg 
        return result 
     
     func = f'The sum of 3 + 5 is {sum(3, 5)}' 
     print(func) 
    
    ```
    
4.  Juntando o conteúdo de uma coleção dentro de uma string:
    
    ```python
    fruits = ['Apple', 'Banana', 'Pear'] 
     
     list_str = f'List of fruits: {", ".join(fruits)}' 
     print(list_str) 
    
    ```
    

### Fontes

https://www.python.org/dev/peps/pep-0498/