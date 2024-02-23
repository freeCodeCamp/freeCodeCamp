---
id: 5e46f979ac417301a38fb932
title: Portscanner
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Videokurs: Python für jedermann</a> (14 Stunden)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Lerne ausführlich die Python-Grundlagen </a> (4 Stunden)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Python-Kurs für Fortgeschrittene</a> (6 Stunden)

# --instructions--

Erstelle einen Portscanner mit Python.

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

Achte auf einen korrekten Zeilenabstand und neue Zeilenzeichen.

If the URL passed into the `get_open_ports` function is invalid, the function should return the string: "Error: Invalid hostname".

If the IP address passed into the `get_open_ports` function is invalid, the function should return the string: "Error:  Invalid IP address".

## Entwicklung

Schreibe deinen Code in `port_scanner.py`. Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen.

## Testen

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience.

## Submitting

Kopiere die URL deines Projekts und übermittle sie an freeCodeCamp.

# --hints--

Es sollte alle Python-Tests bestehen.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
