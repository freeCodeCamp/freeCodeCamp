---
title: Common Array Methods
localeTitle: Métodos comunes de Array
---
## Métodos comunes de Array

Los Arrays (arreglos) de Ruby forman una base fundamental en la programación en Ruby, y en la mayoría de los lenguajes de hecho. Se utilizan tanto que sería beneficioso conocer e incluso memorizar algunos de los métodos más utilizados para arrays. Si quieres saber más sobre los Arrays de Ruby, tenemos [un artículo sobre ellos](https://guide.freecodecamp.org/ruby/ruby-arrays).

Para los fines de esta guía, nuestro array será el siguiente:

``` ruby
array = [0, 1, 2, 3, 4]
```
#### .length
El método .length calcula el número de elementos en tu array y retorna la cuenta:

``` ruby
array.length
=> 5
```
Este método es similar a los métodos .count y .size.

``` ruby
array.count
=> 5
```
``` ruby
array.size
=> 5
```

#### .first
El método .first accede al primer elemento del array, es decir el elemento en el índice 0:

``` ruby
array.first
=> 0
```

#### .last
El método .last accede al último elemento del array:

``` ruby
array.last
=> 4
```

#### .take
El método .take retorna los primeros n elementos del array:

``` ruby
array.take(3)
=> [0, 1, 2]
```

#### .drop
El método .drop retorna los elementos siguientes después de los primeros n elementos del array:

``` ruby
array.drop(3)
=> [3, 4]
```

#### índice del array
Puedes acceder a un elemento determinado en el array a través de su índice. Si el índice no existe en el array, se retornará nulo:

```ruby
array[2]
=> 2

array[5]
=> nil
```

#### .pop
El método .pop removerá de forma permanente el último elemento del array:

``` ruby
array.pop
=> [0, 1, 2, 3]
```

#### .shift
El método .shift removerá de forma permanente el primer elemento del array y retornará este elemento:

``` ruby
array.shift
=> 0  
array
=> [1, 2, 3, 4]
```

#### .push
El método .push te permitirá agregar un elemento al final del array:

``` ruby
array.push(99)
=> [0, 1, 2, 3, 4, 99]
```

#### .unshift
El método .unshift te permitirá agregar un elemento al principio del array:

```
array = [2, 3]
array.unshift(1)
=> [1, 2, 3]
```

#### .delete
El método .delete remueve un elemento determinado de un array de forma permanente:

``` ruby
array.delete(1)
=> [0, 2, 3, 4]
```

#### .delete_at
El método .delete_at te permite remover de forma permanente un elemento del array para un índice determinado:

``` ruby
array.delete_at(0)
=> [1, 2, 3, 4]
```

#### .reverse
El método .reverse retorna un nuevo array con los mismos elementos del array original, pero con el orden invertido:

``` ruby
array.reverse
=> [4, 3, 2, 1, 0]
array
=> [0, 1, 2, 3, 4]
```

#### .select
El método .select itera sobre un array y retorna un nuevo array que incluye cualquier item que retorne verdadero a la expresión provista:

``` ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |number| number > 4 }
=> [5, 6, 7, 8, 9, 10]
array
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### .include?
El método include? verifica si el argumento dado está incluido en el array:

``` ruby
array = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
array.include?(3)
=> true
```

#### .flatten

El método .flatten se puede usar para tomar un array que contiene arrays anidados y crear uno nuevo de una sola dimensión:

``` ruby
array = [1, 2, [3, 4, 5], [6, 7]]
array.flatten
=> [1, 2, 3, 4, 5, 6, 7]
```

#### .join
El método .join retorna una cadena con todos los elementos del array separados por un parámetro separador. Si el parámetro separador es nulo, el método usa una cadena vacía como separador:

``` ruby
array.join
=> "01234"
array.join("*")
=> "0*1*2*3*4"
```

#### .each
El método .each itera sobre cada elemento del array, permitiéndote ejecutar acciones sobre ellos:

``` ruby
array.each { |element| puts element }
=> 
0
1
2
3
4
```

#### .map
El método .map es igual que el método .collect. Los métodos .map y .collect iteran sobre cada elemento del array, permitiéndote ejecutar acciones sobre ellos. Los métodos .map y .collect se diferencian del método .each en que éstos retornan un array que contiene los elementos transformados:

``` ruby
array.map { |element| element * 2 }
=> [0, 2, 4, 6, 8]
```

#### .uniq
El método .uniq toma un array que contiene elementos duplicados y retorna una copia del array conteniendo solo los elementos únicos. Cualquier elemento duplicado es removido de este array:

``` ruby
array = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8]
array.uniq
=> [1, 2, 3, 4, 5, 6, 7, 8]
```

#### .concat
El método .concat concatena los elementos de un array provisto con los del array original. El método .concat puede tomar múliples arrays como argumento, lo cual concatenará múltiples arrays al array original:

``` ruby
array = [0, 1, 2, 3, 4]
array.concat([5, 6, 7], [8, 9, 10])
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Más información
*   [Documentos de Ruby Array](http://ruby-doc.org/core-2.5.1/Array.html)
