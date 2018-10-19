---
title: Build JavaScript Objects
localeTitle: Construindo Objetos JavaScript

---
Objetos são úteis para guardar dados de uma forma estruturada, e podem ser utilizados para representar objetos do mundo real, como carros ou um hotel para o computador.

Objetos são similares a arrays (vetores), exceto que ao invés de utilizar índices para acessar e modificar seus dados, você acessa os dados em objetos através de propriedades. Existem duas formas principais de criar objetos: a forma Literal de Objeto e o Construtor.

Utilizando a forma Literal de Objeto, veja como podemos criar um objeto simples:

    var gato = {
        nome: "Tim",
        patas: 4,
        caudas: 1,
        inimigos: ["Banho", "Cachorros"]
     };

Utilizando o Construtor, veja como podemos criar um objeto simples:

    var gato = new Object();
    gato.nome = "Whiskers";
    gato.patas = 4;
    gato.caudas = 1;
    gato.inimigos = ["Banho", "Cachorros"];
    
Com o Construtor, utilizamos a palavra reservada `new` junto com `Object` (com O maiúsculo) para criar uma nova instância de objeto. Depois, usamos a notação de ponto para determinar os nomes das propriedades do objeto e o seu valor correspondente.
    
