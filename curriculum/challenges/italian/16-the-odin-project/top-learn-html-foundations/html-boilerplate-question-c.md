---
id: 637f4e2f72c65bc8e73dfe22
title: Boilerplate HTML Domanda C
challengeType: 15
dashedName: html-boilerplate-question-c
---

# --description--

L'elemento `<head>` contiene importanti metadati sulle pagine web e le cose necessarie per renderizzarle correttamente nel browser. All'interno dell'`<head>`, non dovresti usare nessun elemento che mostri del contenuto nella pagina web.

## L'elemento meta charset
Il tag `meta` per la codifica dei caratteri (`charset`) della pagina web dovrebbe sempre essere nell'elemento `head`: `<meta charset="utf-8">`.

Impostare la codifica è molto importante perché assicura che la pagina web mostri correttamente nel browser simboli speciali e caratteri provenienti da lingue diverse.

## L'elemento title
Un altro elemento che dovresti sempre includere nell'head di un documento HTML è l'elemento `title`:

```html
<title>My First Webpage</title>
```

L'elemento `title` viene utilizzato per dare alle pagine web un titolo leggibile che viene visualizzato nella scheda della pagina web nel browser.

Se non includi un elemento `title`, il titolo della pagina web diventa per impostazione predefinita il nome del file. Nel tuo caso sarà `index.html`, che non è molto significativo per gli utenti; ciò potrebbe rendere molto difficile trovare la pagina web se un utente ha molte schede aperte nel browser.

Ci sono molti altri elementi che possono andare all'interno dell'`head` di un documento HTML. Tuttavia, per ora è fondamentale conoscere solo i due elementi che hai affrontato qui. Introdurrai altri elementi da inserire nell'`head` per tutto il resto del curriculum.

Tornando al file `index.html`, aggiungi un elemento `head` con un elemento `meta` `charset` e un `title` al suo interno. L'elemento head va all'interno dell'elemento HTML e dovrebbe essere sempre il primo elemento sotto il tag di apertura `<html>`:


```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

# --question--

## --text--

Qual è lo scopo dell'elemento `head`?

## --answers--

L'elemento `head` viene utilizzato per mostrare tutti gli elementi che vengono visualizzati sulla pagina web.

---

L'elemento `head` viene utilizzato per mostrare informazioni importanti sulla pagina web e viene utilizzato per renderizzare correttamente le pagine web tramite elementi `meta`.

---

L'elemento `head` viene utilizzato per mostrare il contenuto dell'intestazione in cima alla pagina web.


## --video-solution--

2
