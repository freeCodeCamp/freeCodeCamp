---
id: 5e44413e903586ffb414c94e
title: App per il budget
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


# --instructions--

Completa la classe `Category` in `budget.py`. Dovrebbe essere in grado di instanziare oggetti basati su diverse categorie di budget, come *food*, *clothing*, e *entertainment*. Quando gli oggetti sono creati, ricevono come argomento il nome della categoria. La classe dovrebbe avere una classe di istanza chiamata `ledger` che è una lista. La classe dovrebbe anche contenere i seguenti metodi:

- Un metodo di deposito `deposit` che accetta un valore e una descrizione. Se non è data alcuna descrizione, dovrebbe essere una stringa vuota come default. Il metodo dovrebbe aggiungere un oggetto alla lista ledger nella forma di `{"amount": amount, "description": description}`.
- Un metodo di prelievo `withdraw` che è simile al metodo `deposit`, ma il valore dato come argomento dovrebbe essere salvato in ledger come un valore negativo. Se non ci sono abbastanza fondi, nulla dovrebbe essere aggiunto al ledger. Il metodo dovrebbe restituire `True` se il prelievo ha avuto atto, e `False` altrimenti.
- Un metodo per ottenere la giacenza attuale `get_balance` che restituisce l'ammontare nella categoria del budget basato su depositi e prelievi che hanno avuto luogo.
- Un metodo di trasferimento `transfer` che accetta un ammontare e un'altra categoria come argomenti. Il metodo dovrebbe aggungere un prelievo con l'ammontare e la descrizione "Transfer to [Categoria del budget di destinazione]". Il metodo dovrebbe aggiungere un deposito all'altra categoria del budget con l'ammontare e la descrizione "Transfer from [Categoria del Budget di origine]". Se non ci sono abbastanza fondi, nulla dovrebbe essere aggiunto a nessuno dei due ledger. Questo metodo dovrebbe restituire `True` se il trasferimento ha avuto luogo, e `False` altrimenti.
- Un metodo `check_funds` che accetta un ammontare come argomento. Restituisce `False` se l'ammontare è più grande del saldo della categoria del budget e `True` altrimenti. Questo metodo dovrebbe essere usato sia dal metodo `withdraw` che dal metodo `transfer`.

Quando l'oggetto budget è stampato dovrebbe mostrare:

- Una riga di titolo di 30 caratteri dove il nome della categoria è centrato in una riga di caratteri `*`.
- Una lista delle transazioni nel ledger. Ogni linea dovrebbe mostrare la descrizione e l'ammontare. I primi 23 caratteri della descrizione dovrebbero essere mostrati, poi l'ammontare. L'ammontare dovrebbe essere allineato a destra, avere due cifre decimali, e mostrare un massimo di 7 caratteri.
- Una riga che mostra il totale della categoria.

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
