---
title: Using Anonymous Functions for Private Namespacing in Your JavaScript Apps
localeTitle: Usando funções anônimas para namespacing privado em seus aplicativos JavaScript
---
Vamos dar uma olhada no que é um namespace quando se trata de criar aplicativos JavaScript e alguns dos benefícios de usar um namespace privado ao criar seus aplicativos.

**Observe que este artigo faz referência a funções de auto-execução anônimas. Se você não sabe o que é isso, por favor leia este excelente artigo de Noah Stokes: [Funções anônimas auto-executáveis ​​ou como escrever Javascript limpo](http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write) . Este artigo entrará em detalhes sobre funções auto-executáveis ​​anônimas.**

## O que é um namespace?

Para simplificar, um namespace é apenas uma seção de código que possui seu próprio espaço. Quando você começa a escrever aplicativos JS, geralmente basta digitar o código e executá-lo. Isso coloca todo o código no que é conhecido como o **namespace global** , que contém todo o código da janela em que você está trabalhando.

No entanto, se você mantiver todo o seu código no **namespace global** , poderá encontrar problemas com colisões, convenções de nomenclatura etc., especialmente em grandes aplicativos / jogos JS.

Vamos dar uma olhada em um exemplo de como usar apenas o **namespace global** para desenvolver um jogo é uma má ideia.

Então, digamos que temos um jogo que é acompanhar os pontos que o jogador tem:
```
var points = 0; 
```

Muitos jogos rastreiam pontos para adicionar uma vantagem competitiva ao jogo. Simplesmente digitando essa linha em um script, criamos uma variável chamada _points_ que pode rastrear os pontos ganhos pelo usuário.

E está tudo bem e bem, mas digamos que temos um usuário mais avançado jogando o jogo. Este usuário sabe como olhar para a fonte de uma página da web e, assim, essa pessoa dá uma olhada na fonte por trás do jogo JS e percebe que a variável _points_ está ali no **namespace global** . Um sorriso maligno desce pelo rosto deles enquanto eles contemplam os pontos que eles podem alcançar! Eles decidem que não querem esperar para bater alguns bandidos, ou esmagar alguns cogumelos, ou o que você tem, para acumular um monte de pontos. Eles querem seus pontos agora! Bem, como soa _um quatrilhão de bilhões de_ pontos? Então, eles carregam o console em seu navegador favorito e simplesmente digitam no console:
```
points = 34750925489459203859095480917458059034; 
```

Uma vez que o usuário acerta, a variável de _pontos_ é atualizada no jogo. Agora, o usuário tem uma quantidade realmente grande e provavelmente irrealista de pontos no jogo, e ele pode se gabar para seus amigos de que ninguém pode vencer sua pontuação incrível.

Então, como evitamos que isso ocorra? É aqui que **os namespaces privados** entram em cena.

## Namespaces privados

**Os namespaces privados** permitem que os desenvolvedores coloquem seu código em seções (ou **namespaces** ). Essas seções operam independentemente uma da outra, mas ainda podem ler e gravar no **namespace global** .

Para dividir isso em termos mais simples de um cenário da vida real, digamos que você esteja trabalhando em um prédio de escritórios. Você tem seu próprio escritório e vê outros com seus próprios escritórios. Cada escritório está trancado e apenas a pessoa que possui o escritório tem uma chave para esse escritório. Digamos também que você tenha algum tipo de superbloqueio que torne seu escritório impenetrável por qualquer outra pessoa no prédio. Vamos considerar o próprio edifício de escritórios como o **espaço de nomes global** e cada escritório como um **espaço de nomes privado** . Você não tem acesso ao escritório de outra pessoa nem tem acesso ao seu. Mas, cada um de vocês tem acesso ao resto do prédio, seja tomando café, pegando um lanche, etc. Cada um de vocês pode pegar algo do **namespace global** (ou criar / modificar algo lá), mas você pode crie / modifique / pegue qualquer coisa dos escritórios um do outro; você só pode criar / modificar / pegar de seu próprio **namespace** / escritório **particular** .

## Obtendo um namespace particular

Então, como conseguimos esse **namespace privado** em JavaScript? Use uma função de auto-execução anônima! Se você não leu o artigo de Noah Stokes, [Funções anônimas auto-executáveis ​​ou Como escrever Javascript limpo](http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write) , faça-o agora. Este artigo entrará em detalhes sobre funções auto-executáveis ​​anônimas.

Vamos dar uma olhada em usar essa variável de _pontos_ de antes, mas vamos separá-la em um **namespace privado** :
```
//The most common way you'll see an anonymous self-executing function 
 (function () { 
    var points = 0; 
 })(); 
 
 //This is just one of many more alternative ways to use an anonymous self-executing function 
 /* 
 !function () { 
    var points = 0; 
 }(); 
 */ 
```

Agora, quando o usuário chegar à página, ele não poderá abrir o console no navegador e alterar o valor da variável de pontos como desejar! Impressionante!

## Interação de Namespace e Documento

O código acima era apenas um uso para usar uma função auto-executável anônima para dar ao código seu próprio **namespace particular** . Lembre-se de que os namespaces afetam apenas o código JS (variables / arrays / objects / etc.), E não o código que pertence ao próprio documento.

Qualquer código dentro de um espaço de nomes ainda tem o mesmo acesso ao documento HTML e CSS, como faria normalmente no **espaço de nomes global** . Dê uma olhada nos próximos dois exemplos de código. Ambos executam a mesma funcionalidade e nenhum é mais benéfico ou mais eficiente que o outro.
```
<script type="text/javascript"> 
    (function () { 
        document.querySelector('body').style.background = 'blue'; 
    })(); 
 </script> 
```

é o mesmo que:
```
<script type="text/javascript"> 
    document.querySelector('body').style.background = 'blue'; 
 </script> 
```

Tenha em mente que esta é apenas uma maneira de usar namespaces em aplicativos JavaScript. Adapte seu código ao que melhor se adapta à situação em questão.