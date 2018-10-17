---
title: Factory
localeTitle: Fábrica
---
A fábrica é um padrão de projeto que visa reduzir as dependências entre as classes que instanciam (criam) objetos e os próprios objetos, criando uma classe "factory" que lida com a criação de classes. Ao fazer isso, permitimos que as subclasses redefinam qual classe instanciar e agrupe a lógica de criação potencialmente complexa em uma única interface.

Os programadores usam padrões de projeto de fábrica porque permite que eles criem instâncias de objetos que implementam uma interface comum, sem necessariamente saber de antemão a classe concreta exata (implementação) sendo usada. Uma situação comum em que isso é útil é quando uma classe pai está contando com suas classes filhas para especificar o tipo de objeto que deve ser instanciado. Também é útil quando a criação de um objeto é complexa, pois permite que o programador agrupe o código em uma única classe e reduza a duplicação.

## Usando o padrão de fábrica em Java

Para usar o padrão de design de fábrica, você primeiro precisa ter uma interface - um objeto com nomes de classe e variável, mas sem definições. Por exemplo, aqui temos uma interface Java para animais.

\`\` \`  
public interface Animal { void talk (); }
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

python bebida da classe (objeto): def **init** (self, nome, preço = Nenhum): self.name = name self.price = price

Classe Chá (Bebida): def **str** (self): return 'Isto é chá: {} em $ {}'. format (self.name, self.price)

class Milk (bebida): def **str** (self): return 'Isto é leite: {} em $ {}'. format (self.name, self.price)

classe DrinkFactory (objeto): @staticmethod def generate ( _tipo de_ bebida _\= Nenhum, \* args, \* _kwargs): se beber_ tipo == 'chá': return Tea (_ args, \* _kwargs) _tipo de_ bebida elif _\== 'leite': retorno Milk (_ args, \*\* kwargs) raise NotImplementedError ("{} bebida não existe.". format (_ tipo de _bebida_ ))

# Testando

_chá_ preto _\= DrinkFactory.generate ('chá', 'Chá preto', preço = 4.39)_ leite _integral_ = DrinkFactory.generate ('leite', 'Leite Integral', preço = 5,49) imprimir ( _chá_ preto _) imprimir (_ leite _integral_ ) \`\` \`