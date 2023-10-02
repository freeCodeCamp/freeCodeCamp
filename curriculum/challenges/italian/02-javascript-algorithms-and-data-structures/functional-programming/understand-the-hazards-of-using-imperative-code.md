---
id: 587d7b8e367417b2b2512b5d
title: Comprendere i pericoli dell'utilizzo del codice imperativo
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

La programmazione funzionale è una buona abitudine. Mantiene il tuo codice facile da gestire e ti salva da bug subdoli. Prima di arrivarci, diamo un'occhiata a un approccio imperativo alla programmazione per evidenziare dove si possono presentare i problemi.

In inglese (e in molte altre lingue), il tempo imperativo viene usato per dare ordini. Allo stesso modo, uno stile imperativo nella programmazione è quello che dà al computer una serie di istruzioni per eseguire un compito.

Spesso le istruzioni cambiano lo stato del programma, ad esempio aggiornando delle variabili globali. Un classico esempio è la scrittura di un ciclo `for` che dà direttive esatte su come iterare tra gli indici di un array.

Al contrario, la programmazione funzionale è una forma di programmazione dichiarativa. Dici al computer cosa vuoi fare chiamando un metodo o una funzione.

JavaScript offre molti metodi predefiniti che gestiscono le attività comuni in modo da non dover scrivere come il computer dovrebbe eseguirle. Ad esempio, invece di usare il ciclo `for` menzionato sopra, potresti chiamare il metodo `map` che gestisce i dettagli di iterazione su un array. Questo aiuta ad evitare errori semantici, come gli errori "Fuori di uno" che sono stati coperti nella sezione Debugging.

Considera lo scenario: stai navigando sul web nel tuo browser e vuoi tracciare le schede che hai aperto. Cerchiamo di modellare questo usando un semplice codice orientato agli oggetti.

Un oggetto Window (finestra) è composto da schede, e di solito hai più di una finestra aperta. I titoli di ogni sito aperto in ogni oggetto Window sono memorizzati in un array. Dopo aver lavorato nel browser (apertura di nuove schede, fusione di finestre e chiusura di schede), desideri visualizzare nella console le schede rimaste aperte. Le schede chiuse vengono rimosse dall'array e le nuove schede vengono aggiunte alla fine (per semplicità).

L'editor di codice mostra un'implementazione di questa funzionalità con funzioni per `tabOpen()`, `tabClose()`e `join()`. L'array `tabs` è parte dell'oggetto Window che memorizza il nome delle pagine aperte.

# --instructions--

Esamina il codice nell'editor. Viene usato un metodo che ha effetti collaterali sul programma, causando un comportamento scorretto. L'elenco finale delle schede aperte, memorizzato in `finalTabs.tabs`, dovrebbe essere `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` ma la lista prodotta dal codice è leggermente differente.

Cambia `Window.prototype.tabClose` in modo che rimuova la scheda corretta.

# --hints--

`finalTabs.tabs` dovrebbe essere `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

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
