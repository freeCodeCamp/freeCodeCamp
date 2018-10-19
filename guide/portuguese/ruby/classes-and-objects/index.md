---
title: Classes and Objects
localeTitle: Classes e Objetos
---
## Classes e Objetos

### Objetos em Ruby

Vamos examinar rapidamente os objetos Ruby. No mundo real, objetos podem ser qualquer coisa, incluindo um carro, computador ou até mesmo um ser humano. Cada um desses objetos tem um estado e comportamentos.

Considerando um carro, seu estado poderia ser descrito como seu modelo, marca e cor. O comportamento do carro pode ser estar virando, buzinando ou freando.

Um objeto em Ruby tem características muito semelhantes. Objetos Ruby também possuem um estado e comportamento. Em Ruby Objects, o estado é armazenado em variáveis ​​de instância e o comportamento é armazenado em funções.

### Classes em Ruby

Uma classe é basicamente um modelo de programa. Este modelo define as `propriedade` iniciais usando `variávies de instâcia` . Novamente, também existem novamente `comportamentos` definidos na forma de funções.

Uma nova instância de uma classe é criada usando o método `initialize` de uma classe.

Tomemos por exemplo o seguinte código de amostra de uma classe:

```Ruby
class Car 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Como você viu, as classes são definidas usando a palavra-chave `class` e o bloco do código da classe termina com um keywork `end` . A função `.initialize` é o construtor. Quando criamos este objeto, definimos os atributos `@make` , `@model` e `@color` com os valores que passamos para o construtor.

### Criando uma instância de uma classe

Agora, para criar uma instância dessa classe, você só precisa chamar a função `.new` .

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White') 
```

Isso é ótimo, mas às vezes você pode precisar alterar alguns desses atributos! A maioria desses atributos neste exemplo seriam estáticos. Ainda assim, imagine que você decidiu fazer uma nova pintura. Como você faria para atualizar o estado dessa instância do objeto `Car` ?

### Modificando o Estado da Instância

Felizmente, é bastante simples atualizar o estado de um objeto. Primeiro, precisaríamos de um método `setter` ! O Ruby define as configurações **getter** e **setter** como `attr_reader` e `attr_accessor` respectivamente. Para as configurações de getter e setter em um determinado atributo, você também pode usar apenas `attr_accessor` .

Para demonstrar isso, modifiquei o objeto Car anterior com essas configurações recém-definidas.

```Ruby
class Car 
    attr_accessor :color 
    attr_reader :make, :model 
 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Então agora podemos mudar o estado e ler o estado do objeto.

```Ruby
irb(main):023:0> c = Car.new('Mazda', 'Mazda3', 'White') 
 => #<Car:0x00007fd3ca13fdd0 @make="Mazda", @model="Mazda3", @color="White", @speed=nil> 
 irb(main):024:0> c.color 
 => "White" 
 irb(main):025:0> c.make 
 => "Mazda" 
 irb(main):026:0> c.model 
 => "Mazda3" 
 irb(main):027:0> c.color = 'Brutal Blue' 
 => "Brutal Blue" 
 irb(main):028:0> c.make = 'Prius' 
 Traceback (most recent call last): 
        2: from /usr/local/bin/irb:11:in `<main>' 
        1: from (irb):28 
 NoMethodError (undefined method `make=' for #<Car:0x00007fd3ca13fdd0>) 
 Did you mean?  make 
```

Visualizando a saída anterior do `irb` , você pode ver que cada uma das variáveis ​​da instância é legível. Podemos escrever no `@color` , mas acabamos causando uma exceção `NoMethodError` quando tentamos gravar no `@make` . Isto é porque `@make` foi definido apenas usando um `attr_reader` , então `make=` não está definido.

### Recursos

*   [Programação Ruby / Sintaxe / Classes](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)
