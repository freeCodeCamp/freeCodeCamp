---
id: 5e44413e903586ffb414c94e
title: App per il budget
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

Completa la classe `Category` in `budget.py`. Dovrebbe essere in grado di instanziare oggetti basati su diverse categorie di budget, come *food*, *clothing*, e *entertainment*. Quando gli oggetti sono creati, ricevono come argomento il nome della categoria. La classe dovrebbe avere una classe di istanza chiamata `ledger` che è una lista. La classe dovrebbe anche contenere i seguenti metodi:

- A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
- A `get_balance` method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
- A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
- A `check_funds` method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.

Quando l'oggetto budget è stampato dovrebbe mostrare:

- A title line of 30 characters where the name of the category is centered in a line of `*` characters.
- A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
- A line displaying the category total.

Ecco un esempio dell'output:

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

Oltre la classe `Category`, crea una funzione, al di fuori della classe, chiamata `create_spend_chart` che prende una lista di categorie come argomento. Dovrebbe restituire una stringa che è un grafico a barre.

Il grafico dovrebbe mostrare la percentuale spesa in ogni categoria passata alla funzione. La percentuale spesa dovrebbe essere calcolata solo con i prelievi e non i depositi. Lungo il lato sinistro del grafico dovrebbero esserci etichette 0 - 100. Le barre nel grafico dovrebbero essere fatte di caratteri "o". L'altezza di ogni barra dovrebbe essere arrotondata per difetto alla decina più vicina. La linea orizzontale sotto le barre dovrebbe finire due caratteri dopo l'ultima barra. Ogni nome di categoria dovrebbe essere scritto verticalmente sotto la barra. Dovrebbe esserci un titolo in cima che dice "Percentage spent by category".

Questa funzione sarà testata con al massimo quattro categorie.

Guarda all'esempio di output qui sotto con attenzione e assicurati che gli spazi dell'output combacino esattamente con l'esempio.

```bash
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

I test unitari per questo progetto sono in `test_module.py`.

## Sviluppo

Scrivi il tuo codice in `budget.py`. Per lo sviluppo, puoi usare `main.py` per testare la tua funzione `Category`. Usa il bottone "run" e `main.py` sarà eseguito.

## Testare

Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Consegnare

Copia l'URL del tuo progetto e consegnalo nell'input qua sotto.

# --hints--

Dovrebbe creare una classe Category e superare tutti i test.

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
