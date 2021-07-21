---
id: bd7158d8c442eddfaeb5bd0f
title: Construa um Relógio 25 + 5
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Objetivo:** Construir um app [CodePen.io](https://codepen.io) que é funcionalmente semelhante a: <https://codepen.io/freeCodeCamp/full/XpKrrW>.

Atenda às [especificações de usuário](https://en.wikipedia.org/wiki/User_story) abaixo para passar em todos os testes. Dê à página o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework frontend (como React por exemplo) porque essa seção trata de aprender frameworks fronted. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos olhando para apoiar outros frameworks frontend como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

**User Story #1:** Eu consigo ver um elemento com `id="break-label"` que contém a string (e.g. "Break Length").

**User Story #2:** Eu consigo ver um elemento com `id="session-label"` que contém a string (e.g. "Session Length").

**User Story #3:** Eu consigo ver dois elementos clicáveis com os IDs correspondentes: `id="break-decrement"` e `id="session-decrement"`.

**User Story #4:** Eu consigo ver dois elementos clicáveis com os IDs correspondentes: `id="break-increment"` e `id="session-increment"`.

**User Story #5:** Eu consigo ver um elemento com um id correspondente `id="break-length"`, o que por padrão (no carregamento) exibe o valor de 5.

**User Story #6:** Eu consigo ver um elemento com um id correspondente `id="session-length"`, o que por padrão exibe o valor de 25.

**User Story #7:** Eu consigo ver um elemento com um id correspondente `id="timer-length"`, que contém a string indicando que uma sessão foi inicializada (e.g. "Session").

**User Story #8:** Eu consigo ver um elemento com id correspondente `id="time-left"`. NOTA: Pausado ou em execução, o valor nesse campo deve sempre ser exibido no formato `mm:ss` (i.e. 25:00).

**User Story #9:** Eu consigo ver um elemento clicável com id correspondente `id="start_stop"`.

**User Story #10:** Eu consigo ver um elemento clicável com id correspondente `id="reset"`.

**User Story #11:** Quando eu clico o elemento com id `reset`, qualquer temporizador em execução deve ser parado, o valor dentro de `id="break-length"` deve retornar `5`, o valor dentro de `id="session-length"` deve retornar 25, e o elemento com `id="time-left"` deve ser redefinido para o seu estado padrão.

**User Story #12:** Quando eu clico o elemento com o id `break-decrement`, o valor dentro de `id="break-length"` decrementa 1, e eu consigo ver o valor atualizado.

**User Story #13:** Quando eu clico o elemento com id `break-increment`, o valor dentro de `id="break-length"` incrementa 1, e eu consigo ver o valor atualizado.

**User Story #14:** Quando eu clico o elemento com id `session-decrement`, o valor dentro de `id="session-length"` decrementa 1, e eu consigo ver o valor atualizado.

**User Story #15:** Quando eu clico o elemento com id `session-increment`, o valor dentro de `id="session-length"` incrementa 1, e eu consigo ver o valor atualizado.

**User Story #16:** Eu não devo ser capaz de definir uma sessão ou quebrar o comprimento para &lt;= 0.

**User Story #17:** Eu não devo ser capaz de definir uma sessão ou quebrar o comprimento para > 60.

**User Story #18:** Quando eu clico pela primeira vez o elemento com `id="start_stop"`, o temporizador deve começar a correr a partir do valor exibido atualmente em `id="session-length"`, mesmo se o valor foi incrementado ou decrementado do valor original 25.

**User Story #19:** Se o temporizador estiver em execução, o elemento com id `time-left` deve exibir o tempo restante no formato `mm:ss` (decrementando 1 e atualizando a saída a cada 1000ms).

**User Story #20:** Se o timer estiver em execução e eu clicar o elemento com `id="start_stop"`, a contagem regressiva deve pausar.

**User Story #21:** Se o temporizador estiver pausado e eu clicar o elemento com `id="start_stop"`, a contagem regressiva deve continuar rodando a partir do ponto no qual foi pausado.

**User Story #22:** Quando a contagem regressiva de sessão chegar a zero (NOTA: temporizador DEVE alcançar 00:00), e uma nova contagem regressiva iniciar, o elemento com id `timer-label` deve exibir uma string indicando que uma quebra foi iniciada.

**User Story #23:** Quando a contagem regressiva de sessão alcançar zero (NOTA: temporizador DEVE alcançar 00:00), uma nova contagem regressiva deve iniciar, contando regressivamente a partir do valor atualmente exibido no elemento `id="break-length"`.

**User Story #24:** Quando a contagem regressiva de quebra alcançar zero (NOTA: temporizador DEVE alcançar 00:00) e uma nova contagem regressiva iniciar, o elemento com o id `timer-label` deve exibir a string indicando que uma sessão foi iniciada.

**User Story #23:** Quando a contagem regressiva de quebra alcançar zero (NOTA: temporizador DEVE alcançar 00:00), uma nova contagem regressiva de sessão deve iniciar, contando regressivamente a partir do valor atualmente exibido no elemento `id="session-length"`.

**User Story #23:** Quando uma contagem regressiva alcançar zero (NOTA: temporizador DEVE alcançar 00:00), um som indicando que o tempo acabou deve ser reproduzido. Isso deve utilizar uma tag HTML5 `audio` e ter um id correspondente `id="beep"`.

**User Story #27:** O elemento audio com `id="beep"` deve ter 1 segundo ou mais de duração.

**User Story #28:** O elemento audio com id `beep` deve parar de reproduzir e ser rebobinado para começar quando o elemento com o id `reset` for clicado.

Você pode construir seu projeto com <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este template CodePen</a> e clicando `Save` para criar seu próprio pen. Ou você pode usar esse link CDN para rodar os testes em qualquer ambiente que você goste:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando você terminar, envie a URL para o seu projeto em trabalho com todos os testes passando.

# --solutions--

```js
// solution required
```
