---
id: 587d774e367417b2b2512a9f
title: Andare direttamente al contenuto usando l'elemento main
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 ha introdotto diversi nuovi elementi che danno agli sviluppatori più opzioni, incorporando anche funzioni di accessibilità. Questi tag comprendono tra l'altro `main`, `header`, `footer`, `nav`, `article`, e `section`.

Di default, un browser visualizza questi elementi come fa con il semplice `div`. Tuttavia, usarli dove appropriato dà più significato alla formattazione. Il nome del tag da solo può indicare il tipo di informazione che contiene, aggiungendo significato semantico a quel contenuto. Le tecnologie assistive possono accedere a queste informazioni per fornire ai loro utenti un miglior riepilogo della pagina o delle opzioni di navigazione.

L'elemento `main` viene utilizzato per avvolgere (indovina) il contenuto principale, e dovrebbe essercene solo uno per pagina. Ha lo scopo di racchiudere le informazioni relative al tema centrale della tua pagina. Non è fatto per includere elementi che si ripetono tra le pagine, come link o banner.

Inoltre il tag `main` ha una funzione di riferimento incorporata che la tecnologia assistiva può utilizzare per andare rapidamente al contenuto principale. Se hai mai visto un link "Vai al contenuto principale" in cima ad una pagina, usare il tag `main` dà ai dispositivi assistivi quella funzionalità in automatico.

# --instructions--

Camper Cat ha delle grandi idee per la sua pagina di armi ninja. Aiutalo a impostare la formattazione aggiungendo i tag `main` di apertura e chiusura tra `header` e `footer` (trattati in altre sfide). Tieni i tag `main` vuoti per ora.

# --hints--

Il tuo codice dovrebbe avere un tag `main`.

```js
assert($('main').length == 1);
```

I tag `main` dovrebbero stare tra il tag `header` di chiusura e il tag `footer` di apertura.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
