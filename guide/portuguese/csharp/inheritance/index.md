---
title: Inheritance
localeTitle: Herança
---
# Herança

A herança permite criar uma classe que estenda ou modifique uma classe existente. Isso pode ser usado para criar classes que derivam de outras classes.

# Classe base e classe derivada

Estes são os termos usados ​​para as classes quando se referem à herança. A classe derivada herda a classe base, junto com quaisquer variáveis, funções ou processos que a classe base usa. A classe derivada pode então ter suas próprias variáveis ​​e funções juntamente com as que ela herda da classe base.

Por exemplo, uma classe Base de 'Animal' pode ter uma classe derivada de 'Dog'. A classe Animal conterá características relacionadas aos animais em geral, enquanto a classe Dog contém características exclusivas dos cães. Quando a classe Dog herda a classe Animal, ela poderá se referir a ambos os recursos relacionados a animais e características exclusivas dos cães.

# Regras de herança

A herança é um caminho. A classe base não herda os recursos da classe derivada.

A herança é transitiva. Uma classe base de 'Animal' pode ter uma classe derivada de 'Dog' e isso pode ter uma classe derivada de 'Terrier'. A classe Terrier herdará os recursos da classe Dog e da classe Animal.

# O `:` símbolo

Em C #, o símbolo `:` é usado para denotar herança. Isso é chamado ao criar a classe derivada.

## Exemplo

# Classe base
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

# Classe derivada
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