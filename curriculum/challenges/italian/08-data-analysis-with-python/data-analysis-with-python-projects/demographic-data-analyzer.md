---
id: 5e46f7e5ac417301a38fb929
title: Analizzatore di dati demografici
challengeType: 10
forumTopicId: 462367
dashedName: demographic-data-analyzer
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-demographic-data-analyzer" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice iniziale su Replit</a>.

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.


Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Video corso Python for Everybody</a> (14 ore)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow"> Come analizzare i dati con Python Pandas </a>(10 ore)

# --instructions--

In questa sfida è necessario analizzare i dati demografici utilizzando Pandas. Ti viene fornito un insieme di dati demografici estratti dalla banca dati del Census del 1994. Ecco un esempio di come appaiono i dati:

```markdown
|    |   age | workclass        |   fnlwgt | education   |   education-num | marital-status     | occupation        | relationship   | race   | sex    |   capital-gain |   capital-loss |   hours-per-week | native-country   | salary   |
|---:|------:|:-----------------|---------:|:------------|----------------:|:-------------------|:------------------|:---------------|:-------|:-------|---------------:|---------------:|-----------------:|:-----------------|:---------|
|  0 |    39 | State-gov        |    77516 | Bachelors   |              13 | Never-married      | Adm-clerical      | Not-in-family  | White  | Male   |           2174 |              0 |               40 | United-States    | <=50K    |
|  1 |    50 | Self-emp-not-inc |    83311 | Bachelors   |              13 | Married-civ-spouse | Exec-managerial   | Husband        | White  | Male   |              0 |              0 |               13 | United-States    | <=50K    |
|  2 |    38 | Private          |   215646 | HS-grad     |               9 | Divorced           | Handlers-cleaners | Not-in-family  | White  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  3 |    53 | Private          |   234721 | 11th        |               7 | Married-civ-spouse | Handlers-cleaners | Husband        | Black  | Male   |              0 |              0 |               40 | United-States    | <=50K    |
|  4 |    28 | Private          |   338409 | Bachelors   |              13 | Married-civ-spouse | Prof-specialty    | Wife           | Black  | Female |              0 |              0 |               40 | Cuba             | <=50K    |
```

È necessario utilizzare Pandas per rispondere alle seguenti domande:

- Quante persone di ogni razza sono rappresentate in questo set di dati? Questa dovrebbe essere una serie di Pandas con nomi delle razze come etichette indice. (colonna `race`)
- Qual è l'età media degli uomini?
- Qual è la percentuale di persone che hanno una laurea triennale?
- Quale percentuale di persone con istruzione avanzata (`Bachelors`, `Masters`, o `Doctorate`) guadagnano più di 50K?
- Quale percentuale di persone prive di istruzione avanzata guadagna più di 50K?
- Qual è il numero minimo di ore lavorative a settimana?
- Quale percentuale delle persone che lavorano il numero minimo di ore settimanali ha uno stipendio superiore a 50K?
- Quale paese ha la più alta percentuale di persone che guadagnano >50K e qual è quella percentuale?
- Identifica l'occupazione più popolare per chi guadagna >50K in India.

Utilizza il codice iniziale nel file `demographic_data_analyzer`. Aggiorna il codice in modo che tutte le variabili impostate su "None" siano impostate al calcolo o al codice appropriato. Arrotonda tutti i decimali al decimo (una cifra decimale) più vicino.

I test unitari sono scritti per te in `test_module.py`.

## Sviluppo

Nello sviluppo, puoi usare `main.py` per testare le tue funzioni. Fai clic sul pulsante "Run" e `main.py` verrà eseguito.

## Test

Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e consegnalo nell'input qua sotto.

## Fonte Dataset

Dua, D. e Graff, C. (2019). <a href="http://archive.ics.uci.edu/ml" target="_blank" rel="noopener noreferrer nofollow">UCI Machine Learning Repository</a>. Irvine, CA: University of California, School of Information and Computer Science.

# --hints--

Dovrebbe superare tutti i test Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
