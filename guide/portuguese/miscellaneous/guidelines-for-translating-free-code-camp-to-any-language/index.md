---
title: Guidelines for Translating Free Code Camp to Any Language
localeTitle: Diretrizes para traduzir o Free Code Camp para qualquer idioma
---
Muito obrigado pelo seu interesse em traduzir o FreeCodeCamp. A leitura deste documento é recomendada para participar de um esforço coletivo para levar o FreeCodeCamp a mais e mais pessoas em todo o mundo.

## Como contribuir para traduções?

Existem várias maneiras pelas quais você pode contribuir de forma colaborativa para as traduções. Todo esforço de tradução geralmente segue o fluxo de trabalho abaixo.

> _Dica profissional: você pode contribuir para qualquer uma ou todas as fases abaixo do fluxo de trabalho de acordo com seu interesse._

*   [Revise o trabalho de outro tradutor](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3) .
*   [Crie problemas de `Translation` para acompanhar o progresso](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4) .
*   [Implementar traduções](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5) .
*   [Criar solicitações de extração para adicionar as traduções à base de código](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## Diretrizes e Recursos

### Diretrizes gerais

*   Tente não ser muito formal, mas não muito casual, apenas para manter as coisas amigáveis.
*   A fim de tornar o conteúdo mais compreensível para falantes nativos da sua língua-alvo (pense naqueles que não falam inglês), traduza o máximo que puder, tente usar uma palavra em inglês somente se ela já for amplamente usada nos países onde seu idioma de destino é falado.

### Glossário

É eficiente se todos os tradutores que trabalham no mesmo idioma criarem um glossário mostrando a tradução de palavras em inglês empregadas nos desafios do FreeCodeCamp. Às vezes, há mais de uma maneira de traduzir alguns termos, e as diferenças regionais podem criar confusão (por exemplo, alguns termos podem diferir entre o espanhol da Espanha e da América Latina ou entre o francês empregado no Canadá e na França). Seja democrático! Escolha a tradução mais adequada, votando e mantenha um registro dos resultados. Um exemplo de tal registro pode ser encontrado aqui: [FreeCodeCamp Glossary (Inglês para Espanhol)](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0) Use a sala de bate-papo para discutir o glossário, para que ninguém perca nada.

### Se você precisar de ajuda com o Google Translator Toolkit

Você pode encontrar ajuda para automatizar o processo de tradução empregando o Google Translator Toolkit, consulte: [Guia de espanhol](https://github.com/vtamara/fcc_trad)

### Criando uma instância de teste do FreeCodeCamp

Ver o produto final à medida que avança com a tradução pode ajudá-lo a permanecer motivado. É por isso que é uma boa idéia criar uma instância de teste do FreeCodeCamp onde você pode incluir as alterações mais recentes da tradução do idioma em que está trabalhando e usar o FreeCodeCamp incluindo essas alterações. A instância de teste a seguir foi criada para a versão em espanhol do FreeCodeCamp: [Introdução](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json) . Para criar uma instância de teste, siga as etapas a seguir:

1.  Siga as instruções da [página Contribuindo,](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) veja se você consegue ver uma instância em execução em inglês
2.  Abra o [Supported Languages.js](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js) e adicione o idioma da sua instância (por exemplo, `es: 'Spanish'` ), reinicie sua instância.
3.  Altere o URL com um prefixo do seu idioma (por exemplo, para espanhol, `/en/challenges/` to `/es/challenges/` ), se a página tiver sido traduzida, você poderá vê-la.
4.  Procure o arquivo de idioma, tente pesquisar palavras-chave em seu repositório, você pode encontrar todos os desafios em `/seed/challenges/` por exemplo, a página _[Getting Started](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ está localizada em `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  Feliz tradução!
6.  Antes de submeter o PR, por favor, certifique-se de **NÃO** incluir o `supported-lamguages.js` no seu commit, ( `$ git reset -- common/utils/supported-languages.js` )
7.  Por último, mas não menos importante, certifique-se de seguir todas as regras no [Guia do Colaborador](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md) .
8.  Obrigado pela sua contribuição!

### Referências

*   [Documentação do código fonte do FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [Pull Request Contribute](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [Arquivos de ajuda para traduzir os desafios e indicações do FreeCodeCamp usando o Google Translator Toolkit.](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [Guia do contribuinte](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

Se você achar útil, poderá traduzir essas instruções para o seu idioma e adaptá-las para sua equipe de tradução (ver, por exemplo, [original em espanhol](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md) ) [.](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md)

_Este guia é baseado [neste writeup](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md) ._