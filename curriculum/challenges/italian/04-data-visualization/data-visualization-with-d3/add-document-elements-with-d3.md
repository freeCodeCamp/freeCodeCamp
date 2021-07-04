---
id: 587d7fa6367417b2b2512bc2
title: Aggiungere elementi a un documento con D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 ha diversi metodi che consentono di aggiungere e modificare elementi nel documento.

Il metodo `select()` seleziona un elemento del documento. Esso richiede un argomento per il nome dell'elemento che si desidera e restituisce un nodo HTML per il primo elemento del documento che corrisponde a quel nome. Ecco un esempio:

```js
const anchor = d3.select("a");
```

L'esempio precedente trova il primo tag di ancoraggio sulla pagina e salva un nodo HTML nella variabile `anchor`. È possibile utilizzare la selezione con altri metodi. La parte `d3` dell'esempio è un riferimento all'oggetto D3, che è il modo usato per accedere ai metodi D3.

Altri due metodi utili sono `append()` e `text()`.

Il metodo `append()` richiede un argomento per l'elemento che si desidera aggiungere al documento. Esso aggiunge un nodo HTML a un elemento selezionato e restituisce un handle (un appiglio) a quel nodo.

Il metodo `text()` imposta il testo del nodo selezionato, o ottiene il testo corrente. Per impostare il valore, si passa una stringa come argomento all'interno delle parentesi del metodo.

Ecco un esempio che seleziona una lista non ordinata, aggiunge un elemento alla lista e aggiunge del testo:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 consente di concatenare diversi metodi tra loro con dei punti per eseguire un certo numero di azioni in una stessa riga.

# --instructions--

Usa il metodo `select` per selezionare il tag `body` nel documento. Quindi aggiungi ad esso (`append`) un tag `h1` e aggiungi il testo `Learning D3` nell'elemento `h1`.

# --hints--

Il `body` dovrebbe avere un elemento `h1`.

```js
assert($('body').children('h1').length == 1);
```

L'elemento `h1` dovrebbe contenere il testo `Learning D3`.

```js
assert($('h1').text() == 'Learning D3');
```

Il tuo codice dovrebbe accedere all'oggetto `d3`.

```js
assert(code.match(/d3/g));
```

Il tuo codice dovrebbe utilizzare il metodo `select`.

```js
assert(code.match(/\.select/g));
```

Il tuo codice dovrebbe utilizzare il metodo `append`.

```js
assert(code.match(/\.append/g));
```

Il tuo codice dovrebbe usare il metodo `text`.

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
