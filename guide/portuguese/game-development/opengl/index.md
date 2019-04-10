---
title: OpenGL
localeTitle: OpenGL
---
## Desenvolvimento de Jogos com OpenGL

A Open Graphics Library (OpenGL) é uma interface de programação de aplicativos (API) entre linguagens e plataformas para a renderização de gráficos vetoriais em 2D e 3D. A API é normalmente usada para interagir com uma unidade de processamento gráfico (GPU), para obter uma renderização acelerada por hardware.

A Silicon Graphics Inc. (SGI) começou a desenvolver o OpenGL em 1991 e lançou-o em janeiro de 1992; os aplicativos usam-no extensivamente nos campos de desenho auxiliado por computador (CAD), realidade virtual, visualização científica, visualização de informação, simulação de voo e videogames. Desde 2006, o OpenGL é administrado pelo consórcio de tecnologia sem fins lucrativos Khronos Group.

## Implementações

O Mesa 3D é uma implementação de código aberto do OpenGL. Ele pode fazer renderização de software pura e também pode usar aceleração de hardware em BSD, Linux e outras plataformas, aproveitando a Infraestrutura de Renderização Direta. A partir da versão 13.0, implementa a versão 4.5 do padrão OpenGL.

## Pré-requisitos

Nenhum pré-requisito especial é necessário para seguir a maioria dos tutoriais. Experiência com qualquer linguagem de programação (C, Java, Lisp, Javascript) é melhor para entender completamente o código, mas não é necessário; será simplesmente mais complicado aprender duas coisas ao mesmo tempo.

## Instalando o OpenGL no Linux

Mesa é a biblioteca GL usada. O Ubuntu 16.04 inclui o Mesa 11.2, que suporta o OpenGL 4.1. Basta instalar os `libgl1-mesa-dev` e `mesa-common-dev` para instalar os arquivos de desenvolvimento para ele.

Se você realmente precisa do 4.5, provavelmente precisará desenvolver-se contra os drivers AMD ou NVidia propreitários, e precisará de um cartão que realmente suporte o 4.5 para executar qualquer software que você criar usando essa versão da API.

#### Mais Informações:

[Wiki do OpenGL](https://en.wikipedia.org/wiki/OpenGL) [Tutoriais OpenGL](http://www.opengl-tutorial.org/)