---
title: String Replace Method
localeTitle: Método de Substituição de Cadeias
---
## Método de Substituição de Cadeias

O `str.replace(old, new, max)` é usado para substituir a subseqüência `old` pela string `new` por um total `max` vezes. Este método retorna uma nova cópia da string com a substituição. A string original `str` permanece inalterada.

#### Exemplos

1.  Substitua todas as ocorrências de `"is"` por `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS") 
 print(newString) 
```

Saída

```python
ThWAS WAS nice. ThWAS WAS good. 
```

2.  Substitua as duas primeiras ocorrências de `"is"` por `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS", 2) 
 print(newString) 
```

Saída

```python
ThWAS WAS nice. This is good. 
```

#### Mais Informações:

Leia mais sobre a substituição de strings nos [documentos do Python](https://docs.python.org/2/library/string.html#string.replace)