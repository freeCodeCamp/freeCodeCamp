---
title: Operators
localeTitle: Operadores
---
# Operadores em C

## 1\. Operadores Aritméticos

*   `+` Adiciona aos operandos (valores) `C int a = 6; int c = a + 1; // c = 7`
*   `-` Subtrai o segundo operando do primeiro `C int a = 8; int b = 9; int c = a - b; // c = -1`
*   `*` Multiplica dois operandos `C int a = 8; int b = 9; int c = a * b; // c = 72`
*   `/` Divide o primeiro operando pelo segundo `C int a = 8; int b = 4; int c = a / b; // c = 2`
*   `%` Dá o restante depois de uma divisão inteira `C int a = 8; int b = 9; int c = b % a; // c = 1 because b = 1*a + 1 = 8 + 1`
*   `++` Aumenta o valor int em um `C int a = 8; a++; // a = 9 int b = a++; // postfix operator; a = 10, b = 9 int c = ++a; // prefix operator; a = 11, c = 11`
*   `--` Diminui o valor int em um `C int a = 8; a--; // a = 7 int b = a--; // postfix operator; a = 6, b = 7 int c = --a; // prefix operator; a = 5, c = 5` // Programa para demonstrar o funcionamento de operadores aritméticos

# incluir

int main () { int a = 9, b = 4, c;
```
c = a+b; 
 printf("a+b = %d \n",c); 
 
 c = ab; 
 printf("ab = %d \n",c); 
 
 c = a*b; 
 printf("a*b = %d \n",c); 
 
 c=a/b; 
 printf("a/b = %d \n",c); 
 
 c=a%b; 
 printf("Remainder when a divided by b = %d \n",c); 
 
 return 0; 
```

}

## 2\. Operadores Relacionais

*   `==` Igualdade - verdade quando os dois operandos são iguais `C int a = 5, b = 5; bool c = (a == b); // c = true`
*   `!=` Não é igual - verdadeiro quando os dois operandos NÃO são iguais `C int a = 5, b = 6; bool c = (a != b); // c = true`
*   `>` Maior que - Verdadeiro quando o primeiro operando é maior que o segundo. `C int a = 8, b = 5; bool c = (a > b); // c = true`
*   `<` Menos que - Verdadeiro quando o primeiro operando é menor que o segundo. `C int a = 5, b = 8; bool c = (a < b); // c = true`
*   `>=` Maior que ou igual - Verdadeiro quando o primeiro operando é maior ou igual ao segundo. `C int a = 8, b = 5; bool c = (a >= b); // c = true bool d = (a >= 8); // d = true`
*   `<=` Menor que ou igual - Verdadeiro quando o primeiro operando é menor ou igual ao segundo. `C int a = 5, b = 8; bool c = (a <= b); // c = true`

## 3\. Operadores Lógicos

*   `&&` AND operator - True quando **ambos** os operandos são verdadeiros. `C bool c = (5 < 6) && (8!=7); // both operands true, therefore c = true`
*   `||` Operador OR - Verdadeiro quando o primeiro ou o segundo operando é verdadeiro (ou ambos) `C bool c = (5 < 6) || (8 == 7) // first operand is true, therefore c = true`
*   `!` NÃO operador - Verdadeiro quando o operando é falso. `C bool c = !(8 == 7) // translate: NOT (false), therefore c = true`

## 4\. Operadores bit a bit

*   `&` AND operator - Se em algum lugar houver um bit nos dois operandos, ele será copiado para o resultado `C A = 11001 B = 01000 RESULT = 01000`
*   `|` Operador OR - Se em algum lugar houver um bit em operandos, ele será copiado para o resultado `C A = 11001 B = 01000 RESULT = 11001`
*   `^` Operador XOR (exclusivo OU) - Se em um local houver um bit em um dos operandos (não ambos), ele será copiado para o resultado `C A = 11001 B = 01000 RESULT = 10001`
*   `~` Negation operator - Inverte os bits. 1 -> 0, 0 -> 1 `C C = 01000 RESULT = 10111`
*   `<<` Operador de deslocamento à esquerda - O operando da esquerda é movido para a esquerda por tantos bits, quanto o operando da direita `C A = 11001 A << 2 RESULT = 00100`
*   `>>` Operador de deslocamento à direita - O operando da esquerda é movido para a direita por tantos bits, quanto o operando da direita `C A = 11001 A >> 2 RESULT = 00110`

## 5\. Operadores de Atribuição

*   `=` `C int a = 7; // 'a' is going to be equal to 7`
*   `+=` `C int a = 7; a += 5; // equivalent to a = a + 5 = 7 + 5 = 12`
*   `-=` `C int a = 7; a -= 2; // equivalent to a = a - 2 = 7 - 2 = 5`
*   `*=` `C int a = 7; a *= 3; // equivalent to a = a * 3 = 7 * 3 = 21`
*   `/=` `C int a = 21; a /= 3; // equivalent to a = a / 3 = 21 / 3 = 7`
*   `%=`  
    `C int a = 21; a %= 5; // equivalent to a = a % 5 = 21 % 5 = 1`

Operadores Diversos ↦ sizeof & ternary Além dos operadores discutidos acima, existem alguns outros operadores importantes, incluindo sizeof e? : suportado pela linguagem C.

Exemplo de descrição do operador sizeof () Retorna o tamanho de uma variável. sizeof (a), onde a é inteiro, retornará 4. & Retorna o endereço de uma variável. &uma; retorna o endereço real da variável.

*   Ponteiro para uma variável. \*uma; ? : Expressão condicional. Se a condição é verdadeira? então valor X: caso contrário, valor Y

## 6\. Precedência do operador em C

Operadores com a maior precedência aparecem no topo da lista. Dentro de uma expressão, operadores com maior precedência será avaliada primeiro.

*   Postfix `() [] -> . ++ --`
*   Unário `+ - ! ~ ++ -- (type)* & sizeof`
*   Multiplicativo `* / %`
*   Aditivo `+ -`
*   Shift `<< >>`
*   Relacional `< <= > >=`
*   Igualdade `== !=`
*   Bit a bit E `&`
*   Bitwise XOR `^`
*   Bitwise OR `|`
*   Lógico E `&&`
*   Lógica OR `||`
*   Condicional `?:`
*   Tarefa `= += -= *= /= %= >>= <<= &= ^= |=`
*   vírgula `,`