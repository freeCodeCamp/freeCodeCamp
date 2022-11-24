---
id: 5e44412c903586ffb414c94c
title: Formattatore aritmetico
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


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


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

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
