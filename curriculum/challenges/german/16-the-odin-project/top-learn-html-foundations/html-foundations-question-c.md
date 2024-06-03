---
id: 637f4e1c72c65bc8e73dfe20
title: HTML-Grundlagen Frage C
challengeType: 15
dashedName: html-foundations-question-c
---

# --description--

Um eine HTML-Boilerplate zu demonstieren, benötigst du zunächst eine HTML-Datei, mit der du arbeiten kannst.

Create a new folder on your computer and name it `html-boilerplate`. Erstelle innerhalb dieses Ordners eine neue Datei und benenne sie `index.html`.

Wahrscheinlich bist du bereits mit vielen verschiedenen Dateitypen vertraut, z. B. Doc-, PDF- und Bilddateien.

Damit der Computer weiß, dass du eine HTML-Datei erstellen möchtest, musst du den Dateinamen mit der `.html`-Erweiterung anhängen, wie du es bei der Erstellung der `index.html`-Datei getan hast.

Es ist wichtig zu erwähnen, dass du deine HTML-Datei index benannt hast. Du solltest die HTML-Datei, die die Startseite deiner Websites enthält, immer `index.html` nennen. Dies liegt daran, dass Webserver standardmäßig nach einer `index.html`-Seite suchen, wenn Nutzer auf deine Websites gelangen - und das Fehlen einer solchen Seite kann große Probleme verursachen.

## Der DOCTYPE

Jede HTML-Seite beginnt mit einer Doctype-Deklaration. Der Zweck des Doctypes ist es, dem Browser mitzuteilen, welche HTML-Version er verwenden soll, um das Dokument darzustellen. Die neueste HTML-Version ist HTML5 und der Doctype für diese Version ist einfach `<!DOCTYPE html>`.

Die Doctypen für ältere HTML-Versionen waren etwas komplizierter. Zum Beispiel ist dies die Doctype-Deklaration für HTML4:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

Allerdings wirst du wahrscheinlich nie eine ältere Version von HTML verwenden wollen, und deshalb wirst du immer `<!DOCTYPE html>` verwenden.

Öffne die `index.html`-Datei, die zuvor in deinem Texteditor erstellt wurde, und füge in die allererste Zeile `<!DOCTYPE html>` ein.

# --question--
## --text--

Was ist der Zweck der `DOCTYPE`-Deklaration?

## --answers--

Sie teilt dem Browser mit, welche HTML-Version verwendet werden soll, um das Dokument darzustellen.

---

Sie teilt dem Browser mit, dass dieses Dokument JavaScript verwendet.

---

Sie teilt dem Browser den Titel des Dokuments mit.


## --video-solution--

1
