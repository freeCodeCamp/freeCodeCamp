---
title: Copy and Paste
localeTitle: Copiar e colar
---
# Copiando e colando no Vim

No Vim, copiar é comumente chamado de 'yanking' e colar permanece o mesmo.

### Teclas de Comando

As chaves usadas para puxar e colar no Vim são:

*   `x` para excluir um caractere
*   `y` para arrancar
*   `p` para colocar / colar depois do cursor
*   `P` para colocar / colar antes do cursor
*   `pp` para colocar / passar uma linha inteira
*   `d` para cortar
*   `dd` para cortar uma linha inteira
*   `"` cortar ou puxar para um registrador

### Copiando

Para arrancar ou cortar, digite `y` ou `d` , seguido por um "objeto de texto". Estes descrevem quanto texto deve ser removido ou excluído. Por exemplo, `yw` copia uma palavra e `d$` apaga do cursor para o final da linha. Eles também podem ser usados ​​no modo visual, pressionando `v` e movendo o cursor e, em seguida, pressionando `d` exclui todo o texto dentro da seleção.

### Registros

Um registrador é apenas outro nome para a área de transferência. Mas ao contrário de outros editores de texto, o Vim tem muitas dessas "pranchetas".

Para arrancar ou apagar para um registrador, digite `"<register name><command>` (por exemplo: `"ayw` para \[y\] ank \[w\] ord para registrar `a` ). Os nomes de registros podem ter apenas um caractere por motivos óbvios ( `"m` , `"M` , `"3` são permitidos, mas `"mr` , `"MyReg` , `"MyRegisterName` não são). O registrador padrão que é armazenado quando nenhum registro é especificado é `"` e a área de transferência do sistema que pode ser acessada em outros programas é `+` . Você também pode usar caracteres minúsculos para acessar registros e usar caracteres maiúsculos para anexar aos registros. Por exemplo `"dyy` copia a linha atual para o `d` registro, digitando `"D3yw` copia as próximas 3 palavras e as adiciona ao que já está armazenado em `d` .

### Colando

A colagem pode ser feita no modo normal ou no modo de inserção. No modo normal:

*   `p` pastas após o cursor
*   `P` pastas antes do cursor
*   `gp` cola depois do cursor e move o cursor para o final da pasta
*   `gP` cola antes do cursor e move o cursor para o final da pasta

No modo de inserção, digite `Ctrl-r` para colar e, em seguida, digite um registro, normalmente `"` , isso irá colar a partir do registro onde o cursor está e mover o cursor para depois da pasta.