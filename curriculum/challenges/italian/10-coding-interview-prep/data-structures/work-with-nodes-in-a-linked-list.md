---
id: 587d8251367417b2b2512c61
title: Lavorare con i nodi in una lista concatenata
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

Un'altra struttura dati che incontrerai in computer science è la <dfn>lista concatenata</dfn>. Una lista concatenata è una collezione lineare di elementi di dati, chiamati nodi, ognuno dei quali fa riferimento al successivo. Ogni <dfn>nodo</dfn> in una lista concatenata contiene due informazioni fondamentali: l'elemento stesso, e un riferimento al nodo successivo.

Immagina di essere in un trenino. Hai le mani sulle spalle della persona davanti a te in fila, e la persona dietro di te ha le mani sulle tue spalle. Puoi vedere la persona direttamente di fronte a te, ma stanno bloccando la vista delle altre persone più in la nel trenino. Un nodo è proprio come una persona in un trenino: sanno chi sono e possono vedere solo la persona successiva nella fila, ma non sono a conoscenza delle altre persone davanti o dietro di loro.

# --instructions--

Nel nostro editor di codice, abbiamo creato due noti, `Kitten` e `Puppy`, e abbiamo connesso il nodo `Kitten` al nodo`Puppy`.

Crea dei nodi `Cat` e `Dog` e aggiungili manualmente alla lista.

# --hints--

Il tuo nodo `Puppy` dovrebbe avere un riferimento a un nodo `Cat`.

```js
assert(Puppy.next.element === 'Cat');
```

Il tuo nodo `Cat` dovrebbe avere un riferimento a un nodo `Dog`.

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
```

# --solutions--

```js
// solution required
```
