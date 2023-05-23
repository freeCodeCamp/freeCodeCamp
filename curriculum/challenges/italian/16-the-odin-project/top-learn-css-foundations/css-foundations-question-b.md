---
id: 63ee35240d8d4841c3a7091b
videoId: LGQuIIv2RVA
title: Fondamenti di CSS Domanda B
challengeType: 15
dashedName: css-foundations-question-b
---

# --description--

I selettori di classe selezionano tutti gli elementi con un dato valore di `class`, che è un attributo assegnato a un elemento HTML. Ecco come aggiungere una classe a un tag HTML e selezionarla in CSS:

```html
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

Nota la sintassi dei selettori di `class`: un punto immediatamente seguito dal valore (sensibile alle maiuscole) dell'attributo di classe. Le classi non devono essere univoche, quindi puoi usare lo stesso valore di `class` su tutti gli elementi che vuoi.

Un'altra cosa che puoi fare con l'attributo `class` è aggiungere più classi a un singolo elemento, come un elenco separato da spazi, ad esempio `class="alert-text severe-alert"`. Dato che lo spazio viene usato per separare i nomi di `class`, non dovresti mai usare spazi per nomi composti da più parole, ma invece dovresti usare un trattino.

## Selettori di ID
I selettori di ID sono simili ai selettori di `class`. Selezionano un elemento con un dato `id`, che è un altro attributo assegnato a un elemento HTML:

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

Invece di un punto, si utilizza un cancelletto immediatamente seguito dal valore (sensibile alle maiuscole) dell'attributo `id`. Un pericolo comune è l'utilizzo eccessivo degli attributi `id` quando non sono necessari e sono sufficienti le classi. Mentre ci sono casi in cui l'utilizzo di un `id` ha senso o è necessario, per sfruttare la specificità o avere link che reindirizzano a una sezione della pagina corrente, dovresti usare gli `id` con parsimonia (o per nulla).

La differenza principale tra classi e ID è che un elemento può avere solo un `id`. Un `id` non può essere ripetuto sulla stessa pagina e l'attributo `id` non dovrebbe contenere alcuno spazio.

# --question--

## --text--

Qual è la sintassi per i selettori di classe e di ID?

## --answers--

Per selezionare una `class` si usa `$` e per selezionare un `id` si usa `#`

---

Per selezionare una `class` si usa `.` e per selezionare un `id` si usa `*`

---

Per selezionare una `class` si usa `.` e per selezionare un `id` si usa `#`


## --video-solution--

3
