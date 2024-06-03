---
id: 637f703572c65bc8e73dfe35
title: Links und Bilder Frage B
challengeType: 15
dashedName: links-and-images-question-b
---

# --description--

Um die Verwendung von Links und Bildern in dieser Lektion zu üben, benötigst du ein HTML-Projekt, mit dem du arbeiten kannst.

- Erstelle ein neues Verzeichnis namens `odin-links-and-images`.

- Erstelle innerhalb dieses Verzeichnisses eine neue Datei namens `index.html`.

- Fülle das übliche HTML-Boilerplate aus.

- Finally, add the following `h1` to the `body`: `<h1>Homepage</h1>`

## Ankerelemente
Um einen Link in HTML zu erstellen, verwendest du ein Ankerelement. Ein Anchor-Element wird definiert, indem man den Text oder ein anderes HTML-Element, welches ein Link sein soll, mit einem `<a>`-Tag umgibt.

Add the following to the `body` of the `index.html` page you created and open it in the browser:

```html
<a>click me</a>
```

You may have noticed that clicking this link doesn’t do anything. This is because an anchor tag on its own won’t know where you want to link to. You have to tell it a destination to go to. You do this by using an HTML attribute.

An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value. In your case, you need to add an `href` (hyperlink reference) attribute to the opening anchor tag. The value of the `href` attribute is the destination you want your link to go to.

Add the following `href` attribute to the anchor element you created previously and try clicking it again, don’t forget to refresh the browser so the new changes can be applied.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

By default, any text wrapped with an anchor tag without an `href` attribute will look like plain text. If the `href` attribute is present, the browser will give the text a blue color and underline it to signify it is a link.

It’s worth noting you can use anchor tags to link to any kind of resource on the internet, not just other HTML documents. You can link to videos, pdf files, images, and so on, but for the most part, you will be linking to other HTML documents.

# --question--
## --text--

What is an attribute?
## --answers--

An HTML attribute gives additional information to an HTML element and always goes in the element’s closing tag.

---

An HTML attribute is used to tell the browser what the element contains.

---

An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag.


## --video-solution--

3
