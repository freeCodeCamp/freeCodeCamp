---
title: Object Oriented Programming
localeTitle: Programação Orientada a Objetos
---
## Programação Orientada a Objetos

Programação Orientada a Objetos, como o nome sugere, é tudo sobre objetos. Você está basicamente tentando criar um software ordenadamente organizado em objetos. Essa abordagem torna o código escalonável com componentes reutilizáveis.

### CLASSE DO HOMEM

Digamos que você queira criar um programa sobre os homens em geral.

Homens comuns têm todos os tipos de coisas em comum, como dar apertos de mão firmes, ser teimosos, não colocar rolos de papel higiênico para trás, se apaixonar pelos mais recentes aparelhos, etc. Estes podem ser descritos como comportamentos ou métodos do objeto Man.

Os homens também têm suas próprias características distintas como idade, altura, esportes favoritos, bebidas favoritas, etc. Estes podem ser descritos como propriedades ou atributos do objeto Man.

Com isso em mente, criar uma classe Man não é mais tão difícil. Então, o programa seria assim.

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
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

### OBJETO DO HOMEM

Agora que temos essa classe _Man_ , podemos criar qualquer homem em particular criando uma instância de classe conhecida como instanciação de classe.

```php
<?php 
 
 // Create a Man object called "Jack" (ie instantiation) 
 $jack = new Man(); 
 
 // Set values to Jack's attributes 
 $jack->name = "Jack"; 
 $jack->age = 30; 
 $jack->height = "6 feet"; 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
```

Aqui você pode ver que um homem chamado Jack foi criado com o nome de "Jack", altura de "6 pés", esportes favoritos "basquete e futebol" e bebidas favoritas "café e chá verde". Esses atributos são chamados de variáveis ​​de instância.

Então ele tem o comportamento de todos os homens como dar apertos de mão firmes, ser teimoso e não devolver o papel higiênico. Todos esses comportamentos são chamados de métodos de instância.

### CONSTRUTORES

Até agora, criamos uma classe chamada "Man" e um objeto chamado "Jack", instanciando essa classe. Nós também damos valores de Jack por seus atributos (nome, altura, esportes favoritos e bebidas) e chamamos seus comportamentos comuns a todos os homens (dando apertos de mão firmes, ficando teimosos e não colocando papel higiênico de volta).

Vamos levar essa idéia um passo adiante e fazer com que Jack comece a se apresentar sempre que criarmos o objeto Jack sem realmente precisar imprimi-los individualmente assim:

```php
<?php 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
```

É aqui que entram os construtores. Construtores são basicamente métodos especiais que são chamados quando um objeto é criado.

Então, a ideia é imprimir o nome, a idade e a altura do Jack quando criamos o objeto “Jack” instanciando a classe Man. Para que isso aconteça, precisamos especificar o nome, a idade e a altura quando criarmos o objeto da seguinte forma:

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

Este código diz à classe Man para criar um objeto com 3 parâmetros: 'Jack' para nome, 30 para idade e '6 feet' para altura.

Agora que passamos esses parâmetros enquanto instanciamos a classe, podemos facilmente usá-los para criar o método construtor.

```php
<?php 
 // Create a constructor method with 3 required parameters: name, age and height 
 public function __construct($name, $age, $height) 
 { 
    // Print out to say "object created" 
    echo "object created\n"; 
 
    // Assign the values of parameters to properties 
    // Also known as instance variables 
    // Using "$this->property_name" 
    $this->name = $name; 
    $this->age = $age; 
    $this->height = $height; 
 
    // Print out Jack's attributes and values 
    echo "Our man's name is: " . $this->name . "\n"; 
    echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
 } 
```

Então, agora, sempre que instanciamos Man class, precisamos colocar 3 parâmetros e eles serão impressos imediatamente.

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

`Object created` `Our man's name is: Jack` `He is 30 years old and 6 feet tall.`

O código completo com o construtor seria algo assim:

```php
<?php 
 
 class Man 
 { 
    // 1. Declare the properties 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    // 2. Create a constructor method with 3 required parameters: name, age and height 
    public function __construct($name, $age, $height) 
    { 
        // 2A. Assign the values of parameters to class properties 
        // Also known as instance variables 
        // Using "$this->property_name" 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
 
        // 2B. Print out Jack's attributes and values 
        echo "Our man's name is: " . $this->name . "\n"; 
        echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
    } 
 
    // 3. Create methods 
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
 
 // 4. Create a Man object called "Jack" 
 // This will print out the echo statements inside "__construct" method inside the class 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 // 5. Set values to Jack's favorite sports and drinks 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's favorite sports and drinks 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men 
 // (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
```

