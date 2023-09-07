---
id: 637f702872c65bc8e73dfe33
videoId: ta3Oxx7Yqbo
title: Questão D de Links e imagens
challengeType: 15
dashedName: links-and-images-question-d
---

# --description--


Geralmente, existem dois tipos de links que você criará:

- Links para páginas em outros sites na internet

- Links para páginas localizadas em seus próprios sites


## Links absolutos
Os links para páginas em outros sites na internet são chamados de links absolutos. Um link absoluto típico será composto das seguintes partes: `protocol://domain/path`. Um link absoluto conterá sempre o protocolo e o domínio do destino.

Você já viu um link absoluto em ação. O link que você criou para a página About do The Odin Project anteriormente era um link absoluto, pois contém o protocolo e domínio.

`https://www.theodinproject.com/about`

## Links relativos
Os links para outras páginas dentro de seu próprio site são chamados de links relativos. Links relativos não incluem o nome de domínio. Já que estamos falando de outra página no mesmo site, eles assumem que o nome do domínio será o mesmo da página que você criou no link.

Os links relativos incluem apenas o caminho do arquivo para a outra página, em relação à página em que você está criando o link. Isso é bastante abstrato. Vamos ver isso em ação usando um exemplo.

No diretório `odin-links-and-images`, crie outro arquivo HTML chamado `about.html` e cole o seguinte código dentro dele:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

De volta à página `index`, adicione o seguinte elemento de âncora para criar um link para a página `about`:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="about.html">About</a>
</body>
```

Abra o arquivo `index.html` em um navegador e clique no link de about para se certificar de que tudo esteja ligado corretamente. Clicar no link deve enviá-lo para a página `about` na que você acabou de criar.

Isso funciona porque as páginas `index` e `about` estão no mesmo diretório. Isso significa que você pode simplesmente usar o nome (`about.html`) como o valor do link `href`.

Você, no entanto, geralmente vai querer organizar os diretórios do site um pouco melhor. Normalmente, você só teria o `index.html` no diretório raiz e todos os outros arquivos HTML em seus próprios diretórios.

Crie um diretório chamado `pages` dentro do diretório `odin-links-and-images` e mova o arquivo `about.html` para este novo diretório.

Atualize a página `index` no navegador e, em seguida, clique no link `about`. Agora, você terá um link quebrado. Isso ocorre porque o local do arquivo da página `about` foi alterado.

Para corrigir isto, você só precisa atualizar o valor de `href` do link da página `about` para incluir o diretório de `pages/`, já que esse é o novo local de `about.html` em relação ao arquivo `index.html`.

```html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
```

Atualize a página `index` no navegador e tente clicar no link para `about` novamente. Agora, estará tudo em ordem novamente.

Em muitos casos, isso funcionará muito bem. No entanto, com essa abordagem, ainda podemos encontrar problemas inesperados. Adicionar `./` antes do link impedirá, na maioria dos casos, esses problemas. Ao adicionar `./`, você estará especificando para o código que ele deve começar a procurar o arquivo/diretório a partir de sua relação com o **diretório atual**.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```

# --question--

## --assignment--

Assista ao vídeo de Kevin Powell sobre a estrutura dos arquivos do HTML acima.

## --text--

Qual é a diferença entre um link absoluto e um relativo?

## --answers--

Um link absoluto é um link para outra página no site atual. Um link relativo é um link para outro site.

---

Um link absoluto é um link para outro site. Um link relativo é um link para outra página no site atual.

---

Não há diferença entre um link absoluto e um relativo.

## --video-solution--

2
