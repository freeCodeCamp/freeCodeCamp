---
id: 637f4e8072c65bc8e73dfe2c
title: Lavorare con il Testo Domanda F
challengeType: 15
dashedName: working-with-text-question-f
---

# --description--

Potresti aver notato che in tutti gli esempi di questa lezione gli elementi che si trovano all'interno di altri elementi sono indentati. Ciò viene detto annidare gli elementi.

Quando si annidano elementi all'interno di altri elementi, tra loro si crea una relazione genitore-figlio. Gli elementi annidati sono i figli e l'elemento dentro al quale sono annidati è il genitore.

Nell'esempio seguente, l'elemento body è il genitore e paragrafo è il figlio:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
```

Proprio come nelle relazioni umane, gli elementi HTML genitori possono avere molti figli. Gli elementi allo stesso livello di annidamento sono considerati fratelli.

Ad esempio, i due paragrafi nel seguente codice sono fratelli, poiché sono entrambi figli del tag body e tra loro sono allo stesso livello di annidamento:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
```

L'indentazione si utilizza per rendere il livello di annidamento chiaro e leggibile a te stesso come ad altri sviluppatori che lavoreranno con il tuo HTML in futuro. Si raccomanda di indentare ogni elemento figlio di due spazi.

Il genitore, il figlio e le relazioni di fratellanza tra gli elementi diventeranno molto più importanti in seguito quando inizierai a definire lo stile del tuo HTML con CSS e ad aggiungere un comportamento con JavaScript. Per ora, tuttavia, è importante conoscere soltanto la distinzione tra come sono correlati gli elementi e la terminologia utilizzata per descrivere le loro relazioni.

# --question--

## --text--

Che relazione hanno un elemento e un elemento annidato al suo interno?

## --answers--

L'elemento all'interno dell'altro elemento è chiamato elemento genitore.

---

L'elemento all'interno dell'altro elemento è chiamato elemento figlio.

---

L'elemento all'interno dell'altro elemento è chiamato elemento fratello.


## --video-solution--

2
