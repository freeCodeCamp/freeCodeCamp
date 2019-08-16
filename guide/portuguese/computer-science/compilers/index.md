---
title: Compilers
localeTitle: Compiladores
---

## Compiladores

### Programação

Na sua essência, um computador barebones (também conhecido como computador de programa armazenado) nada mais é do que uma máquina que sabe ler etapas escritas em um conjunto de instruções fixo e executá-las. O conjunto de instruções que um computador entende é muito específico para ele. Isso também é conhecido como linguagem de máquina (**opcodes**). Linguagem de máquina é muitas vezes referida como código binário.

Humanos interagem com computadores usando **Programas**. Um programa é simplesmente uma sequência de opcodes fornecidos ao computador juntamente com dados que são necessários para executar os opcodes.

Por exemplo,

```
ADD 10, 20  // ADD é o Opcode (código da operação)
            // e 10, 20 são os dois operandos (dados)
            // necessários para que a instrução ADD seja executada com sucesso
```

Os humanos desenvolvem programas para resolver problemas complexos. Observando como os opcodes são simples, se tentarmos desenvolver programas usando apenas opcodes, será muito complicado e difícil de depurar. Para resolver este problema, linguagens de alto nível como C/C++, Python, Java, Javascript, etc foram desenvolvidas.

Agora, linguagens de alto nível não são adequadas para execução por computadores. Assim, surgiu a necessidade de um tradutor que pudesse digerir os programas de linguagem de alto nível e convertê-los em instruções de linguagem de máquina adequadas para execução por um computador.

#### \[HUMANOS\] -> \[Programas em linguagem de alto nível\] -> \[Tradutor\] -> \[Linguagem de máquina\] -> \[Computador\]

Um **compilador** é um tipo de programa tradutor, que traduz linguagens de alto nível em código binário, que não é nada além de 1s e 0s. Quando você executa seu código-fonte, um compilador traduz todo o código primeiro e depois produz o código binário. Então o computador pega o código binário e o executa.

Se houver erros no seu código-fonte, o compilador detecta e sinaliza-os. Isso interrompe o processo de compilação. Depois que todos os erros são corrigidos, o compilador converte o código e gera um programa executável.

## Partes de um compilador

A maioria dos compiladores divide-se em três estágios principais: Análise, Transformação e Geração de Código

1. _Análise (Parsing)_ é tomar código bruto e transformá-lo em uma representação mais abstrata do código.
2. A _Transformação_ pega essa representação abstrata e a manipula para fazer o que o compilador quiser.
3. A _Geração de Código_ pega a representação transformada do código e o transforma em novo código.

#### Análise

A análise normalmente é dividida em duas fases: **Análise Lexical** e **Análise Sintática**.

A _Análise Lexical_ pega o código bruto e o separa em coisas chamadas de tokens por uma coisa chamada tokenizer (ou lexer).

```
Tokens são uma lista de pequenos objetos que descrevem uma peça isolada da sintaxe.
Eles podem ser números, rótulos, pontuação, operadores, etc.
```

A _Análise Sintática_ pega os tokens e os reformata em uma representação que descreve cada parte da sintaxe e sua relação com as outras. Isso é conhecido como uma representação intermediária ou Árvore de Sintaxe Abstrata.

```
Uma Árvore de Sintaxe Abstrata (ou *Abstract Syntax Tree*, AST) é um objeto profundamente aninhado.
Ela representa o código de uma maneira que é simples de trabalhar e nos fornece muitas informações.
```

#### Transformação

O próximo tipo de estágio para um compilador é a transformação. Novamente, isso apenas pega a AST da última etapa e faz alterações nela. Ele pode manipular o AST na mesma linguagem ou pode traduzi-lo para uma linguagem totalmente nova.

#### Geração de Código

A fase final de um compilador é a geração de código. Às vezes, os compiladores fazem coisas que se sobrepõem à transformação, mas, na maior parte, a geração de código apenas pega a AST e a converte em código binário.

Todos os compiladores precisam executar estas etapas. A maioria dos compiladores modernos também executa outras etapas, como verificar erros de tipo e otimizar o código compilado resultante.

#### Mais Informações:

["A Gentler Introduction to Programming", de Matt Adesanya,](https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8) abrange compiladores versus intérpretes, juntamente com outros conceitos básicos de programação.
