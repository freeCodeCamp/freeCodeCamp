---
title: Inline Function
localeTitle: Função Inline
---
# Função Inline

## Introdução

A função Inline é uma função especial definida em C ++ e é expandida em linha quando é chamada.

Agora, o que isso significa exatamente?

Sempre que uma função é chamada, é preciso muito tempo extra para executar uma série de atividades, como saltar para a função, salvar registros, empurrar argumentos para a pilha e retornar à função de chamada. Então leva muito tempo. Mas uma função inline é uma função na qual o compilador foi solicitado a executar uma expansão inline. Onde a função solicita ao compilador para inserir o corpo completo da função em cada lugar que a função é chamada, em vez de gerar código para chamar a função em um local é definido.

No entanto, não podemos garantir que todas as funções declaradas em linha sejam inline. Porque quando declaramos uma função como `inline` , é um pedido, não um comando. Compilador pode ignorar o pedido de inlining nas seguintes situações: - 1) Se a função contém loop, por exemplo, `for` loop, `while` loop, `do-while` loop etc. 2) Se a função contiver um `switch` ou instrução `goto` . 3) Se a função não retornar nada, mesmo se o tipo de retorno (diferente de `void` claro) for mencionado. 4) Se a função contiver uma variável estática. 5) Se a função contiver uma chamada recursiva.

\`\` \`c ++

## sintaxe: -

inline return _type_ nome da _função_ (argument\_list) {

// corpo da função

}
```
## When to use Inline function 
 
 * When the function performs small tasks and is called very often. 
 * When performance is important. 
 * Instead of a macro. 
```

c ++

# incluir

usando namespace std;

class MathOperation {

público:
```
inline int add(int x, int y){ 
 
  return(x+y); 
 } 
 
 inline float div(int n1, float n2){ 
 
  return(n1/n2); 
 } 
```

};

int main () {

MathOperation obj;

cout << "Adição é:" << obj.add (34,12) << <"\\ n"; cout << "Divisão é:" << obj.div (12.3.4) << "\\ n";

return 0;

} \`\` \`

## Vantagens da função Inline

*   Ele salva a sobrecarga da chamada de retorno de uma função.
*   Aumenta a localidade de referência utilizando o cache de instruções.
*   Acelera o seu programa, evitando overheads de chamadas de funções.
*   Ele economiza sobrecarga de variáveis ​​de operações push / pop na pilha, quando as chamadas de função acontecem.
*   É possível colocar uma definição de função em um arquivo de cabeçalho, isto é, ela pode ser incluída em várias unidades de compilação, sem que o vinculador se queixe.

## Desvantagens da função inline

*   Quando usado em um cabeçalho, torna o seu arquivo de cabeçalho maior com informações que os usuários não se importam.
*   Aumenta o tamanho do executável devido à expansão do código.
*   Inline C ++ é resolvido em tempo de compilação. O que significa que se você alterar o código da função inline, você precisaria recompilar todo o código usando-o para ter certeza de que ele será atualizado.
*   Como mencionado acima, aumenta o tamanho do executável, o que pode causar uma surra na memória. Mais número de falhas de página, reduzindo o desempenho do seu programa.