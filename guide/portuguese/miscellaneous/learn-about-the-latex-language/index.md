---
title: Learn About the Latex Language
localeTitle: Aprenda sobre o idioma do látex
---
LaTeX (pronunciado LAH-tekh ou LAY-tekh) é projetado para a produção de documentação técnica e científica. Você pode facilmente criar matrizes, matrizes e outras funções matemáticas usando este sistema de composição. Os usuários podem formatar seus documentos usando o código em vez de uma interface gráfica do usuário (GUI).

`$$ (latex language) $$`

Você pode inserir Latex no GitterIM. Exemplos:

## Matriz
```
$$\begin{array} {cc} 
 arr11 & arr12\\ 
 arr21 & arr22\\ 
 \end{array}$$ 
```

## Matriz
```
$$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$ 
```

## Formatação
```
$$\huge\textstyle\color{#F00}{BigRed}\small\textstyle\color{#0F0}{SmallGreen}$$ 
```

[Suporte de Função](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

## Detalhes

[KaTeX Github Repo](https://github.com/Khan/KaTeX) LaTeX é um sistema de composição de alta qualidade; inclui recursos projetados para a produção de documentação técnica e científica. LaTeX é o padrão de fato para a comunicação e publicação de documentos científicos. Suas vantagens são notáveis ​​em documentos longos como livros, trabalhos ou teses.

O Gitter usa o Katex (uma implementação personalizada do LaTeX) e pode ser usado introduzindo o seguinte código:
```
$$\begin{array} {cc} 
 item11 & item12\ 
 item21 & item 22\ 
 \end{array} 
 $$ 
```

Texto:

*   `$$\huge\textstyle{some text}$$` -> $$ \\ enorme \\ textstyle {algum texto} $$
*   `$$\color{#F90}{some text}$$` -> $$ \\ color {# F90} {some text} $$