# Estrutura de arquivos do currículo

Nosso conteúdo principal de instrução está localizado dentro de um diretório convenientemente chamado de `curriculum`. Esta página descreverá como esses arquivos estão organizados.

## Terminologia

Existem alguns termos que usamos quando discutimos o conteúdo do nosso currículo.

- `certification` : Quando nos referimos a uma certificação neste caso, estamos falando de um certificado factual que os usuários podem solicitar. Não estamos falando do nome do superBlock específico.
- `superBlock` : Um superbloco é a coleção de desafios em nível superior. Cada superbloco corresponde a uma certificação no currículo (por exemplo, Design responsivo para a web).
- `block` : Um bloco é uma seção dentro de um superbloco. Um bloco corresponde a um grupo de desafios em uma certificação determinada (por exemplo, HTML e HTML5 básico)
- `challenge` : um desafio é uma lição única dentro do currículo (por exemplo, Conhecer os elementos HTML)

## Árvore de arquivos

Ao usarmos esses termos, é assim que a estrutura de arquivos deve ser definida:

<!-- prettier-ignore -->
```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## O diretório `_meta`

O diretório `_meta` é um diretório especial que contém arquivos `.json`. Esses arquivos correspondem a cada bloco do currículo. Eles são usados para determinar a qual superbloco um bloco pertence, além da ordem dos desafios dentro daquele bloco.

## Renomear arquivos

Pode haver situações em que você precise renomear um certificado, superbloco, bloco ou desafio. Esta seção delineará os passos necessários para evitar erros na build ao fazer isso.

> [!ATTENTION] Renomear arquivos dentro da estrutura do currículo geralmente mudará o caminho (ou o URL) do conteúdo na página principal da web. Isso deve ser feito com cuidado, já que os redirecionamentos precisam ser configurados para cada mudança que é realizada.

### Renomear uma certificação

Ao renomear uma certificação, você provavelmente vai querer renomear o superbloco associado a ela. Faça o seguinte para renomear somente o certificado:

1. Renomeie a pasta `curriculum/challenges/_meta/{superBlock}-certificate` com o novo nome.
1. No arquivo `meta.json` daquela pasta, renomeie os valores em `name`, `dashedName` e `challengeOrder` para o novo nome do certificado.
1. Em `curriculum/challenges/english/12-certificate`, renomeie a pasta `{superBlock}-certificate` e o arquivo YAML dentro dela com o novo nome.
1. No arquivo YAML, altere o `title` para o novo nome.
1. Renomeie o arquivo e a pasta da etapa 3 para o resto dos idiomas do currículo.
1. Atualize `client/src/redux/index.ts` para que ele use o `title` correto.
1. Como opção, atualize o `certSlug` para o superbloco do mesmo arquivo. **Note** que renomear um `certSlug` mudará o URL para as certificações e somente deverá ser feito depois de se pensar muito sobre o assunto.
1. Atualize o `title` em `client/src/resources/cert-and-project-map.ts` com o novo valor. **Note** que mudar o `title` aqui **quebrará** a página do superbloco da certificação associada. Ela depende do título do superbloco para encontrar fazer a correspondência com o título da certificação. Você provavelmente vai querer renomear o superbloco ao mesmo tempo.
1. Se você renomeou o `certSlug` na etapa 7, altere aqui para o cert e para todos os valores de `projects` aninhados.
1. Em `config/certification-settings.js`, atualize o valor de `certTypeTitleMap` para o novo nome.
1. Se você renomeou o `certSlug` na etapa 7, atualize a chave de `certSlugTypeMap` no mesmo arquivo.
1. Atualize o nome do certificado no array `legacyCerts` de `client/src/client-only-routes/show-project-links.tsx`, se necessário.
1. Atualize o arquivo `README.md` principal com o novo nome.

### Renomear um superbloco

> [!NOTE] Ao renomear um superbloco, o novo nome de pasta é usado como o caminho e deve ser considerado o nome "correto". Todos os outros valores deverão ser atualizados para refletir essa mudança.

Além disso, você provavelmente vai querer renomear o certificado e o bloco `{superBlock}-projects` quando renomear um superbloco, já que todos compartilham um mesmo nome. Faça o seguinte para renomear somente um superbloco:

1. Renomeie a pasta do superbloco no diretório `curriculum/challenges/english`.
1. Renomeie a pasta do superbloco em _todos_ os outros diretórios `curriculum/challenges/{language}`.
1. Para cada bloco naquele superbloco, atualize o valor de `superBlock` no arquivo `meta.json` até seu dashedName. Você não precisa renomear as pastas aqui. Faça isso ao renomear um bloco.
1. Renomeie a pasta do superbloco em `client/src/pages/learn`.
1. Atualize o arquivo `index.md` na pasta acima, alterando os valores de `title` e `superBlock` com o novo nome.
1. Para cada pasta de bloco que estiver dentro daquela citada acima, atualize o `index.md` para que use o valor `superBlock` correto.
1. No arquivo `client/src/resources/cert-and-project-map.ts`, atualize o caminho para a certificação na parte superior do arquivo, bem como o valor de `title` para aquele superbloco. **Note** que mudar o `title` aqui **quebrará** a capacidade de ver a certificação real deste superbloco. Ela depende do título do superbloco para fazer a correspondência com o título da certificação. Você provavelmente vai querer renomear a certificação ao mesmo tempo.
1. Atualize a chave `superBlockCertTypeMap` em `config/certification-settings.js` para o novo nome do superbloco.
1. Atualize o valor do caminho em `client/src/assets/icons/index.tsx`.
1. Para cada idioma em `client/i18n/locales`, atualize o arquivo `intro.json` para que use o novo `dashedName` do superbloco. No arquivo em inglês, atualize também o `title`.
1. Verifique o arquivo `config/i18n/all-langs.js` para ver se o superbloco está habilitado para as builds do i18n. Atualize todos os valores onde ele for utilizado.
1. Atualize o arquivo `README.md` principal com o novo nome.

### Renomear um bloco

Faça o seguinte para renomear um bloco do currículo:

1. Mude o nome da pasta do bloco no diretório `curriculum/challenges/english/{superBlock}`.
1. Mude o nome da mesma pasta do bloco em _todos_ os outros diretórios de idioma para que correspondam. Eles devem ter a mesma estrutura que a do inglês ou haverá um erro na build.
1. Mude o nome da pasta do bloco no diretório `_meta`.
1. Atualize as propriedades `name` e `dashedName` para aquele arquivo `meta.json` do bloco.
1. Atualize `client/utils/help-category-map.json` para que use o novo nome do bloco como chave.
1. Atualize a pasta do bloco em `client/src/pages/learn/{superBlock}`.
1. No arquivo `index.md` da pasta acima, atualize o valor de `block` no frontmatter.
1. Nos arquivos `client/i18n/locales/{language}/intro.json`, atualize o nome do bloco com o novo nome para todos os idiomas. No arquivo `intro.json` do inglês, atualize também o `title`.
1. Atualize o arquivo `README.md` principal com o novo nome.

### Renomear um desafio

Faça o seguinte para renomear um único arquivo de desafio:

1. Mude o nome do arquivo do desafio no diretório `curriculum/challenges/english/`.
1. Mude o nome de `title` e de `dashedName` naquele arquivo.
1. Mude o nome do arquivo e o `dashedName` naqueles arquivos para _todos_ os outros diretórios de idiomas para que correspondam.
1. Atualize o nome do desafio no arquivo `meta.json` relevante. Os nomes dos desafios não são usados na build, mas fornecem uma alternativa mais fácil de identificar a ordem dos desafios.
1. Se o desafio for um projeto de certificado, atualize o arquivo YAML em `curriculum/english/12-certificates/<superBlock>` para o novo nome.
1. Se o desafio for um projeto de certificação, atualize o `title` e o `link` em `client/src/resources/cert-and-project-map.ts`
1. Se o desafio for um projeto de certificação, atualize o arquivo `README.md` principal com o novo nome.

## A propriedade `dashedName`

A propriedade `dashedName` é usada para gerar o caminho do URL para o superbloco, bloco, ou desafio. Ela deve corresponder em geral ao que o assistente `/utils/slugs.js` daria como resultado para o nome do arquivo.
