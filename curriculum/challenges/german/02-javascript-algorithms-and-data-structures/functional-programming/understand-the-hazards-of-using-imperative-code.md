---
id: 587d7b8e367417b2b2512b5d
title: Verstehe die Gefahren der Verwendung von imperativem Code
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

Funktionale Programmierung ist eine gute Angewohnheit. So bleibt dein Code einfach zu verwalten und du bist vor heimlichen Fehlern geschützt. Aber bevor wir dazu kommen, lass uns einen Blick auf einen imperativen Ansatz zur Programmierung werfen, um aufzuzeigen, wo du Probleme haben könntest.

Im Englischen (und in vielen anderen Sprachen) wird der Imperativ verwendet, um Befehle zu erteilen. Ähnlich verhält es sich mit einem imperativen Programmierstil, der dem Computer eine Reihe von Anweisungen zur Ausführung einer Aufgabe gibt.

Oftmals ändern die Anweisungen den Zustand des Programms, wie z. B. das Aktualisieren von globalen Variablen. Ein klassisches Beispiel ist das Schreiben einer `for`-Schleife, die genaue Anweisungen für die Iteration über die Indizes eines Arrays gibt.

Im Gegensatz dazu ist die funktionale Programmierung eine Form der deklarativen Programmierung. Du teilst dem Computer mit, was du tun willst, indem du eine Methode oder Funktion aufrufst.

JavaScript bietet viele vordefinierte Methoden für gängige Aufgaben, so dass du nicht schreiben musst, wie der Computer sie ausführen soll. Anstatt die oben erwähnte `for`-Schleife zu verwenden, könntest du zum Beispiel die `map`-Methode aufrufen, die die Details der Iteration über ein Array behandelt. Das hilft, semantische Fehler zu vermeiden, wie die "Off By One Error", die im Abschnitt Debugging behandelt wurden.

Stell dir folgendes Szenario vor: Du surfst in deinem Browser im Internet und möchtest die von dir geöffneten Tabs verfolgen. Versuchen wir, dies mit einem einfachen objektorientierten Code zu modellieren.

Ein Fensterobjekt besteht aus Registerkarten, und normalerweise hast du mehr als ein Fenster geöffnet. Die Titel der einzelnen geöffneten Seiten in jedem Window-Objekt werden in einem Array gespeichert. Nach der Arbeit im Browser (Öffnen neuer Tabs, Zusammenführen von Fenstern und Schließen von Tabs) möchtest du die noch offenen Tabs ausgeben. Geschlossene Tabs werden aus dem Array entfernt und neue Tabs werden (der Einfachheit halber) am Ende des Arrays hinzugefügt.

Der Code-Editor zeigt eine Implementierung dieser Funktionalität mit Funktionen für `tabOpen()`, `tabClose()` und `join()`. Das Array `tabs` ist Teil des Window-Objekts und speichert die Namen der geöffneten Seiten.

# --instructions--

Überprüfe den Code im Editor. Es wird eine Methode verwendet, die Nebenwirkungen im Programm hat und ein falsches Verhalten verursacht. Die endgültige Liste der geöffneten Tabs, die in `finalTabs.tabs` gespeichert wird, sollte `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` sein, aber die Liste, die der Code erzeugt, ist etwas anders.

Ändere `Window.prototype.tabClose` so, dass es die richtige Registerkarte entfernt.

# --hints--

`finalTabs.tabs` sollte wie folgt aussehen: `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

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
