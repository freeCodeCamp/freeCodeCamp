---
id: 587d7b8e367417b2b2512b5d
title: Entender os perigos da programação imperativa
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

Usar programação funcional é um bom hábito. Faz com que o seu código seja fácil de manter e o livra de bugs sorrateiros. Mas antes de fazer a transição, vamos rever uma abordagem imperativa para destacar onde pode haver problemas.

Em português (e em vários outros idiomas), o modo verbal imperativo é usado para dar ordens. Da mesma forma, o estilo imperativo em programação é um estilo que dá um conjunto de instruções para um computador realizar uma tarefa.

Essas instruções frequentemente alteram o estado do programa ao atualizar variáveis globais, por exemplo. Um exemplo clássico é escrever um loop `for`, que é explícito ao dar direções para percorrer um array.

Em contrapartida, a programação funcional é uma forma de programação declarativa. Você diz ao computador o que quer fazer chamando um método ou função.

O JavaScript oferece muitos métodos predefinidos que lidam com tarefas comuns, então você não precisa escrever como o computador deve executá-las. Por exemplo, em vez de usar um loop `for`, você pode chamar o método `map`, que lida com os detalhes de como percorrer um array. Isso ajuda a evitar erros semânticos, como os erros de "Off By One" (fora por um), que foram cobertos na seção de depuração.

Considere o cenário: você está navegando na web com o navegador e quer rastrear as abas que você abriu. Vamos tentar modelar isso usando orientação a objetos de forma simples.

Um objeto Window (Janela) é composto de abas e normalmente há mais de uma janela aberta. Os títulos de cada site aberto em cada objeto Window é armazenado em um array. Depois de usar o navegador (abrindo novas abas, juntando janelas, fechando abas), você quer imprimir as abas que ainda estão abertas. Abas fechadas são removidas do array e novas abas são adicionadas ao fim dele (por simplicidade).

No editor de texto há uma implementação dessa funcionalidade com as funções `tabOpen()`, `tabClose()` e `join()`. O array `tabs` é um atributo do objeto Window e armazena o nome das páginas abertas.

# --instructions--

Examine o código no editor. Nele é usado um método que possui efeitos colaterais no programa e causa comportamento incorreto. A lista final de abas abertas armazenada em `finalTabs.tabs` deveria ser `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` mas a lista produzida pelo código é ligeiramente diferente.

Modifique `Window.prototype.tabClose` de forma que ele remova a aba correta.

# --hints--

`finalTabs.tabs` deve ser `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
