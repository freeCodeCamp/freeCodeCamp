---
title: Classes and Objects
localeTitle: 类和对象
---
## 类和对象

### Ruby中的对象

让我们快速浏览一下Ruby对象。在现实世界中，物体可以是任何东西，包括汽车，计算机，甚至是人。这些对象中的每一个都具有状态和行为。

考虑到汽车，它的状态可以被描述为它的模型，品牌和颜色。汽车的行为可能是转弯，鸣喇叭或刹车。

Ruby中的对象具有非常相似的特征。 Ruby对象也有状态和行为。在Ruby Objects中，状态存储在实例变量中，行为存储在函数中。

### Ruby中的类

一个类基本上是一个程序模板。此模板使用`instance variables`定义初始`properties` 。同样，还有以函数形式定义的`behaviors` 。

使用类的`initialize`方法创建类的新实例。

以下面的示例代码为例：

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

如您所见，类是使用`class`关键字定义的，而类代码块以`end` keywork `end` 。 `.initialize`函数是构造函数。当我们创建这个对象时，我们使用传递给构造函数的值来定义属性`@make` ， `@model`和`@color` 。

### 创建类的实例

现在，要创建此类的实例，您只需要调用`.new`函数。

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White') 
```

这很棒，但有时您可能需要更改其中一些属性！此示例中的大多数属性都是静态的。尽管如此，想象一下你决定换一个新的油漆工作。你将如何更新`Car`对象的这个实例的状态？

### 修改实例状态

值得庆幸的是，更新对象的状态相当简单。首先，我们需要一个`setter`方法！ Ruby将**getter**和**setter**设置分别定义为`attr_reader`和`attr_accessor` 。对于给定属性的getter和setter设置，您也可以使用`attr_accessor` 。

为了演示这一点，我使用这些新定义的设置修改了以前的Car对象。

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

所以现在我们可以改变状态并读取对象的状态。

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

查看`irb`的上一个输出，您可以看到每个实例变量都是可读的。我们可以写`@color` ，但是当我们尝试写`@make`时，我们最终会导致`NoMethodError`异常。这是因为`@make`仅使用`attr_reader`定义，因此未定义`make=` 。

### 资源

*   [Ruby编程/语法/类](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)