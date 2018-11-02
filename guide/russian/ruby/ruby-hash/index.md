---
title: Ruby Hash
localeTitle: Руби-Хэш
---
## Руби-Хэш

Хэш представляет собой набор различных пар ключей, значений. Он также называется ассоциативными массивами. Чтобы создать хэш в Ruby, используйте фигурные скобки и разделите каждую пару ключ-значение запятой.

```ruby
my_hash = {:key1 => "value", :key2 => "value2"} 
```

Вы можете создать хэш следующими способами

```ruby
my_hash = Hash.new  # with empty hash 
 my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined 
```

Вы можете получить доступ к значению ключа в хеше с квадратными скобками и ключевыми ссылками

```ruby
my_hash[:key1]  # value 
 my_hash[:key2]  # value2 
```

Вы можете назначить новый ключ и значение для уже определенного хэша

```ruby
my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"} 
```

Вы можете проверить, сколько элементов имеет хэш с методом `length` :

```ruby
my_hash.length # 2 
```

Вы также можете создавать целые числа как хэш-ключ, но синтаксис отличается от обычного

```ruby
my_hash = {1: "value"} # will raise an exception 
 my_hash = {1 => "value"} # will create hash with corresponding key value pair 

```