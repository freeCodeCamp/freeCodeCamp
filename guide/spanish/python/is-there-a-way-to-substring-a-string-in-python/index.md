---
title: Is There a Way to Substring a String in Python
localeTitle: ¿Hay una manera de subordinar una cadena en Python
---
## ¿Hay una manera de subordinar una cadena en Python

Python ofrece muchas formas de subscribir una cadena. A menudo se le llama 'rebanar'.

Sigue esta plantilla:

```python
string[start: end: step] 
```

Dónde,

`start` : El índice de inicio de la subcadena. El carácter en este índice se incluye en la subcadena. Si el _inicio_ no está incluido, se supone que es igual a 0.

`end` : el índice de terminación de la subcadena. El carácter en este índice _NO se_ incluye en la subcadena. Si no se incluye el _final_ , o si el valor especificado excede la longitud de la cadena, se asume que es igual a la longitud de la cadena por defecto.

`step` : cada carácter de 'paso' después del carácter actual que se incluirá. El valor predeterminado es 1. Si se omite el valor del _paso_ , se supone que es igual a 1.

#### Modelo

`string[start:end]` : Obtener todos los caracteres de índice de _principio_ a _fin-1_

`string[:end]` : obtiene todos los caracteres desde el principio de la cadena hasta el _final-1_

`string[start:]` : obtiene todos los caracteres desde el _inicio_ hasta el final de la cadena

`string[start:end:step]` : obtenga todos los caracteres desde el _principio_ hasta el _final 1_ descontando cada carácter de _paso_

#### Ejemplos

*   **Consigue los primeros 5 caracteres de una cadena.**

```python
string = "freeCodeCamp" 
 print(string[0:5]) 
```

Salida:

```shell
> freeC 
```

Nota: `print(string[:5])` devuelve el mismo resultado que `print(string[0:5])`

*   **Obtén una subcadena de longitud 4 del 3er carácter de la cadena**

```python
string = "freeCodeCamp" 
 print(string[2:6]) 
```

Salida:

```shell
> eeCo 
```

Tenga en cuenta que el índice inicial o final puede ser un número negativo. Un índice negativo significa que comienza a contar desde el final de la cadena en lugar del principio (es decir, de derecha a izquierda). El índice -1 representa el último carácter de la cadena, -2 representa el segundo al último carácter y así sucesivamente ...

*   **Consigue el último carácter de la cadena.**

```python
string = "freeCodeCamp" 
 print(string[-1]) 
```

Salida:

```shell
> p 
```

*   **Consigue los últimos 5 caracteres de una cadena.**

```python
string = "freeCodeCamp" 
 print(string[-5:]) 
```

Salida:

```shell
> eCamp 
```

*   **Obtenga una subcadena que contiene todos los caracteres excepto los últimos 4 caracteres y el primer carácter**

```python
string = "freeCodeCamp" 
 print(string[1:-4]) 
```

Salida:

```shell
> reeCode 
```

#### Más ejemplos

```py
str = “freeCodeCamp” 
 
 print str[-5:-2] # prints 'eCa' 
 print str[-1:-2] # prints '' (empty string) 
```

*   **Consigue todos los demás caracteres de una cadena**

```python
string = "freeCodeCamp" 
 print(string[::2]) 
```

Salida:

```shell
> feCdCm 

```