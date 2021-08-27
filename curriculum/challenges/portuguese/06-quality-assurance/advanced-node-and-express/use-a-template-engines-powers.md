---
id: 5895f70bf9fc0f352b528e64
title: Usar as capacidades de um mecanismo de modelos
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

Uma das maiores características do uso de um mecanismo de modelos (template engine) é poder passar variáveis do servidor para o arquivo de modelo antes de renderizá-lo em HTML.

No seu arquivo Pug, você pode usar uma variável fazendo referência ao nome da variável como `#{variable_name}` em linha com outro texto em um elemento ou usando um sinal de igual no elemento sem um espaço, como em `p=variable_name`, que atribui o valor da variável ao texto do elemento p.

É altamente recomendável examinar a sintaxe e a estrutura do Pug [aqui](https://github.com/pugjs/pug) no LEIAME do GitHub. O Pug tem a ver com usar o espaço em branco e as tabulações para mostrar elementos aninhados e diminuir a quantidade de código necessária para fazer um belo site.

Olhando para nosso arquivo pug 'index.pug', incluído em seu projeto, podemos ver as variáveis *title* e *message*.

Para passar esses dados de nosso servidor, você precisará adicionar um objeto como um segundo argumento para *res.render* com as variáveis e seus valores. Para exemplificar, passe este objeto e configure as variáveis para sua visualização do índice: `{title: 'Hello', message: 'Please login'}`

Deve se parecer como o seguinte: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Em seguida, atualize a página e você deve ver esses valores renderizados em sua visualização no ponto correto conforme descrito no arquivo index.pug!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871).

# --hints--

O Pug deve renderizar as variáveis corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
