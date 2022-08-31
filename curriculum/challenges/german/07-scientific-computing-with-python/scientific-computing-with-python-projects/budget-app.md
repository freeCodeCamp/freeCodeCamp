---
id: 5e44413e903586ffb414c94e
title: Budget-App
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode an diesem Projekt arbeiten</a>.

# --instructions--

Vervollständige die `Category`-Klasse in `budget.py`. Es sollte in der Lage sein, Objekte basierend auf verschiedenen Haushaltskategorien, wie *food*, *clothing*, und *entertainment* zu instanziieren. Wenn Objekte erstellt werden, werden sie im Namen der Kategorie übergeben. Die Klasse sollte eine Instanzvariable namens `ledger` (Hauptbuch) haben, die eine Liste ist. Die Klasse sollte auch die folgenden Methoden beinhalten:

- Eine `deposit`-Methode, die einen Betrag und eine Beschreibung akzeptiert. Wenn keine Beschreibung angegeben wird, sollte standardmäßig ein leerer String ausgegeben werden. Die Methode sollte ein Objekt zu der Hauptbuch-Liste in Form von `{"amount": amount, "description": description}` anhängen.
- Eine `withdraw`-Methode, die ähnlich zur `deposit`-Methode ist, aber der eingegebene Wert sollte im Hauptbuch als negative Zahl eingespeichert werden. Wenn nicht genügend Mittel zur Verfügung stehen, sollte nichts zum Hauptbuch hinzugefügt werden. Diese Methode sollte `True` zurückgeben, wenn die Auszahlung bereits stattgefunden hat und ansonsten `False` ausgeben.
- Eine `get_balance`-Methode, die das aktuelle Guthaben der Haushaltskategorie, basierend auf den eingegangen Ein-und Auszahlungen ausgibt.
- Eine `transfer`-Methode, die einen Betrag und eine andere Budgetkategorie als Arugment akzeptiert. Die Methode sollte eine Auszahlung mit dem Betrag und der Beschreibung "Transfer zu [Zielbudget-Kategorie]" hinzufügen. Die Methode sollte dann eine Einzahlung in die andere Budgetkategorie mit dem Betrag und der Beschreibung "Transfer from [Source Budget Category]" hinzufügen. Wenn nicht genügend Mittel zur Vefügung stehen, sollte nichts zum Hauptbuch hinzugefügt werden. Diese Methode sollte `True` zurückgeben, wenn die Auszahlung bereits stattgefunden hat und ansonsten `False` ausgeben.
- Eine `check_funds`-Methode, die einen Betrag als Argument akzeptiert. Es gibt `False` zurück, wenn der Betrag größer ist als der Betrag der Budgetkategorie und ansonsten `True`. Die Methode sollte sowohl von der `withdraw`-Methode und der `transfer`-Methode verwendet werden.

Wenn das Budgetobjekt ausgegeben wird, sollte es folgendes anzeigen:

- Eine Titelzeile mit 30 Zeichen, in der der Name der Kategorie in einer Zeile von `*` Zeichen zentriert ist.
- Eine Liste der Elemente im Hauptbuch. Jede Zeile sollte die Beschreibung und den Betrag anzeigen. Die ersten 23 Zeichen der Beschreibung sollten angezeigt werden, dann der Betrag. Der Betrag sollte rechts ausgerichtet sein, zwei Dezimalstellen enthalten und maximal 7 Zeichen anzeigen.
- Eine Zeile, die die Summe der Kategorie anzeigt.

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
