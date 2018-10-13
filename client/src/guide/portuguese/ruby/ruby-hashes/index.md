---
title: Ruby Hashes
localeTitle: Hashes Ruby
---
## Hashes Ruby

Um hash é uma coleção de chaves e valores. É semelhante ao que é comumente chamado de dicionário em outros idiomas. Em Ruby, um hash é semelhante a um [array](https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md) , mas em vez de simplesmente armazenar um valor, ele armazena um par de chave e valor.

```ruby
array = ["value"] 
 hash = { "key" => "value" } 
```

Existem algumas maneiras diferentes de criar um novo hash:

```ruby
hash1 = {a: 100, b: "200"} 
 hash2 = Hash.new 
 hash3 = Hash.new(0) # with default value set to 0 
```

Um programador pode então acessar um valor de hash usando sua chave, em vez do índice.

```ruby
array[0] # => "value" 
 hash["key"] # => "value" 
```

Desta forma, um hash age mais como um dicionário onde você pode procurar um valor por sua chave.

```ruby
dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" } 
 dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal" 
 dictionary["Zyzzyva"] # => "a genus of tropical weevils" 
```

Você também pode criar um hash usando [símbolos](#) como chaves.

```ruby
hash = { :symbol => "value" } 
 hash[:symbol] # => "value" 
```

Além disso, se todas as suas chaves forem [símbolos](#) , você poderá escrever seu hash nesse formato alternativo, mas acessará da mesma maneira:

```ruby
hash = { symbol: "value" } 
 hash[:symbol] # => "value" 
```

#### Mais Informações:

[Documentação de hash Ruby](https://ruby-doc.org/core-2.4.2/Hash.html)