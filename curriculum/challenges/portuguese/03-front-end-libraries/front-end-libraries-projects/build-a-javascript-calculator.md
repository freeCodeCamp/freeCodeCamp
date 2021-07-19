---
id: bd7158d8c442eddfaeb5bd17
title: Construa uma Calculadora JavaScript
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--

**Objetivo:** Construa um app [CodePen.io](https://codepen.io) que seja funcionalmente semelhante a: <https://codepen.io/freeCodeCamp/full/wgGVVX>.

Atenda às [especificações de usuário](https://en.wikipedia.org/wiki/User_story) abaixo para passar em todos os testes. Dê à página o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework frontend (como React por exemplo) porque essa seção trata de aprender frameworks fronted. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos olhando para apoiar outros frameworks frontend como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

**User Story #1:** Minha calculadora deve conter um elemento clicável contendo um `=` (sinal de igualdade) com o id correspondente `id="equals"`.

**User Story #2:** Minha calculadora deve conter 10 elementos clicáveis contendo um número cada de 0 até 9, com os ids correspondentes a seguir: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"` e `id="nine"`.

**User Story #3:** Minha calculadora deve conter 4 elementos clicáveis cada um contendo uma das 4 operações matemáticas primárias com os ids correspondentes a seguir: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**User Story #4:** Minha calculadora deve conter um elemento clicável contendo o símbolo `.` (ponto decimal) com o id correspondente `id="decimal"`.

**User Story #5:** Minha calculadora deve conter um elemento clicável com um `id="clear"`.

**User Story #6:** Minha calculadora deve conter um elemento para exibir valores com o id correspondente `id="display"`.

**User Story #7:** A qualquer momento, pressionando o botão `clear` irá limpar os valores de entrada e saída, e retorna a calculadora ao seu estado inicial; 0 deve ser mostrado no elemento com o id `display`.

**User Story #8:** Enquanto eu coloco números de entrada, eu devo ser capaz de ver a minha entrada no elemento com id `display`.

**User Story #9:** Em qualquer ordem, eu devo ser capaz de adicionar, subtrair, multiplicar e dividir uma cadeia de números de qualquer tamanho, e quando eu pressionar `=`, o resultado correto deve ser mostrado no elemento com id `display`.

**User Story #10:** Ao inserir números, minha calculadora não deve permitir um número de começar com múltiplos zeros.

**User Story #11:** Quando o elemento decimal for clicado, um `.` deve ser adicionado ao valor atualmente exibido; dois `.` em um número não deve ser aceito.

**User Story #12:** Eu devo ser capaz de executar qualquer operação (`+`, `-`, `*`, `/`) em números contendo pontos decimais.

**User Story #13:** Se 2 ou mais operadores forem inseridos consecutivamente, a operação executada deve ser o último operador inserido (excluindo o símbolo de negação (`-`)). Por exemplo, se `5 + * 7 =` for inserido, o resultado deve ser `35` (i.e. `5 * 7`); se `5 * - 5 =` for inserido, o resultado deve ser `-25` (i.e. `5 * (-5)`).

**User Story #14:** Pressionando um operador imediatamente após um `=` deve iniciar um novo cálculo que opera no resultado da avaliação anterior.

**User Story #15:** Minha calculadora deve ter diversas casas decimais de precisão ao se tratar de arredondamento (note que não há um padrão exato, mas você deve ser capaz de lidar com cálculos como `2 / 7` com precisão razoável de pelo menos 4 casas decimais).

**Nota Para a Lógica da Calculadora:** Deve-se notar que há duas principais escolas de pensamento na lógica da entrada da calculadora: <dfn>lógica da execução imediata</dfn> e <dfn>lógica da fórmula</dfn>. Nosso exemplo utiliza a lógica da fórmula e observa a ordem de precedência de operação, execução imediata não faz isso. Qualquer uma é aceitável, mas por favor note que dependendo de qual você escolher, sua calculadora pode alcançar diferentes resultados do que os nossos para certas equações (veja abaixo um exemplo). Desde que sua matemática possa ser verificada por outra calculadora em produção, por favor não considere isso um bug.

**EXEMPLO:** `3 + 5 x 6 - 2 / 4 =`

-   **Lógica de execução imediata:** `11.5`
-   **Lógica de Fórmula/Expressão:** `32.5`

Você pode construir seu projeto com <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>usando este template CodePen</a> e clicando `Save` para criar seu próprio pen. Ou você pode usar esse link CDN para rodar os testes em qualquer ambiente que você goste:`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando você terminar, envie a URL para o seu projeto em trabalho com todos os testes passando.

# --solutions--

```js
// solution required
```
