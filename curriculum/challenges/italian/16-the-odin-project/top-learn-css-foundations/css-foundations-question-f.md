---
id: 63ee353e0d8d4841c3a7091f
videoId: LGQuIIv2RVA
title: CSS Foundations Question F
challengeType: 15
dashedName: css-foundations-question-f
---

# --description--

Ok, hai visto parecchie cose finora. The only thing left for now is to go over how to add all this CSS to your HTML. There are three methods to do so.

Il CSS esterno è il metodo più comune che incontrerai, e prevede la creazione di un file separato per il CSS e il collegamento nell'HTML all'interno dei tag `<head>` di apertura e chiusura tramite un elemento `<link>` a chiusura automatica:

Innanzitutto, aggiungi un elemento `<link>` a chiusura automatica all'interno dei tag `<head>` del file HTML. The `href` attribute is the location of the CSS file, either an absolute URL or, what you’ll be utilizing, a URL relative to the location of the HTML file. Nell'esempio precedente, si suppone che entrambi i file si trovino nella stessa directory. L'attributo `rel` è obbligatorio e specifica la relazione tra il file HTML e il file collegato.

All'interno del file `styles.css` appena creato, c'è il selettore (`div` e `p`), seguito da un paio di parentesi graffe, che creano un “blocco di dichiarazione”. Infine, all'interno del blocco di dichiarazione ci sono le dichiarazioni. `color: white;` è una dichiarazione, dove `color` è la proprietà e `white` è il valore, e `background-color: black;` è un'altra dichiarazione.

Una nota sui nomi dei file: `styles.css` è proprio quello che hai usato come nome del file. Puoi chiamare un file come desideri, finché la sua estensione è `.css`, anche se “style” o “styles” sono i nomi più usati.

Un paio di pro di questo metodo sono:

1. Mantiene HTML e CSS separati, il che comporta che il file HTML sia più piccolo e che le cose siano più ordinate.
2. Devi modificare il CSS in un unico posto, il che è particolarmente comodo per siti web con molte pagine che condividono stili simili.

# --question--

## --text--

Quale delle seguente risposte descrive meglio lo scopo dell'attributo `rel` di un elemento `<link>` nel collegamento di un file CSS esterno a un file HTML?

## --answers--

Specifica la posizione del file CSS rispetto alla posizione del file HTML.

---

Specifica la relazione tra il file HTML e il file collegato.

---

Specifica il tipo di file collegato (ad esempio "stylesheet").


## --video-solution--

2
