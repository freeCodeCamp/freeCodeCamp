---
title: Python Commenting Code
localeTitle: Código de comentarios de Python
---
Los comentarios se utilizan para anotar, describir o explicar códigos que son complejos o difíciles de entender. Python ignorará intencionalmente los comentarios cuando compile el bytecode por el intérprete. [`PEP 8`](https://www.python.org/dev/peps/pep-0008/#comments) tiene una sección que trata con los comentarios. También aumentan la legibilidad del código al agregar un lenguaje fácil y descriptivo para una mejor comprensión.

**Los** comentarios **en** **bloque** y en **línea** comienzan con un `#` , seguido de un espacio antes del comentario:

```python
    # This is a block comment. 
    print('Hello world!') # This is an inline commment. 
```

Python no incluye una forma formal de escribir comentarios de varias líneas. Cada línea de un comentario que abarca varias líneas debe comenzar con `#` y un espacio:

```python
    # This is the first line of a multiline comment. 
    # This is the second line. 
```

Otro tipo de comentario es el **docstring** , documentado en [`PEP 257`](https://www.python.org/dev/peps/pep-0257/) . Las cadenas de texto son un tipo específico de comentario que se convierte en el atributo `__doc__` .

Para que una cadena literal sea una cadena de documentación, debe comenzar y terminar con `\"\"\"` y ser la primera declaración del módulo, función, clase o definición de método que está documentando:

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

Los literales de cadena que comienzan y terminan con `"""` que no son cadenas de documentación (no la primera instrucción), se pueden usar para cadenas de `__doc__` . No se convertirán en atributos `__doc__` . Si no están asignados a una variable, no generarán un `__doc__` . Hay una discusión sobre su uso como comentarios de varias líneas que se encuentran [aquí](http://stackoverflow.com/questions/7696924/multiline-comments-in-python) .