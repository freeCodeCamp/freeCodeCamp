---
title: Factory
localeTitle: 厂
---
工厂是一种设计模式，旨在通过创建处理类创建的“工厂”类来减少实例化（创建）对象和对象本身的类之间的依赖关系。通过这样做，我们允许子类重新定义要实例化的类，并将可能复杂的创建逻辑分组到单个接口中。

程序员使用工厂设计模式，因为它允许他们创建实现公共接口的对象实例，而不必事先知道正在使用的具体类（实现）。这是有用的常见情况是父类依赖于它的子类来指定它应该实例化的对象的类型。当对象的创建很复杂时，它也很有用，因为它允许程序员将代码分组到单个类中并减少重复。

## 在Java中使用Factory模式

要使用工厂设计模式，首先需要一个接口 - 一个具有类和变量名称但没有定义的对象。例如，这里我们有动物的Java接口。

\`\`\`  
public interface Animal { void talk（）; }
```
We now need to have "concrete classes" - classes which implement our interface and define the associated functions/ variables. 
```

```
public class Dog implements Animal { 
 
    @Override 
    public void talk() { 
        System.out.println("Woof"); 
    } 
 } 
```

```
public class Cat implements Animal { 
 
    @Override 
    public void talk() { 
        System.out.println("Meow!"); 
    } 
 } 
```

```
We now define our "AnimalFactory" - the class which will handle the creation of these classes. 
```

```
public class AnimalFactory { 
 
    public Animal getAnimal(String animalType) { 
        if (animalType.equals("dog")) { 
            return new Dog(); 
        } else if (animalType.equals("cat")) { 
            return new Cat(); 
        } 
        return null; 
    } 
 } 
```

```
Now when we want to create a new Cat object, instead of saying something like ``` Cat cat = new Cat(); ```, we use the factory class that we have defined. For example: 
```

```
    AnimalFactory animalFactory = new AnimalFactory(); 
 
    Animal cat = animalFactory.getAnimal("cat"); 
    cat.talk(); 
```

```
Here we can see that the class with this instance of "Cat" doesn't really know which animal it has. But this doesn't matter - because all the classes the factory creates are concrete classes of the same interface, the parent class doesn't need to know the exact class it is using. 
 
 
 ## Factory in Python3 
 We can implement a Factory easily with static methods. 
```

蟒蛇 class Drink（对象）： def **init** （self，name，price = None）： self.name = name self.price =价格

茶（饮料）： def **str** （self）： 返回'这是茶：{} in $ {}'。format（self.name，self.price）

class Milk（Drink）： def **str** （self）： 返回'这是牛奶：{} in $ {}'。format（self.name，self.price）

class DrinkFactory（object）： @staticmethod def generate（饮料_类型=无，\* args，\* _kwargs）： 如果饮料_类型=='茶'： 回归茶（_ args，\* _kwargs） elif drink _type =='milk'： 返回牛奶（_ args，\*\* kwargs） raise NotImplementedError（“{}饮料不存在。”。format（饮料_类型））

# 测试

_红茶= DrinkFactory.generate（'茶'，'红茶'，价格= 4.39） 全脂奶_ = DrinkFactory.generate（ '牛奶'， '全脂牛奶'，价格= 5.49） 印刷（ _红茶） 印花（全脂_牛奶） \`\`\`