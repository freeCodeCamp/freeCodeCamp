---
id: bd7158d8c442eddfaeb5bd13
title: Criar uma máquina de citação aleatória
challengeType: 3
forumTopicId: 301374
dashedName: build-a-random-quote-machine
---

# --description--
**Observação:** **o React 18 tem incompatibilidades conhecidas com os testes deste projeto (ver [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objetivo:** criar uma aplicação que funcione de modo semelhante ao que vemos em: <a href="https://random-quote-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://random-quote-machine.freecodecamp.rocks/</a>.

Atenda às histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework de front-end (como React por exemplo) porque essa seção trata de aprender frameworks de front-end. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos buscando apoiar outros frameworks de front-end, como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação para você!

**História de usuário nº 1:** eu consigo ver um elemento wrapper com o `id="quote-box"` correspondente.

**História de usuário nº 2:** dentro de `#quote-box`, eu consigo ver um elemento com o `id="text"` correspondente.

**História de usuário nº 3:** dentro de `#quote-box`, eu consigo ver um elemento com o `id="author"` correspondente.

**História de usuário nº 4:** dentro de `#quote-box`, eu consigo ver um elemento clicável com o `id="new-quote"` correspondente.

**História de usuário nº 5:** dentro de `#quote-box`, eu consigo ver um elemento clicável `a` com o `id="tweet-quote"` correspondente.

**História de usuário nº 6:** ao carregar pela primeira vez, minha máquina de citação exibe uma citação aleatória no elemento com `id="text"`.

**História de usuário nº 7:** ao carregar pela primeira vez, minha máquina de citação exibe o autor da citação aleatória no elemento com `id="author"`.

**História de usuário nº 8:** quando o botão `#new-quote` é clicado, minha máquina de citação deve buscar uma nova citação e exibi-la no elemento `#text`.

**História de usuário nº 9:** minha máquina de citação deve buscar o novo autor da citação quando o botão `#new-quote` for clicado e o exibir no elemento `#author`.

**História de usuário nº 10:** eu posso tweetar a citação atual ao clicar no elemento `#tweet-quote` `a`. Esse elemento `a` deve incluir o caminho `"twitter.com/intent/tweet"` no seu atributo `href` para tweetar a citação atual.

**História de usuário nº 11:** o elemento wrapper `#quote-box` deve ser centralizado horizontalmente. Execute testes com o zoom do navegador em 100% e com a página maximizada.

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

**Observação:** o Twitter não permite que links sejam carregados em um iframe. Tente usar o atributo `target="_blank"` ou `target="_top"` no elemento `#tweet-quote` se o seu tweet não carregar. `target="_top"` vai substituir a aba atual para garantir que o seu trabalho foi salvo.

# --solutions--

```js
// solution required
```
