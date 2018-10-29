---
title: Learn a Little About Latex
localeTitle: Aprende un poco sobre el látex
---
LaTeX está diseñado para la producción de documentación técnica y científica. Puede crear matrices, matrices o varias otras funciones matemáticas.

`$$ (latex language) $$`

Puedes incrustar látex en GitterIM. Ejemplos:

## Formación
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

## Formateo
```
$$\huge\textstyle\color{#F00}{BigRed}\small\textstyle\color{#0F0}{SmallGreen}$$ 
```

[Soporte de funciones](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

## Detalles

[KaTeX Github Repo](https://github.com/Khan/KaTeX) LaTeX es un sistema de composición tipográfica de alta calidad; Incluye características diseñadas para la producción de documentación técnica y científica. LaTeX es el estándar de facto para la comunicación y publicación de documentos científicos. Sus ventajas son notables en documentos largos como libros, trabajos o tesis.

Gitter usa Katex (una implementación personalizada de LaTeX) y se puede usar introduciendo el siguiente código:
```
$$\begin{array} {cc} 
 item11 & item12\ 
 item21 & item 22\ 
 \end{array} 
 $$ 
```

Texto:

*   `$$\huge\textstyle{some text}$$` -> $$ \\ huge \\ textstyle {algo de texto} $$
*   `$$\color{#F90}{some text}$$` -> $$ \\ color {# F90} {texto} $$