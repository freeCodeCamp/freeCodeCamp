---
title: Object Oriented Programming (OOP)
localeTitle: Programação Orientada a Objetos (POO)
---

## Guia

*   Por que Orientação a Objetos?
*   Conceitos de Orientação a Objetos
*   Exemplo

## Porque OO?

Nesse paradigma de programação, as entidades do mundo real são tratadas como dados computacionalmente manipuláveis. Por exemplo, se quisermos representar um cachorro, basta que criemos uma classe chamada "Cachorro" com alguns atributos ( como cor, idade, sexo, etc.) e alguns comportamentos (latir, correr, comer, etc.). Os atributos de uma classe são as suas variáveis, enquanto os comportamentos descritos referem-se aos métodos (funções) que manipulam tais variáveis.

## Conceitos OO

O que torna a programação OO poderosa deve-se às suas quatro principais características:

*   Abstração
*   Encapsulamento
*   Herança
*   Polimorfismo

Na programação procedural simplesmente criamos variáveis e as modificamos quando necessário. No entanto, na programação OO, podemos literalmente simular objetos do mundo real. Por meio do conceito de Abstração, entende-se que uma entidade representa um molde para diversos indivíduos, ou seja, em um programa deve existir uma estrutura (classe) capaz de agrupar funções e variáveis comuns a diversos objetos. As classes descrevem características e comportamentos genéricos de uma entidade, enquanto um objeto descreve um indivíduo (exemplo: Classe Cachorro, Objeto Snoopy). Ressalta-se que para cada objeto criado as variáveis podem assumir diferentes valores, enquanto os métodos se mantêm.

Encapsular refere-se ao uso dessas classes e de seus objetos - que referem-se a instâncias de uma classe. A ocultação de dados é outro recurso interessante do Encapsulamento. Em OO, temos a noção de atributos privados e públicos. Atributos privados podem ser acessados e modificados somente por métodos dessa classe em particular, enquanto dados públicos podem ser modificados de qualquer lugar no programa (dentro de seu escopo, obviamente).

O conceito de Herança representa que uma classe derivada (mais especializada) pode herdar atributos e comportamentos de uma classe base (mais genérica), de modo a reaproveitar seus recursos. Por exemplo, ao criar um jogo, temos um jogador e um inimigo - sendo ambas entidades. Podemos criar uma classe base chamada Pessoa e dar a ela os atributos nome, idade, sexo e os comportamentos caminhar e pular. Note-se que tanto o jogador quanto o inimigo compartilham dessas mesmas características e compartamentos. Assim, ao invés de implementar os mesmos atributos e métodos para cada um, as classes de jogador e de inimigo podem então herdar os recursos da classe Pessoa, ao mesmo tempo em que poderão ter características e comportamentos próprios.

O Polimorfismo é outro conceito de reaproveitamento de recursos neste paradigma de programação, sobretudo de comportamentos (métodos) entre entidades (classes). De maneira geral, é possivel reaproveitar nomes de métodos (overload ou sobrecarga), reproveitar funcionalidades de métodos herdados de hierarquias de classes em métodos novos (overwrite ou sobrescrita) e manipular objetos de classes base em tempo de execução do programa. 

### Exemplo
A imagem abaixo presenta o molde de um carro, ou seja, a classe Carro. Uma instância desse carro pode ser qualquer carro do mundo real que é capaz de desempenhar funções como obterCombustivel(), obterVelocidade(), e dirigir().

![a](https://user-images.githubusercontent.com/32509775/47198274-f25d1680-d388-11e8-8909-44111f747b75.png)
