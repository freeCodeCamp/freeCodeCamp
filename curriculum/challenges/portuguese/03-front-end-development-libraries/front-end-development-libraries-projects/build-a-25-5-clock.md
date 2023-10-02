---
id: bd7158d8c442eddfaeb5bd0f
title: Criar um Relógio 25 + 5
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Observação:** **o React 18 tem incompatibilidades conhecidas com os testes deste projeto (ver [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objetivo:** criar uma aplicação que funcione de modo semelhante ao que vemos em: <a href="https://25--5-clock.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://25--5-clock.freecodecamp.rocks</a>.

Atenda às histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework de front-end (como React por exemplo) porque essa seção trata de aprender frameworks de front-end. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos buscando apoiar outros frameworks de front-end, como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação para você!

**História de usuário nº 1:** eu consigo ver um elemento com `id="break-label"` que contém uma string (por exemplo, "Duração do intervalo").

**História de usuário nº 2:** eu consigo ver um elemento com `id="session-label"` que contém uma string (por exemplo, "Duração da sessão").

**História de usuário nº 3:** eu consigo ver dois elementos clicáveis com os IDs correspondentes: `id="break-decrement"` e `id="session-decrement"`.

**História de usuário nº 4:** eu consigo ver dois elementos clicáveis com os IDs correspondentes: `id="break-increment"` e `id="session-increment"`.

**História de usuário nº 5:** eu consigo ver um elemento com um `id="break-length"` correspondente, e que, por padrão (no carregamento), exibe o valor de 5.

**História de usuário nº 6:** eu consigo ver um elemento com um `id="session-length"` correspondente, e que, por padrão, exibe o valor de 25.

**História de usuário nº 7:** eu consigo ver um elemento com um `id="timer-label"` correspondente, e que contém a string indicando que uma sessão foi inicializada (por exemplo, "Sessão").

**História de usuário nº 8:** eu consigo ver um elemento com `id="time-left"` correspondente. OBSERVAÇÃO: pausado ou em execução, o valor nesse campo deve sempre ser exibido no formato `mm:ss` (por exemplo, 25:00).

**História de usuário nº 9:** eu consigo ver um elemento clicável com `id="start_stop"` correspondente.

**História de usuário nº 10:** eu consigo ver um elemento clicável com `id="reset"` correspondente.

**História de usuário nº 11:** quando eu clico no elemento com id `reset`, qualquer temporizador em execução deve ser parado. O valor dentro de `id="break-length"` deve retornar `5`, o valor dentro de `id="session-length"` deve retornar 25, e o elemento com `id="time-left"` deve ser redefinido para o seu estado padrão.

**História de usuário nº 12:** quando eu clico no elemento com o id `break-decrement`, o valor dentro de `id="break-length"` decrementa 1, e eu consigo ver o valor atualizado.

**História de usuário nº 13:** quando eu clico no elemento com id `break-increment`, o valor dentro de `id="break-length"` incrementa 1, e eu consigo ver o valor atualizado.

**História de usuário nº 14:** quando eu clico no elemento com id `session-decrement`, o valor dentro de `id="session-length"` decrementa 1, e eu consigo ver o valor atualizado.

**História de usuário nº 15:** quando eu clico no elemento com id `session-increment`, o valor dentro de `id="session-length"` incrementa 1, e eu consigo ver o valor atualizado.

**História de usuário nº 16:** eu não devo poder definir um comprimento de sessão ou de intervalo para &lt;= 0.

**História de usuário nº 17:** eu não devo ser capaz de definir um comprimento de sessão ou de intervalo para > 60.

**História de usuário nº 18:** quando eu clico pela primeira vez no elemento com `id="start_stop"`, o temporizador deve começar a correr a partir do valor exibido atualmente em `id="session-length"`, mesmo se o valor foi incrementado ou decrementado do valor original 25.

**História de usuário nº 19:** se o temporizador estiver em execução, o elemento com id `time-left` deve exibir o tempo restante no formato `mm:ss` (decrementando 1 e atualizando a saída a cada 1000ms).

**História de usuário nº 20:** se o timer estiver em execução e eu clicar no elemento com `id="start_stop"`, a contagem regressiva deve pausar.

**História de usuário nº 21:** se o temporizador estiver pausado e eu clicar no elemento com `id="start_stop"`, a contagem regressiva deve continuar rodando a partir do ponto no qual foi pausado.

**História de usuário nº 22:** quando a contagem regressiva de sessão chegar a zero (OBSERVAÇÃO: o temporizador DEVE alcançar 00:00), e uma nova contagem regressiva iniciar, o elemento com id `timer-label` deve exibir uma string indicando que um intervalo foi iniciado.

**História de usuário nº 23:** quando a contagem regressiva de sessão alcançar zero (OBSERVAÇÃO: o temporizador DEVE alcançar 00:00), uma nova contagem regressiva de intervalo deve iniciar, contando regressivamente a partir do valor atualmente exibido no elemento `id="break-length"`.

**História de usuário nº 24:** quando a contagem regressiva de intervalo alcançar zero (OBSERVAÇÃO: o temporizador DEVE alcançar 00:00) e uma nova contagem regressiva iniciar, o elemento com o id `timer-label` deve exibir a string indicando que uma sessão foi iniciada.

**História de usuário nº 25:** quando a contagem regressiva de intervalo alcançar zero (OBSERVAÇÃO: o temporizador DEVE alcançar 00:00), uma nova contagem regressiva de sessão deve iniciar, contando regressivamente a partir do valor atualmente exibido no elemento com `id="session-length"`.

**História de usuário nº 26:** quando uma contagem regressiva alcançar zero (OBSERVAÇÃO: o temporizador DEVE alcançar 00:00), um som indicando que o tempo acabou deve ser reproduzido. Isso deve utilizar uma tag HTML5 `audio` e ter um id correspondente a `id="beep"`.

**História de usuário nº 27:** o elemento audio com `id="beep"` deve ter 1 segundo ou mais de duração.

**História de usuário nº 28:** o elemento audio com id `beep` deve parar de reproduzir e ser rebobinado para começar quando o elemento com o id `reset` for clicado.

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Ou você pode usar esse link CDN para rodar os testes em qualquer ambiente que você goste:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando você terminar, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
