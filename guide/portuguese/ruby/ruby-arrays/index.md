---
title: Ruby Arrays
localeTitle: Ruby Arrays
---
## Ruby Arrays

Uma matriz representa uma lista de valores. Os valores individuais são freqüentemente chamados de "elementos" da matriz. Para fazer um array em Ruby, use colchetes e separe os valores com vírgulas:

```ruby
my_array = [1, 2, 3, 4, 5] 
```

Esse primeiro exemplo é uma matriz de números, mas uma matriz Ruby pode conter valores de diferentes tipos, até mesmo outras matrizes:

```ruby
mixed_array = [5, "Hello World", true, [1,2,3]] 
```

Você pode acessar os elementos de uma matriz com colchetes e índices numéricos. Observe que o primeiro elemento está no índice 0, não 1:

```ruby
mixed_array[0] # 5 
 mixed_array[1] # "Hello World" 
 mixed_array[2] # true 
```

Você pode verificar quantos elementos um array tem com o método `length` :

```ruby
mixed_array.length # 3 
 [].length # 0 
```

Você pode verificar o primeiro elemento de uma matriz com o `first` método:

```ruby
mixed_array.first # 5 
```

Você pode verificar o último elemento de uma matriz com o `last` método:

```ruby
mixed_array.last # true 
```

#### Ruby Lambda

Um lambda também é comumente chamado de função anônima. Para criar um lambda em Ruby, você pode usar a seguinte sintaxe:

```ruby
lambda = lambda {} 
```

#### Mais Informações:

[Documentação do array Ruby](https://ruby-doc.org/core-2.4.2/Array.html)