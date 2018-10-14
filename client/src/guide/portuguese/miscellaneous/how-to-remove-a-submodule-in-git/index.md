---
title: How to Remove a Submodule in Git
localeTitle: Como remover um submódulo no Git
---
A remoção de um submódulo é útil quando não é mais necessária. As etapas abaixo descrevem a remoção de um submódulo.

## Remova o submódulo

*   Exclua a seção referente ao submódulo do arquivo `.gitmodules`
*   Encene as mudanças via `git add .gitmodules`
*   Exclua a seção relevante do submódulo de `.git/config` .
*   Executar `git rm --cached path_to_submodule` (sem barra)
*   Execute `rm -rf .git/modules/path_to_submodule`
*   Confirme as alterações com o \`git commit -m" Submódulo removido "
*   Exclua os arquivos do submódulo agora não rastreados `rm -rf path_to_submodule`

## Fontes

*   [Stackoverflow - Como faço para remover um submódulo](http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)
*   [git.wiki.kernel.org - Remoção do submódulo Git](https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal)