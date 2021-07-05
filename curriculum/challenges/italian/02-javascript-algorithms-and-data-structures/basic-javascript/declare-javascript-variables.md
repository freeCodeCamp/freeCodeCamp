---
id: bd7123c9c443eddfaeb5bdef
title: Dichiarare le variabili in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

In informatica, <dfn>i dati</dfn> sono tutto ciò che è significativo per il computer. JavaScript fornisce otto diversi <dfn>tipi di dati</dfn> che sono `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` e `object`.

Per esempio, i computer distinguono tra numeri (come il numero `12`) e `strings` (come `"12"`, `"dog"`, o `"123 cats"`), che sono sequenze di caratteri. I computer possono eseguire operazioni matematiche su un numero, ma non su una stringa.

Le <dfn>variabili</dfn> consentono ai computer di archiviare e manipolare i dati in modo dinamico. Lo fanno utilizzando una "etichetta" per puntare ai dati piuttosto che usare i dati stessi. Ognuno degli otto tipi di dati può essere conservato in una variabile.

Le variabili sono simili alle variabili x e y che usi nella matematica, cioè sono un nome semplice per rappresentare i dati a cui vogliamo riferirci. Le variabili del computer differiscono dalle variabili matematiche in quanto possono memorizzare valori diversi in momenti diversi.

Diciamo a JavaScript di creare o <dfn>dichiarare</dfn> una variabile mettendo di fronte la parola chiave `var`, in questo modo:

```js
var ourName;
```

crea una variabile chiamata `ourName`. In JavaScript terminiamo le istruzioni con i punti e virgola. I nomi delle variabili possono essere costituiti da numeri, lettere e `$` o `_`, ma non possono contenere spazi o iniziare con un numero.

# --instructions--

Usa la parola chiave `var` per creare una variabile chiamata `myName`.

**Suggerimento**  
Guarda l'esempio `ourName` qui sopra se sei bloccato.

# --hints--

Dovresti dichiarare `myName` con la parola chiave `var` terminando con un punto e virgola

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
