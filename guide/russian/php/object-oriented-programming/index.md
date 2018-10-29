---
title: Object Oriented Programming
localeTitle: Объектно-ориентированное программирование
---
## Объектно-ориентированное программирование

Объектно-ориентированное программирование, как следует из названия, касается объектов. Вы в основном пытаетесь создать часть программного обеспечения, аккуратно организованного в объектах. Этот подход делает код масштабируемым с компонентами многократного использования.

### MAN CLASS

Предположим, вы хотите создать программу о мужчинах в целом.

У средних мужчин есть все виды общих вещей, такие как твердые рукопожатия, упрямство, не откладывание рулонов туалетной бумаги, влюбленность в последние гаджеты и т. Д. Их можно охарактеризовать как поведение или методы объекта Man.

У мужчин также есть свои особенности, такие как возраст, высота, любимые виды спорта, любимые напитки и т. Д. Они могут быть описаны как свойства или атрибуты объекта Man.

Имея это в виду, создание класса «Человек» уже не так сложно. Таким образом, программа пойдет так.

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

### ЧЕЛОВЕЧЕСКИЙ ОБЪЕКТ

Теперь, когда у нас есть этот класс _Man_ , мы можем создать любого конкретного человека, создав экземпляр класса, известный как экземпляр класса.

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

Здесь вы можете увидеть, что человек по имени Джек был создан с именем «Джек», высота «6 футов», любимый спортивный «баскетбол и футбол» и любимые напитки «кофе и зеленый чай». Эти атрибуты называются переменными экземпляра.

Тогда у него есть поведение всех мужчин, таких как крепкие рукопожатия, упрямство и не откладывание туалетной бумаги. Все эти поведения называются методами экземпляра.

### CONSTRUCTORS

До сих пор мы создали класс под названием «Человек» и объект, называемый «Джек», создавая экземпляр этого класса. Мы также дали Джек ценности для его атрибутов (имя, рост, любимые виды спорта и напитки) и назвали его поведение общим для всех мужчин (давая твердые рукопожатия, сохраняя упрямство и не помещая туалетные бумаги обратно).

Давайте рассмотрим эту идею еще на один шаг и заставим Джека начать представлять себя всякий раз, когда мы создаем объект Джека, не имея при этом необходимости распечатывать его отдельно:

```php
<?php 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
```

Именно здесь вступают в игру конструкторы. Конструкторы - это в основном специальные методы, вызываемые при создании объекта.

Таким образом, идея состоит в том, чтобы распечатать имя, возраст и высоту Джека, когда мы создаем объект «Джек», создавая экземпляр класса Man. Чтобы это произошло, нам нужно указать имя, возраст и высоту, когда мы создадим объект следующим образом:

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

Этот код сообщает классу Man создать объект с тремя параметрами: «Джек» для имени, 30 для возраста и «6 футов» для высоты.

Теперь, когда мы передали эти параметры при создании экземпляра класса, мы можем легко использовать их для создания метода конструктора.

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

Итак, всякий раз, когда мы создаем экземпляр класса Man, нам нужно поставить 3 параметра, и они будут распечатаны сразу.

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

`Object created` `Our man's name is: Jack` `He is 30 years old and 6 feet tall.`

Полный код с конструктором будет примерно таким:

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

Теперь нам не нужно указывать имя, возраст и рост Джека отдельно и печатать их больше. Всякий раз, когда мы создаем объект Джека, мы просто указываем его свойства как параметры, и они будут автоматически распечатываться с помощью конструктора. Мы также можем поместить его любимые виды спорта и напитки в параметр, если мы хотим

указывая их как параметры при создании объекта и помещая эхо-строки внутри конструктора. Вы можете посетить здесь для получения дополнительной информации о PHP-реализации конструкторов. Путешествие в ООП было медленным, но устойчивым.

### СОХРАНЕНИЕ СЕКРЕТОВ ЧЕЛОВЕКА

Если вы заметили, что все переменные класса (имя, возраст, высота, fav- _спорт и любимые_ напитки) объявляются публичными в классе Man. Прямо сейчас, создав объект Man, у нас есть доступ ко всем его свойствам, просто называя их:

```php
<?php 
 echo $jack->name; 
 echo $jack->height; 
```

Но что, если мы хотим держать в секрете некоторые вещи о человеке? Может быть, он не хочет, чтобы все знали его возраст ... или ... может быть, он хочет, чтобы определенные люди знали его любимые напитки. Мы можем это сделать, изменив видимость этих свойств от общедоступных до защищенных и даже частных.

Публичные свойства доступны в любом месте, как внутри, так и вне класса.

Защищенные свойства доступны внутри класса и внутри дочерних классов (классов).

Частные свойства имеют ту же видимость, что и защита, за исключением того, что они недоступны для дочерних классов.

Мы немного поговорим о наследовании класса. На данный момент давайте попробуем установить для людей, защищенных законом, и private\_drinks, которые являются частями класса Man.

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

Теперь, если вы попытаетесь создать экземпляр класса и назвать возраст и fav\_drinks, вы получите сообщение об ошибке.

```php
<?php 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 echo $jack->age; 
 // Fatal error:  Cannot access protected property Man::$age 
 
 print_r($jack->fav_drinks); 
 // Fatal error:  Cannot access private property Man::$fav_drinks 
```

### УСТАНОВКИ И ПОЛУЧЕНИЯ

Теперь, когда мы защитили возраст Джека и любимые напитки, как мы точно обращаемся к ним и обновляем их?

Чтобы получить защищенные или частные свойства, нам необходимо создать метод getter, подобный этому внутри класса Man (обратите внимание, что это метод класса с видимостью публики).

```php
<?php 
 public function getAge() 
 { 
    return $this->age; 
 } 
```

Теперь мы можем легко получить возраст Джека, вызвав этот метод:

```php
<?php 
 echo $jack->getAge(); 
 
 Jack just realized he turned 31 last week, how do we update his age? Can't we just do this? 
```

PHP
```
Since age property is protected, we cannot access it directly outside the class whether to read it or update it. You will get a fatal error. 
 
 `Fatal error:  Cannot access protected property Man::$age` 
 
 In order to update a protected/private property, we need to create a setter method inside the class with public visibility. 
```

PHP
```
Now we can easily update Jack's age by just calling this setter method: 
```

PHP

echo $ jack-> getAge (); // 31
```
We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don't pass an array to setFavDrinks, it will default to an empty array. 
```

PHP

public function getFavDrinks () { return $ this-> fav\_drinks; }
```
To set Jack's fav_drinks: 
```

PHP

Чтобы получить fav\_drinks Джека:

```php
<?php 
 echo json_encode($jack->getFavDrinks()); 
 // ["coffee","green tea"] 
```

Этот способ реализации и использования методов класса для извлечения и обновления свойств класса называется инкапсулированием в объектно-ориентированном программировании. Мы также можем установить видимость для методов класса так же, как мы это сделали для свойств класса.