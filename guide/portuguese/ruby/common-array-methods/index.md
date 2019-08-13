---
title: Common Array Methods
localeTitle: Métodos comuns do Array(arranjo)
---
## Métodos comuns do Array(arranjo)

Arrays(arranjos) Ruby formam uma base fundamental na programação em Ruby, e na maioria das linguagens de fato. É usado tanto que seria benéfico conhecer e até memorizar alguns dos métodos mais usados ​​com Arrays(arranjos). Se você quiser saber mais sobre Arrays Ruby, temos [um artigo sobre eles](https://guide.freecodecamp.org/ruby/ruby-arrays) .

Para os propósitos deste guia, nosso array será o seguinte:

``` ruby
array = [0, 1, 2, 3, 4]
```

#### .length 
 O método .length conta o número de elementos no seu array e retorna esse número: 

``` ruby
array.length
=> 5
```
É similar aos métodos .count e .size .

``` ruby
array.count
=> 5
```
``` ruby
array.size
=> 5
```

#### .first
O método .first acessa o primeiro elemento do array, o elemento no índice 0:

``` ruby
array.first
=> 0
```

#### .last
O método .last accessa o último elemento do array:

``` ruby
array.last
=> 4
```

#### .take
O método .take retorna os primeiros n elementos do array:

``` ruby
array.take(3)
=> [0, 1, 2]
```

#### .drop
O método .drop retorna os elementos depois de n elementos do array:

``` ruby
array.drop(3)
=> [3, 4]
```

#### índice do Array
Você pode acessar um elemento específico de um array pelo índice dele. Se o índice não existir no array, então, irá retornar nil

```ruby
array[2]
=> 2

array[5]
=> nil
```

#### .pop
O método .pop irá remover permanentemente o último elemento de um array e retornar este elemento:

``` ruby
array.pop
=> [4]
array
=> [1, 2, 3]
```

#### .shift
O método .shift irá remover permanenemente o primeiro elemento de um array e retornar este elemento:

``` ruby
array.shift
=> 0  
array
=> [1, 2, 3, 4]
```

#### .push
O metodo .push irá permitir que você you adicione um elemento ao final de um array:

``` ruby
array.push(99)
=> [0, 1, 2, 3, 4, 99]
```
#### .unshift
O método .unshift irá permitir que você you adicione um elemento ao começo de um array:

```
array = [2, 3]
array.unshift(1)
=> [1, 2, 3]
```

#### .delete
O método .delete remove permanentemente um elemento específico de um array:

``` ruby
array.delete(1)
=> [0, 2, 3, 4]
```

#### .delete_at
O método .delete_at permite que você remova permanentemente o elemento que se encontra em um índice específico no array :

``` ruby
array.delete_at(0)
=> [1, 2, 3, 4]
```

#### .reverse
O método .reverse retorna em ordem reversa um array, mas não o modifica (o array original permanece como é):

``` ruby
array.reverse
=> [4, 3, 2, 1, 0]
```
#### .select
O método .select itera sobra um array e retorna um novo array, onde estão incluídos todos itens retornaram verdadeiro na condição provida.

``` ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |numero| numero > 4 }
=> [5, 6, 7, 8, 9, 10]
array
=> [5, 6, 7, 8, 9, 10]
```

#### .include?
O método include? serve para ver se o argumento passado está incluído no array:

``` ruby
array = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
array.include?(3)
=> true
```

#### .flatten
O método flatten pode ser usado para pegar um array que contenha outros arrays aninhados e criar um único array uni-dimensional:

``` ruby
array = [1, 2, [3, 4, 5], [6, 7]]
array.flatten
=> [1, 2, 3, 4, 5, 6, 7]
```

#### .join
O método .join retorna uma string com todos elementos do array separados pelo parâmetro separador. Se parâmetro separador for nulo, o método usará uma string vazia como separador entre strings.

``` ruby
array.join
=> "1234"
array.join("*")
=> "1*2*3*4"
```

#### .each
O método .each ira iterar sobre cada elemento do array, permitindo então que você execute ações sobre cada um deles.

``` ruby
array.each do |elemento|
  puts elemento
end
=> 
0
1
2
3
4
```

#### .map
O método .map é o mesmo que o método .collect. O método .map e .collect iteram sobre cada elemento do array, permitindo que você execute ações nele. Os métodos .map e .collect diferem do método .each porque retornam um array contendo os elementos transformados.

``` ruby
array.map { |elemento| elemento * 2 }
  puts elemento
end
=> 
0
2
4
6
8
```

#### .uniq
O método .uniq pega um array contendo elementos duplicados e retorna uma cópia do array contendo somente elementos únicos. Elementos duplicados são removidos do array.

``` ruby
array = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8]
array.uniq
=> [1, 2, 3, 4, 5, 6, 7, 8]
```

#### .concat
O método .concat anexa os elementos de um array para o array original. O método .concat pode receber múltiplos arrays como argumento dos quais irá anexar os elementos ao array original.
``` ruby
array = [0, 1, 2, 3, 4]
array.concat([5, 6, 7], [8, 9, 10])
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Mais Informações
* [Ruby Array docs](http://ruby-doc.org/core-2.5.1/Array.html)
