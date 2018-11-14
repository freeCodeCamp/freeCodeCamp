---
title: Ruby Hash
localeTitle: Ruby Hash
---
## Ruby Hash

Un hash representa una colección de claves distintas, pares de valores. También se llama matrices asociativas. Para crear un hash en Ruby, use llaves y separe cada par clave-valor con una coma.

```ruby
my_hash = {:key1 => "value", :key2 => "value2"} 
```

Puedes crear un hash de las siguientes maneras

```ruby
my_hash = Hash.new  # with empty hash 
 my_hash = {:key1 => "value", :key2 => "value2"} # with key's and value's defined 
```

Puede acceder al valor de la clave en un hash con corchetes y referencias clave

```ruby
my_hash[:key1]  # value 
 my_hash[:key2]  # value2 
```

Puede asignar una nueva clave y valor para un hash ya definido

```ruby
my_hash[:key3] = "value3" # {:key1=>"value", :key2=>"value2", :key3=>"value3"} 
```

Puede verificar cuántos elementos tiene un hash con el método de `length` :

```ruby
my_hash.length # 2 
```

También puede crear enteros como clave hash, pero la sintaxis es diferente de la habitual.

```ruby
my_hash = {1: "value"} # will raise an exception 
 my_hash = {1 => "value"} # will create hash with corresponding key value pair 

```