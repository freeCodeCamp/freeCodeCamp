---
title: Docstring
localeTitle: Docstring
---
## Docstring

O docstring é uma forma de os desenvolvedores comunicarem o propósito, os parâmetros, os requisitos e o uso de uma função no Python para outros desenvolvedores. Permite a facilidade de manutenção e compreensão do código.

Ao contrário dos comentários do código fonte convencional, o docstring deve descrever o que função faz, não como.

Um exemplo semelhante ao Docstring é o @Javadoc em Java.

O docstring é escrito como um comentário de várias linhas logo após o cabeçalho da declaração em Python. Existem 4 partes diferentes para uma docstring:

1.  Tipo de entrada e tipo de saída
    *   Entrada / saída pode ser `obj, list, bool, int, str, float`
2.  Descrição da função
    *   Descrição breve, mas completa do que sua função faz
3.  Requisitos
    *   Isso é lido por um humano, então não precisa ser código
4.  Casos de teste (normalmente 2-3)

O formato geral está listado abaixo.

## Formato de Docstring

```python
def my_examplefunc(input_type1, input_type2): 
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow! 
  Here is a description of my example function        # Your second line will be the description 
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function 
  REQ: type(input_type2) == str 
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases 
  [2, 3] "Hello World" 
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>> 
  [7, 2] "Another test case"                          # Your second line of the test case is the output 
  >>> my_example_func([5, 6], "Last test case") 
  [5, 6] "Last test case" 
  ''' 
  # Your code goes here, underneath the Docstring 
```

A documentação é melhor entendida com exemplos, portanto, dê uma olhada no exemplo abaixo do programa em que o programa produz True se um número for menor que 5, e False se um número for maior que 5.

## Exemplo 1

```python
def is_less_than_five(some_number): 
  '''(int) -> bool 
  Returns True if the given number is less than 5, and False is the given number is greater than 5. 
  REQ: some_number != 5 
  >>> is_less_than_five(4) 
  True 
  >>> is_less_than_five(6) 
  False 
  >>> is_less_than_five(100000) 
  False 
  ''' 
  # Your code goes here 
```

### Alguns links úteis:

Numpy e Google Docstrings são duas abordagens comumente usadas:

*   Google: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_google.html
*   Numpy: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_numpy.html Além disso, consulte alguns comentários antigos do PEP: https://www.python.org/dev/peps/pep-0257/