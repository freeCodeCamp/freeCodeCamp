---
title: Classes and Objects
localeTitle: 类和对象
---
# 类和对象

类是我们表示世界中对象类型的方式。对象将是世界上该类的实际_实例_ 。类定义该类的对象的_属性_和_行为_ 。该类定义了对象如何与世界其他地方进行交互。类还允许我们抽象出我们不想向其他人展示的细节！

比如说你有一只叫做Spot的狗。 Spot是Dog（类）对象的一个​​实例。

用于定义类的PHP代码：

```php
// Dog class 
 class dog { 
    // Keep name and age private - we don't want to be able to change these! 
    private $name; 
 
    private $age; 
 
    // Constructor allows us to make an object of this class with given parameters. 
    function __construct($name, $age){ 
        $this->name = $name; 
        $this->age = $age; 
        echo 'Dog named: '.$this->name.' is '.$this->age.' years old.'; 
    } 
 
    // Destructor gets called when the item is deleted. 
    function __destruct(){ 
        echo 'Dog '.$this->name.' has ran off into the sunset'; 
    } 
 
    function getname() { 
        echo $this->name; 
    } 
 
    function getage() { 
        echo $this->age; 
    } 
 
 } 
 
 $mydog = new dog("Spot", "8"); 
 echo $mydog->getname(); 
 echo $mydog->getage(); 
```

上面的代码将回应： 狗命名：现货是8岁。 点 8 狗斑已经跑到夕阳下

我创建了一个对象$ mydog的类狗。它的构造函数被调用，我在类中使用了一些方法，然后调用了析构函数。