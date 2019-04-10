---
title: Ruby Arrays
localeTitle: Matrices de rubíes
---
## Matrices de rubíes

Una matriz representa una lista de valores. Los valores individuales a menudo se llaman "elementos" de la matriz. Para hacer una matriz en Ruby, use corchetes y valores separados con comas:

```ruby
my_array = [1, 2, 3, 4, 5] 
```

El primer ejemplo es una matriz de números, pero una matriz Ruby puede contener valores de diferentes tipos, incluso otras matrices:

```ruby
mixed_array = [5, "Hello World", true, [1,2,3]] 
```

Puede acceder a los elementos de una matriz con corchetes e índices numéricos. Observe que el primer elemento está en el índice 0, no 1:

```ruby
mixed_array[0] # 5 
 mixed_array[1] # "Hello World" 
 mixed_array[2] # true 
```

Puede verificar cuántos elementos tiene una matriz con el método de `length` :

```ruby
mixed_array.length # 3 
 [].length # 0 
```

Puedes verificar el primer elemento de una matriz con el `first` método:

```ruby
mixed_array.first # 5 
```

Puedes verificar el último elemento de una matriz con el `last` método:

```ruby
mixed_array.last # true 
```

#### Ruby lambda

Una lambda también se conoce comúnmente como una función anónima. Para crear un lambda en Ruby, puedes usar la siguiente sintaxis:

```ruby
lambda = lambda {} 
```

#### Más información:

[Ruby array documentación](https://ruby-doc.org/core-2.4.2/Array.html)