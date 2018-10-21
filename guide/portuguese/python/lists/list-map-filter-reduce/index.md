---
title: Map, Reduce, Filter
localeTitle: Mapa, Reduzir, Filtrar
---# Mapear, Reduzir e Filtrar

A maioria dos engenheiros trabalha com listas para processar listas de pedidos / usuários, etc. A análise de listas pode se tornar complexa e desordenada rapidamente se usar vários loops for-loops aninhados. Portanto, esses métodos acima podem agilizar o uso de operações de lista.

## Mapa

Se sua tarefa é aplicar um método específico a cada elemento de uma lista, o mapa será útil. Digamos que você tenha uma lista de valores de graduação e gostaria de converter todos esses valores em uma lista de valores em unidades Fahrenheit.

#### Exemplo de uso

```py
inputs = [10,32,5,40,25] 
 
 def degreesToFahren(deg): 
    fahrenheit = (9.0/5)*deg +32 
    return fahrenheit 
 
 # The most common way of doing this 
 result=[] 
 for i in inputs: 
    iTofahren = degreesToFahren(i) 
    result.append(iTofahren) 
 print(result)   # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

```py
# Using Map 
 result = list(map(degreesToFahren,inputs)) 
 print(result) # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

Como você deve ter notado, usar o mapa é simplesmente uma operação de um liner. Geralmente, se você tiver dados = `[a1,a2,...,an]` e uma função `f()` , então `map(f,data):` retorna um iterador sobre `f(a1),f(a2)...f(an).` use `list()` para converter o objeto iterador em uma lista python.

## Filtro

Função de filtro remove dados em uma lista que você precisa / não precisa, daí o nome. Digamos que você queira filtrar uma lista com base em valores que você não precisa, por exemplo, valores acima de 2.

#### Exemplo de uso

```py
data = [1.2,2.5,5.8,0.4,4.7,9.9] 
 result = list(filter(lambda x:x > 2,data)) 
 print(result) 
```

#### Saída
```
[2.5, 5.8, 4.7, 9.9] 
```

Este também é um simples 1 liner semelhante à função map () acima. Consulte o tutorial sobre funções lambda se você achar que este termo não é familiar.

## Reduzir

Do criador de Python, Guido van Rossum `"Use functools.reduce if you really need it; however, 99% of the time an explicit for loop is more readable"`

O que geralmente faz é aplicar uma função `f()` a elementos de dados em uma lista e usar esse resultado para o próximo valor na lista. Visualmente,

Dados = \[a 1 , a 2 ,…, a n \] função = f (x, y)

reduzir (f, dados): Etapa 1: val 1 = f (a 1 , a 2 ) Etapa 2: val 2 = f (val 1 , a 3 ) Etapa 3: val 3 = f (val 2 , a 4 ) . . . Etapa n-1: val n-1 = f (val n-2 , a n )

Por exemplo, você deseja multiplicar todos os números em uma lista.

#### Exemplo de uso

```py
from functools import reduce 
 
 input = [1,2,3,4,5,6] 
 multiplier = lambda x,y:x*y 
 answer = reduce(multiplier,input) 
 print(answer) 
```

#### Saída
```
720 
```

No entanto, o acima pode ser calculado usando um loop for simples e o uso desses métodos está sujeito à preferência.

#### Mais Informações:

A documentação oficial dos métodos acima pode ser encontrada em http://book.pythontips.com/en/latest/map\_filter.html