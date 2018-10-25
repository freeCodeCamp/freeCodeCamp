---
title: Ruby Symbols
localeTitle: Ruby Symbols
---
## Ruby Symbols

Um símbolo se parece com um nome de variável, mas é prefixado com dois pontos. Exemplos -: action,: line\_items Você não tem que pré-declarar um símbolo e é garantido que ele é único. Não há necessidade de atribuir algum tipo de valor a um símbolo - Ruby cuida disso para você. O Ruby também garante que, não importa onde ele apareça no seu programa, um símbolo específico terá o mesmo valor.

Alternativamente, você pode considerar os dois pontos para significar "coisa chamada" assim: id é "a coisa chamada id". Você também pode pensar em: id como significando o nome da variável id e plain id como significando o valor da variável.

Por ex: Assim, se Fred é uma constante em um contexto, um método em outro e uma classe em um terceiro, o símbolo: Fred será o mesmo objeto em todos os três contextos.

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

## Trabalhando com Símbolos

Você pode reconhecer um Símbolo Ruby porque será uma palavra que começa com:.

Até agora nós os vimos como a chave em um Hash (Trabalhando com Hashes em Ruby):

```ruby
person = {:name => "Philip"} 
```

Então, a primeira coisa que podemos fazer é inspecionar um símbolo para ver que classe ele usa:

```ruby
:hello.class 
 => Symbol 
 
 "hello".class 
 => String 
```

Assim, podemos ver que Símbolos e Strings são instâncias de dois objetos diferentes.

Você pode chamar métodos String-como como `upcase` , `downcase` e `capitalize` sobre Símbolos:

```ruby
:hello.upcase 
 => :HELLO 
 
 :HELLO.downcase 
 => :hello 
 
 :hello.capitalize 
 => :Hello 
```

## Por que você usaria um símbolo em vez de uma String?

Então, se um símbolo é apenas uma string imutável, por que você o usaria, e por que há uma distinção especial em Ruby?

## Símbolos são imutáveis

Em primeiro lugar, uma das grandes razões é, como mencionei acima, os símbolos são imutáveis. Erros imprevistos podem surgir em seu aplicativo quando um valor pode mudar. Se você precisa garantir que o valor de um objeto nunca mude, é muito mais seguro usar um objeto imutável.

No entanto, com isso dito, é possível tornar uma String imutável em Ruby chamando o método `freeze` :

```ruby
name = "Philip" 
 => "Philip" 
 
 name.freeze 
 => "Philip" 
 
 name << "Jim" 
 RuntimeError: can't modify frozen String 
```

Como você pode ver no exemplo acima, depois de chamar o método freeze em uma instância de String, não será mais possível modificá-lo.

Então, por que mais você usaria Símbolos em vez de Strings?

#### Símbolos são melhores para desempenho

Uma segunda razão pela qual você usaria um símbolo em uma sequência em determinadas situações é porque os símbolos são muito melhores para o desempenho.

Por exemplo:

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

Quando você cria dois objetos String com o mesmo valor, esses dois objetos são tratados como dois objetos diferentes. Quando você cria um símbolo, referenciando o símbolo sempre usará o mesmo objeto.

Isso é muito melhor para o desempenho porque o mesmo objeto String será criado e destruído repetidamente quando, na realidade, o mesmo objeto pode ser reutilizado a cada vez.

#### Métodos de Classe Pública

all\_symbols => array clica para alternar a fonte Retorna uma matriz de todos os símbolos atualmente na tabela de símbolos do Ruby.

```ruby
Symbol.all_symbols.size    #=> 903 
 Symbol.all_symbols[1,20]   #=> [:floor, :ARGV, :Binding, :symlink, 
                                :chown, :EOFError, :$;, :String, 
                                :LOCK_SH, :"setuid?", :$<, 
                                :default_proc, :compact, :extend, 
                                :Tms, :getwd, :$=, :ThreadGroup, 
                                :wait2, :$>] 
```

#### Mais Informações:

[Documentação de Símbolos Ruby](http://ruby-doc.org/core-2.5.1/Symbol.html)