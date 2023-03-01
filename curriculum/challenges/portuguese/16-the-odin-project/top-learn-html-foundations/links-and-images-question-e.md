---
id: 637f702372c65bc8e73dfe32
videoId: 0xoztJCHpbQ
title: Questão E de Links e imagens
challengeType: 15
dashedName: links-and-images-question-e
---

# --description--

Os sites da web seriam muito chatos se apenas pudessem exibir texto. Felizmente, o HTML fornece uma grande variedade de elementos para exibir todos os tipos diferentes de mídias. O mais utilizado é o elemento de imagem.

Para exibir uma imagem em HTML, você usa o elemento `<img>`. Diferente dos outros elementos que você encontrou, o elemento `<img>` tem fechamento próprio. Os elementos vazios ou de fechamento próprio do HTML não precisam de uma tag de fechamento.

Em vez de envolver o conteúdo com uma tag de abertura e fechamento, esse elemento incorpora uma imagem na página usando um atributo `src`, que informa ao navegador onde o arquivo da imagem está localizado. O atributo `src` funciona muito como o atributo `href` para tags de âncora. Ele pode incorporar uma imagem usando caminhos relativos e absolutos.

Por exemplo, ao usar um caminho absoluto, você pode exibir uma imagem localizada no site do The Odin Project:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/gORbExZ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=gORbExZ&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen incorporado" loading="lazy" id="cp_embed_gORbExZ"></iframe>

Para usar imagens que você tem em seus próprios sites, você pode usar um caminho relativo.

- Crie um diretório chamado `images` dentro do projeto `odin-links-and-images`.

- Em seguida, faça o download [desta imagem](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640) e mova-a para o diretório `images` que você acabou de criar.

- Renomeie a imagem para `dog.jpg`.

Por fim, adicione a imagem ao arquivo `index.html`:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="pages/about.html">About</a>

    <img src="images/dog.jpg">
</body>
```

Salve o arquivo `index.html` e abra-o em um navegador para conhecer o Charles e ver como ele é lindo.


## Diretórios pai

Como usar a imagem do cachorro na página `about`? Primeiro, você precisa subir um nível no diretório de páginas para o diretório pai para depois poder acessar o diretório de imagens.

Para subir para o diretório pai, você precisa usar dois pontos no caminho relativo, assim: `../.` Vamos ver isso em ação, dentro do `body` do arquivo `about.html`, adicione a seguinte imagem abaixo do título que você adicionou anteriormente:

```html
<img src="../images/dog.jpg">
```

Em detalhes:

- Primeiro, você vai ao diretório pai do diretório das páginas, que é o `odin-links-and-images`.

- Em seguida, a partir do diretório pai, você pode ir para o diretório `images`.

- Por fim, você pode acessar o arquivo `dog.jpg`.

Usando a metáfora que usamos anteriormente, usar `../` em um caminho de arquivo é como sair do quarto em que você está no momento, indo para o corredor principal para que você possa chegar à sala.

## Atributo `Alt`

Além do atributo `src`, cada elemento de imagem deve ter também um atributo `alt` (texto alternativo).

O atributo `alt` é usado para descrever uma imagem. Ele será usado no lugar da imagem, caso ela não possa ser carregada. Ele também é usado com leitores de tela para descrever a imagem para usuários com deficiência visual.

É assim que o logotipo do The Odin Project que você usou anteriormente fica com um atributo `alt` incluído:
<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/ExXjoEp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=ExXjoEp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen incorporado" loading="lazy" id="cp_embed_ExXjoEp"></iframe>

# --question--

## --assignment--

Assista ao vídeo de Kevin Powell sobre imagens do HTML acima.

## --text--

Qual é a tag usada para exibir uma imagem?

## --answers--

`<link>`

---

`<a>`

---

`<img>`

## --video-solution--

3
