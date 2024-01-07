---
id: 63ee354c0d8d4841c3a70921
videoId: LGQuIIv2RVA
title: Fondamenti di CSS domanda H
challengeType: 15
dashedName: css-foundations-question-h
---

# --description--

Il `CSS` in linea consente di aggiungere stili direttamente agli elementi `HTML`, sebbene questo metodo non sia così raccomandato:

```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

La prima cosa da notare è che non ci sono selettori, poiché gli stili vengono aggiunti direttamente al tag `<div>` di apertura. Poi c'è l'attributo `style`, con le dichiarazioni come suo valore all'interno delle virgolette.

Se hai bisogno di aggiungere uno stile unico a un singolo elemento, questo metodo può andare bene. Ma in genere questo non è esattamente il modo consigliato per aggiungere il CSS all'HTML per alcuni motivi:

Può rapidamente diventare piuttosto disordinato una volta che si iniziano ad aggiungere molte dichiarazioni a un unico elemento, facendo sì che il file HTML diventi inutilmente strapieno. Se vuoi che molti elementi abbiano lo stesso stile, occorre copiare e incollare gli stessi stili in ogni singolo elemento, creando molte ripetizioni superflue. Qualsiasi CSS in linea sovrascrive gli altri due metodi e ciò può causare risultati inattesi. Anche se non approfondirai questo aspetto qui, è un qualcosa da cui si può trarre vantaggio.

# --question--

## --text--

Quale dei seguenti è il principale svantaggio dell'uso del CSS in linea?

## --answers--

Può rapidamente diventare piuttosto disordinato una volta che si iniziano ad aggiungere molte dichiarazioni a un unico elemento, facendo sì che il file HTML diventi inutilmente strapieno.

---

Richiede l'utilizzo di selettori, che possono essere complicati per i principianti.

---

Qualsiasi CSS in linea sovrascrive gli altri due metodi (interno ed esterno) e ciò può causare risultati inattesi.


## --video-solution--

3
