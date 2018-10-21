---
title: Ruby Number Methods
localeTitle: Métodos de números Ruby
---
O Ruby fornece uma variedade de métodos incorporados que você pode usar em números. A seguir, uma lista incompleta de métodos de [número inteiro](https://ruby-doc.org/core-2.2.0/Integer.html) e [flutuante](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) .

## [Par](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F) :

Use `.even?` para verificar se um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) é par ou não. Retorna um **booleano** `true` ou `false` .

```Ruby
    15.even? #=> false 
    4.even?  #=> true 
```

## [Estranho](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F)

Use o `.odd?` para verificar se um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) é ímpar ou não. Retorna um **booleano** `true` ou `false` .

```Ruby
    15.odd? #=> true 
    4.odd?  #=> false 
```

## [Ceil](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) :

As rodadas do método `.ceil` [**flutuam**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **até** o número mais próximo. Retorna um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.ceil #=> 9 
    6.7.ceil #=> 7 
```

## [Andar](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor) :

As rodadas do método `.floor` [**flutuam**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) para **baixo** até o número mais próximo. Retorna um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.floor #=> 8 
    6.7.floor #=> 6 
```

## [Próximo](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next) :

Use `.next` para retornar o próximo [**número inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) consecutivo.

```Ruby
    15.next #=> 16 
    2.next  #=> 3 
    -4.next #=> -3 
```

## [Pred](https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred) :

Use `.pred` para retornar o [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) anterior consecutivo.

```Ruby
    15.pred #=> 14 
    2.pred  #=> 1 
    (-4).pred #=> -5 
```

## [Para String](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s) :

O uso de `.to_s` em um número ( [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) , [**flutuante**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) , etc.) retorna uma [string](https://ruby-doc.org/core-2.2.0/String.html) desse número.

```Ruby
    15.to_s  #=> "15" 
    3.4.to_s #=> "3.4" 
```

## [Maior Denominador Comum](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd) :

O método `.gcd` fornece o maior divisor comum (sempre positivo) de dois números. Retorna um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    15.gcd(5) #=> 5 
    3.gcd(-7) #=> 1 
```

## [Rodada](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round) :

Use `.round` para retornar um [**inteiro**](https://ruby-doc.org/core-2.2.0/Integer.html) arredondado ou [**float**](https://ruby-doc.org/core-2.2.0/Float.html) .

```Ruby
    1.round        #=> 1 
    1.round(2)     #=> 1.0 
    15.round(-1)   #=> 20 
```

## [Horários](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times) :

Use `.times` para iterar o bloco dado `int` times.

```Ruby
    5.times do |i| 
      print i, " " 
    end 
    #=> 0 1 2 3 4 

```