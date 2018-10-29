---
title: Polymorphism with Abstract and Interface
localeTitle: Polimorfismo com Resumo e Interface
---
## Polimorfismo com Resumo e Interface

_Compartilhe e imponha código com Polimorfismo usando a classe e a interface Abstratas_

Vamos mergulhar mais profundamente na Programação Orientada a Objetos e tentar pensar em termos de Padrões de Projeto para compartilhar e impor nosso código usando Polimorfismo.

### Classe abstrata

Digamos que temos uma classe chamada Man com algumas propriedades ( `name` , `age` , `height` , `fav_drinks` e `fav_sports` ) e métodos ( `giveFirmHandshakes` , `beStubborn` e `notPutToiletPaper` ).

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 } 
```

Precisamos especificar nome, idade e altura para instanciar essa classe conforme exigido pelo construtor.

```php
<?php 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 
 echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height); 
 // => Jack - 26 - 5 Feet 6 Inches 
```

Agora, digamos que queremos adicionar um novo método a essa classe chamada isActive.

Este método verifica a propriedade ativa e retorna a mensagem apropriada, dependendo do valor de ativo com valor padrão de false. Podemos definir isso como verdadeiro para os homens que estão ativos.

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
    public $active = false; 
 
    ..... 
    ..... 
 
    public function isActive() 
    { 
        if ($this->active == true) { 
            return "I am an active man."; 
        } else { 
            return "I am an idle man."; 
        } 
    } 
 } 
 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 $jack->active = true; 
 echo $jack->isActive(); 
 // => I am an active man. 
 
 $jake = new Man('Jake', '30', '6 Feet'); 
 echo "\n" . $jake->isActive(); 
 // => I am an idle man. 
```

E se um homem não estiver APENAS ativo ou ocioso?

E se houver uma escala de 1 a 4 que mede quão ativo um homem é (1 - inativo, 2 - pouco ativo, 3- moderadamente ativo, 4- muito ativo)?

Podemos ter uma declaração if..elseif..else como esta:

```php
<?php 
 
 public function isActive() 
 { 
    if ($this->active == 1) { 
        return "I am an idle man."; 
    } elseif ($this->active == 2) { 
        return "I am a lightly active man."; 
    } elseif ($this->active == 3) { 
        return "I am a moderately active man."; 
    } else { 
        return "I am a very active man."; 
    } 
 } 
```

Agora, vamos dar um passo adiante.

E se a propriedade ativa do Homem não for apenas um inteiro (1, 2, 3, 4, etc)?

E se o valor de ativo for “atlético” ou “preguiçoso”?

Não temos que adicionar mais instruções elseif procurando por uma correspondência com essas strings?

Classes abstratas podem ser usadas para tal cenário.

Com as classes abstratas, você basicamente define a classe como abstrata e os métodos que deseja impor como abstratos sem realmente inserir qualquer código dentro desses métodos.

Em seguida, você cria uma classe filha estendendo a classe abstrata pai e implementa os métodos abstratos nessa classe filha.

Dessa forma, você estará impondo todas as classes filhas para definir sua própria versão de métodos abstratos. Vamos ver como podemos definir nosso método `isActive()` como abstrato.

# 1: defina a classe como abstrata.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 } 
```

# 2: Crie um método abstrato para o método que você deseja impor dentro da classe abstrata.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 abstract public function isActive(); 
 } 
```

# 3: Crie uma classe filha estendendo a classe abstrata.

```php
<?php 
 
 class AthleticMan extends Man 
 { 
 ..... 
 ..... 
 } 
```

# 4: Implemente o método abstrato dentro da classe filha.

```php
<?php 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 5: Instanciar a classe filha (NÃO a classe abstrata).

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Definição completa da classe abstrata e código de implementação:

```php
<?php 
 
 abstract class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    abstract public function isActive(); 
 } 
 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Neste código, você notará que o método abstrato `isActive()` está definido dentro da classe abstrata `Man` e é implementado dentro da classe filha `AthleticMan` .

Agora a classe `Man` não pode ser instanciada diretamente para criar um objeto.

```php
<?php 
 $ted = new Man('Ted', '30', '6 feet'); 
 echo $ted->isActive(); 
 // => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man 
```

Além disso, todas as classes filhas da classe abstrata (classe `Man` ) precisam implementar todos os métodos abstratos. A falta de tal implementação resultará em um erro fatal.

```php
<?php 
 class LazyMan extends Man 
 { 
 
 } 
 
 $robert = new LazyMan('Robert', '40', '5 feet 10 inches'); 
 echo $robert->isActive(); 
 // => Fatal error:  Class LazyMan contains 1 abstract method 
 // => and must therefore be declared abstract or implement 
 // => the remaining methods (Man::isActive) 
```

Usando classes abstratas, você pode impor certos métodos para serem implementados individualmente pelas classes filhas.

### Interface

Existe outro conceito de Programação Orientada a Objetos que está intimamente relacionado a Classes Abstratas chamadas de Interface.

A única diferença entre Abstract Classes e Interfaces é que em Abstract Classes, você pode ter uma mistura de métodos definidos ( `giveFirmHandshakes()` , `isStubborn()` , etc.) e métodos abstratos ( `isActive()` ) dentro da classe pai, enquanto em Interfaces, você só pode definir (não implementar) métodos dentro da classe pai.

Vamos ver como podemos converter a classe abstrata Man acima em uma interface.

# 1: Defina a interface com todos os métodos (use interface em vez de classe).

```php
<?php 
 interface Man 
 { 
    public function __construct($name, $age, $height); 
 
    public function giveFirmHandshakes(); 
 
    public function beStubborn(); 
 
    public function notPutToiletPaper(); 
 
    public function isActive(); 
 } 
```

# 2: Crie uma classe que implemente a interface (use implements em vez de extends). Esta classe deve implementar TODOS os métodos definidos dentro da interface, incluindo o método construtor.

```php
<?php 
 class AthleticMan implements Man 
 { 
    public $name; 
    public $age; 
    public $height; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 3: instanciar a classe de implementação (AthleticMan)

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Com as interfaces, você precisa ter em mente que:

*   Os métodos não podem ser implementados dentro da interface.
    
*   Variáveis ​​(propriedades) não podem ser definidas dentro da interface.
    
*   Todos os métodos definidos dentro da interface precisam ser implementados na classe filho (implementação).
    
*   Todas as variáveis ​​necessárias precisam ser definidas dentro da classe filha.
    
*   Man interface impõe suas classes de implementação para implementar todos os métodos na interface.
    

Então, qual é o uso de interfaces?

Não podemos simplesmente criar uma nova classe AthleticMan e criar todos os métodos em vez de implementar a interface?

É aqui que os _Padrões de Design_ entram em jogo.

Interfaces são usadas quando há uma classe base ( `Man` ) que quer obrigar você a fazer as coisas (construir um objeto, darFirmHandshakes, serStubborn, notPutToiletPaper e verificar se você está ativo), mas não quer dizer exatamente como fazê-lo .

Você pode ir em frente e criar classes de implementação com implementações conforme julgar adequado.

Contanto que todos os métodos sejam implementados, a interface do `Man` não se importa como.

Nós revisamos como e quando usar classes abstratas e interfaces em PHP. Usando esses conceitos OOP para ter classes com diferentes funcionalidades compartilhando a mesma base “blueprint” (classe abstrata ou interface) é chamado Polimorfismo.