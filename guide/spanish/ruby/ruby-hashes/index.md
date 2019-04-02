---
title: Ruby Hashes
localeTitle: Ruby Hashes
---
## Ruby Hashes

Un hash es una colección de claves y valores. Es similar a lo que comúnmente se llama un diccionario en otros idiomas. En Ruby, un hash es similar a una [matriz](https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md) , pero en lugar de simplemente almacenar un valor, almacena una clave, un par de valores.

```ruby
array = ["value"] 
 hash = { "key" => "value" } 
```

Hay un par de maneras diferentes para crear un nuevo hash:

```ruby
hash1 = {a: 100, b: "200"} 
 hash2 = Hash.new 
 hash3 = Hash.new(0) # with default value set to 0 
```

Un programador puede acceder a un valor de hash usando su clave, en lugar del índice.

```ruby
array[0] # => "value" 
 hash["key"] # => "value" 
```

De esta manera, un hash actúa más como un diccionario donde puede buscar un valor por su clave.

```ruby
dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" } 
 dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal" 
 dictionary["Zyzzyva"] # => "a genus of tropical weevils" 
```

También puedes crear un hash usando [símbolos](#) como claves.

```ruby
hash = { :symbol => "value" } 
 hash[:symbol] # => "value" 
```

Además, si todas sus claves son [símbolos](#) , puede escribir su hash en este formato alternativo, pero podría acceder a él de la misma manera:

```ruby
hash = { symbol: "value" } 
 hash[:symbol] # => "value" 
```

#### Más información:

[Rubí hash documentación](https://ruby-doc.org/core-2.4.2/Hash.html)