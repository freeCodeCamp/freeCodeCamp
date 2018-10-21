---
title: Switch Statement
localeTitle: undefined
---
Uma instrução switch permite que uma variável seja testada quanto à igualdade em relação a uma lista de valores. Cada valor é chamado de caso e a variável que está sendo ativada é verificada para cada caso.

Sintaxe: switch (expressão) { expressão constante de caso: afirmações); pausa; //opcional expressão constante de caso: afirmações); pausa; //opcional

// você pode ter qualquer número de declarações de caso. padrão: // Opcional afirmações); }

As seguintes regras se aplicam a uma instrução switch -

A expressão usada em uma instrução switch deve ter um tipo integral ou enumerado, ou ser de um tipo de classe em que a classe tenha uma única função de conversão para um tipo integral ou enumerado.

Você pode ter qualquer número de instruções de caso dentro de um comutador. Cada caso é seguido pelo valor a ser comparado e dois pontos.

A expressão constante para um caso deve ser o mesmo tipo de dados que a variável no switch e deve ser uma constante ou um literal.

Quando a variável que está sendo ligada é igual a um caso, as instruções que seguem esse caso serão executadas até que uma instrução de quebra seja atingida.

Quando uma instrução break é atingida, o switch termina e o fluxo de controle passa para a próxima linha após a instrução switch.

Nem todo caso precisa conter uma pausa. Se nenhuma quebra aparecer, o fluxo de controle cairá para casos subseqüentes até que uma quebra seja atingida.

Uma instrução switch pode ter um caso padrão opcional, que deve aparecer no final do comutador. O caso padrão pode ser usado para executar uma tarefa quando nenhum dos casos é verdadeiro. Nenhuma quebra é necessária no caso padrão.

Exemplo: \`\` \`C ++

# incluir

usando namespace std;

int main () { // declaração de variável local: nota de char = 'D';

switch (grade) { caso 'A': cout << "Excelente!" << endl; pausa; caso 'B': caso 'C': cout << "Bem feito" << endl; pausa; caso 'D': cout << "Você passou" << endl; pausa; caso 'F': cout << "Melhor tentar novamente" << endl; pausa; padrão : cout << "Nota inválida" << endl; } cout << "Sua nota é" << nota << endl;

return 0; } \`\` \`

Saída: Você passou Sua nota é D

### Fontes

https://www.tutorialspoint.com