---
id: 63ee35300d8d4841c3a7091d
videoId: LGQuIIv2RVA
title: Fondamenti di CSS Domanda D
challengeType: 15
dashedName: css-foundations-question-d
---

# --description--

Un altro modo per usare i selettori è concatenarli in una lista senza alcuna separazione. Diciamo che hai il seguente HTML:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

Ci sono due elementi con la classe `subsection` che hanno degli stili unici, ma cosa succede se vuoi applicare solo una regola separata all'elemento che ha anche `header` come seconda classe? Puoi concatenare insieme entrambi i selettori di `class` nel CSS, così:

```css
.subsection.header {
  color: red;
}
```

`.subsection.header` seleziona ogni elemento che ha entrambe le classi `subsection` e `header`. Nota come non c'è alcuno spazio tra i selettori di `class` `.subsection` e `.header`. Questa sintassi funziona fondamentalmente per concatenare qualsiasi combinazione di selettori, tranne che per concatenare più di un selettore di tipo.

Può essere anche usata per concatenare una classe e un ID, come mostrato di seguito:

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
```

È possibile prendere i due elementi qui sopra e combinarli come segue:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

In generale, non è possibile concatenare più di un selettore di tipo in quanto un elemento non può essere due tipi di elemento diversi contemporaneamente. Ad esempio, concatenare due selettori di tipo come `div` e `p` darebbe il selettore `divp`, che non funzionerebbe dal momento che il selettore cercherebbe di trovare un elemento letterale `<divp>`, che non esiste.

# --question--

## --text--

Dato un elemento che ha un `id` di `title` e una `class` di `primary`, come useresti entrambi gli attributi per una singola regola?

## --answers--

```css
.title.primary {
  ...
}
```

---

```css
.title > primary {
  ...
}
```

---

```css
#title.primary { 
  ...
}
```


## --video-solution--

3
