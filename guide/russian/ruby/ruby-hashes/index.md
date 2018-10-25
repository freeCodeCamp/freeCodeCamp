---
title: Ruby Hashes
localeTitle: Рубиновые хеши
---
## Рубиновые хеши

Хэш представляет собой набор ключей и значений. Это похоже на то, что обычно называют словарем на других языках. В Ruby хэш похож на [массив](https://raw.githubusercontent.com/freeCodeCamp/guides/master/src/pages/ruby/ruby-arrays/index.md) , но вместо того, чтобы просто хранить значение, он хранит пару ключей, значений.

```ruby
array = ["value"] 
 hash = { "key" => "value" } 
```

Существует несколько способов создания нового хэша:

```ruby
hash1 = {a: 100, b: "200"} 
 hash2 = Hash.new 
 hash3 = Hash.new(0) # with default value set to 0 
```

Затем программист может получить доступ к хеш-значению, используя свой ключ, а не индекс.

```ruby
array[0] # => "value" 
 hash["key"] # => "value" 
```

Таким образом, хэш действует скорее как словарь, где вы можете искать значение по его ключу.

```ruby
dictionary = { "Aardvark" => "a large, nocturnal, burrowing mammal", 
               "Zyzzyva" => "a genus of tropical weevils" } 
 dictionary["Aardvark"] # => "a large, nocturnal, burrowing mammal" 
 dictionary["Zyzzyva"] # => "a genus of tropical weevils" 
```

Вы также можете создать хэш, используя [символы в](#) качестве ключей.

```ruby
hash = { :symbol => "value" } 
 hash[:symbol] # => "value" 
```

Кроме того, если все ваши ключи являются [символами](#) , вы можете записать свой хэш в этом альтернативном формате, но вы получите доступ к нему таким же образом:

```ruby
hash = { symbol: "value" } 
 hash[:symbol] # => "value" 
```

#### Дополнительная информация:

[Ручная хеш-документация](https://ruby-doc.org/core-2.4.2/Hash.html)