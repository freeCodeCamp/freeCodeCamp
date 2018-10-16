---
title: Inheritance Basics
localeTitle: Noções básicas sobre herança
---
# Noções básicas sobre herança

Tão grande que você criou com sucesso uma classe Car. Mas, espere, os carros da Tesla não são supostamente variantes elétricos? Eu quero uma classe de carro elétrico, mas também deveria ter as propriedades da classe de `Car` original.

Solução: **herança** . Java fornece uma maneira simples de "herdar" propriedades pai:

```java
public class Car { 
 
    private String name; 
    private String manufacturerName; 
 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
    // Getter method 
    public String getName() { 
        return name; 
    } 
    // Getter method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 } 
 
 public class ElectricCar extends Car { 
 
    public ElectricCar(String name, String man) { 
        super(name, man); 
    } 
 
    public void charge() { 
     System.out.println("Charging ..."); 
    } 
 } 
 
 ElectricCar modelS = new ElectricCar("Model S","Tesla"); 
 // prints Tesla 
 System.out.println(modelS.getManufacturerName()); 
 // prints Charging ... 
 modelS.charge(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZY/0)

Veja aqui que a classe `ElectricCar` herda ou `extends` os métodos públicos da classe `Car` , assim como possui seus próprios métodos e propriedades. Legal maneira de passar informações!

Observe também o uso da palavra [\-](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) chave [super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) aqui. Como nossa classe `Car` tinha um construtor, também temos que inicializar esse construtor a partir da classe filha. Fazemos isso usando a palavra `super` chave `super` . Leia mais sobre Herança aqui .