---
title: Wiki Git Aliases
localeTitle: Aliases do Wiki Git
---
Para a maioria dos desenvolvedores, muito do nosso tempo é gasto no Terminal e a maioria é gasto digitando comandos do Git. Criamos um conjunto de atalhos de teclado com aliases e funções Bash para agilizar seu fluxo de trabalho e salvar centenas de pressionamentos de teclas todos os dias.

O Git permite que você defina aliases, mas eles são limitados e apenas economizam alguns toques no teclado (por exemplo, ao invés de git checkout você pode digitar git co, mas você ainda precisa digitar git). Como o Bash é o interpretador de linha de comando padrão do Terminal, você também pode definir aliases de Bash para reduzir ainda mais as teclas digitadas.

Aqui está uma lista de aliases e funções do Git Bash. Para usá-los como seus, basta adicioná-los ao arquivo em que você armazena seus aliases / funções. (Ou seja, `~/.bash_profile` ou `~/.bashrc` )

Quando copiar e colar, é importante manter o espaçamento. (isto é, para aliases, não deve haver espaços antes e depois dos sinais de igual, e para funções, deve haver um espaço após a chave de abertura da declaração e um ponto e vírgula após o comando. Não se esqueça de recarregar o arquivo ( source `~/.bash_profile` ) ou reinicie o Terminal depois de fazer alterações.