---
title: Inheritance
localeTitle: Herencia
---
# Herencia

La herencia le permite crear una clase que amplía o modifica una clase existente. Esto se puede usar para hacer clases que se derivan de otras clases.

# Clase base y clase derivada

Estos son los términos utilizados para las clases al referirse a la herencia. La clase derivada hereda la clase base, junto con las variables, funciones o procesos que utiliza la clase base. La clase derivada puede tener sus propias variables y funciones junto con las que hereda de la clase base.

Por ejemplo, una clase Base de 'Animal' puede tener una clase derivada de 'Perro'. La clase Animal contendrá características relacionadas con los animales en general, mientras que la clase Perro contendrá características únicas para perros. Cuando la clase Perro hereda la clase Animal, podrá referirse a ambas características relacionadas con animales y características únicas para perros.

# Reglas de Herencia

La herencia es una forma. La clase base no hereda las características de la clase derivada.

La herencia es transitiva. Una clase base de 'Animal' puede tener una clase derivada de 'Dog' y esto puede tener una clase derivada de 'Terrier'. La clase Terrier heredará las características de la clase Perro y la clase Animal.

# El `:` simbolo

En C # el símbolo `:` se usa para denotar herencia. Esto se llama al crear la clase derivada.

## Ejemplo

# Clase base
```
public class Animal 
 { 
    public int ID; 
    public string title; 
    public enum phylum; 
    public enum dietType; 
 
        public DefineAnimal(int id, string name, enum phy, enum diet) 
    { 
        this.ID = id; 
        this.title = name; 
        this.phylum = phy; 
        this.dietType = diet; 
    } 
 } 
```

# Clase derivada
```
public class Dog : Animal 
 { 
    public enum breed; 
    public int levelOfTraining; 
 
    public void SayWoof() 
    { 
        Console.WriteLine("Woof"); 
    } 
 } 

```