---
title: Git Hooks
localeTitle: Ganchos
---
## Ganchos

Git Hooks são scripts localizados no diretório `.git/hooks/` de um repositório git. Esses scripts são executados depois de serem acionados por diferentes estágios no processo de controle de versão.

### Amostras

Nesse diretório, há vários scripts de amostra, como `pre-commit.sample` . Essa amostra específica é executada toda vez que um usuário executa `git commit` . Se o script de gancho sair com um status diferente de 0, o commit será interrompido.

### Documentação

*   [Documentação para Git Hooks](https://git-scm.com/docs/githooks)
*   [Tutorial Atlassian em Ganchos Git](https://www.atlassian.com/git/tutorials/git-hooks)
*   [Git Hooks Guide](http://githooks.com/)