---
title: Ruby Arrays
localeTitle: Arrays de Ruby
---
## Arrays de Ruby

Un array (arreglo) representa una lista de valores. Los valores individuales a menudo se llaman "elementos" del array. Para crear un array en Ruby, usa corchetes y valores separados por comas:

```ruby
my_array = [1, 2, 3, 4, 5] 
```

El primer ejemplo es un array de números, pero un array en Ruby puede contener valores de diferentes tipos, incluso otros arrays:

```ruby
mixed_array = [5, "Hello World", true, [1,2,3]] 
```

Puedes acceder a los elementos de un array con corchetes e índices numéricos. Observa que el primer elemento está en el índice 0, no en el 1:

```ruby
mixed_array[0] # 5 
mixed_array[1] # "Hello World" 
mixed_array[2] # true 
```

Puedes verificar cuántos elementos tiene un array con el método `length`:

```ruby
mixed_array.length # 4
[].length # 0 
```

Puedes obtener el primer elemento de un array con el método `first`:

```ruby
mixed_array.first # 5 
```

Puedes obtener el último elemento de un array con el método `last`:

```ruby
mixed_array.last # [1,2,3]
```

#### Más información:

[Documentación de Array de Ruby](https://ruby-doc.org/core-2.4.2/Array.html)
