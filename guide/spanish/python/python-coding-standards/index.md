---
title: Coding standards
localeTitle: Normas de codificación
---
### contorno

*   ¿Por qué codificar estándares?
*   Introducción a PEP 8
*   Comandos

### ¿Por qué codificar estándares?

La comunidad global de python está creciendo rápidamente, y casi todos usan python. Aquí es donde la legibilidad del código y los estándares uniformes son importantes. Cualquiera en el planeta debería poder leer su código y entender lo que hace. Hay muchos aspectos para entender el código de otros, por ejemplo, comentarios sobre lo que hace una función, dividir lógicamente las tareas entre módulos y funciones, buenos nombres de variables, etc.

### Introducción a PEP 8

Nos encanta pegarnos a las convenciones. La comunidad de usuarios de Python ha creado un conjunto de estándares, que ahora se toman como convención. Cualquier código de nivel de industria que escriba se ejecuta a través del verificador PEP 8. Por lo tanto, es una buena práctica comenzar a escribir cadenas de documentación para sus clases y funciones, y nombrar variables en minúsculas con guiones bajos apropiados. Puede que valga la pena echar un vistazo a estos estándares antes de comenzar a codificar.

[Aquí está el enlace exhaustivo.](https://www.python.org/dev/peps/pep-0008/ "Estándares PEP 8")

### Comandos

Así es como verificas si tu código de Python cumple con los estándares.

```shell
:~$ pip install pep8 
 :~$ pep8 --first myCode.py 
```

Esto le dará a todas las líneas que violan los estándares, junto con una breve descripción de las correcciones.