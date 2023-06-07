---
id: 637f703572c65bc8e73dfe35
title: Link e Immagini Domanda B
challengeType: 15
dashedName: links-and-images-question-b
---

# --description--

Per prendere la mano con l'utilizzo di link e immagini, in questa lezione avrai bisogno di un progetto HTML su cui lavorare.

- Crea una nuova cartella chiamata `odin-links-and-images`.

- All'interno di questa cartella crea un nuovo file chiamato `index.html`.

- Inserisci il solito boilerplate HTML.

- infine, aggiungi il seguente `h1` al `body`: `<h1>Homepage</h1>`

## Elementi di ancoraggio
Per creare un link in HTML, si utilizza l'elemento di ancoraggio. Un elemento di ancoraggio viene definito racchiudendo in un tag `<a>` il testo o un altro elemento HTML che si desidera trasformare in un link. Aggiungi quanto segue al `body` della pagina `index.html` che hai creato e aprila nel browser:

```html
<a>click me</a>
```

Potresti aver notato che se fai clic su questo link non accade nulla. Questo perché un tag di ancoraggio da solo non sa a cosa vuoi collegarti. Occorre fornirgli una destinazione verso cui andare. E lo si fa utilizzando un attributo HTML. Un attributo HTML fornisce informazioni aggiuntive a un elemento HTML e va sempre nel tag di apertura dell'elemento. Di solito, un attributo è composto da due parti: un nome e un valore; tuttavia, non tutti gli attributi richiedono un valore. Nel tuo caso, devi aggiungere un attributo `href` (hyperlink reference) al tag di ancoraggio di apertura. Il valore dell'attributo `href` corrisponde alla destinazione del collegamento. Aggiungi il seguente attributo `href` all'elemento di ancoraggio che hai creato in precedenza e riprova a cliccarlo, non dimenticare di aggiornare il browser in modo che le nuove modifiche possano essere applicate.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

Per impostazione predefinita, qualsiasi testo avvolto con un tag di ancoraggio senza un attributo `href` apparirà come del testo semplice. Se l'attributo `href` è presente, il browser darà al testo un colore blu e lo sottolineerà per indicare che è un link. Vale la pena notare che è possibile utilizzare tag di ancoraggio per linkare qualsiasi tipo di risorsa su internet, non solo altri documenti HTML. È possibile linkare video, file pdf, immagini e così via, ma per la maggior parte dei casi avrai a che fare con altri documenti HTML.

# --question--
## --text--

Cos'è un attributo?
## --answers--

Un attributo HTML fornisce informazioni aggiuntive a un elemento HTML e va sempre nel tag di chiusura dell'elemento.

---

Un attributo HTML viene utilizzato per dire al browser cosa contiene l'elemento.

---

Un attributo HTML fornisce informazioni aggiuntive a un elemento HTML e va sempre nel tag di apertura dell'elemento.


## --video-solution--

3
