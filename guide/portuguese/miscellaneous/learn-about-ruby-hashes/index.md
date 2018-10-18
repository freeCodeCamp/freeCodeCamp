---
title: Learn About Ruby Hashes
localeTitle: Aprenda sobre hashes de Ruby
---
### Noções básicas:

*   Os hashes Ruby são comparáveis ​​a objetos ou dicionários Javascript em linguagens como o Python.
*   Os hashes contêm itens armazenados por `key: value` pares de `key: value` .
*   Os hashes Ruby podem ser criados usando os seguintes métodos:
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   Existem muitos métodos embutidos no Ruby para encontrar informações e atualizar hashes.

## Exemplos:
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

## Referências:

*   [A documentação oficial do Ruby para hashes](http://ruby-doc.org/core-2.2.0/Hash.html) .