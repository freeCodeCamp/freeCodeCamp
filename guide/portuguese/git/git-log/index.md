---
title: Git Log
localeTitle: Git Log
---
## Git Log

O comando `git log` exibe todos os commits no histórico de um repositório.

Por padrão, o comando exibe cada confirmação:

*   Algoritmo de hash seguro (SHA)
*   autor
*   encontro
*   mensagem de commit

### Navegando no Git Log

O Git usa o pager do terminal Less para paginar através do histórico de commit. Você pode navegar com os seguintes comandos:

*   para rolar para baixo por uma linha, use j ou ↓
*   rolar para cima por uma linha, use k ou ↑
*   para rolar para baixo uma página, use a barra de espaço ou o botão Page Down
*   para rolar para cima uma página, use b ou o botão Page Up
*   para sair do log, use q

### Git Log Flags

Você pode personalizar as informações apresentadas pelo `git log` usando sinalizadores.

#### \--uma linha

`git log --oneline`

O sinalizador `--oneline` faz com que o `git log` seja exibido

*   um commit por linha
*   os primeiros sete caracteres do SHA
*   a mensagem de commit

#### \--stat

`git log --stat`

O sinalizador `--stat` faz com que o `git log` exiba

*   os arquivos que foram modificados em cada commit
*   o número de linhas adicionadas ou removidas
*   uma linha de resumo com o número total de arquivos e linhas alterados

#### \--patch ou -p

`git log --patch`

ou a versão mais curta

`git log -p`

O flag `--patch` faz com que `git log` exiba

*   os arquivos que você modificou
*   a localização das linhas que você adicionou ou removeu
*   as mudanças específicas que você fez

### Visualizar o número especificado de confirmações por autor

Para visualizar um número especificado de commits por um autor para o repo atual (opcionalmente em um formato prettified), o seguinte comando pode ser usado

`git log --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" -n {NUMBER_OF_COMMITS} --author="{AUTHOR_NAME}" --all`

#### Comece em um commit específico

Para iniciar o `git log` em um commit específico, adicione o SHA:

`git log 7752b22`

Isto irá mostrar o commit com o SHA 7752b22 e todos os commits feitos antes do commit. Você pode combinar isso com qualquer um dos outros sinalizadores.

#### \--gráfico

`git log --graph`

O sinalizador `--graph` permite que você visualize seu `git log` como um gráfico. Para tornar as coisas interessantes, você pode combinar este comando com a opção `--oneline` que aprendeu acima.

`git log --graph --oneline`

A saída seria semelhante a
```
* 64e6db0 Update index.md 
 * b592012 Update Python articles (#5030) 
 * ecbf9d3 Add latest version and remove duplicate link (#8860) 
 * 7e3934b Add hint for Compose React Components (#8705) 
 * 99b7758 Added more frameworks (#8842) 
 * c4e6a84 Add hint for "Create a Component with Composition" (#8704) 
 *   907b004 Merge branch 'master' of github.com:freeCodeCamp/guide 
 |\ 
 | * 275b6d1 Update index.md 
 * |   cb74308 Merge branch 'dogb3rt-patch-3' 
 |\ \ 
 | |/ 
 |/| 
 | *   98015b6 fix merge conflicts after folder renaming 
 | |\ 
 |/ / 
 | * fa83460 Update index.md 
 * | 6afb3b5 rename illegally formatted folder name (#8762) 
 * | 64b1fe4 CSS3: border-radius property (#8803) 
```

Uma das vantagens de usar este comando é que ele permite obter uma visão geral de como os commits foram mesclados e como o histórico do git foi criado.

Existem outras opções que você pode usar em combinação com o `--graph` . `--decorate` deles são - `--decorate` e `--all` . Certifique-se de experimentá-los também. E consulte a [documantation](https://git-scm.com/docs/git-log) para mais informações úteis.

#### Mais Informações:

*   [Git Basics - Visualizando o Histórico de Commit](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
*   [Git Log](https://git-scm.com/docs/git-log)

##### Outros recursos no Git em guide.freecodecamp.org

*   [Git Merge](../git-merge/index.md)
*   [Git Checkout](../git-checkout/index.md)
*   [Git Commit](../git-commit/index.md)
*   [Git Stash](../git-stash/index.md)
*   [Filial Git](../git-branch/index.md)