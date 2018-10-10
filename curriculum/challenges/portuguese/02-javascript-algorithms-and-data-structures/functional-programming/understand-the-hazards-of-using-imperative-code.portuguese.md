---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
videoUrl: ''
localeTitle: Entenda os perigos do uso do código imperativo
---

## Description
<section id="description"> A programação funcional é um bom hábito. Ele mantém seu código fácil de gerenciar e salva você de bugs furtivos. Mas antes de chegarmos lá, vamos ver uma abordagem imperativa da programação para destacar onde você pode ter problemas. Em inglês (e muitas outras línguas), o tempo imperativo é usado para dar comandos. Da mesma forma, um estilo imperativo na programação é aquele que dá ao computador um conjunto de instruções para executar uma tarefa. Geralmente, as instruções alteram o estado do programa, como atualizar as variáveis ​​globais. Um exemplo clássico é escrever um loop <code>for</code> que fornece instruções exatas para iterar os índices de um array. Em contraste, a programação funcional é uma forma de programação declarativa. Você diz ao computador o que você quer fazer chamando um método ou função. O JavaScript oferece muitos métodos predefinidos que lidam com tarefas comuns para que você não precise escrever como o computador deve executá-las. Por exemplo, em vez de usar o loop <code>for</code> mencionado acima, você poderia chamar o método de <code>map</code> que manipula os detalhes de iteração em uma matriz. Isso ajuda a evitar erros semânticos, como o &quot;Off By One Errors&quot;, que foram abordados na seção Depuração. Considere o cenário: você está navegando na Web em seu navegador e quer rastrear as guias que abriu. Vamos tentar modelar isso usando algum código simples orientado a objetos. Um objeto Window é composto de guias e você geralmente tem mais de uma janela aberta. Os títulos de cada site aberto em cada objeto Window são mantidos em uma matriz. Depois de trabalhar no navegador (abrir novas guias, mesclar janelas e fechar guias), você deseja imprimir as guias que ainda estão abertas. As guias fechadas são removidas da matriz e novas guias (para simplificar) são adicionadas ao final dela. O editor de código mostra uma implementação dessa funcionalidade com funções para <code>tabOpen()</code> , <code>tabClose()</code> e <code>join()</code> . As <code>tabs</code> matriz fazem parte do objeto Window que armazena o nome das páginas abertas. <h4> Instruções </h4><h4> Execute o código no editor. Está usando um método que tem efeitos colaterais no programa, causando saída incorreta. A lista final de separadores abertos deve ser <code>[&#39;FB&#39;, &#39;Gitter&#39;, &#39;Reddit&#39;, &#39;Twitter&#39;, &#39;Medium&#39;, &#39;new tab&#39;, &#39;Netflix&#39;, &#39;YouTube&#39;, &#39;Vine&#39;, &#39;GMail&#39;, &#39;Work mail&#39;, &#39;Docs&#39;, &#39;freeCodeCamp&#39;, &#39;new tab&#39;]</code> mas a saída será um pouco diferente. Trabalhe com o código e veja se consegue descobrir o problema e, em seguida, avance para o próximo desafio para saber mais. </h4></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Siga em frente para entender o erro.
    testString: 'assert(true, "Move ahead to understand the error.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
