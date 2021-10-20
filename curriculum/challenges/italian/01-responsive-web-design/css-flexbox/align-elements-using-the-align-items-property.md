---
id: 587d78ad367417b2b2512af8
title: Allineare gli elementi usando la proprietà align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

La proprietà `align-items` è simile a `justify-content`. Ricorda che la proprietà `justify-content` ha allineato gli elementi flex lungo l'asse principale. Per le righe, l'asse principale è una linea orizzontale e per le colonne è una linea verticale.

I contenitori flex hanno anche un **asse trasversale** che è ortogonale all'asse principale. Per le righe, l'asse trasversale è verticale e per le colonne, l'asse trasversale è orizzontale.

CSS offre la proprietà `align-items` per allineare gli elementi flex lungo l'asse trasversale. In una riga, esso dice a CSS come spingere gli oggetti in tutta la riga su o giù all'interno del contenitore. E in una colonna, come spingere tutti gli oggetti a sinistra o a destra all'interno del contenitore.

I diversi valori disponibili per `align-items` includono:

<ul><li><code>flex-start</code>: allinea gli elementi all'inizio del contenitore flex. Per le righe, questo allinea gli oggetti alla parte superiore del contenitore. Per le colonne, questo allinea gli oggetti alla sinistra del contenitore.</li><li><code>flex-end</code>: allinea gli elementi alla fine del contenitore flex. Per le righe, questo allinea gli oggetti alla parte inferiore del contenitore. Per le colonne, questo allinea gli oggetti alla parte destra del contenitore.</li><li><code>center</code>: allinea gli elementi al centro. Per le righe, questo allinea verticalmente gli oggetti (uguale spazio sopra e sotto gli elementi). Per le colonne, questo li allinea orizzontalmente (spazio uguale a sinistra e destra degli elementi).</li><li><code>stretch</code>: allunga gli oggetti per riempire il contenitore flex. Ad esempio, gli elementi delle righe sono allungati per riempire il contenitore flex dall'alto al basso. Questo è il valore predefinito se nessun valore <code>align-items</code> è specificato.</li><li><code>baseline</code>: allinea gli elementi alla linea di base. La linea di base è un concetto testuale, pensala come la linea su cui si trovano le lettere.</li></ul>

# --instructions--

Un esempio aiuta a mostrare questa proprietà in azione. Aggiungi la proprietà `align-items` all'elemento `#box-container` e dagli un valore di `center`.

**Bonus**  
Prova le altre opzioni per la proprietà `align-items` nell'editor di codice per vedere le loro differenze. Nota però che un valore di `center` è l'unico che supererà questa sfida.

# --hints--

L'elemento `#box-container` dovrebbe avere la proprietà `align-items` impostata su un valore di `center`.

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
