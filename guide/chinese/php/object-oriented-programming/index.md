---
title: Object Oriented Programming
localeTitle: 面向对象编程
---
## 面向对象编程

顾名思义，面向对象编程是关于对象的。您基本上是在尝试创建一个整齐地组织在对象中的软件。这种方法使代码可以使用可重用的组件进行扩展。

### MAN CLASS

假设您想创建一个关于男性的程序。

普通男人有各种各样的共同点，比如给予坚定的握手，顽固，不要把卫生纸卷回来，爱上最新的小玩意儿等等。这些可以被描述为Man对象的行为或方法。

男性也有自己独特的特征，如年龄，身高，喜欢的运动，喜欢的饮料等。这些可以被描述为Man对象的属性或属性。

考虑到这些，创建一个Man类不再那么困难了。所以，该计划将是这样的。

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

### 男人对象

现在我们有了这个_Man_类，我们可以通过创建一个称为类实例化的类的实例来创建任何特定的人。

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

在这里你可以看到一个名叫杰克的男人被创造了名为“杰克”，身高“6英尺”，最喜欢的体育“篮球和足球”和最喜欢的饮料“咖啡和绿茶”。这些属性称为实例变量。

然后，他有所有男人的行为，如坚定的握手，顽固，不回放卫生纸。所有这些行为都称为实例方法。

### CONSTRUCTORS

到目前为止，我们通过实例化该类创建了一个名为“Man”的类和一个名为“Jack”的对象。我们还给杰克提供了他的属性（姓名，身高，最喜欢的运动和饮料）的价值观，并称他的行为对所有男人来说都是共同的（给予坚定的握手，保持顽固，不要把卫生纸放回去）。

让我们更进一步，让Jack在我们创建Jack对象时开始自我介绍，而不必像以下那样单独打印出来：

```php
<?php 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
```

这是构造者发挥作用的地方。构造函数基本上是在创建对象时调用的特殊方法。

因此，我们的想法是在我们通过实例化Man类创建“Jack”对象时打印出Jack的名字，年龄和身高。为了实现这一点，我们需要在创建对象时指定名称，年龄和高度，如下所示：

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

此代码告诉Man类创建一个具有3个参数的对象：名称为“Jack”，年龄为30，高度为“6英尺”。

现在我们在实例化类时已经传递了这些参数，我们可以很容易地使用它们来构造构造函数方法。

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

所以，现在每当我们实例化Man类时，我们需要输入3个参数，它们将立即打印出来。

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

`Object created` `Our man's name is: Jack` `He is 30 years old and 6 feet tall.`

使用构造函数的完整代码将是这样的：

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

现在，我们不必单独设置杰克的名字，年龄和身高，再打印出来。每当我们创建Jack对象时，我们只需将其属性指定为参数，它们将在构造函数的帮助下自动打印。如果我们想要的话，我们也可以把他最喜欢的运动和饮料放在参数中

在创建对象时将它们指定为参数 将回显线放在构造函数中。 您可以访问此处以获取有关构造函数的PHP实现的更多信息。我们的OOP之旅缓慢但稳定。

### 保持男人的秘密

如果你注意到所有类变量（name，age，height，fav _sports和fav_ drink）都在Man类中声明为public。现在，在创建一个Man对象之后，我们只需调用它们即可访问所有属性：

```php
<?php 
 echo $jack->name; 
 echo $jack->height; 
```

但是，如果我们想让某些事情对这个男人保密呢？也许他不希望每个人都知道他的年龄......或者......也许他只想让某些人知道他最喜欢的饮料。我们可以通过将这些属性的可见性从公共更改为受保护甚至私有来实现。

公共属性可以在课堂内外的任何地方访问。

受保护的属性可在类内部和子类中访问。

私有属性具有与protected相同的可见性，除非子类无法访问它们。

我们将讨论继承一个类的问题。现在，让我们尝试在Man类中设置age protected和favorite\_drinks private。

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

现在，如果您尝试实例化该类并调用age和fav\_drinks，则会出现错误。

```php
<?php 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 echo $jack->age; 
 // Fatal error:  Cannot access protected property Man::$age 
 
 print_r($jack->fav_drinks); 
 // Fatal error:  Cannot access private property Man::$fav_drinks 
```

### SETTERS和GETTERS

现在我们已经保护了杰克的年龄和最喜欢的饮料，我们如何准确地访问它们并更新它们？

要获取受保护的属性或私有属性，我们需要在Man类中创建这样的getter方法（请注意，这是一个具有public可见性的类方法）。

```php
<?php 
 public function getAge() 
 { 
    return $this->age; 
 } 
```

现在，我们可以通过调用此方法轻松获得Jack的年龄：

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

echo $ jack-> getAge（）; // 31
```
We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don't pass an array to setFavDrinks, it will default to an empty array. 
```

PHP

公共函数getFavDrinks（） { return $ this-> fav\_drinks; }
```
To set Jack's fav_drinks: 
```

PHP

要获得Jack的fav\_drinks：

```php
<?php 
 echo json_encode($jack->getFavDrinks()); 
 // ["coffee","green tea"] 
```

这种实现和使用类方法来检索和更新类属性的方法称为面向对象编程中的封装。我们还可以设置类方法的可见性，就像我们为类属性所做的那样。