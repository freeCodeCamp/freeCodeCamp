# O manual oficial para os líderes de cada idioma do freeCodeCamp

Este manual o ajudará a configurar e utilizar as ferramentas para seus esforços de localização.

## Como convidar novos colaboradores para o Ghost

O Ghost permite que você defina colaboradores com diferentes níveis de autorização.

A maioria de seus convites será para o nível "Contributor" (Colaborador). Esse nível permite que o usuário crie rascunhos. Selecione esta função ao convidar um novo tradutor.

O nível "Author" (Autor) permite ao usuário criar rascunhos e publicá-los.

O nível "Editor" permite ao usuário acessar todos os rascunhos e publicá-los. Selecione esta função ao convidar um novo revisor.

O nível "Administrator" (Administrador) é reservado para funcionários e líderes de idiomas do freeCodeCamp.

## Como mencionar o autor original de um artigo traduzido

O autor original e o artigo original são vinculados automaticamente, adicionando este código à seção de cabeçalho Code Injection -> em Draft Setiings (Configurações de rascunho) no Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Sendo `link` o link do artigo original.

## Como atualizar os artigos em destaque

> [!TIP] Alterar os artigos no rodapé pelo menos uma vez por mês significa dar um impulso aos artigos vinculados nos resultados do Google.

Mudamos os artigos em destaque em dois lugares diferentes.

- [O repositório do currículo](https://github.com/freeCodeCamp/freeCodeCamp/)
- [O repositório do CDN](https://github.com/freeCodeCamp/cdn)

Para cada artigo, você precisará criar um título menor para usar no rodapé.

### Alterar artigos em destaque no currículo

Os artigos em destaque no rodapé do currículo podem ser alterados, editando o arquivo em `client/i18n/locales/<language>/trending.json`.

Esse é um arquivo `*.json`, que tem a forma de um objeto com chaves de propriedade na forma `article0title` e `article0link`.

Cada número apresenta um dos 30 artigos do rodapé. Veriifique se a correspondência entre o título e o link está correta.

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

You will want to [build the translated client locally](how-to-enable-new-languages.md) to see if the titles have the right length. Cada título deve permanecer em uma única linha e não deve ir para uma nova linha.

### Como atualizar os artigos em destaque no cdn

O arquivo no repositório cdn é o arquivo `universal/trending/<language>.yaml`.

Este arquivo é formatado de modo diferente. Por exemplo, aqui vemos o conteúdo do arquivo para os primeiros 6 artigos:

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

## Como traduzir os cabeçalhos das caixas informativas na documentação

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

## Como traduzir as citações motivacionais

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

O array `compliments` (de elogios) é um array de strings. Então, por exemplo, você escreveria:

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

> [!TIP] Você deve começar com pelo menos uma dúzia de citações para ter alguma variedade. Uma nova citação é mostrada toda vez que o usuário recarrega a página.

## Como atualizar os links comuns

Mantemos um arquivo de links comuns usados por todo o nosso [site do currículo](https://github.com/freecodecamp/freecodecamp) no arquivo `/client/i18n/locales/<language>/links.json`.

Alguns desses links não mudarão - mas você deve atualizar os links dos artigos `/news` para que apontem para a versão traduzida do seu idioma quando ele é publicado.

Você também deve atualizar as categorias de `help` para que apontem para o sub-fórum do seu idioma (geralmente `language/category`, como, por exemplo, `portuguese/HTML-CSS`). Isto permitirá que os campers criem "posts de ajuda" no local correto do fórum.

## Como atualizar os metadados do site

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

1. Arquivos. Escolha quais arquivos traduzir. Você pode fazer todo o projeto, pastas ou arquivos específicos.
2. Idiomas. Defina o seu idioma aqui.
3. Traduções existentes. A melhor combinação aqui é "100% match" (100% correspondente) e "Apply to untranslated strings only" (aplicar apenas a frases não traduzidas). Não aprove automaticamente, já que é sempre melhor que um olho humano revise tudo.

![pré-traduzir as traduções existentes](./images/crowdin/pre-translate3.png)

Quando você tiver terminado de fazer essa configuração, pressione o botão Pre-Translate e aguarde. Ele alertará você quando terminar. O tempo que leva depende de quantas frases não traduzidas existem nos arquivos escolhidos.

## Como atualizar o glossário do Crowdin

> [!TIP] Um glossário atualizado ajuda a ter uma tradução dos termos técnicos mais homogênea.

O glossário do Crowdin é mantido no repositório [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

Na pasta `glossaries` há vários arquivos `*.csv` (valores separados por vírgulas, um para cada um dos projetos no Crowdin que têm um glossário que pode ser atualizado a partir deste fluxo de trabalho.

O arquivo `client.csv` é para o projeto "Learn User Interface" (Interface de aprendizagem do usuário), `curriculum.csv` é para o projeto "Coding Curriculum" (Currículo de programação) e o arquivo `docs.csv` é para o projeto "Contributing Documentation" (Documentação colaborativa).

Para atualizar os glossários do Crowdin você precisa clonar este repositório localmente. Abra o arquivo `.csv` com um programa apropriado - por exemplo, o Microsoft Excel.

No arquivo `.csv`, que você verá que a língua inglesa ocupa as primeiras três colunas, `Term:English` é a coluna para o termo em inglês, `Description:English` é a coluna para a descrição em inglês e `Part:English` é para a classe gramatical (por exemplo, substantivo, verbo etc.) do termo.

Depois delas, cada idioma-alvo tem duas colunas. Se você traduzir para o Dothraki, estará interessado nas colunas `Term:Dothraki` e `Description:Dothraki`. A coluna `Term:Dothraki` é para a tradução do termo em Dothraki, enquanto a coluna `Description:Dothraki` é para uma descrição do termo em Dothraki.

> [!TIP] Em programas como o Microsoft Excel, você pode ocultar as colunas dos outros idiomas para liberar espaço em tela e ver as colunas em inglês e as colunas do idioma de destino ao lado umas das outras.

Após ter feito as alterações e salvo o arquivo, você precisará fazer um PR com as alterações propostas. Depois de o PR ter sido aceito, você precisará executar o fluxo de trabalho do GitHub Action para atualizar o glossário do Crowdin. Suas alterações no glossário não terão efeitos imediatos, mas aparecerão em breve.
