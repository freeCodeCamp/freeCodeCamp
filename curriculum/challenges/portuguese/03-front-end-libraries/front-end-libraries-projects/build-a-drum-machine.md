---
id: 587d7dbc367417b2b2512bae
title: Construa uma Máquina de Tambor
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Objetivo:** Construa um app [CodePen.io](https://codepen.io) que seja funcionalmente semelhante a: <https://codepen.io/freeCodeCamp/full/MJyNMd>.

Atenda às [especificações de usuário](https://en.wikipedia.org/wiki/User_story) abaixo para passar em todos os testes. Dê à página o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework frontend (como React por exemplo) porque essa seção trata de aprender frameworks fronted. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos olhando para apoiar outros frameworks frontend como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

**User Story #1:** Eu devo ser capaz de ver um contêiner externo com um id correspondente `id="drum-machine"` que contém todos os outros elementos.

**User Story #2:** Dentro de `#drum-machine` eu consigo ver um elemento com um id correspondente `id="display"`.

**User Story #3:** Dentro de `#drum-machine` Eu consigo ver 9 elementos tambores clicáveis, cada um com o nome de classe `drum-pad`, um id único que descreve o clipe de áudio que o tambor será definido para executar, e um texto interno que corresponde a uma das teclas do teclado a seguir: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Os tambores DEVEM estar nesta ordem.

**User Story #4:** Dentro de cada `.drum-pad`, deve ter um elemento HTML5 `audio` o qual tem o atributo `src` apontando para um clipe de áudio, o nome de classe `clip`, e um id correspondendo ao texto interno do seu `.drum-pad` parente (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

**User Story #5:** Quando eu clico em um elemento `.drum-pad`, o clipe de áudio dentro do seu elemento filho `audio` deve ser ativado.

**User Story #6:** Quando eu pressionar a tecla de gatilho associada com cada `.drum-pad`, o clipe de áudio dentro do elemento filho `audio` deve ser ativado (e.g. pressionando a tecla `Q` deve acionar o tambor o qual contém a string `Q`, pressionando a tecla `W` deve acionar o tambor o qual contém a string `W`, etc.).

**User Story #7:** Quando um `.drum-pad` é acionado, uma string descrevendo o clipe de áudio associado é exibido como o texto interno do elemento `#display` (cada string precisa ser única).

Você pode construir seu projeto com <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este template CodePen</a> e clicando `Save` para criar seu próprio pen. Ou você pode usar esse link CDN para rodar os testes em qualquer ambiente que você goste:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando você terminar, envie a URL para o seu projeto em trabalho com todos os testes passando.

# --solutions--

```js
// solution required
```
