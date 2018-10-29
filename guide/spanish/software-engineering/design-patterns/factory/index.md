---
title: Factory
localeTitle: Fábrica
---
La fábrica es un patrón de diseño que tiene como objetivo reducir las dependencias entre las clases que crean instancias (crear) objetos y los objetos mismos, creando una clase "de fábrica" ​​que maneja la creación de clases. Al hacer esto, permitimos que las subclases puedan redefinir qué clase crear una instancia y agrupar la lógica de creación potencialmente compleja en una sola interfaz.

Los programadores usan patrones de diseño de fábrica porque les permite crear instancias de objetos que implementan una interfaz común, sin necesariamente saber de antemano la clase concreta (implementación) exacta que se está utilizando. Una situación común en la que esto es útil es cuando una clase principal se basa en sus clases secundarias para especificar el tipo de objeto que debe crear una instancia. También es útil cuando la creación de un objeto es compleja, ya que le permite al programador agrupar el código en una sola clase y reducir la duplicación.

## Usando el patrón de fábrica en Java

Para utilizar el patrón de diseño de fábrica, primero debe tener una interfaz: un objeto con nombres de clase y variable, pero sin definiciones. Por ejemplo, aquí tenemos una interfaz Java para animales.

\`\` \`  
interfaz pública Animal { charla nula (); }
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

pitón Clase de bebida (objeto): def **init** (auto, nombre, precio = Ninguno): self.name = name self.price = precio

Clase de té (bebida): def **str** (uno mismo): devuelve 'Esto es té: {} en formato $ {}'. (self.name, self.price)

Leche de clase (Bebida): def **str** (uno mismo): devuelva 'Esto es leche: {} en formato $ {}'. (self.name, self.price)

clase DrinkFactory (objeto): método estático def genera ( _tipo de_ bebida _\= Ninguno, \* args, \* _kwargs): Si_ tipo de _bebida_ == 'té': té de vuelta (_ args, \* _kwargs) _tipo de_ bebida elif _\== 'leche': leche de retorno (_ args, \*\* kwargs) aumentar NotImplementedError ("no existe la bebida {}.". formato (_ tipo de _bebida_ ))

# Pruebas

_té_ negro _\= DrinkFactory.generate ('té', 'té negro', precio = 4.39)_ leche _entera_ = DrinkFactory.generate ('milk', 'Whole Milk', price = 5.49) imprimir ( _té_ negro _) impresión (_ leche _entera_ ) \`\` \`