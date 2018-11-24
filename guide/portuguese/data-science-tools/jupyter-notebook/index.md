---
title: Jupyter Notebook
localeTitle: Caderno Jupyter
---
## Caderno Jupyter

O Jupyter Notebook é um aplicativo da Web de código aberto. Ele permite que você crie e compartilhe documentos que contenham código ativo, equações, visualizações e texto narrativo.

O Jupyter Notebook ajuda você a criar e compartilhar documentos contendo código ativo, equações, visualizações e rich text.

Você pode usá-lo para:

*   limpeza de dados e transformação
*   simulação numérica
*   modelagem estatística
*   Visualização de dados
*   aprendizado de máquina

![](https://github.com/indianmoody/images/blob/master/guide_fcc/guides_jupyter_snap.jpeg) Veja seus resultados à medida que você avança passo a passo. Assim como nesta imagem.

## O que é um caderno Jupyter?

Nesse caso, "caderno" ou "documentos de caderno" denotam documentos que contêm elementos de código e rich text, como figuras, links e equações. Por causa do mix de código e elementos de texto, esses documentos são o local ideal para reunir uma descrição de análise e seus resultados, assim como podem ser executados para realizar a análise de dados em tempo real.

"Jupyter" é um acrônimo solto que significa Julia, Python e R. Essas linguagens de programação foram as primeiras linguagens de destino do aplicativo Jupyter, mas atualmente, a tecnologia de notebooks também suporta muitos outros idiomas. E aí está: o Caderno Jupyter.

## O que isso faz?

Como um aplicativo servidor-cliente, o Jupyter Notebook App permite que você edite e execute seus notebooks por meio de um navegador da web. O aplicativo pode ser executado em um PC sem acesso à Internet ou pode ser instalado em um servidor remoto, onde você pode acessá-lo através da Internet.

Seus dois principais componentes são os núcleos e um painel.

Um kernel é um programa que executa e faz a introspecção do código do usuário. O Jupyter Notebook App possui um kernel para o código Python, mas também existem kernels disponíveis para outras linguagens de programação. O painel do aplicativo não apenas mostra os documentos do bloco de anotações que você criou e pode reabrir, mas também pode ser usado para gerenciar os kernels: você pode quais deles estão sendo executados e desligá-los, se necessário.

## Instalação

Você pode usar o Anaconda ou o Pip para instalar o notebook Jupyter. Para os passos a seguir, consulte o guia oficial [Aqui.](https://jupyter.readthedocs.io/en/latest/install.html)

#### Mais Informações:

\=======

### Características

*   Não há necessidade de executar seu arquivo de código completo todas as vezes. Basta executar uma célula individual do Notebook para avaliar uma parte específica do código.
*   O Notebook tem suporte para mais de 40 linguagens de programação, incluindo Python, R, Julia e Scala.
*   Os notebooks podem ser compartilhados com outras pessoas usando e-mail, Dropbox, GitHub e o Jupyter Notebook Viewer.
*   Seu código pode produzir uma saída rica e interativa: HTML, imagens, vídeos, LaTeX e tipos MIME personalizados.
*   Aproveite as ferramentas de big data, como o Apache Spark, do Python, R e Scala. Explore os mesmos dados com pandas, scikit-learn, ggplot2, TensorFlow.

O notebook Jupyter combina dois componentes:

### Um aplicativo da web:

O Jupyter Notebook App ajuda a editar e executar documentos do notebook em um navegador da Web, combinando textos explicativos, matemática, cálculos e rich media.

### Documento do Notebook:

O Jupyter Notebook App pode criar um "documento Notebook" contendo elementos de código e rich text. Um documento do Notebook pode ser legível e executável.

Estes documentos são produzidos pelo aplicativo Jupyter Notebook.

## Jupyter Notebook App

Como um aplicativo servidor-cliente, o Jupyter Notebook App permite que você edite e execute seus notebooks por meio de um navegador da web.  
O aplicativo pode ser executado em um PC sem acesso à Internet ou pode ser instalado em um servidor remoto, onde você pode acessá-lo através da Internet.

Seus dois principais componentes são os núcleos e um painel.

### Kernels

Um kernel é um programa que executa e faz a introspecção do código do usuário. O Jupyter Notebook App possui um kernel para o código Python, mas também existem kernels disponíveis para outras linguagens de programação.

### painel de controle

O painel do aplicativo não apenas mostra os documentos do bloco de anotações que você criou e pode reabrir, mas também pode ser usado para gerenciar os kernels: você pode quais deles estão sendo executados e desligá-los, se necessário.

### Como funcionam os notebooks

Os notebooks da Jupyter surgiram do projeto IPython iniciado por Fernando Perez. O IPython é um shell interativo, semelhante ao shell normal do Python, mas com ótimos recursos, como realce de sintaxe e conclusão de código. Originalmente, os notebooks funcionavam enviando mensagens do aplicativo da Web (o notebook que você vê no navegador) para um kernel do IPython (um aplicativo IPython executado em segundo plano). O kernel executou o código e o enviou de volta ao notebook. ![Arquitetura notebook](https://jupyter.readthedocs.io/en/latest/_images/notebook_components.png)

Quando você salva o bloco de notas, ele é gravado no servidor como um arquivo JSON com uma extensão de arquivo **.ipynb** O novo nome Jupyter vem da combinação de **Ju** lia, **Py** thon e **R.** Existem muitos kernels para diferentes idiomas para usar o Jupyter. você pode verificar a [lista de kernels Jupyter disponíveis](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) .

### Instalando o Jupyter Notebook

Os notebooks Jupyter vêm automaticamente com a distribuição. Você poderá usar blocos de anotações do ambiente padrão. Para instalar os notebooks Jupyter em um ambiente `conda install jupyter notebook` : `conda install jupyter notebook` Para instalar os notebooks Jupyter com pip: `pip install jupyter notebook`

#### Mais Informações:

*   [Site da Jupyter Org](http://jupyter.org)
*   [Guia de início rápido do Jupyter / IPython Notebook](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)
*   [O que é o Jupyter Notebook por codebasics, duração 8:24](https://www.youtube.com/watch?v=q_BzsPxwLOE)
*   [Jupyter Notebook Tutorial / Ipython Tutorial Notebook, por codebasics, duração 24:07](https://www.youtube.com/watch?v=EEEZX_0FMEc)
*   [Mais Informações](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)