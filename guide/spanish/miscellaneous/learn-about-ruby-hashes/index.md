---
title: Learn About Ruby Hashes
localeTitle: Aprenda acerca de los rubíes Hashes
---
### Lo esencial:

*   Los hashes de Ruby son comparables a los objetos de Javascript o diccionarios en lenguajes como Python.
*   Los hash contienen elementos que se almacenan por pares `key: value` .
*   Los hashes de Ruby se pueden crear usando los siguientes métodos:
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   Hay muchos métodos integrados en Ruby para buscar información y actualizar hashes.

## Ejemplos:
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

## Referencias:

*   [La documentación oficial de Ruby para los hashes](http://ruby-doc.org/core-2.2.0/Hash.html) .