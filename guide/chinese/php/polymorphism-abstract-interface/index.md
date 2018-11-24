---
title: Polymorphism with Abstract and Interface
localeTitle: 具有抽象和接口的多态性
---
## 具有抽象和接口的多态性

_使用Abstract类和接口与Polymorphism共享和强制执行代码_

我们将深入研究面向对象编程，并尝试用设计模式来思考，以便使用多态来共享和实施我们的代码。

### 抽象类

假设我们有一个名为Man的类，它有一些属性（ `name` ， `age` ， `height` ， `fav_drinks`和`fav_sports` ）和方法（ `giveFirmHandshakes` ， `beStubborn`和`notPutToiletPaper` ）。

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

我们需要指定名称，年龄和高度，以根据构造函数的要求实例化此类。

```php
<?php 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 
 echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height); 
 // => Jack - 26 - 5 Feet 6 Inches 
```

现在，假设我们要为此类添加一个名为isActive的新方法。

此方法检查属性是否处于活动状态，并根据active的值返回相应的消息，默认值为false。对于那些活跃的人，我们可以将其设置为true。

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

如果一个人不活跃或闲置怎么办？

如果有1到4的等级来衡量一个人的活跃程度怎么办？ （1 - 闲置，2 - 轻微活动，3-中等活跃，4-非常活跃）？

我们可以有一个这样的if..elseif..else语句：

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

现在，让我们更进一步。

如果Man的活动属性不仅仅是一个整数（1,2,3,4等）怎么办？

如果活跃的价值是“运动”或“懒惰”怎么办？

我们不是必须添加更多的elseif语句来寻找与这些字符串的匹配吗？

抽象类可用于此类场景。

对于抽象类，您基本上将类定义为抽象，并将要强制实现的方法定义为抽象，而不实际将任何代码放在这些方法中。

然后创建一个扩展父抽象类的子类，并在该子类中实现抽象方法。

这样，您将强制执行所有子类以定义自己的抽象方法版本。让我们看看如何将`isActive()`方法设置为抽象。

# 1：将类定义为抽象。

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 } 
```

# 2：为要在抽象类中强制执行的方法创建抽象方法。

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 abstract public function isActive(); 
 } 
```

# 3：创建扩展抽象类的子类。

```php
<?php 
 
 class AthleticMan extends Man 
 { 
 ..... 
 ..... 
 } 
```

# 4：在子类中实现抽象方法。

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

# 5：实例化子类（不是抽象类）。

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

完整的抽象类定义和实现代码：

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

在这段代码中，您会注意到`isActive()`抽象方法是在`Man`抽象类中定义的，它是在子类`AthleticMan` 。

现在`Man`类无法直接实例化来创建对象。

```php
<?php 
 $ted = new Man('Ted', '30', '6 feet'); 
 echo $ted->isActive(); 
 // => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man 
```

此外，抽象类（ `Man`类）的每个子类都需要实现所有抽象方法。缺乏此类实施将导致致命错误。

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

通过使用抽象类，您可以强制某些方法由子类单独实现。

### 接口

还有另一种面向对象的编程概念，它与名为Interface的抽象类密切相关。

抽象类和接口之间的唯一区别在于，在抽象类中，您可以在父类中混合使用已定义的方法（ `giveFirmHandshakes()` ， `isStubborn()`等）和抽象方法（ `isActive()` ），而在接口中，你只能在父类中定义（而不是实现）方法。

让我们看看如何将Man抽象类转换为接口。

# 1：使用所有方法定义接口（使用接口而不是类）。

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

# 2：创建一个实现接口的类（使用implements而不是extends）。该类必须实现接口内定义的所有方法，包括构造方法。

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

# 3：实例化实施班（AthleticMan）

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

使用接口，您需要记住：

*   这些方法无法在界面内实现。
    
*   无法在界面内定义变量（属性）。
    
*   接口内定义的所有方法都需要在子（实现）类中实现。
    
*   需要在子类中定义所有必需的变量。
    
*   Man接口强制实现其实现类以实现接口中的所有方法。
    

那么，接口的用途是什么？

难道我们不能只创建一个新类AthleticMan并创建所有方法而不是实现接口吗？

这就是_设计模式_发挥作用的地方。

当有一个基类（ `Man` ）想要强制你做某事时（构造一个对象，给定一个握手，beStubborn，notPutToiletPaper并检查你是否活跃）但是不想告诉你具体如何去做，就会使用接口。

您可以继续使用您认为合适的实现来创建实现类。

只要实现了所有方法， `Man`接口就不关心如何了。

我们已经了解了如何以及何时在PHP中使用抽象类和接口。使用这些OOP概念使具有不同功能的类共享相同的基础“蓝图”（抽象类或接口）称为多态。