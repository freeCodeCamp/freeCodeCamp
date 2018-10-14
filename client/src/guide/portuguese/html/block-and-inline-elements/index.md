---
title: Block and Inline Elements
localeTitle: Bloquear e Elementos Inline
---
## Bloquear e Elementos Inline

Vamos entendê-los usando os exemplos abaixo:

#### Amostra de código com saída:

![Saída de bloco](https://user-images.githubusercontent.com/16048167/31070017-6f2cf0a2-a77c-11e7-9de6-110b9d0b488d.PNG)

#### Elemento de nível de bloco:

Um elemento de nível de bloco ocupa o espaço inteiro do pai (contêiner), como `<div>` e `<p>` no exemplo.

Note que `<div>` e `<p>` começam de uma nova linha a cada vez, formando uma estrutura de **bloco** . Elementos de nível de bloco começam em novas linhas.

**Elementos** comuns **de nível de bloco** são `<div>` , `<p>` , `<article>` , `<section>` , `<figure>` , `<footer>` etc.

#### Elemento Inline:

Inline como o nome diz "incluído como parte do texto principal e não como uma seção separada". Elementos inline ocupam o espaço conforme necessário dentro do espaço definido pelo elemento principal. Ao contrário dos elementos de nível de bloco, eles não iniciam em novas linhas.

Alguns dos **elementos inline** são `<a>` , `<span>` , `<img>` , `<code>` , `<cite>` , `<button>` , `<input>` etc.

#### Amostra de código com saída:

![Saída Inline](https://user-images.githubusercontent.com/16048167/31069389-e1e3fc10-a779-11e7-86d2-6685e0061f52.png)

**_Nota_** : Os elementos no nível do bloco podem conter outros elementos no nível do bloco ou elementos internos. Elementos in-line **não podem** conter elementos no nível do bloco.

#### Alterações no HTML5

Embora uma compreensão dos elementos em bloco e em linha ainda seja relevante, você deve estar ciente de que esses termos foram definidos em versões anteriores da especificação HTML. No HTML5, um conjunto mais complexo de "categorias de conteúdo" substitui os elementos em bloco e inline. Os elementos em nível de bloco são colocados em grande parte na categoria "conteúdo de fluxo" em HTML5, enquanto os elementos em linha correspondem à categoria "conteúdo de frases". Para obter mais informações sobre as novas categorias de conteúdo em HTML5, incluindo conteúdo de fluxo e conteúdo de frases, consulte a [página de categorias de conteúdo na Mozilla Developer Network.](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

#### Mais Informações:

Por favor, consulte o [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Block-level_vs._inline)