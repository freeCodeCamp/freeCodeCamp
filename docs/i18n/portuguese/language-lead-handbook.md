# O manual oficial para os líderes de cada idioma do freeCodeCamp

Este manual o ajudará a configurar e utilizar as ferramentas para seus esforços de localização.

## How to Invite New Contributors to Ghost

Ghost allows you to set contributors with different levels of authorization.

A maioria de seus convites será para o nível "Contributor" (Colaborador). Esse nível permite que o usuário crie rascunhos. Selecione esta função ao convidar um novo tradutor.

O nível "Author" (Autor) permite ao usuário criar rascunhos e publicá-los.

O nível "Editor" permite ao usuário acessar todos os rascunhos e publicá-los. Selecione esta função ao convidar um novo revisor.

O nível "Administrator" (Administrador) é reservado para funcionários e líderes de idiomas do freeCodeCamp.

### How are the Articles Built

Usamos uma abordagem baseada em [JAMStack](https://www.google.com/search?q=what+is+jamstack) para criar e implementar os artigos. Esta estratégia faz com que um site estático seja armazenado em cache e servido a partir de uma CDN rapidamente.

O [Ghost](https://ghost.org) atua como nossa plataforma de gerenciamento de conteúdo. O [11ty](https://11ty.dev) compila os artigos na forma de recursos estáticos – HTML, JavaScript e CSS. Apenas esses recursos estáticos são implantados em nossos servidores.

Esse processo é automatizado e executado periodicamente. Se você publicar algo agora, estará disponível no site de notícias dentro de algumas horas.

Você pode encontrar as agendas de compilação e o status atualizado aqui: https://github.com/freeCodeCamp/news#build

## How to Mention the Original Author of a Translated Article

The original author and the original article are linked automatically adding this code to the Code Injection -> head section in the Draft Settings on Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Sendo `link` o link do artigo original.

## How to Update Trending Articles

> [!TIP] Changing the articles in the footer at least once a month means giving a boost to the linked articles on Google results.

Mudamos os artigos em destaque em dois lugares diferentes.

- [O repositório do currículo](https://github.com/freeCodeCamp/freeCodeCamp/)
- [O repositório do CDN](https://github.com/freeCodeCamp/cdn)

For each article, you will need to create a shorter title to use in the footer.

### Change Trending Articles in the Curriculum

Os artigos em destaque no rodapé do currículo podem ser alterados, editando o arquivo em `client/i18n/locales/<language>/trending.json`.

Esse é um arquivo `*.json`, que tem a forma de um objeto com chaves de propriedade na forma `article0title` e `article0link`.

Each number represents one of the 30 articles in the footer. Veriifique se a correspondência entre o título e o link está correta.

Este é um exemplo de como deve ser a aparência de parte do arquivo `trending.json`.

```json
{
  "article0title":"Nova aba em HTML",
  "article0link":"https://www.freecodecamp.org/portuguese/news/como-usar-o-html-para-abrir-um-link-em-uma-nova-aba/",
  "article1title":"Máscaras de sub-rede",
  "article1link":"https://www.freecodecamp.org/portuguese/news/ficha-informativa-de-sub-redes-mascara-de-sub-rede-24-30-26-27-29/",
  "article2title":"40 projetos em JavaScript",
  "article2link":"https://www.freecodecamp.org/portuguese/news/40-projetos-em-javascript-para-iniciantes-ideias-simples-para-comecar-a-programar-em-js/",
  "article3title":"Tutorial de button onClick",
  "article3link":"https://www.freecodecamp.org/portuguese/news/tutorial-sobre-button-onclick-em-html-e-evento-de-clique-em-javascript/",
  "article4title":"Bot do Discord",
  "article4link":"https://www.freecodecamp.org/portuguese/news/tutorial-de-criacao-de-bot-para-o-discord-em-python/",
  "article5title":"Centralizar em CSS",
  "article5link":"https://www.freecodecamp.org/portuguese/news/como-centralizar-tudo-com-css/",
  ...
}
```

Você vai querer [fazer a build do client traduzido localmente](how-to-enable-new-languages.md) para ver se os títulos têm o comprimento correto. Cada título deve permanecer em uma única linha e não deve ir para uma nova linha.

### How to Update the Trending Articles in the CDN

The file in the CDN repository is the file `universal/trending/<language>.yaml`.

This file is shaped differently. For example, here is the file content for the first 6 articles:

```yaml
article0title: 'Nova aba em HTML'
article0link: 'https://www.freecodecamp.org/portuguese/news/como-usar-o-html-para-abrir-um-link-em-uma-nova-aba/'
article1title:'Máscaras de sub-rede'
article1link: 'https://www.freecodecamp.org/portuguese/news/ficha-informativa-de-sub-redes-mascara-de-sub-rede-24-30-26-27-29/'
article2title: '40 projetos em JavaScript'
article2link: 'https://www.freecodecamp.org/portuguese/news/40-projetos-em-javascript-para-iniciantes-ideias-simples-para-comecar-a-programar-em-js/'
article3title: 'Tutorial de button onClick'
article3link: 'https://www.freecodecamp.org/portuguese/news/tutorial-sobre-button-onclick-em-html-e-evento-de-clique-em-javascript/'
article4title: 'Bot do Discord'
article4link: 'https://www.freecodecamp.org/portuguese/news/tutorial-de-criacao-de-bot-para-o-discord-em-python/'
article5title: 'Centralizar em CSS'
article5link: 'https://www.freecodecamp.org/portuguese/news/como-centralizar-tudo-com-css/'
```

Você pode converter de um formato para o outro cuidadosamente, alterando-o manualmente. Ou você pode usar [o script neste repl](https://replit.com/@Ieahleen/convert-json-to-yaml).

> [!TIP] Um novo fluxo de trabalho está sendo trabalhado. Será preciso alterar em apenas um lugar no futuro.

## How to Translate Articles in the Footer Links

There are some links listed at the bottom of the footer (About, Alumni Network, Open Source, etc.) and some of them can be translated into your language in the same way as other articles.

Artigos que podem ser traduzidos:

- Sobre
- Suporte
- Honestidade acadêmica
- Código de conduta

Os seguintes artigos **não** devem ser traduzidos:

- Loja
- Patrocinadores
- Política de privacidade
- Termos de serviço
- Política de direitos autorais

Os links a seguir estão apontando para sites externos e não podem ser traduzidos:

- Rede de ex-alunos
- Código aberto

### Change the Footer Links in the News

Depois de ter traduzido e publicado os artigos listados como "podem ser traduzidos" acima, você poderá atualizar os links no rodapé de `/news` editando o arquivo `news/config/i18n/locales/<your language>/links.json` no repositório [freeCodeCamp/news](https://github.com/freeCodeCamp/news).

> [!NOTE] As solicitações de pull request para este repositório estão atualmente limitadas apenas à equipe. Se quiser atualizar este arquivo, peça ajuda a alguém da equipe.

Atualize a seguinte parte do arquivo:

```json
{
  ...
  "footer": {
    "about": "https://www.freecodecamp.org/news/about/",
    "support": "https://www.freecodecamp.org/news/support/",
    "honesty": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc": "https://www.freecodecamp.org/news/code-of-conduct/"
  }
}
```

### Change the Footer Links in the Curriculum

Depois de ter traduzido e publicado os artigos listados como "podem ser traduzidos" acima e quando o curr[iculo em seu idioma estiver pronto para o lançamento, você poderá atualizar os links no rodapé de `/learn` editando o arquivo `news/config/i18n/locales/<your language>/links.json` no repositório [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp).

> [!WARNING] Apenas "Sobre", "Suporte", "Honestidade acadêmica" e "Código de conduta" podem ser traduzidos. Deixar os outros URLs inalterados.

Atualize a seguinte parte do arquivo:

```json
{
  ...
  "footer": {
    "about-url": "https://www.freecodecamp.org/news/about/",
    "shop-url": "https://www.freecodecamp.org/shop/",
    "support-url": "https://www.freecodecamp.org/news/support/",
    "sponsors-url": "https://www.freecodecamp.org/news/sponsors/",
    "honesty-url": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc-url": "https://www.freecodecamp.org/news/code-of-conduct/",
    "privacy-url": "https://www.freecodecamp.org/news/privacy-policy/",
    "tos-url": "https://www.freecodecamp.org/news/terms-of-service/",
    "copyright-url": "https://www.freecodecamp.org/news/copyright-policy/"
  },
  ...
}
```

## How to Translate the Info Boxes Headers in the Documentation

Você pode encontrar essas caixas por toda a documentação:

> [!NOTE] Eu sou uma caixa de notificação

> [!TIP] Eu sou uma caixa de dica

> [!WARNING] Eu sou uma caixa de advertência

> [!ATTENTION] Eu sou uma caixa de atenção

Por padrão, os cabeçalhos deles aparecem em inglês, mesmo na documentação traduzida.

É possível traduzir os cabeçalhos para a documentação para o seu idioma alterando o arquivo `docs/index.html`, desta forma:

Dentro do elemento `script` existe um objeto. Nele, você encontra a propriedade `flexibleAlerts`, que tem esta forma:

```js
flexibleAlerts: {
  note: {
    label: {
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/': 'Attention'
    }
  }
}
```

Dentro do objeto da propriedade label, antes da propriedade `'/'`, você adiciona uma nova propriedade para o seu idioma, assim: `/i18n/<language>/`.

Por exemplo, ao adicionar as traduções para o português, você terá algo assim:

```js
flexibleAlerts: {
  note: {
    label: {
      '/i18n/portuguese/': 'Observação',
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/i18n/portuguese/': 'Dica',
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/i18n/portuguese/': 'Aviso',
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/i18n/portuguese/': 'Atenção',
      '/': 'Attention'
    }
  }
}
```

## How to Translate the Motivational Quotes

As citações motivacionais podem ser encontradas no [repositório de currículos](https://github.com/freeCodeCamp/freeCodeCamp/), no arquivo `/client/i18n/locales/<language>/motivation.json`.

Esse arquivo tem a seguinte estrutura geral:

```json
{
  "compliments": [],
  "motivationalQuotes": []
}
```

Os elogios são as frases curtas que aparecem na conclusão de um desafio.

Você não precisa traduzir diretamente as frases usadas em inglês. Você pode escrever um conjunto de frases curtas que sejam apropriadas para mostrar na conclusão de um desafio.

The `compliments` array is an array of strings. So, for example, you would write:

```json
{
  "compliments": ["Top de linha!",  "Agora não para mais!"],
  "motivationalQuotes": []
}
```

> [!TIP] Você deve começar com pelo menos uma dúzia de elogios para ter alguma variedade quando os usuários completarem os desafios.

As citações motivacionais são as citações que aparecem em https://freecodecamp.org/learn.

O array `motivationalQuotes` é um array de objetos. Esses objetos devem incluir uma propriedade `quote` e uma propriedade`author`. assim:

```json
{
  "compliments": [],
  "motivationalQuotes": [
    {
      "quote": "Seja lá o que você fizer, seja bom nisso.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "Uma mudança de perspectiva já faz subir 80 pontos de QI.",       "author": "Alan Kay"
    }
  ]
}
```

> [!TIP] Você deve começar com pelo menos uma dúzia de citações para ter alguma variedade. A new quote is shown every time the user reloads the page.

## How to Update the Common Links

Mantemos um arquivo de links comuns usados por todo o nosso [site do currículo](https://github.com/freecodecamp/freecodecamp) no arquivo `/client/i18n/locales/<language>/links.json`.

Alguns desses links não mudarão - mas você deve atualizar os links dos artigos `/news` para que apontem para a versão traduzida do seu idioma quando ele é publicado.

Você também deve atualizar as categorias de `help` para que apontem para o sub-fórum do seu idioma (geralmente `language/category`, como, por exemplo, `portuguese/HTML-CSS`). Isto permitirá que os campers criem "posts de ajuda" no local correto do fórum.

## How to Update the Site Meta-Data

Os metadados do site estão no arquivo `/client/i18n/locales/<language>/meta-tags.json`. Este arquivo tem cinco chaves: `title`, `description`, `social-description`, `keywords` e `youre-unsubscribed`.

O valor de `youre-unsubscribed` deve ser traduzido diretamente. Os outros valores precisarão ser traduzidos o mais próximo possível, considerando também termos e frases de busca comuns usados em seu idioma.

Se você precisar de ajuda com isso, entre em contato conosco no [chat dos colaboradores](https://discord.gg/PRyKn3Vbay)

## Fluxo de trabalho de pré-tradução no Crowdin

O fluxo de trabalho de pré-tradução pode ser usado para aplicar traduções da memória de tradução às frases.

> [!TIP] É bastante útil restaurar muitas traduções da memória de tradução ao mesmo tempo quando muitos arquivos foram atualizados.

Você pode encontrar o fluxo de trabalho de pré-tradução no topo da página no console de um projeto. Se você ver "Go to console", no canto superior direito, clique lá primeiro.

![botão go to console](./images/crowdin/pre-translate2.png)

![fluxo de trabalho de pré-tradução](./images/crowdin/pre-translate1.png)

Você pode escolher "From Machine Translation" (da tradução de máquina) ou "From Translation Memory" (da memória de tradução). Selecione "Translation Memory" para recuperar as traduções da memória.

Depois, há três etapas a concluir:

1. Arquivos. Choose which files to translate, you can do all the projects, or specific folders or files.
2. Idiomas. Defina o seu idioma aqui.
3. Traduções existentes. A melhor combinação aqui é "100% match" (100% correspondente) e "Apply to untranslated strings only" (aplicar apenas a frases não traduzidas). Não aprove automaticamente, já que é sempre melhor que um olho humano revise tudo.

![pré-traduzir as traduções existentes](./images/crowdin/pre-translate3.png)

Quando você tiver terminado de fazer essa configuração, pressione o botão Pre-Translate e aguarde. Ele alertará você quando terminar. O tempo que leva depende de quantas frases não traduzidas existem nos arquivos escolhidos.

## How to Update Crowdin Glossary

> [!TIP] An updated glossary helps in having a homogeneous translation of technical terms.

O glossário do Crowdin é mantido no repositório [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

In the `glossaries` folder, there are various `*.csv` (comma,separated values) files, one for each of the crowdin projects that have a glossary that can be updated from this workflow.

O arquivo `client.csv` é para o projeto "Learn User Interface" (Interface de aprendizagem do usuário), `curriculum.csv` é para o projeto "Coding Curriculum" (Currículo de programação) e o arquivo `docs.csv` é para o projeto "Contributing Documentation" (Documentação colaborativa).

To update the Crowdin Glossaries, you need to clone this repo locally. Open the `.csv` file with an appropriate program, for example, Microsoft Excel.

No arquivo `.csv`, que você verá que a língua inglesa ocupa as primeiras três colunas, `Term:English` é a coluna para o termo em inglês, `Description:English` é a coluna para a descrição em inglês e `Part:English` é para a classe gramatical (por exemplo, substantivo, verbo etc.) do termo.

Depois delas, cada idioma-alvo tem duas colunas. Se você traduzir para o Dothraki, estará interessado nas colunas `Term:Dothraki` e `Description:Dothraki`. A coluna `Term:Dothraki` é para a tradução do termo em Dothraki, enquanto a coluna `Description:Dothraki` é para uma descrição do termo em Dothraki.

> [!TIP] In programs like Microsoft Excel, you can hide the columns of the other languages to free up screen real-estate and see the English columns and the target language columns near each other.

Após ter feito as alterações e salvo o arquivo, você precisará fazer um PR com as alterações propostas. Depois de o PR ter sido aceito, você precisará executar o fluxo de trabalho do GitHub Action para atualizar o glossário do Crowdin. Suas alterações no glossário não terão efeitos imediatos, mas aparecerão em breve.

## Como promover um colaborador a revisor

If you consider that a contributor could become a Crowdin Proofreader, you can give the proofreader role to them this way:

In Crowdin, individuate the `User management` on the left-hand side menu.

Isto abrirá as ferramentas de gerenciamento de usuário, você será capaz de ver a lista de todos os usuários.

Search for the user that will become a proofreader. Use o menu de três pontos na linha do usuário para abrir um menu e selecione "Add to team" (Adicionar à equipe). As equipes de revisão têm o nome padrão de `Proof Readers (<language>)`. Você pode pesquisar a equipe usando o nome do idioma. Depois de selecionar a equipe, use o botão "ADD" na parte inferior da página para finalizar.

O usuário agora é um revisor.

> [!TIP] O revisor recém-promovido pode se beneficiar de ler a documentação em [How to Proofread Files](how-to-proofread-files.md).
