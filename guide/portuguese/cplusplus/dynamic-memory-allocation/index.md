---
title: Dynamic Memory Allocation
localeTitle: Alocação Dinâmica de Memória
---
## Alocação de Memória Dinâmica em C ++

### O que é alocação dinâmica de memória em C ++?

*   **Alocação de memória** em C ++ refere-se à memória alocada para as variáveis ​​que você usa em todo o seu programa.
*   **Alocação de Memória Dinâmica** é a memória que é atribuída às variáveis ​​no tempo de execução e a quantidade de memória requerida também é decidida no tempo de execução.
*   Essa memória vem do **heap** , enquanto variáveis _não estáticas_ e variáveis _locais_ obtêm memória da **pilha** .
*   Em C ++, o programador pode executar alocações de memória manualmente e é chamado como **_alocação de memória dinâmica_** .
*   Era possível em C fazer alocação de memória dinâmica, usando _funções calloc_ e _malloc_ para alocar memória e usar função _livre_ para desalocar a memória dinâmica.
*   Em C ++, além de acima, há duas funções, _new_ e _delete_ para executar alocação de memória dinâmica e desalocação.

### NOVO operador

*   `new` operador pode conceder a memória do programador do heap (se disponível). Se a memória solicitada pelo programador estiver disponível, o `new` operador inicializa a memória e retorna o endereço (referência) da memória alocada.
*   **Sintaxe**  
    `pointer-variable-type` = **novo** `data-type;`  
    Exemplo 1: `int *ptr` = **new** `int;`  
    Exemplo 2: `int *ptr2` = **new** `int[10];`  
    Aqui, `pointer-variable-type` é um **ponteiro** de `data type` de `data type` . O `data-type` pode ser int, char, etc. ou tipo de dados definido pelo usuário.

### Operador DELETE

*   É responsabilidade do programador des-alocar a memória alocada dinamicamente, caso contrário a memória não estará disponível para ser reatribuída até o final do programa.
    
*   Para desalocar a memória, o operador `delete` está disponível e pode ser usado pelo programador.
    
*   **Sintaxe**  
    **delete** `pointer-type-variable;`  
    Por exemplo, para liberar a memória alocada no exemplo 1 acima, nós digitamos:  
    `delete ptr;`  
    Da mesma forma, por exemplo 2, a memória pode ser liberada por:  
    `delete ptr2` ;
    
    ### Perdas de memória
    
    Os vazamentos são causados ​​quando você não consegue desalocar a memória dinâmica alocada por meio do operador `New` no final do programa. Se você não desalocá-lo com o operador Excluir, seu computador continuará criando nova memória no heap toda vez que o programa for executado. Isso faz com que o computador fique lento porque a memória não é excluída e a memória disponível diminui.