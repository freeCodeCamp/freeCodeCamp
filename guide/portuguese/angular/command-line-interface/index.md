---
title: Command-line Interface
localeTitle: Interface da Linha de comando
---
## Interface da Linha de comando

#### Motivação

Angular está intimamente associado à sua interface de linha de comando (CLI). O CLI simplifica a geração do sistema de arquivos Angular. Ele lida com a maioria da configuração nos bastidores para que os desenvolvedores possam começar a codificação. A CLI também tem uma curva de aprendizado baixa, recomendável para qualquer novato que queira pular para a direita. Heck, até mesmo desenvolvedores experientes da Angular confiam na CLI!

#### Instalação

A CLI Angular requer o [Node.js e o Node Packet Manager (NPM)](https://nodejs.org/en/) . Você pode verificar esses programas com o comando terminal: `node -v; npm -v` . Uma vez instalado, abra um terminal e instale o CLI Angular com este comando: `npm install -g @angular/cli` . Isso pode ser executado em qualquer lugar no seu sistema. A CLI é configurada para uso global com o sinalizador `-g` .

Verifique se o CLI está lá com o comando: `ng -v` . Isso gera várias linhas de informação. Uma dessas linhas indica a versão da CLI instalada.

Reconheça que `ng` é o bloco de construção básico da CLI. Todos os seus comandos começarão com `ng` . Hora de dar uma olhada em quatro dos comandos mais comuns prefixados com `ng` .

#### Comandos Principais

*   ng novo
    
*   ng servir
    
*   ng gerar
    
*   ng construir
    
*   ng update
    

Os termos-chave para cada um deles são bastante reveladores. Juntos, eles compõem o que você precisa para começar a trabalhar com o Angular. Claro, existem muitos mais. Todos os comandos são descritos na [documentação do GitHub da CLI 1](https://github.com/angular/angular-cli/wiki#additional-commands) . Você provavelmente descobrirá que os comandos listados acima cobrirão as bases necessárias.

#### ng novo

`ng new` cria um _novo_ sistema de arquivos Angular. Este é um processo surreal. Por favor, navegue para um local de arquivo desejável para a _nova_ geração de aplicativos. Digite este comando da seguinte maneira, substituindo `[name-of-app]` pelo que você quiser: `ng new [name-of-app]` .

Um sistema de arquivos sob a pasta `[name-of-app]` deve aparecer. Sinta-se livre para explorar o que está dentro. Tente não fazer alterações ainda. Tudo o que você precisa para executar seu primeiro aplicativo Angular vem empacotado juntos nesse sistema de arquivos gerado.

#### ng servir

Para obter o aplicativo em execução, o comando `ng serve` deve ser executado na pasta `[name-of-app]` . Qualquer lugar dentro da pasta serve. A CLI Angular deve reconhecer que está dentro de um ambiente gerado com `ng new` . Ele será executado desde esta condição. Vá em frente e tente: `ng serve` .

O aplicativo é executado na porta 4200 por padrão. Você pode visualizar o aplicativo Angular navegando para `localhost:4200` em qualquer navegador da web. Angular funciona em todos os navegadores. A menos que você esteja usando uma versão antiga do Internet Explorer, o aplicativo será exibido. Ele exibe o logotipo Angular oficial ao lado de uma lista de links úteis.

Ok, o aplicativo é executado. Espero que funcione, mas você precisa saber o que está acontecendo sob o capô. Consulte novamente o sistema de arquivos `[name-of-app]` . Navegue pelo `[name-of-app] -> src -> app` . Aí reside os arquivos responsáveis ​​pelo que você viu no `localhost:4200` .

#### ng gerar

Os arquivos `.component` definem um componente Angular incluindo sua lógica ( `.ts` ), estilo ( `.css` ), layout ( `.html` ) e teste ( `.spec.ts` ). O `app.module.ts` se destaca particularmente. Juntos, esses dois grupos de arquivos trabalham juntos como `component` e `module` . O `component` e o `module` são dois exemplos separados de esquemas angulares. Os esquemas classificam os diferentes blocos de código _gerados_ por _finalidade_ `ng generate` .

Para o propósito deste artigo, entenda que um `module` exporta e importa ativos para e de uma árvore de componentes subjacente. Um `component` preocupa com uma seção da interface do usuário. A lógica, o estilo, o layout e o teste dessa unidade permanecem encapsulados nos vários arquivos `.component` .

Quanto ao `ng generate` , este comando pode gerar esqueletos para cada um dos [esquemas angulares](https://github.com/angular/angular-cli/wiki/generate#available-schematics) disponíveis [2](https://github.com/angular/angular-cli/wiki/generate#available-schematics) . Navegue para `[name-of-app -> src -> app]` . Tente gerar um novo `component` executando: `ng generate component [name-of-component]` . Substitua `[name-of-component]` pelo que você quiser. Um novo arquivo `[name-of-component]` será exibido junto com seus arquivos `component` necessários.

Você pode ver que o `ng generate` agiliza o [código padrão](https://en.wikipedia.org/wiki/Boilerplate_code) do Angular. `ng generate` também liga as coisas. Os esquemas criados no contexto de um sistema de arquivos Angular conectam-se ao módulo raiz do sistema. Nesse caso, seria o arquivo `app.module.ts` dentro de `[name-of-app -> src -> app]` .

#### ng construir

Angular é uma ferramenta de front end. O CLI realiza suas operações em nome do front end. `ng serve` cuida da configuração do servidor de backend. Isso mantém o desenvolvimento inteiramente focado no front end. Dito isto, conectar seu próprio back-end ao aplicativo Angular também deve ser possível.

`ng build` preenche essa necessidade. Antes de experimentá-lo dentro do sistema de arquivos. Navegue para `[name-of-app] -> angular.json` . Procure por esta única linha de código: `"outputPath": "dist/my-app"` .

Essa linha de configuração determina onde o `ng build` despeja seus resultados. Os resultados sendo todo o aplicativo Angular compilado em uma pasta `dist/my-app` . Dentro dessa pasta, existe `index.html` . Todo o aplicativo Angular pode ser executado com `index.html` . Nenhum `ng serve` é necessário a partir daqui. Com este arquivo, você pode facilmente conectar seu back-end.

Dê uma chance: `ng build` . Novamente, isso deve ser executado no sistema de arquivos Angular. Com base no valor-chave de `“outputPath:”` em `angular.json` . Um arquivo irá gerar onde o aplicativo original é totalmente compilado. Se você mantiver `“outputPath:”` o mesmo, o aplicativo compilado estará em: `[name-of-app] -> dist -> [name-of-app]` .

#### ng update

Na atualização de cliques angulares, faça a atualização automática em todos os pacotes angulares e npm para as versões mais recentes.

Aqui está a sintaxe e as opções podem ser usadas com `ng update` .

`ng update [package]`

**Opções**

*   funcionamento a seco `--dry-run (alias: -d)`
    
    Percorra sem fazer alterações.
    
*   força `--force`
    
    Se for false, irá cometer erros se os pacotes instalados forem incompatíveis com a atualização.
    
*   todos `--all`
    
    Se deseja atualizar todos os pacotes em package.json.
    
*   Próximo `--next`
    
    Use a versão maior, incluindo beta e RCs.
    
*   migrar apenas `--migrate-only`
    
    Apenas execute uma migração, não atualize a versão instalada.
    
*   a partir de `--from`
    
    Versão da qual migrar. Disponível apenas com um único pacote sendo atualizado e apenas na migração.
    
*   para `--to`
    
    Versão até a qual aplicar migrações. Disponível apenas com um único pacote sendo atualizado e somente em migrações. Requer de ser especificado. Padrão para a versão instalada detectada.
    
*   registro `--registry`
    
    O registro do NPM a ser usado.
    

#### Conclusão

Esses comandos cumprem o básico. A CLI do Angular é uma conveniência incrível que acelera a geração, configuração e expansão de aplicativos. Ele faz tudo isso enquanto mantém a flexibilidade, permitindo que o desenvolvedor faça as alterações necessárias.

Por favor, verifique os links no `localhost:4200` se você não tiver já. Não se esqueça de executar o `ng serve` antes de abri-lo. Com uma melhor compreensão do CLI, você está pronto para aprender mais sobre o que é gerado pelos seus comandos mais essenciais.

### Fontes

1.  [Google. “Angular / angular-cli / wiki # comandos adicionais.” GitHub.](https://github.com/angular/angular-cli/wiki#additional-commands)
    
2.  [Google. “Angular / angular-cli / wiki / gerar # esquemas disponíveis.” GitHub.](https://github.com/angular/angular-cli/wiki/generate#available-schematics)
    

### Recursos

*   [Website do CLI Angular](https://cli.angular.io)
    
*   [LEIA-ME CLI Angular](https://github.com/angular/angular-cli#angular-cli)
    
*   [Documentação CLI Angular](https://github.com/angular/angular-cli/wiki)