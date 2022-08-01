---
id: 587d78ac367417b2b2512af6
title: Allineare gli elementi usando la proprietà justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Certe volte gli oggetti flex all'interno di un contenitore flex non riempiono tutto lo spazio del contenitore. È comune voler dire a CSS di allineare e spaziare gli elementi flex in una certa maniera. Fortunatamente, la proprietà `justify-content` ha diverse opzioni per farlo. Ma prima, c'è un po' di terminologia importante da capire prima di rivedere queste opzioni.

<a href="https://www.freecodecamp.org/italian/news/css-flexbox-un-compendio-con-diagrammi-animati/" target="_blank" rel="noopener noreferrer nofollow">Per maggiori informazioni sulle proprietà flex-box, leggi qui</a>

Ricorda che l'impostazione di un contenitore flex come riga posiziona gli elementi flex fianco a fianco da sinistra a destra. Un contenitore flex impostato come colonna piazza gli oggetti flex in una pila verticale dall'alto verso il basso. Per ognuno, la direzione in cui sono disposti gli elementi flex è chiamata **asse principale**. Per una riga, si tratta di una linea orizzontale che taglia ogni elemento. E per una colonna, l'asse principale è una linea verticale che attraversa gli elementi.

Ci sono diverse opzioni per spaziare gli elementi flex lungo la linea corrispondente all'asse principale. Una delle più usate è `justify-content: center;`, che allinea tutti gli elementi flex al centro del contenitore flex. Altre opzioni includono:

<ul><li><code>flex-start</code>: allinea gli elementi all'inizio del contenitore flex. Per una riga, questo spinge gli oggetti alla sinistra del contenitore. Per una colonna, questo spinge gli oggetti verso l'alto del contenitore. Questo è l'allineamento predefinito se non viene specificato alcun <code>justify-content</code>.</li><li><code>flex-end</code>: allinea gli elementi alla fine del contenitore flex. Per una riga, questo spinge gli oggetti alla destra del contenitore. Per una colonna, questo spinge gli oggetti verso il fondo del contenitore.</li><li><code>space-between</code>: allinea gli oggetti al centro dell'asse principale, con spazio aggiuntivo tra gli elementi. Il primo e l'ultimo elemento vengono spinti fino all'estremità del contenitore flex. Ad esempio, in una riga il primo elemento è contro il lato sinistro del contenitore, l'ultimo elemento è contro il lato destro del contenitore, quindi lo spazio rimanente è distribuito uniformemente tra gli altri elementi.</li><li><code>space-around</code>: simile a <code>space-between</code> ma il primo e l'ultimo elemento non sono vincolati ai bordi del contenitore, lo spazio è distribuito intorno a tutti gli elementi con metà dello spazio su entrambe le estremità del contenitore flex.</li><li><code>space-evenly</code>: distribuisce lo spazio uniformemente tra gli elementi flex con uno spazio pieno a entrambe le estremità del contrainer flex.</li></ul>

# --instructions--

Un esempio aiuta a mostrare questa proprietà in azione. Aggiungi la proprietà CSS `justify-content` all'elemento `#box-container` e dagli un valore di `center`.

**Bonus**  
Prova le altre opzioni per la proprietà `justify-content` nell'editor di codice per vedere le loro differenze. Nota però che il valore `center` è l'unico che ti farà superare questa sfida.

# --hints--

L'elemento `#box-container` dovrebbe avere una proprietà `justify-content` impostata sul valore `center`.

```js
assert($('#box-container').css('justify-content') == 'center');
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
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
