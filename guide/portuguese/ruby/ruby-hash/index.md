---
title: Ruby Hash
localeTitle: Ruby Hash
---
## Ruby Hash

Um hash representa uma coleção de pares distintos de chave e valor. Também é chamado de matrizes associativas. Para criar um hash em Ruby, use chaves e separe cada par de valor-chave com vírgula.

```ruby
my_hash = {:key1 => "value", :key2 => "value2"} 
```

Você pode criar um hash das seguintes maneiras

```ruby
my_hash = Hash.new  # with empty hash 
 my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined 
```

Você pode acessar o valor da chave em um hash com colchetes e referências de chave

```ruby
my_hash[:key1]  # value 
 my_hash[:key2]  # value2 
```

Você pode atribuir uma nova chave e valor para um hash já definido

```ruby
my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"} 
```

Você pode verificar quantos elementos um hash tem com o método `length` :

```ruby
my_hash.length # 2 
```

Você também pode criar inteiros como chave hash, mas a sintaxe é diferente da usual

```ruby
my_hash = {1: "value"} # will raise an exception 
 my_hash = {1 => "value"} # will create hash with corresponding key value pair 

```