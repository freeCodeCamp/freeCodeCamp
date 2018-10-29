---
title: String Join Method
localeTitle: Método de Junção de Cadeia
---
## Método de Junção de Cadeia

O `str.join(iterable)` é usado para unir todos os elementos em um `iterable` com uma cadeia especificada `str` . Se o iterável contiver quaisquer valores não-string, ele gerará uma exceção TypeError.

`iterable` : todos os iteráveis ​​de string. Poderia uma lista de strings, tuple de string ou até mesmo uma string simples.

#### Exemplos

1) Junte-se a is it de strings com `":"`

```python
print ":".join(["freeCodeCamp", "is", "fun"]) 
```

Saída

```shell
freeCodeCamp:is:fun 
```

2) Junte-se a uma tupla de strings com `" and "`

```python
print " and ".join(["A", "B", "C"]) 
```

Saída

```shell
A and B and C 
```

3) Insira um `" "` após cada caractere em uma string

```python
print " ".join("freeCodeCamp") 
```

Saída:

```shell
free C ode C amp 
```

4) Entrando com uma string vazia.

```python
list1 = ['p','r','o','g','r','a','m'] 
 print("".join(list1)) 
```

Saída:

```shell
program 
```

5) juntando-se com conjuntos.

```python
test =  {'2', '1', '3'} 
 s = ', ' 
 print(s.join(test)) 
```

Saída:

```shell
2, 3, 1 
```

#### Mais Informações:

[Documentação Python sobre junção de strings](https://docs.python.org/2/library/stdtypes.html#str.join)