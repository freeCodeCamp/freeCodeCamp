---
title: Python Commenting Code
localeTitle: Python Comentando Código
---
Os comentários são usados ​​para anotar, descrever ou explicar o código que é complexo ou difícil de entender. O Python irá intencionalmente ignorar os comentários quando compilar o código de bytes pelo intérprete. [`PEP 8`](https://www.python.org/dev/peps/pep-0008/#comments) tem uma seção que trata dos comentários. Eles também aumentam a legibilidade do código adicionando linguagem fácil e descritiva para melhor compreensão.

Comentários **em** **bloco** e **in** - **line** começam com `#` , seguido por um espaço antes do comentário:

```python
    # This is a block comment. 
    print('Hello world!') # This is an inline commment. 
```

O Python não inclui uma maneira formal de escrever comentários de várias linhas. Cada linha de um comentário abrangendo várias linhas deve começar com `#` e um espaço:

```python
    # This is the first line of a multiline comment. 
    # This is the second line. 
```

Outro tipo de comentário é o **docstring** , documentado no [`PEP 257`](https://www.python.org/dev/peps/pep-0257/) . Docstrings são um tipo específico de comentário que se torna o atributo `__doc__` .

Para que uma string literal seja docstring, ela deve iniciar e terminar com `\"\"\"` e ser a primeira instrução do módulo, função, classe ou definição de método que está documentando:

```python
    class SomeClass(): 
        """Summary line for SomeClass. 
 
        More elaborate descriptions may require using a 
        a multiline docstring. 
        """ 
 
        def method_a(self): 
            """Single line summary of method_a.""" 
            pass 
```

Os literais de string que começam e terminam com `"""` que não são docstrings (não a primeira instrução), podem ser usados ​​para strings de `__doc__` . Eles não se `__doc__` atributos `__doc__` Se eles não forem atribuídos a uma variável, eles não gerarão bytecode. Há alguma discussão sobre usá-los como comentários multilinha encontrados [aqui](http://stackoverflow.com/questions/7696924/multiline-comments-in-python) .