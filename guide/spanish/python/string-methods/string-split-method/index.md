---
title: String Split Method
localeTitle: Método de división de cadenas
---
La función `split()` se usa comúnmente para la división de cadenas en Python.

#### El método `split()`

Plantilla: `string.split(separator, maxsplit)`

`separator` : la cadena delimitadora. Se divide la cadena en función de este carácter. Por ejemplo. podría ser " ", ":", ";" etc

`maxsplit` : el número de veces que se divide la cadena en función del `separator` . Si no se especifica o -1, la cadena se divide según todas las apariciones del `separator`

Este método devuelve una lista de subcadenas delimitadas por el `separator`

#### Ejemplos

1) Cadena dividida en el espacio: ""

```python
string = "freeCodeCamp is fun." 
 print(string.split(" ")) 
```

Salida:

```python
['freeCodeCamp', 'is', 'fun.'] 
```

2) Dividir cadena en coma: ","

```python
string = "freeCodeCamp,is fun, and informative" 
 print(string.split(",")) 
```

Salida:

```python
['freeCodeCamp', 'is fun', ' and informative'] 
```

3) Sin `separator` especificado

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split()) 
```

Salida:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

Nota: si no se especifica ningún `separator` , la cadena se eliminará de **todos los** espacios en blanco

```python
string = "freeCodeCamp        is     fun and    informative" 
 print(string.split()) 
```

Salida:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

3) Dividir la cadena usando `maxsplit` . Aquí dividimos la cadena en "" dos veces:

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split(" ", 2)) 
```

Salida:

```python
['freeCodeCamp', 'is', 'fun and informative'] 
```

#### Más información

Echa un vistazo a los [documentos de Python en la división de cadenas](https://docs.python.org/2/library/stdtypes.html#str.split)