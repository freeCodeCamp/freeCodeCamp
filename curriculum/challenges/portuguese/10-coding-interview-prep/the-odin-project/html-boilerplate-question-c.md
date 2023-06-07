---
id: 637f4e2f72c65bc8e73dfe22
videoId: LGQuIIv2RVA
title: Questão C sobre o boilerplate do HTML
challengeType: 15
dashedName: html-boilerplate-question-c
---

# --description--

O elemento `<head>` é onde você coloca as metainformações importantes sobre suas páginas da web, além de coisas necessárias para que suas páginas da web sejam renderizadas corretamente no navegador. Dentro de `<head>`, você não deve usar elementos que exibam conteúdo na página.

## O elemento meta charset
Você deve sempre ter a tag `meta` para a codificação de conjunto de caracteres (charset) da página no elemento head: `<meta charset="utf-8">`.

Definir a codificação é muito importante, pois garante que a página da web exibirá símbolos especiais e caracteres de diferentes idiomas corretamente no navegador.

## Elemento title
Outro elemento que você sempre deve incluir na head de um documento HTML é o elemento `title`:

```html
<title>My First Webpage</title>
```

O elemento `title` é usado para dar às páginas da web um título legível, o qual é exibido na guia do navegador da sua página.

Se você não incluir um elemento `title`, o título da página da web seria o padrão para o nome do arquivo. No seu caso, seria `index.html`, o que não é muito significativo para usuários. Isto tornaria muito difícil encontrar sua página da web se o usuário tivesse muitas abas do navegador abertas.

Há muito mais elementos que podem ser inseridos em `head` em um documento HTML. No entanto, por agora, é crucial saber apenas os dois elementos que vemos aqui. Você verá mais elementos que serão colocados em `head` durante a continuação do currículo.

De volta ao arquivo `index.html`, vamos adicionar um elemento `head` e, dentro dele, um elemento `meta` `charset` e um elemento `title`. O elemento head vai dentro do elemento HTML e deve ser sempre o primeiro elemento após a tag de abertura de `<html>`:


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

Qual é a finalidade do elemento `head`?

## --answers--

O elemento `head` é usado para exibir todos os elementos que são exibidos na página da web.

---

O elemento `head` é usado para exibir informações importantes sobre sua página da web e é usado para renderizar as páginas da web corretamente com elementos `meta`.

---

O elemento `head` é usado para exibir o conteúdo do cabeçalho na parte superior da página da web.


## --video-solution--

2
