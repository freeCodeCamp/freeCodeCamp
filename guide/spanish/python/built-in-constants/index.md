---
title: Python Built in Constants
localeTitle: Python construido en constantes
---
[Constantes](https://docs.python.org/3/library/constants.html)

Tres constantes incorporadas de uso común:

*   `True` : El valor verdadero del tipo _bool_ . Las asignaciones a `True` _generan_ un _SyntaxError_ .
*   `False` : El valor falso del tipo _bool_ . Las asignaciones a `False` _generan_ un _error de sintaxis_ .
*   `None` : El único valor del tipo _NingunoTipo_ . Ninguno se usa con frecuencia para representar la ausencia de un valor, como cuando los argumentos predeterminados no se pasan a una función. Las asignaciones a `None` _generan_ un _error de sintaxis_ .

Otras constantes incorporadas:

*   `NotImplemented` : valor especial que debe ser devuelto por los métodos especiales binarios, como `__eg__()` , `__add__()` , `__rsub__()` , etc.) para indicar que la operación no está implementada con respecto al otro tipo.
*   `Ellipsis` : valor especial que se utiliza principalmente en combinación con la sintaxis de división ampliada para tipos de datos de contenedor definidos por el usuario.
*   `__debug__` : Es cierto si Python no se inició con una opción -o.

Constantes agregadas por el módulo del sitio El módulo del sitio (que se importa automáticamente durante el inicio, excepto si se da la opción de línea de comandos -S) agrega varias constantes al espacio de nombres integrado. Son útiles para el intérprete de intérprete interactivo y no deben utilizarse en programas.

Los objetos que cuando se imprimen, imprimen un mensaje como "Use quit () o Ctrl-D (es decir, EOF) para salir", y cuando se le llama, levante SystemExit con el código de salida especificado:

*   salir (código = Ninguno)
*   salir (código = Ninguno)

Los objetos que cuando se imprimen, imprimen un mensaje como "Escriba la licencia () para ver el texto completo de la licencia" y, cuando se le llame, muestre el texto correspondiente de manera similar a un buscapersonas (una pantalla a la vez):

*   derechos de autor
*   licencia
*   creditos