Agora, não precisamos definir o nome, a idade e a altura de Jack separadamente e imprimi-los mais. Sempre que criamos o objeto Jack, apenas especificamos suas propriedades como parâmetros e eles serão impressos automaticamente com a ajuda do construtor. Nós também podemos colocar seus esportes favoritos e bebidas no parâmetro, se quisermos por

especificando-os como parâmetros ao criar o objeto e colocando as linhas de eco dentro do construtor. Você pode visitar aqui para mais informações sobre a implementação do PHP de construtores. Nossa jornada OOP tem sido lenta, mas estável.

### MANTENDO OS SEGREDOS DE UM HOMEM

Se você notou que todas as variáveis ​​de classe (nome, idade, altura, fav _sports e fav_ drinks) são declaradas como públicas dentro da classe Man. Agora, depois de criar um objeto Man, temos acesso a todas as suas propriedades simplesmente chamando-as:

```php
<?php 
 echo $jack->name; 
 echo $jack->height; 
```

Mas e se quisermos manter certas coisas em segredo sobre o homem? Talvez ele não queira que todos saibam sua idade ... ou ... talvez ele só queira que certas pessoas conheçam suas bebidas favoritas. Podemos fazer isso acontecer alterando a visibilidade dessas propriedades de público para protegido e até mesmo privado.

As propriedades públicas são acessíveis em qualquer lugar, dentro e fora da classe.

As propriedades protegidas são acessíveis dentro da classe e dentro da (s) classe (s) infantil (es).

Propriedades privadas têm a mesma visibilidade que protegidas, exceto que elas não podem ser acessadas pela (s) classe (s) infantil (is).

Vamos falar sobre herdar uma classe em um pouco. Por enquanto, vamos tentar definir idade protegida e private\_drinks na classe Man.

```php
<?php 
 
 class Man 
 { 
    // 1. Declare the variables 
    public $name; 
    protected $age; 
    public $height; 
    public $fav_sports; 
    private $fav_drinks; 
    ..... 
    ..... 
```

Agora, se você tentar instanciar a classe e chamar idade e fav\_drinks, você receberá um erro.

```php
<?php 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 echo $jack->age; 
 // Fatal error:  Cannot access protected property Man::$age 
 
 print_r($jack->fav_drinks); 
 // Fatal error:  Cannot access private property Man::$fav_drinks 
```

### SETTERS E GETTERS

Agora que protegemos a idade e as bebidas favoritas de Jack, como as acessamos exatamente e as atualizamos?

Para obter as propriedades protegidas ou privadas, precisamos criar um método getter como este dentro da classe Man (observe que esse é um método de classe com visibilidade de público).

```php
<?php 
 public function getAge() 
 { 
    return $this->age; 
 } 
```

Agora podemos facilmente obter a idade de Jack chamando este método:

```php
<?php 
 echo $jack->getAge(); 
 
 Jack just realized he turned 31 last week, how do we update his age? Can't we just do this? 
```

php
```
Since age property is protected, we cannot access it directly outside the class whether to read it or update it. You will get a fatal error. 
 
 `Fatal error:  Cannot access protected property Man::$age` 
 
 In order to update a protected/private property, we need to create a setter method inside the class with public visibility. 
```

php
```
Now we can easily update Jack's age by just calling this setter method: 
```

php

echo $ jack-> getAge (); // 31
```
We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don't pass an array to setFavDrinks, it will default to an empty array. 
```

php

função pública getFavDrinks () { return $ this-> fav\_drinks; }
```
To set Jack's fav_drinks: 
```

php

Para obter fav\_drinks de Jack:

```php
<?php 
 echo json_encode($jack->getFavDrinks()); 
 // ["coffee","green tea"] 
```

Essa maneira de implementar e usar métodos de classe para recuperar e atualizar propriedades de classe é chamada de encapsulamento em Programação Orientada a Objetos. Também podemos definir visibilidade para métodos de classe da mesma forma que fizemos para propriedades de classe.