---
id: 5e44413e903586ffb414c94e
title: Budget-App
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

Vervollständige die `Category`-Klasse in `budget.py`. Es sollte in der Lage sein, Objekte basierend auf verschiedenen Haushaltskategorien, wie *food*, *clothing*, und *entertainment* zu instanziieren. Wenn Objekte erstellt werden, werden sie im Namen der Kategorie übergeben. Die Klasse sollte eine Instanzvariable namens `ledger` (Hauptbuch) haben, die eine Liste ist. Die Klasse sollte auch die folgenden Methoden beinhalten:

- A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
- A `get_balance` method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
- A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
- A `check_funds` method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.

Wenn das Budgetobjekt ausgegeben wird, sollte es folgendes anzeigen:

- A title line of 30 characters where the name of the category is centered in a line of `*` characters.
- A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
- A line displaying the category total.

Hier ist ein Beispiel für die Ausgabe:

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

Neben der `Category`-Klasse, erstelle eine Funktion (außerhalb der Klasse) namens `create_spend_chart`, die eine Liste der Kategorien als Argument verwendet. Es sollte einen String zurückgeben, das ein Balkendiagramm ist.

Das Diagramm sollte den Prozentsatz jeder Kategorie anzeigen, die an die Funktion übergeben wurde. Der ausgegebene Prozentsatz sollte nur mit den Auszahlungen und nicht mit den Einzahlungen berechnet werden. Unten auf der linken Seite des Diagramms sollten die Labels 0 - 100 stehen. Die "Balken" im Balkendiagramm sollten aus dem "o"-Zeichen gemacht werden. Die Höhe jedes Balken sollte auf die nächstgelegene 10 abgerundet werden. Die horizontale Linie unter den Balken sollte zwei Leerzeichen hinter der Endleiste haben. Jeder Kategoriename sollte vertikal unterhalb des Balkens angegeben werden. Ganz oben sollte ein Titel stehen, der "Prozentsatz der Ausgaben nach Kategorie" angibt.

Die Funktion wird mit bis zu vier Kategorien getestet.

Schau dir die Beispielausgabe unten sehr genau an und stelle sicher, dass der Abstand der Ausgabe genau dem Beispiel entspricht.

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

Die Unit-Tests für dieses Projekt sind in `test_module.py`.

## Entwicklung

Schreibe deinen Code in `budget.py`. Für die Entwicklung kannst du `main.py` verwenden, um die `Category`-Klasse zu testen. Klicke den "Run"-Button und `main.py` wird ausgeführt.

## Testen

Wir haben die Tests von `test_module.py` zu `main.py` bereits für dich importiert. Die Tests werden automatisch ausgeführt, wenn du auf den "Run"-Button klickst.

## Absenden

Kopiere die URL deines Projekts und sende sie an freeCodeCamp.

# --hints--

Sie sollte eine Kategorieklasse erstellen und alle Tests bestehen.

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
