---
id: 5e44412c903586ffb414c94c
title: Formattatore aritmetico
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


# --instructions--

Gli studenti delle elementari spesso scrivono l problemi aritmetici in colonna per risolverli più facilmente. Per esempio, "235 + 52" diventa:

```py
  235
+  52
-----
```

Crea una funzione che riceve una lista di stringhe che sono problemi aritmetici e restituisce i problemi disposti verticalmente e fianco a fianco. La funzione dovrebbe accettare un secondo argomento facoltativo. Quando il secondo argomento ha valore di `True`, devono essere mostrati anche i risultati.

## Esempio

Chiamata della funzione:

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

Output:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

Chiamata della funzione:

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

Output:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## Regole

La funzione restituirà la conversione corretta se i problemi dati sono correttamente formattati, altrimenti, deve **restituire** una **stringa** che descrive un errore significativo per l'utente.


- Situazioni che devono restituire un errore:
  - Se ci sono **troppi problemi** dati alla funzione. Il limite è **cinque**, più di ciò deve restituire: `Error: Too many problems.`
  - Gli operatori appropriati che la funzione accetterà sono **addizione** e **sottrazione**. Moltiplicazione e divisione devono dare un errore. Altri operatori non menzionati in questa lista non serve che vengano testati. L'errore restituito deve essere: `Error: Operator must be '+' or '-'.`
  - Ogni numero (operando) deve contenere solo cifre. Altrimenti, la funzione deve restituire: `Error: Numbers must only contain digits.`
  - Ogni operando (numero da ogni lato dell'operatore) ha una lunghezza di massimo 4 cirre. Altrimenti, la funzione deve restituire: `Error: Numbers cannot be more than four digits.`
- Se l'utente ha dato i problemi nel formato corretto, la conversione che restituisci deve seguire le seguenti regole:
  - Ci deve essere un singolo spazio tra l'operatore e il più lungo dei due operandi, l'operatore deve essere sulla stessa riga del secondo operando, entrambi gli operandi devono essere nell'ordine dato (il primo in alto, il secondo in basso).
  - I numeri devono essere allineati a destra.
  - Devono esserci quattro spazi tra ogni problema.
  - Ci devono essere dei trattini sotto ogni problema. I trattini devono avere la stessa larghezza del singolo problema. (L'esempio sopra mostra come deve apparire.)

## Sviluppo

Scrivi il tuo codice in `arithmetic_arranger.py`. Per lo sviluppo, puoi usare `main.py` per testare la tua funzione `arithmetic_arranger()`. Fai clic sul pulsante "Run" e `main.py` verrà eseguito.

## Testare

I test unitari per questo progetto sono in `test_module.py`. Stiamo eseguendo i test da `test_module.py` in `main.py` per la tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run". In alternativa puoi eseguire i test eseguendo `pytest` nella console.

## Consegnare

Copia l'URL del tuo progetto e consegnalo nell'input wua sotto.

# --hints--

Dovrebbe formattare correttamente un problema aritmetico e superare tutti i test.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
