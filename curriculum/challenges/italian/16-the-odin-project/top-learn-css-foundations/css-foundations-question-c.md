---
id: 63ee352b0d8d4841c3a7091c
videoId: LGQuIIv2RVA
title: Fondamenti di CSS Domanda C
challengeType: 15
dashedName: css-foundations-question-c
---

# --description--

Che cosa succede se hai due gruppi di elementi che condividono alcune delle loro dichiarazioni di stile?

```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

Entrambi i selettori `.read` e `.unread` condividono le dichiarazioni `color: white;` e `background-color: black;`, ma per il resto possiedono diverse dichiarazioni uniche. Per rimuovere la ripetizione puoi raggruppare insieme i due selettori come una lista separata da virgole:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

Entrambi gli esempi di cui sopra (con e senza raggruppamento) avranno lo stesso risultato, ma il secondo esempio riduce la ripetizione delle dichiarazioni e rende più facile la modifica di `color` o `background-color` per entrambe le classi contemporaneamente.

# --question--

## --text--

Come applicheresti una singola regola a due diversi selettori, `.red-box` e `.yellow-box`?

## --answers--

```css
.red-box,
.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box {
  width: 25px;
  height: 25px;
}

.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box { 
  width: 25px;
  .yellow-box {
    height: 25px;
  }
}
```

## --video-solution--

1
