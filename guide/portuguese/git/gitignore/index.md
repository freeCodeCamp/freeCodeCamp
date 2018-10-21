---
title: Gitignore
localeTitle: .gitignore
---
## Gitignore

O arquivo `.gitignore` é um arquivo de texto que informa ao Git quais arquivos ou pastas ignorar em um projeto.

Um arquivo `.gitignore` local geralmente é colocado no diretório raiz de um projeto. Você também pode criar um arquivo global `.gitignore` e quaisquer entradas nesse arquivo serão ignoradas em todos os seus repositórios Git.

Para criar um arquivo `.gitignore` local, crie um arquivo de texto e nomeie-o como `.gitignore` (lembre-se de incluir o `.` No início). Em seguida, edite esse arquivo conforme necessário. Cada nova linha deve listar um arquivo ou pasta adicional que você deseja que o Git ignore.

As entradas neste arquivo também podem seguir um padrão correspondente.

*   `*` é usado como correspondência de caractere curinga
*   `/` é usado para ignorar nomes de caminho relativos ao arquivo `.gitignore`
*   `#` é usado para adicionar comentários a um arquivo `.gitignore`

Este é um exemplo de como o arquivo `.gitignore` poderia ser:
```
# Ignore Mac system files 
 .DS_store 
 
 # Ignore node_modules folder 
 node_modules 
 
 # Ignore all text files 
 *.txt 
 
 # Ignore files related to API keys 
 .env 
 
 # Ignore SASS config files 
 .sass-cache 
```

Para adicionar ou alterar seu arquivo global .gitignore, execute o seguinte comando:

```bash
git config --global core.excludesfile ~/.gitignore_global 
```

Isto irá criar o arquivo `~/.gitignore_global` . Agora você pode editar esse arquivo da mesma forma que um arquivo `.gitignore` local. Todos os seus repositórios Git irão ignorar os arquivos e pastas listados no arquivo `.gitignore` global.

### Mais Informações:

*   Documentação do Git: [gitignore](https://git-scm.com/docs/gitignore)
*   Ignorando arquivos: [GitHub](https://help.github.com/articles/ignoring-files/)
*   `.gitignore` úteis `.gitignore` : [GitHub](https://github.com/github/gitignore)