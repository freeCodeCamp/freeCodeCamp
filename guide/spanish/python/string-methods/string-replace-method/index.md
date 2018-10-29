---
title: String Replace Method
localeTitle: Método de reemplazo de cadena
---
## Método de reemplazo de cadena

El `str.replace(old, new, max)` se usa para reemplazar la subcadena `old` con la cadena `new` para un total de `max` veces. Este método devuelve una nueva copia de la cadena con el reemplazo. La cadena original `str` no se ha modificado.

#### Ejemplos

1.  Reemplace todas las apariciones de `"is"` con `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS") 
 print(newString) 
```

Salida

```python
ThWAS WAS nice. ThWAS WAS good. 
```

2.  Reemplace las 2 primeras apariciones de `"is"` con `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS", 2) 
 print(newString) 
```

Salida

```python
ThWAS WAS nice. This is good. 
```

#### Más información:

Lea más sobre el reemplazo de cadenas en los [documentos de Python](https://docs.python.org/2/library/string.html#string.replace)