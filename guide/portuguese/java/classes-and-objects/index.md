---
title: Classes and Objects
localeTitle: Classes e Objetos
---
# Classes e Objetos

Classes são grupos de variáveis ​​e operações neles. Uma classe pode ter variáveis, métodos (ou funções) e construtores (ou métodos que são usados ​​para iniciar, mais sobre isso depois!).

Uma classe pode conter qualquer um dos seguintes tipos de variáveis.

*   Variáveis ​​de Classe: Estas são as variáveis ​​que são declaradas dentro da definição da classe, fora de qualquer método, com a palavra-chave estática. Uma variável de classe é compartilhada entre todas as instâncias de uma classe. As variáveis ​​de classe também são conhecidas como variáveis ​​estáticas, elas são inicializadas apenas uma vez no momento da compilação da classe, portanto, apenas uma única cópia deste está disponível para todas as instâncias.
*   Variáveis ​​de instância: A diferença com as variáveis ​​de classe é que as variáveis ​​de instância são inicializadas dentro do construtor de classe e não são compartilhadas entre todos os objetos. No momento da instanciação, uma nova cópia da variável de instância é criada.

```java
public class Example { 
 
    private static int myVar = 1; // Class Variable 
 
    private int mySecondVar; // Instance Variable 
    Example(int mySecondVar) { 
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor 
```

Pense em uma `Class` como uma planta para criar algo concreto. Uma `Class` informa como o 'o que' e 'como' um `object` da referida Classe parecerá `instantiated` uma vez. Em essência, define `properties` (digamos, cor, capacidade do motor) e `behavior` (parar, acelerar, mudar de marcha, buzinar etc.) para um carro no caso abaixo.

Objetos são _instâncias_ de uma classe. Todos os objetos são instâncias de uma determinada classe. Imagine uma classe sendo um "modelo", do qual cada objeto é copiado. Quando você cria um objeto, ele basicamente cria um novo objeto no blueprint de uma classe. Agora vamos ver isso em um pequeno trecho de código:

```java
// Car class 
 public class Car { 
    // car name 
    private String name; 
 
    // car manufacturer name 
    private String manufacturerName; 
 
    // constructor 1 
    public Car() { 
    } 
 
    // constructor 2 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
 
    // getter name method 
    public String getName() { 
        return name; 
    } 
 
    // getter manufacture method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 
    //setter name method 
    public void setName(String name){ 
        this.name = name; 
    } 
 
    //setter manufacture method 
    public void setManufacture(String man){ 
        this.manufacturerName = man; 
    } 
 } 
 
 // sample code 
 
 Car modelS = new Car("Model S","Tesla"); 
 // prints Tesla Model S 
 System.out.println("Full Car Model S= " + modelS.getManufacturerName() + " : " + modelS.getName()); 
 
 Car modelX = new Car(); 
 modelX.setName("Model X"); 
 modelX.setManufacture("BMW"); 
 // prints Tesla Model X 
 System.out.println("Full Car Model X= " + modelX.getManufacturerName() + " : " + modelX.getName()); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZP/0)

Portanto, `Car` é uma classe que possui os campos ou propriedades `name` e `manufacturerName` . `modelS` é um objeto da classe `Car` . Então, o `modelS` também possui as mesmas propriedades e métodos.

É praticamente normal garantir que as 'informações' do objeto, neste caso o `name` e `manufacturerName` variáveis `manufacturerName` , sejam privadas e sejam acessadas somente por meio desses getters e setters. Isso evita um problema com o código de depuração que envolve variáveis ​​de membro de um objeto. Se as variáveis ​​de membro forem tornadas públicas e, por qualquer motivo, o programa travar, você poderá obter um rastreamento de pilha bastante complexo, que pode ser difícil apontar o erro. Manter as variáveis ​​privadas e acessíveis apenas por meio de getters e setters simplificará essa mensagem de erro.