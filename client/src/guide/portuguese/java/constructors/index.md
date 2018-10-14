---
title: Constructors
localeTitle: Construtores
---
Se um objeto copia de uma classe, qual é o objetivo? Eu deveria ser capaz de armazenar os dados, certo?

É quando usamos métodos **getter** (por exemplo, getName ()) / **setter** (por exemplo, setName ()) ou, neste caso, construtores, para inicializar uma classe. Basicamente, toda classe Java possui um construtor que é o método chamado primeiro quando qualquer objeto da classe é inicializado. Pense nisso como um pouco de código inicial.

Quando você escreve uma classe sem nenhum construtor, o compilador Java cria um construtor padrão:

```java
public class Car { 
    private String name; 
 } 
 
 Car modelS = new Car(); 
```

Esta inicialização sem parâmetros é uma maneira de chamar o construtor padrão. Você também pode ter um construtor padrão escrito desta maneira:

```java
public class Car { 
    private String name; 
 
    // User Specified Default Constructor 
    public Car() { 
        name = "Tesla"; 
    } 
 } 
```

Em seguida, ao chamar `new Car()` , o `name` da variável será inicializado automaticamente como "Tesla" para essa instância do objeto Car.

Claramente, os construtores são exatamente como soam: eles são usados ​​para `construct` , isto é, instanciar um objeto de uma classe particular.  
Os construtores são semelhantes às declarações de método, mas são ligeiramente diferentes no sentido de que eles:

1.  São nomeados exatamente da mesma maneira que a classe.
2.  Não tem um tipo de retorno.

Portanto, o propósito de usar `constructors` é fornecer:

1.  Uma maneira de instanciar um objeto.
2.  Forneça valores iniciais para as propriedades de um objeto.
3.  Controle como um objeto é criado.

Vamos ver outro exemplo. Digamos, a Honda (fabricante de automóveis), quer que todos os seus carros sejam chamados `Honda <a name>` . Para reforçar isso, podemos representar isso usando uma classe da seguinte maneira:

```java
public class Car { 
 
    private String name; 
 
    // Constructor. 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CTJ4/1)

Observe que, quando escrevemos um construtor dessa maneira, ou seja, fornecendo um parâmetro, estamos controlando (ponto no. 3) a maneira como uma instância de `Car` é criada. Resumindo, estamos dizendo neste exemplo que **você DEVE fornecer um nome de modelo para obter uma instância da classe Car** .

Por que isso é importante? Há momentos em que você deseja `one and only one` instância de uma classe para uso em todo o aplicativo. Uma maneira de conseguir isso é usando um construtor `private` .

Suponha que você precise de uma aula para representar um banco. Você não gostaria que as pessoas criassem uma instância do `Bank` . Então, você projeta sua classe:

```java
public class Bank { 
 
    private static Bank instance; 
 
    private Bank(){ 
    } 
 
    public static Bank getInstance(){ 
        if(null == instance){ 
            instance = new Bank(); 
        } 
        return instance; 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CTJz/0)

Observe que o construtor é `private` . Isso impõe o fato de que ninguém mais tem permissão para criar uma instância do Banco.  
De fato, se em outra classe, você tentar:

```java
Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank. 
```

Assim, a única maneira de obter acesso à instância é usando `Bank.getInstance()` . Essas instâncias são chamadas `Singleton` pois você obtém exatamente uma instância (por VM, para ser mais precisa) durante a vida útil do seu aplicativo.

Pode haver muitos números de construtores em uma classe. Mas eles devem diferir nos parâmetros do método. Isto é Sobrecarga de Construtor. Para ser preciso, dizemos que a sobrecarga do construtor ocorreu quando há dois ou mais construtores com o mesmo nome, mas diferentes parâmetros de método. Como resultado, as duas funções possuem assinaturas de métodos diferentes e são tratadas por Java como construtores diferentes inteiramente. Por exemplo:

```java
public class Car { 
 
    private String name; 
    private String carType; 
 
    // Constructor. 
    public Car(){ 
        this.name = "No Name"; 
        this.carType = "No Type"; 
    } 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public Car(String model, String carType){ 
        this.name = model; 
        this.carType = carType; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public String getCarType(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
 
        // Other Way To Initialize 
        Car car = new Car("Civic","Sedan"); 
        System.out.println( car.getName() + " "+ car.getCarType() ); 
 
    } 
 } 
```

Assim, a única maneira de obter acesso à instância é usando `Bank.getInstance()` . Essas instâncias são chamadas `Singleton` pois você obtém exatamente uma instância (por VM, para ser mais precisa) durante a vida útil do seu aplicativo.

## Construtor de cópia

O construtor de cópia é um construtor que cria um objeto, inicializando-o com um objeto da mesma classe, que foi criada anteriormente. O construtor de cópia é usado para

1.  Inicialize um objeto de outro do mesmo tipo.
2.  Copie um objeto para passá-lo como um argumento para uma função.
3.  Copie um objeto para retorná-lo de uma função. Aqui está um programa que mostra um uso simples do construtor de cópia:

```Java
class Complex { 
 
    private double re, im; 
 
    // A normal parametrized constructor 
    public Complex(double re, double im) { 
        this.re = re; 
        this.im = im; 
    } 
 
    // Copy constructor 
    Complex(Complex c) { 
        System.out.println("Copy constructor called"); 
        re = c.re; 
        im = c.im; 
    } 
 
    } 
 } 
```

[execute o código completo](https://repl.it/MwnJ)

// ## Constructor Chaining