---
id: 5e46f979ac417301a38fb932
title: Scanner di porte
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

Lavorerari a [questo progetto con il nostro codice d'inizio su Replit](https://replit.com/github/freeCodeCamp/boilerplate-port-scanner).

Stiamo ancora sviluppando la parte didattica interattiva del curriculum di Python. Per ora, ecco alcuni video sul canale YouTube di freeCodeCamp.org che ti insegneranno tutto quello che devi sapere per completare questo progetto:

- [Video corso Python for Everybody](https://www.freecodecamp.org/news/python-for-everybody/) (14 ore)

- [Video corso Learn Python](https://www.freecodecamp.org/news/learn-python-video-course/) (10 ore)

# --instructions--

Crea uno scanner di porte usando Python.

Nel file `port_scanner.py` file, crea una funzione denominata `get_open_ports` che richiede un argomento `target` e un argomento `port_range`. `target` può essere un URL o un indirizzo IP. `port_range` è un elenco di due numeri che indicano il primo e l'ultimo numero dell'intervallo di porte da controllare.

Ecco alcuni esempi di come può essere chiamata la funzione:

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

La funzione dovrebbe restituire un elenco di porte aperte nell'intervallo specificato.

La funzione `get_open_ports` dovrebbe anche prendere un terzo argomento opzionale di `True` per indicare la modalità "Verbose". Se impostata a true, la funzione dovrebbe restituire una stringa descrittiva invece di una lista di porte.

Ecco il formato della stringa che dovrebbe essere restituita in modalità verbose (il testo all'interno di `{}` indica le informazioni che dovrebbero apparire):

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

Puoi usare il dizionario in `common_ports.py` per ottenere il nome del servizio corretto per ogni porta.

Ad esempio, se la funzione è chiamata così:

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

Dovrebbe restituire quanto segue:

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

Assicurati di includere una spaziatura adeguata e nuovi caratteri di riga.

Se l'URL passato alla funzione `get_open_ports` non è valido, la funzione dovrebbe restituire la stringa: "Error: Invalid hostname".

Se l'indirizzo IP passato alla funzione `get_open_ports` non è valido, la funzione dovrebbe restituire la stringa: "Error: Invalid IP address".

## Sviluppo

Scrivi il tuo codice in `port_scanner.py`. Per lo sviluppo, puoi usare `main.py` per testare il tuo codice. Fare clic sul pulsante "Run" e `main.py` verrà eseguito.

## Test

I test unitari per questo progetto sono in `test_module.py`. Abbiamo importato i test da `test_module.py` in `main.py` per tua comodità. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e invialo a freeCodeCamp.

# --hints--

Dovrebbe superare tutti i test di Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
