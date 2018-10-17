---
title: Hello World C
localeTitle: Olá mundo C
---
\## Olá Mundo

Para escrever no console você pode usar a função `printf()` contida na biblioteca `include <stdio.h>`

\`\` \`C #incluir

int main (void) {
```
 printf("hello, world\n");  //lines starting with this are called comments.. 
 
 return 0; 
```

} \`\` \` ## Explicação

*   O #include é um comando de pré-processador. Este comando informa ao compilador para incluir o conteúdo do arquivo stdio.h (entrada e saída padrão) no programa.
    
*   O arquivo stdio.h contém funções como scanf () e print () para receber entrada e exibir a saída respectivamente.
    
*   Se você usa a função printf () sem escrever #include , o programa não será compilado.
    
*   A execução de um programa em C começa a partir da função main ().
    
*   O printf () é uma função da biblioteca para enviar saída formatada para a tela. Neste programa, o printf () exibe Hello, World! texto na tela.
    
*   O retorno 0; statement é o "status de saída" do programa. Em termos simples, o programa termina com esta declaração
    
    ## Saída:
    
    \`\` \`
    

> Olá Mundo \`\` \`