---
title: Macros
localeTitle: Macros
---
## Macros

A gravação de macros é uma maneira de fazer algumas tarefas repetitivas automaticamente no VIM.

### Macros de Gravação

As macros usam um dos registradores VIM para serem armazenados, cada registro é identificado por uma letra de `a` a `z` .

Para iniciar uma macro, no modo normal, pressione:

```vim
q<REGISTER LETTER> 
```

Exemplo: `qq` inicia uma macro no registrador `q` , `qs` inicia a macro no registrador `s`

Neste ponto, você verá na `recording @q` linha de fundo do VIM `recording @q` , isso significa que tudo que você digitar agora será registrado na macro.

Para interromper o registro da macro, pressione `<ESC>` para voltar ao modo NORMAL e `q` para sair da macro.

Para executar a macro que você registrou, pressione `@` e o registrador `q` .

#### O processo completo é assim:

*   `qq` -> start registra a macro no registrador `q`
*   `...` -> a série de comandos que você quer gravar
*   `<ESC>q` -> voltar ao modo NORMAL e sair do registro macro
*   `@q` -> executa a macro, começando da linha atual
*   `@@` -> execute a macro novamente

### Mais informações

Você pode encontrar mais informações sobre macros no Wiki de Dicas do VIM: http://vim.wikia.com/wiki/Macros