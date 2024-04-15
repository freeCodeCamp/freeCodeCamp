---
id: 637f4e2f72c65bc8e73dfe22
title: HTML-Grundlagen Frage E
challengeType: 15
dashedName: html-foundations-question-e
---

# --description--

Das `<head>`-Element enthält wichtige Metainformationen über deine Websites und Dinge, die erforderlich sind, damit deine Websites im Browser korrekt dargestellt werden. Innerhalb von `<head>` solltest du kein Element verwenden, das Inhalte auf der Website anzeigt.

## The Charset Meta Element
Du solltest das `meta`-Tag für die `charset` Kodierung der Website immer im `head`-Element haben: `<meta charset="utf-8">`.

Das Einstellen der Kodierung ist sehr wichtig, da es sicherstellt, dass die Website spezielle Symbole und Zeichen aus verschiedenen Sprachen im Browser korrekt anzeigt.

## Titelelement
Ein weiteres Element, dass du immer im Head eines HTML-Dokuments einfügen solltest, ist das `title`-Element:

```html
<title>My First Webpage</title>
```

Das `title`-Element wird verwendet, um Websites einen für Menschen lesbaren Titel zu geben, der im Browser-Tab deiner Website angezeigt wird.

Wenn du kein `title`-Element einfügst, wird als Titel der Website der Dateiname verwendet. In deinem Fall wäre das `index.html`, was für Nutzer nicht sehr aussagekräftig ist; dies würde es sehr schwierig machen, deine Website zu finden, wenn der Nutzer viele Browser-Tabs geöffnet hat.

Es gibt viele weitere Elemente, die im `head` eines HTML-Dokuments eingefügt werden können. Im Moment ist es jedoch nur wichtig, die beiden Elemente zu kennen, die du hier behandelt hast. Im weiteren Verlauf des Lehrplans wirst du weitere Elemente einführen, die in den `head` gehören.

Zurück in der `index.html`-Datei, fügen wir ein `head`-Element mit einem `charset` `meta`-Element und einem `title` hinzu. Das head-Element befindet sich innerhalb des HTML-Elements und sollte immer das erste Element unter dem öffnenden `<html>`-Tag sein:


```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

# --question--

## --text--

Was ist der Zweck des `head`-Elements?

## --answers--

Das `head`-Element wird verwendet, um alle Elemente anzuzeigen, die auf der Website angezeigt werden.

---

Das `head`-Element wird verwendet, um wichtige Informationen über deine Website anzuzeigen und, um Websites mit `meta`-Elementen korrekt darzustellen.

---

Das `head`-Element wird verwendet, um den Inhalt der Kopfzeile oben auf der Website anzuzeigen.


## --video-solution--

2
