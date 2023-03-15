---
id: 637f4e5872c65bc8e73dfe27
videoId: yqcd-XkxZNM
title: Lavorare con il Testo Domanda A
challengeType: 15
dashedName: working-with-text-question-a
---

# --description--

Cosa ti aspetteresti che il seguente testo dia come output in una pagina HTML?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

Sembrano due paragrafi di testo, quindi potresti aspettarti che appariranno in questo modo. Tuttavia non è così, come si può vedere nell'output qui sotto:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/xxrKqeV?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=xxrKqeV&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_xxrKqeV"></iframe>

Quando il browser incontra nuove righe come quella nel tuo HTML, le comprime in un unico spazio. Il risultato di questa compressione è che tutto il testo viene ammassato insieme in una sola lunga riga.

Se vuoi creare dei paragrafi in HTML, devi utilizzare l'elemento paragrafo, che aggiungerà una nuova riga dopo ciascuno dei paragrafi. Un elemento di paragrafo è definito racchiudendo il contenuto di testo con un tag `<p>`.

Cambiando l'esempio precedente in modo da utilizzare elementi di paragrafo si risolve il problema:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/mdwbmdp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=mdwbmdp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_mdwbmdp"></iframe>

# --question--

## --assignment--

Guarda e segui il video HTML Paragraph and Headings di Kevin Powell qui sopra.

## --text--

Come si crea un paragrafo in HTML?

## --answers--

`<h3>This is a paragraph</h3>`

---

`<p>This is a paragraph</p>`

---

`<strong>This is a paragraph<strong>`


## --video-solution--

2
