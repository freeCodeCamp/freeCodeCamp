---
id: bd7158d8c442eddfaeb5bd17
title: Criar uma calculadora JavaScript
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante ao que vemos em: <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a>.

Atenda às histórias de usuário abaixo e faça com que todos os testes passem. Use quaisquer bibliotecas ou APIs de que você precisar. Dê ao projeto o seu próprio estilo pessoal.

Você pode usar qualquer mistura de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e JQuery para completar este projeto. Você deve usar um framework de front-end (como React por exemplo) porque essa seção trata de aprender frameworks de front-end. Tecnologias adicionais não listadas acima não são recomendadas e usá-las é por sua conta e risco. Estamos buscando apoiar outros frameworks de front-end, como Angular e Vue, mas eles não são atualmente suportados. Vamos aceitar e tentar corrigir todos os relatórios de problemas que usem o conjunto de tecnologias sugeridas para esse projeto. Boa programação!

**História de usuário nº 1:** minha calculadora deve conter um elemento clicável contendo um `=` (sinal de igualdade) com o `id="equals"` correspondente.

**História de usuário nº 2:** minha calculadora deve conter 10 elementos clicáveis contendo um número cada, de 0 até 9, com os ids correspondentes a seguir: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"` e `id="nine"`.

**História de usuário nº 3:** minha calculadora deve conter 4 elementos clicáveis, cada um contendo uma das 4 operações matemáticas primárias com os ids correspondentes a seguir: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**História de usuário nº 4:** minha calculadora deve conter um elemento clicável contendo o símbolo `.` (ponto decimal) com o `id="decimal"` correspondente.

**História de usuário nº 5:** minha calculadora deve conter um elemento clicável com um `id="clear"`.

**História de usuário nº 6:** minha calculadora deve conter um elemento para exibir valores com o `id="display"` correspondente.

**História de usuário nº 7:** a qualquer momento, pressionar o botão `clear` limpará os valores de entrada e saída, e retornará a calculadora ao seu estado inicial. "0" deve ser mostrado no elemento com o id `display`.

**História de usuário nº 8:** enquanto eu coloco números de entrada, eu devo ser capaz de ver a minha entrada no elemento com id `display`.

**História de usuário nº 9:** em qualquer ordem, eu devo ser capaz de adicionar, subtrair, multiplicar e dividir uma cadeia de números de qualquer tamanho, e quando eu pressionar `=`, o resultado correto deve ser mostrado no elemento com id `display`.

**História de usuário nº 10:** ao inserir números, minha calculadora não deve permitir um número de começar com múltiplos zeros.

**História de usuário nº 11:** quando o elemento decimal for clicado, um `.` deve ser adicionado ao valor atualmente exibido. Dois `.` em um número não devem ser aceitos.

**História de usuário nº 12:** eu devo ser capaz de executar qualquer operação (`+`, `-`, `*`, `/`) em números contendo pontos decimais.

**História de usuário nº 13:** Se 2 ou mais operadores forem inseridos consecutivamente, a operação executada deve ser o último operador inserido, excluindo o símbolo de negação (`-`). Por exemplo, se `5 + * 7 =` for inserido, o resultado deve ser `35` (ou seja, `5 * 7`); se `5 * - 5 =` for inserido, o resultado deve ser `-25` (ou seja, `5 * (-5)`).

**História de usuário nº 14:** pressionar um operador imediatamente após um `=` deve iniciar um novo cálculo que opera no resultado da avaliação anterior.

**História de usuário nº 15:** minha calculadora deve ter diversas casas decimais de precisão ao se tratar de arredondamento (note que não há um padrão exato, mas você deve ser capaz de lidar com cálculos como `2 / 7` com precisão razoável de pelo menos 4 casas decimais).

**Nota para a lógica da calculadora:** deve-se notar que há duas principais escolas de pensamento na lógica de entrada da calculadora: a <dfn>lógica da execução imediata</dfn> e a <dfn>lógica da fórmula</dfn>. Nosso exemplo utiliza a lógica da fórmula e observa a ordem de precedência de operação. A lógica de execução imediata não faz isso. Qualquer uma é aceitável, mas observe que, dependendo de qual você escolher, sua calculadora pode alcançar diferentes resultados do que os nossos para certas equações (veja abaixo um exemplo). Desde que sua matemática possa ser verificada por outra calculadora em produção, não considere isso um bug.

**EXEMPLO:** `3 + 5 x 6 - 2 / 4 =`

-   **Lógica de execução imediata:** `11.5`
-   **Lógica de fórmula/expressão:** `32.5`

Você pode fazer o seu projeto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando este modelo da CodePen</a> e clicando em `Save` para criar seu próprio pen. Como alternativa, use este link da nossa CDN para executar os testes em qualquer ambiente que você preferir: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Quando tiver terminado, envie o URL do seu projeto depois de ele haver passado em todos os testes.

# --solutions--

```js
// solution required
```
