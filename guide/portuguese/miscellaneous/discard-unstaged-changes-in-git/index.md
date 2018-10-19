---
title: Discard Unstaged Changes in Git
localeTitle: Descartar as alterações não organizadas no Git
---
Ao usar o Git, é comum fazer alterações que você deseja remover completamente antes da fase de preparação. Por exemplo, depois de trabalhar em alguns arquivos, você percebe que deseja reverter as alterações feitas em um arquivo específico. Para descartar as alterações antes de preparar e confirmar, use o comando `$ git checkout` .

## Para desassociar um arquivo:

`$ git checkout <path-to-file>`

_Lembre-se de substituir `<path-to-file>` pelo nome real do arquivo._

## Para desassociar todos os arquivos:

`$ git checkout -- .`