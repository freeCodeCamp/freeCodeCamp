---
id: 5e601bf95ac9d0ecd8b94afd
title: Solucionador de Sudoku
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

- Toda a lógica do quebra-cabeça pode ir em `/controllers/sudoku-solver.js`
  - A função `validate` deve receber uma determinada string do quebra-cabeça e verificá-la para ver se ela tem os 81 caracteres válidos para a entrada.
  - As funções `check` devem estar validando contra o estado *current* do tabuleiro.
  - A função `solve` deve tratar da solução de qualquer string de quebra-cabeças válida, não apenas as entradas e soluções de teste. Espera-se que você escreva a lógica para resolver isso.
- Toda a lógica de roteamento pode ir em `/routes/api.js`
- Veja o arquivo `puzzle-strings.js` em `/controllers` para algumas amostras de quebra-cabeças que sua aplicação deve resolver
- Para executar os testes do desafio nesta página, defina `NODE_ENV` como `test` sem aspas no arquivo `.env`
- Para executar os testes no console, use o comando `npm run test`. Para abrir o console do Replit, pressione Ctrl+Shift+P (cmd, se estiver em um Mac) e digite "open shell"

Escreva os testes a seguir em `tests/1_unit-tests.js`:

-   A lógica lida com uma string de quebra-cabeças válida de 81 caracteres
-   A lógica lida com uma string de quebra-cabeças com caracteres inválidos (não 1-9 ou `.`)
-   A lógica lida com uma string de quebra-cabeças que não tenha 81 caracteres de tamanho
-   A lógica lida com um posicionamento de linha válido
-   A lógica lida com um posicionamento de linha inválido
-   A lógica lida com um posicionamento de coluna válido
-   A lógica lida com um posicionamento de coluna inválido
-   A lógica trata de uma região válida (grade 3x3)
-   A lógica trata de uma colocação em região válida (grade 3x3)
-   Strings de quebra-cabeças válidas passam no solucionador
-   Strings de quebra-cabeças inválidas não passam no solucionador
-   O solucionador retorna a solução esperada para um quebra-cabeças incompleto

Escreva os testes a seguir em `tests/2_functional-tests.js`

-   Resolva um quebra-cabeças com uma string de quebra-cabeças válida: solicitação de POST para `/api/solve`
-   Resolva um quebra-cabeças com uma string de quebra-cabeças ausente: solicitação de POST para `/api/solve`
-   Resolva um quebra-cabeças com caracteres inválidos: solicitação de POST para `/api/solve`
-   Resolva um quebra-cabeças com tamanho incorreto: solicitação de POST para `/api/solve`
-   Resolva um quebra-cabeças que não pode ser resolvido: solicitação de POST para `/api/solve`
-   Verifique o posicionamento de um quebra-cabeças com todos os campos: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com um conflito único de posicionamento: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com vários conflitos de posicionamento: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com todos os conflitos de posicionamento: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com campos obrigatórios ausentes: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com caracteres inválidos: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com tamanho incorreto: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com coordenadas de posicionamento inválidas: solicitação de POST para `/api/check`
-   Verifique o posicionamento de um quebra-cabeças com valor de posicionamento inválido: solicitação de POST para `/api/check`

# --hints--

Você deve fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Você pode fazer uma solicitação de `POST` para `/api/solve` com dados do formulário contendo `puzzle`, que será uma string contendo uma combinação de números (1-9) e pontos `.` para representar espaços vazios. O objeto retornado conterá uma propriedade `solution` com o quebra-cabeças resolvido.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

Se o objeto enviado a `/api/solve` estiver ausente no `puzzle`, o valor retornado será `{ error: 'Required field missing' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se o quebra-cabeças enviado a `/api/solve` contém valores que não são números ou ponto, o valor retornado será `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se o desafio enviado a `/api/solve` é maior ou menor que 81 caracteres, o valor retornado será `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se o quebra-cabeças enviado a `/api/solve` contém valores que não são números ou ponto, o valor retornado será `{ error: 'Puzzle cannot be solved' }`

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Você pode fazer a solicitação de `POST` para `/api/check` de um objeto contendo `puzzle`, `coordinate` e `value`, onde `coordinate` é composto de letras de A-I indicando a linha, seguidas de um número de 1-9 indicando a coluna. O `value` é um número de 1-9.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

O valor de retorno de da solicitação de `POST` para `/api/check` será um objeto que contém uma propriedade `valid`, que é `true` se o número puder ser colocado na coordenada fornecida e `false` se o número não puder. Se falso, o objeto retornado também conterá uma propriedade `conflict` que é um array contendo as strings `"row"`, `"column"` e/ou `"region"`, dependendo de qual deles torna o posicionamento inválido.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

Se o `value` enviado a `/api/check` já estiver colocado no `puzzle` naquela `coordinate`, o valor retornado será um objeto contendo uma propriedade `valid` com `true` se o `value` não for conflitante.

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Se o quebra-cabeças enviado a `/api/check` contém valores que não são números ou ponto, o valor retornado será `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se o desafio enviado a `/api/check` é maior ou menor que 81 caracteres, o valor retornado será `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se o objeto enviado a `/api/check` estiver com `puzzle`, `coordinate` ou `value` faltando, o valor retornado será `{ error: 'Required field(s) missing' }`

```js
async (getUserInput) => {
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se a coordenada enviada para `api/check` não apontar para uma célula da grade existente, o valor retornado será `{ error: 'Invalid coordinate'}`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se o `value` enviado à `/api/check` não for um número entre 1 e 9, o valor retornado será `{ error: 'Invalid value' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Todos os 12 testes de unidade foram concluídos e tiveram aprovação.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Todos os 14 testes funcionais foram concluídos e tiveram aprovação.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
