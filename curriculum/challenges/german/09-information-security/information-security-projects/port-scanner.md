---
id: 5e46f979ac417301a38fb932
title: Portscanner
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

Du wirst <a href="https://replit.com/github/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">mit unserem Replit-Startercode</a> an diesem Projekt arbeiten.

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.


Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. For now, here are some videos on the freeCodeCamp.org YouTube channel that will teach you everything you need to know to complete this project:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Videokurs: Python für jedermann</a> (14 Stunden)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Lerne ausführlich die Python-Grundlagen </a> (4 Stunden)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python-Kurs für Fortgeschrittene</a> (6 Stunden)

# --instructions--

Create a port scanner using Python.

Erstelle eine Funktion in der `port_scanner.py`-Datei namens `get_open_ports`, die ein `target` Argument und ein `port_range` Argument verwendet. `target` kann eine URL oder IP-Adresse sein. `port_range` ist eine Liste von zwei Zahlen, die die erste und letzte Zahl des zu überprüfenden Ports angeben.

Hier sind Beispiele dafür, wie die Funktion aufgerufen werden kann:

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

Die Funktion sollte eine Liste der offenen Ports im angegebenen Bereich übermitteln.

Die `get_open_ports` Funktion sollte auch ein optionales drittes Argument von `True` verwenden, um den "Verbose"-Modus anzuzeigen. Wenn diese Option auf true gesetzt ist, sollte die Funktion einen beschreibenden String anstelle einer Liste von Ports zurückgeben.

Here is the format of the string that should be returned in verbose mode (text inside `{}` indicates the information that should appear):

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

Du kannst das Wörterbuch in `common_ports.py` verwenden, um den korrekten Dienstnamen für jeden Port zu erhalten.

Zum Beispiel, wenn die Funktion wie folgt aufgerufen wird:

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

Sollte sie folgendes übermitteln:

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

Make sure to include proper spacing and new line characters.

If the URL passed into the `get_open_ports` function is invalid, the function should return the string: "Error: Invalid hostname".

If the IP address passed into the `get_open_ports` function is invalid, the function should return the string: "Error:  Invalid IP address".

## Entwicklung

Write your code in `port_scanner.py`. For development, you can use `main.py` to test your code. Click the "run" button and `main.py` will run.

## Testing

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.

## Submitting

Copy your project's URL and submit it to freeCodeCamp.

# --hints--

It should pass all Python tests.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
