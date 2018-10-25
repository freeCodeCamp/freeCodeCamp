---
title: Learn About Ruby Hashes
localeTitle: Узнайте о Ruby хэшах
---
### Основы:

*   Рубиновые хэши сопоставимы с объектами Javascript или словарями на таких языках, как Python.
*   Хэши содержат элементы, которые хранятся парами `key: value` .
*   Рубиновые хеши могут быть созданы с использованием следующих методов:
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   Существует много методов, встроенных в Ruby для поиска информации и хэшей обновлений.

## Примеры:
```
my_hash = {'name' => 'Batman', 'age' => 25} 
 # is equivalent to: 
 my_hash = Hash.new 
 my_hash<a href='http://www.randomhacks.net/2007/01/20/13-ways-of-looking-at-a-ruby-symbol/' target='_blank' rel='nofollow'>'name'] = 'Batman' 
 my_hash['age'] = 25 
 # Both of these examples return: 
 {"name"=>"Batman", "age"=>25} 
 
 # here is an alternative way to create the array: 
 {name: 'Batman', age: 25} 
 # this example return: 
 {:name=>"Batman", :age=>25} 
 # learn more about [symbols here</a> 
```

## Рекомендации:

*   [Официальная рубиновая документация для хешей](http://ruby-doc.org/core-2.2.0/Hash.html) .