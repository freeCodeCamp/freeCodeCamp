---
id: 5e46f983ac417301a38fb933
title: SHA-1 Passwort-Cracker
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

Wir sind noch dabei, den interaktiven Teil des Python-Kurses zu entwickeln. Hier sind einige Videos auf dem freeCodeCamp.org YouTube-Kanal, die dir alles beibringen, was du wissen musst, um dieses Projekt abzuschließen:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Passwords should never be stored in plain text. They should be stored as hashes, just in case the password list is discovered. Allerdings werden nicht alle Hashwerte gleich erstellt.

In diesem Projekt lernst du die Bedeutung guter Sicherheit kennen, indem du einen Passwort-Cracker erstellst, um Passwörter herauszufinden, die mit SHA-1 gehasht wurden.

Create a function that takes in a SHA-1 hash of a password and returns the password if it is one of the top 10,000 passwords used. Wenn der SHA-1 Hash NICHT von einem Passwort in der Datenbank ist, gib "PASSWORT NICHT IN DATABASE" zurück.

Die Funktion sollte jedes Passwort mit `top-10000-passwords.txt` hashen und mit dem Hashwert vergleichen, der in die Funktion übergeben wurde.

Die Funktion sollte ein optionales zweites Argument mit dem Namen `use_salts` verwenden. If set to true, each salt string from the file `known-salts.txt` should be appended AND prepended to each password from `top-10000-passwords.txt` before hashing and before comparing it to the hash passed into the function.

Hier sind ein paar gehashte Passwörter, mit denen die Funktion getestet werden kann:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` sollte "sammy123" zurückgeben
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` should return "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` sollte "Passwort" zurückgeben

Hier sind einige gehashte Passwörter, mit denen die Funktion getestet werden soll, wenn `use_salts` auf `True` gesetzt ist:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` should return "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` should return "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` sollte "bubbles1" zurückgeben

Die `hashlib`-Bibliothek wurde für dich importiert. You should consider using it in your code. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Erfahre hier mehr über "hashlib" </a>.

## Entwicklung

Schreibe deinen Code in `password_cracker.py`. Für die Entwicklung kannst du `main.py` verwenden, um deinen Code zu testen.

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
