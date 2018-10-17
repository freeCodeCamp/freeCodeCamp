---
title: Python Complex Numbers
localeTitle: Números Complexos do Python
---
Números complexos têm uma parte real e uma parte imaginária, cada uma representada por um número de ponto flutuante.

A parte imaginária de um número complexo pode ser criada usando um literal imaginário, isso resulta em um número complexo com uma parte real de `0.0` :

```python
>>> a = 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 3.5j 
 >>> a.real 
 0.0 
 >>> a.imag 
 3.5 
```

Não existe literal para criar um número complexo com partes reais e imaginárias diferentes de zero. Para criar um número complexo de parte real diferente de zero, adicione um literal imaginário a um número de ponto flutuante:

```python
>>> a = 1.1 + 3.5j 
 >>> type(a) 
 <class 'complex'> 
 >>> print(a) 
 (1.1+3.5j) 
 >>> a.real 
 1.1 
 >>> a.imag 
 3.5 
```

Ou use o [construtor complexo](https://docs.python.org/3/library/functions.html#complex) .

```python
class complex([real[, imag]]) 
```

Os argumentos usados ​​para chamar o construtor complexo podem ser do tipo numérico (incluindo `complex` ) para qualquer parâmetro:

```python
>>> complex(1, 1) 
 (1+1j) 
 >>> complex(1j, 1j) 
 (-1+1j) 
 >>> complex(1.1, 3.5) 
 (1.1+3.5j) 
 >>> complex(1.1) 
 (1.1+0j) 
 >>> complex(0, 3.5) 
 3.5j 
```

Uma `string` também pode ser usada como argumento. Nenhum segundo argumento é permitido se uma string for usada como argumento

```python
>>> complex("1.1+3.5j") 
 (1.1+3.5j) 

```