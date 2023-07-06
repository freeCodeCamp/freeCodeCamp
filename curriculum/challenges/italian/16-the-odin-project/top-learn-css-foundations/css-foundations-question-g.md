---
id: 63ee35450d8d4841c3a70920
videoId: LGQuIIv2RVA
title: Fondamenti di CSS domanda G
challengeType: 15
dashedName: css-foundations-question-g
---

# --description--

Il CSS interno (o CSS incorporato) comporta l'aggiunta del CSS all'interno del file HTML stesso invece di creare un file completamente separato. Con il metodo interno, si posizionano tutte le regole all'interno di un paio di tag `<style>` di apertura e chiusura, che vengono poi posizionati all'interno dei tag `<head>` di apertura e chiusura del file HTML. Poiché gli stili sono stati posizionati direttamente all'interno dei tag `<head>`, non hai più bisogno dell'elemento `<link>` richiesto dal metodo esterno.

Oltre a queste differenze, la sintassi è esattamente la stessa del metodo esterno (selettore, parentesi graffe, dichiarazioni):

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
```

Questo metodo può essere utile per aggiungere stili unici a una singola pagina di un sito web, ma non tiene le cose separate come il metodo esterno e, a seconda di quante regole e dichiarazioni ci sono, può far sì che il file HTML diventi piuttosto grande.

# --question--

## --text--

Quale delle seguenti è una differenza tra i metodi CSS interno ed esterno?

## --answers--

Il metodo esterno posiziona le regole CSS in un file separato, mentre il metodo interno posiziona le regole CSS all'interno del file HTML stesso.

---

Il metodo interno mantiene il CSS separato dall'HTML, mentre il metodo esterno incorpora il CSS direttamente nell'HTML.

---

Il metodo interno utilizza l'elemento `<link>` per collegare CSS e HTML, mentre il metodo esterno incorpora il CSS direttamente nell'HTML.


## --video-solution--

1
