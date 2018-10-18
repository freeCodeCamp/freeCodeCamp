---
title: Ruby Symbols
localeTitle: Símbolos de rubí
---
## Símbolos de rubí

Un símbolo parece un nombre de variable pero tiene un prefijo con dos puntos. Ejemplos -: action,: line\_items. No tiene que declarar previamente un símbolo y se garantiza que son únicos. No hay necesidad de asignar algún tipo de valor a un símbolo, Ruby se encarga de eso por ti. Ruby también garantiza que no importa dónde aparezca en su programa, un símbolo en particular tendrá el mismo valor.

Alternativamente, puedes considerar que los dos puntos significan "cosa llamada" así que: id es "la cosa llamada identificación". También puede pensar que: id significa el nombre de la variable id, e id simple como el valor de la variable.

Por ejemplo: si Fred es una constante en un contexto, un método en otro y una clase en un tercero, el Símbolo: Fred será el mismo objeto en los tres contextos.

```ruby
module One 
  class Fred 
  end 
  $f1 = :Fred 
 end 
 module Two 
  Fred = 1 
  $f2 = :Fred 
 end 
 def Fred() 
 end 
 $f3 = :Fred 
 $f1.object_id   #=> 2514190 
 $f2.object_id   #=> 2514190 
 $f3.object_id   #=> 2514190 
```

## Trabajando con simbolos

Puedes reconocer un símbolo de Ruby porque será una palabra que comienza con:.

Hasta ahora los hemos visto como la clave en un Hash (Trabajar con Hashes en Ruby):

```ruby
person = {:name => "Philip"} 
```

Entonces, lo primero que podemos hacer es inspeccionar un Símbolo para ver qué clase usa:

```ruby
:hello.class 
 => Symbol 
 
 "hello".class 
 => String 
```

Entonces podemos ver que los Símbolos y las Cadenas son instancias de dos objetos diferentes.

Puede llamar a métodos parecidos a una cadena, como `upcase` , `downcase` y `capitalize` en los símbolos:

```ruby
:hello.upcase 
 => :HELLO 
 
 :HELLO.downcase 
 => :hello 
 
 :hello.capitalize 
 => :Hello 
```

## ¿Por qué usarías un símbolo en lugar de una cadena?

Entonces, si un Símbolo es solo una Cadena inmutable, ¿por qué lo usarías y por qué hay una distinción especial en Ruby?

## Los simbolos son inmutables

En primer lugar, una de las razones principales es, como mencioné anteriormente, que los símbolos son inmutables. Los errores imprevistos pueden aparecer en su aplicación cuando un valor puede cambiar. Si necesita asegurarse de que el valor de un objeto nunca cambie, es mucho más seguro usar un objeto inmutable.

Sin embargo, dicho esto, es posible hacer que una cadena sea inmutable en Ruby llamando al método de `freeze` :

```ruby
name = "Philip" 
 => "Philip" 
 
 name.freeze 
 => "Philip" 
 
 name << "Jim" 
 RuntimeError: can't modify frozen String 
```

Como puede ver en el ejemplo anterior, una vez que llama al método de congelación en una instancia de String, ya no puede modificarlo.

Entonces, ¿por qué más usarías símbolos en lugar de cadenas?

#### Los simbolos son mejores para el rendimiento.

Una segunda razón por la que usaría un Símbolo sobre una Cadena en ciertas situaciones es porque los Símbolos son mucho mejores para el rendimiento.

Por ejemplo:

```ruby
philip".object_id 
 => 70288511587360 
 "philip".object_id 
 => 70288504327720 
 
 :philip.object_id 
 => 539368 
 :philip.object_id 
 => 539368 
```

Cuando crea dos objetos de cadena con el mismo valor, esos dos objetos se tratan como dos objetos diferentes. Al crear un Símbolo, al hacer referencia al Símbolo siempre se utilizará el mismo objeto.

Esto es mucho mejor para el rendimiento porque el mismo objeto String se creará y se destruirá una y otra vez cuando en realidad el mismo objeto se pueda reutilizar cada vez.

#### Métodos de clase pública

all\_symbols => matriz, haga clic para alternar la fuente Devuelve una matriz de todos los símbolos actualmente en la tabla de símbolos de Ruby.

```ruby
Symbol.all_symbols.size    #=> 903 
 Symbol.all_symbols[1,20]   #=> [:floor, :ARGV, :Binding, :symlink, 
                                :chown, :EOFError, :$;, :String, 
                                :LOCK_SH, :"setuid?", :$<, 
                                :default_proc, :compact, :extend, 
                                :Tms, :getwd, :$=, :ThreadGroup, 
                                :wait2, :$>] 
```

#### Más información:

[Ruby Symbols Documentation](http://ruby-doc.org/core-2.5.1/Symbol.html)