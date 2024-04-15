---
id: 637f703072c65bc8e73dfe34
title: Questão C de Links e imagens
challengeType: 15
dashedName: links-and-images-question-c
---

# --description--

Para fazer alguns exercícios práticos usando links e imagens nesta lição, você precisa de um projeto de HTML para trabalhar.

- Crie um diretório chamado `odin-links-and-images`.

- Dentro desse diretório, crie um arquivo e dê a ele o nome de `index.html`.

- Preencha o boilerplate do HTML de sempre.

- Finally, add the following `h1` to the `body`: `<h1>Homepage</h1>`

## Elementos de âncora
Para criar um link em HTML, use o elemento de âncora. Um elemento de âncora é definido agregando o texto ou outro elemento do HTML que você que seja um link à tag `<a>`.

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

What attribute tells links where to go to?

## --answers--

`src`

---

`href`

---

`link`

## --video-solution--

2
