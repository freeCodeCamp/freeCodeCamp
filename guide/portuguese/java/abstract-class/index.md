---
title: Abstract Classes in Java
localeTitle: Classes Abstratas em Java
---
Vamos discutir classes abstratas. Antes de mergulhar neste tutorial, é melhor que você tenha entendido conceitos de classes e herança.

Classes abstratas são classes que podem ser subclassificadas (isto é, estendidas), mas não podem ser instanciadas. Você pode pensar neles como uma **versão** de **classe** de interfaces ou como uma interface com código anexado aos métodos.

Considere o seguinte exemplo para entender classes abstratas: Você tem uma classe Veículo que define certas funcionalidades básicas (métodos) e certos componentes (variáveis de objeto) que uma máquina deve ter para ser classificada como veículo. Você não pode criar um objeto de Veículo porque um veículo em si é um conceito abstrato. No entanto, você pode estender a funcionalidade da classe de veículo para criar um carro ou uma motocicleta.

``` java 
abstract class Veiculo 
{
  // variável usada para declarar o nº de rodas em um veículo
  private int rodas;

  // Variável para definir o tipo de motor usado 
  private Motor motor;

  // um método abstrato que declara, mas não define a funcionalidade inicial
  // porque cada veículo usa um mecanismo de partida diferente 
  abstract void darPartida ();
}

public class Carro extends Veiculo
{
  … 
}

public class Motocicleta extends Veiculo
{
  …
}
```

Você não pode criar um objeto da classe Veículo em lugar algum do seu programa. Porém, você pode estender a classe abstrata Veículo
e criar objetos das classes que a herdam. 

``` Java 
Veiculo novoVeiculo = new Veiculo (); // Inválido 
Veiculo carro = new Carro (); // válido 
Veículo moto = new Motocicleta (); // válido

Carro carroObj = new Carro (); // válido 
Motocicleta motoObj = new Motocicleta (); // válido 
```

Se a classe filho não implementar os métodos abstratos da classe pai, ela também se tornará
uma classe abstrata. 
