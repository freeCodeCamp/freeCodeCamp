---
id: 637f702872c65bc8e73dfe33
videoId: ta3Oxx7Yqbo
title: Link e Immagini Domanda D
challengeType: 15
dashedName: links-and-images-question-d
---

# --description--


Generalmente, ci sono due tipi di link che puoi creare:

- Link a pagine o altri siti web su internet

- Link a pagine situate sul tuo sito web


## Link assoluti
I link alle pagine di altri siti web su internet sono chiamati link assoluti. Un tipico link assoluto è costituito dalle seguenti parti: `protocol://domain/path`. Un link assoluto conterrà sempre il protocollo e il dominio della destinazione.

Hai già visto un link assoluto in azione. Il link alla pagina About di The Odin Project che hai creato in precedenza era un link assoluto, in quanto contiene il protocollo e il dominio.

`https://www.theodinproject.com/about`

## Link relativi
I link ad altre pagine all'interno del tuo sito web sono chiamati link relativi. I link relativi non includono il nome del dominio, poiché si tratta di un'altra pagina sullo stesso sito e si suppone che il nome del dominio sia lo stesso della pagina su cui è stato creato il collegamento.

I link relativi includono solo il percorso del file all'altra pagina, rispetto alla pagina in cui si sta creando il collegamento. Piuttosto astratto, quindi vediamo come funziona con un esempio.

All'interno della cartella `odin-links-and-images`, crea un altro file HTML chiamato `about.html` e incolla al suo interno il seguente codice:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

Tornando alla pagina `index`, aggiungi il seguente elemento di ancoraggio per creare un link alla pagina `about`:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="about.html">About</a>
</body>
```

Apri il file `index.html` nel browser e clicca sul link ad about per assicurarti che tutto sia collegato correttamente. Cliccare sul link dovrebbe portarti alla pagina `about` che hai appena creato.

Questo funziona perché le pagine `index` e `about` sono nella stessa cartella. Ciò vuol dire che puoi usare semplicemente il suo nome (`about.html`) come valore di `href` del link.

Ma di solito è bene organizzare le cartelle di un sito un po' meglio. Normalmente dovresti avere solo il file `index.html` nella cartella root e tutti gli altri file HTML nella propria cartella.

Crea una cartella chiamata `pages` all'interno della cartella `odin-links-and-images` e sposta il file `about.html` nella nuova cartella.

Ricarica la pagina `index` nel browser e poi clicca sul link ad `about`. Adesso non funzionerà. Questo perché la posizione del file della pagina `about` è cambiata.

Per risolvere questo problema, devi solo aggiornare il valore `href` del link ad `about` includendo la cartella `pages/` dato che questa è la nuova posizione del file `about.html` relativa al file `index.html`.

```html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
```

Ricarica la pagina `index` nel browser e prova a cliccare ancora sul link ad `about`, adesso dovrebbe essere tornato in funzione.

In molti casi, sarà sufficiente; tuttavia, con questo approccio potresti ancora imbatterti in problemi inaspettati. Anteporre `./` al link preverrà tali errori nella maggior parte dei casi. Aggiungendo `./` stai specificando al tuo codice che dovrebbe iniziare a cercare il file o la cartella rispetto alla cartella **attuale**.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```

# --question--

## --assignment--

Guarda il video HTML File Structure di Kevin Powell qui sopra.

## --text--

Qual è la differenza tra un link assoluto e un link relativo?

## --answers--

Un link assoluto è un link a un'altra pagina del sito corrente. Un link relativo è un link a un altro sito web.

---

Un link assoluto è un link a un altro sito web. Un link relativo è un link un'altra pagina sul sito web corrente.

---

Non c'è differenza tra i link assoluti e relativi.

## --video-solution--

2
