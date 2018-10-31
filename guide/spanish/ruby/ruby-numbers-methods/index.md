---
title: Ruby Number Methods
localeTitle: Métodos de números de rubíes
---
Ruby proporciona una variedad de métodos incorporados que puedes usar en los números. La siguiente es una lista incompleta de métodos [enteros](https://ruby-doc.org/core-2.2.0/Integer.html) y [flotantes](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) .

## [Incluso](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F) :

Utilizar `.even?` para comprobar si un [**número entero**](https://ruby-doc.org/core-2.2.0/Integer.html) es par. Devuelve un **booleano** `true` o `false` .

```Ruby
    15.even? #=> false 
    4.even?  #=> true 
```

## [Impar](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F)

Utilizar `.odd?` para comprobar si un [**número entero**](https://ruby-doc.org/core-2.2.0/Integer.html) es impar o no. Devuelve un **booleano** `true` o `false` .

```Ruby
    15.odd? #=> true 
    4.odd?  #=> false 
```

## [Ceil](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) :

Las rondas del método `.ceil` [**flotan**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **hasta** el número más cercano. Devuelve un [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.ceil #=> 9 
    6.7.ceil #=> 7 
```

## [Suelo](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor) :

Las rondas del método `.floor` [**flotan**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **hacia abajo** hasta el número más cercano. Devuelve un [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.floor #=> 8 
    6.7.floor #=> 6 
```

## [Siguiente](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next) :

Utilice `.next` para devolver el siguiente [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) consecutivo.

```Ruby
    15.next #=> 16 
    2.next  #=> 3 
    -4.next #=> -3 
```

## [Pred](https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred) :

Utilice `.pred` para devolver el [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) consecutivo anterior.

```Ruby
    15.pred #=> 14 
    2.pred  #=> 1 
    (-4).pred #=> -5 
```

## [A la cuerda](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s) :

El uso de `.to_s` en un número ( [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) , [**flotadores**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) , etc.) devuelve una [cadena](https://ruby-doc.org/core-2.2.0/String.html) de ese número.

```Ruby
    15.to_s  #=> "15" 
    3.4.to_s #=> "3.4" 
```

## [El mayor denominador común](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd) :

El método `.gcd` proporciona el mayor divisor común (siempre positivo) de dos números. Devuelve un [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    15.gcd(5) #=> 5 
    3.gcd(-7) #=> 1 
```

## [Ronda](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round) :

Utilice `.round` para devolver un [**entero**](https://ruby-doc.org/core-2.2.0/Integer.html) redondeado o un [**flotador**](https://ruby-doc.org/core-2.2.0/Float.html) .

```Ruby
    1.round        #=> 1 
    1.round(2)     #=> 1.0 
    15.round(-1)   #=> 20 
```

## [Los tiempos](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times)

Use `.times` para iterar el bloque dado `int` veces.

```Ruby
    5.times do |i| 
      print i, " " 
    end 
    #=> 0 1 2 3 4 

```