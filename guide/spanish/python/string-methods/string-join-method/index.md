---
title: String Join Method
localeTitle: Método de unión de cadenas
---
## Método de unión de cadenas

El `str.join(iterable)` método se utiliza para unir todos los elementos en un `iterable` con una cadena especificada `str` . Si el iterable contiene valores no de cadena, genera una excepción TypeError.

`iterable` : Todos los iterables de cadena. Podría una lista de cadenas, tupla de cadena o incluso una cadena simple.

#### Ejemplos

1) Únete a una lista de cadenas con `":"`

```python
print ":".join(["freeCodeCamp", "is", "fun"]) 
```

Salida

```shell
freeCodeCamp:is:fun 
```

2) Únete a una tupla de cuerdas con `" and "`

```python
print " and ".join(["A", "B", "C"]) 
```

Salida

```shell
A and B and C 
```

3) Inserta un `" "` después de cada carácter en una cadena

```python
print " ".join("freeCodeCamp") 
```

Salida:

```shell
free C ode C amp 
```

4) Uniéndose con una cuerda vacía.

```python
list1 = ['p','r','o','g','r','a','m'] 
 print("".join(list1)) 
```

Salida:

```shell
program 
```

5) Unir con conjuntos.

```python
test =  {'2', '1', '3'} 
 s = ', ' 
 print(s.join(test)) 
```

Salida:

```shell
2, 3, 1 
```

#### Más información:

[Documentación de Python en String Join](https://docs.python.org/2/library/stdtypes.html#str.join)