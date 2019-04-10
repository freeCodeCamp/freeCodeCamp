---
title: Factory
localeTitle: завод
---
Фабрика представляет собой шаблон проектирования, целью которого является сокращение зависимостей между экземплярами объектов (создания) объектов и самих объектов путем создания класса «фабрики», который обрабатывает создание классов. Делая это, мы разрешаем разрешать подклассам переопределять класс для создания экземпляра и группировать потенциально сложную логику создания в один интерфейс.

Программисты используют шаблоны проектирования на заводе, поскольку они позволяют им создавать экземпляры объектов, которые реализуют общий интерфейс, не зная заранее конкретного конкретного используемого класса (реализации). Общей ситуацией, в которой это полезно, является то, что родительский класс полагается на свои дочерние классы, чтобы указать тип объекта, который он должен создавать. Это также полезно, когда создание объекта является сложным, поскольку оно позволяет программисту группировать код в один класс и уменьшать дублирование.

## Использование шаблона Factory в Java

Чтобы использовать шаблон фабричного проектирования, сначала нужно иметь интерфейс - объект с именами классов и переменных, но не определения. Например, здесь у нас есть интерфейс Java для животных.

\`\` \`  
открытый интерфейс Animal { void talk (); }
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

питон класс Drink (объект): def **init** (self, name, price = None): self.name = name self.price = цена

класс Чай (напиток): def **str** (self): return 'Это чай: {} в $ {}'. формате (self.name, self.price)

класс Молоко (напиток): def **str** (self): return 'Это молоко: {} в $ {}'. формате (self.name, self.price)

класс DrinkFactory (объект): @staticmethod def generate (напиток _type = None, \* args, \* _kwargs): если_ тип _напитка_ == 'tea': return Tea (_ args, \* _kwargs) elif drink _type == 'milk': return Milk (_ args, \*\* kwargs) raise NotImplementedError («{} напиток не существует». формат (_ тип _напитка_ ))

# тестирование

черный _чай = DrinkFactory.generate («чай», «Черный чай», цена = 4.39) цельное_ молоко = DrinkFactory.generate («молоко», «Цельное молоко», цена = 5,49) принт (черный _чай) печать (цельное_ молоко) \`\` \`