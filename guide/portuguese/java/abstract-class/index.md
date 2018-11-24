---
title: Abstract Classes in Java
localeTitle: Classes Abstratas em Java
---
Vamos discutir classes abstratas. Antes de mergulhar neste tutorial, é melhor que você tenha entendido conceitos de classes e herança.

Classes abstratas são classes que podem ser herdadas (isto é, estendidas), mas não podem ser instanciadas. Você pode pensar neles como uma **versão** de **classe** de interfaces ou como uma interface com código real anexado aos métodos.

Considere o seguinte exemplo para entender classes abstratas: Você tem uma classe Veículo que define certas funcionalidades básicas (métodos) e certos componentes (variáveis ​​de objeto) que uma máquina deve ter, para ser classificada como veículo. Você não pode criar um objeto de tipo Veículo porque um veículo em si é um conceito abstrato. No entanto, você pode estender a funcionalidade da classe de veículo para criar um carro ou uma motocicleta.

``` java 
abstract class Veiculo { 

// variável usada para declarar o não. de rodas em um veículo 
private int rodas;

// Variável para definir o tipo de motor 
private Motor motor;

// um método abstrato que apenas declara, mas não define o mecanismo de partida 
// funcionalidade porque cada veículo usa um mecanismo de partida diferente 
abstract void start (); 

}
public class Carro extends Veiculo
{
  ...
}

public class Motocicleta extends Veiculo
{
  ...
}
```
Você não pode criar um objeto usando a classe Veiculo. Porém, você pode extender a classe Veiculo, e, então, criar um objeto desta classe que extendeu Veiculo.

``` java


 Veiculo veiculo = new Veiculo (); // Inválido 
 Veiculo carro = new Carro(); // válido 
 Veiculo mBike = new Motocicleta (); // válido

 Carro carro = new Carro(); // válido 
 Motocicleta mBikeObj = new Motocicleta(); // válido 
 
 ```
