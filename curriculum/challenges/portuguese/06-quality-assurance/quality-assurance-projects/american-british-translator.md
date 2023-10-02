---
id: 5e601c0d5ac9d0ecd8b94afe
title: Tradutor americano britânico
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

-   Toda lógica pode ir em `/components/translator.js`
-   Complete a rota `/api/translate` em `/routes/api.js`
-   Crie todos os testes unitários/funcionais em `tests/1_unit-tests.js` e `tests/2_functional-tests.js`
-   Veja os arquivos JavaScript em `/components` para diferentes ortografias e termos que sua aplicação deve traduzir
-   Para executar os testes no Replit, defina `NODE_ENV` como `test` sem aspas no arquivo `.env`
-   Para executar os testes no console, use o comando `npm run test`. Para abrir o console do Replit, pressione Ctrl+Shift+P (cmd, se estiver em um Mac) e digite "open shell"

Escreva os testes a seguir em `tests/1_unit-tests.js`:

-   Traduza `Mangoes are my favorite fruit.` para o inglês britânico
-   Traduza `I ate yogurt for breakfast.` para o inglês britânico
-   Traduza `We had a party at my friend's condo.` para o inglês britânico
-   Traduza `Can you toss this in the trashcan for me?` para o inglês britânico
-   Traduza `The parking lot was full.` para o inglês britânico
-   Traduza `Like a high tech Rube Goldberg machine.` para o inglês britânico
-   Traduza `To play hooky means to skip class or work.` para o inglês britânico
-   Traduza `No Mr. Bond, I expect you to die.` para o inglês britânico
-   Traduza `Dr. Grosh will see you now.` para o inglês britânico
-   Traduza `Lunch is at 12:15 today.` para o inglês britânico
-   Traduza `We watched the footie match for a while.` para o inglês americano
-   Traduza `Paracetamol takes up to an hour to work.` para o inglês americano
-   Traduza `First, caramelise the onions.` para o inglês americano
-   Traduza `I spent the bank holiday at the funfair.` para o inglês americano
-   Traduza `I had a bicky then went to the chippy.` para o inglês americano
-   Traduza `I've just got bits and bobs in my bum bag.` para o inglês americano
-   Traduza `The car boot sale at Boxted Airfield was called off.` para o inglês americano
-   Traduza `Have you met Mrs Kalyani?` para o inglês americano
-   Traduza `Prof Joyner of King's College, London.` para o inglês americano
-   Traduza `Tea time is usually around 4 or 4.30.` para o inglês americano
-   Destaque a tradução em `Mangoes are my favorite fruit.`
-   Destaque a tradução em `I ate yogurt for breakfast.`
-   Destaque a tradução em `We watched the footie match for a while.`
-   Destaque a tradução em `Paracetamol takes up to an hour to work.`

Escreva os testes a seguir em `tests/2_functional-tests.js`:

-   A tradução com os campos de texto e de localização: solicitação de POST para `/api/translate`
-   A tradução com o campo de texto e o campo de localização inválida: solicitação de POST para `/api/translate`
-   A tradução com o campos de texto ausente: solicitação de POST para `/api/translate`
-   A tradução com o campo de localização ausente: solicitação de POST para `/api/translate`
-   A tradução com o campo vazio: solicitação de POST para `/api/translate`
-   A tradução com texto que não precisa de tradução: solicitação de POST para `/api/translate`

# --hints--

Você deve fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Você pode solicitar `POST` para `/api/translate` com um corpo contendo `text` com o texto para traduzir e `locale` com `american-to-british` ou `british-to-american`. O objeto retornado deve conter o `text` enviado e a `translation` com o texto traduzido.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

A rota `/api/translate` deve tratar a forma como o tempo é escrito no inglês americano e britânico. Por exemplo, dez trinta e trinta é escrito como "10:30" em inglês britânico e "10:30" em inglês americano. O elemento `span` deve envolver a string de tempo inteira, ou seja, `<span class="highlight">10:30</span>`.

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

A rota `/api/translate` também deve tratar a forma como os títulos/pronomes de tratamento são abreviados no inglês americano e no britânico. Por exemplo, Doctor Wright é abreviado como "Dr Wright" em inglês britânico e "Dr. Wright" em inglês americano. Veja `/components/american-to-british-titles.js` para os diferentes títulos que sua aplicação deve tratar.

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Envolva qualquer ortografia ou termos traduzidos com as tags `<span class="highlight">...</span>` para que elas apareçam em verde.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Se um ou mais campos requeridos estiver faltando, retorne `{ error: 'Required field(s) missing' }`.

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Se `text` estiver vazio, retorne `{ error: 'No text to translate' }`

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Se `locale` não corresponder a uma das duas localidades especificadas, retorne `{ error: 'Invalid value for locale field' }`.

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Se `text` não precisar de tradução, retorne `"Everything looks good to me!"` para o valor `translation`.

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Todos os 24 testes de unidade foram concluídos e tiveram aprovação.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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

Todos os 6 testes funcionais foram concluídos e tiveram aprovação.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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
