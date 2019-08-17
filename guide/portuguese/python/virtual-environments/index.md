---
title: Virtual Environments
localeTitle: Ambientes Virtuais
---
## Ambientes Virtuais

Ambientes virtuais podem ser descritos como diretórios de instalação isolados. Esse isolamento permite que você localize a instalação das dependências do seu projeto, sem forçá-lo a instalá-las em todo o sistema.

Imagine que você tenha dois aplicativos, App1 e App2. Ambos exigem o pacote Pak, mas com versões diferentes. Se você instalar o Pak versão 2.3 para App1, você não poderá executar o App2, porque ele requer a versão 3.1. Aqui é quando os ambientes virtuais são úteis.

Benefícios:

*   Você pode ter vários ambientes, com vários conjuntos de pacotes, sem conflitos entre eles. Desta forma, os requisitos de diferentes projetos podem ser satisfeitos ao mesmo tempo.
*   Você pode facilmente liberar seu projeto com seus próprios módulos dependentes.

Aqui estão duas maneiras de criar ambientes virtuais em Python.

## Virtualenv

[`virtualenv`](https://virtualenv.pypa.io/en/stable/) é uma ferramenta usada para criar ambientes Python isolados. Ele cria uma pasta que contém todos os executáveis ​​necessários para usar os pacotes que um projeto Python precisaria.

Você pode instalá-lo com `pip` :
```
pip install virtualenv 
```

Verifique a instalação com o seguinte comando:
```
virtualenv --version 
```

### Crie um ambiente

Para criar um ambiente virtual, use:
```
virtualenv --no-site-packages my-env 
```

Isso cria uma pasta no diretório atual com o nome do ambiente ( `my-env/` ). Esta pasta contém os diretórios para instalação de módulos e executáveis ​​do Python.

Você também pode especificar a versão do Python com a qual deseja trabalhar. Apenas use o argumento `--python=/path/to/python/version` . Por exemplo, `python2.7` :
```
virtualenv --python=/usr/bin/python2.7 my-env 
```

### Listar Ambientes

Você pode listar os ambientes disponíveis com:
```
lsvirtualenv 
```

### Ativar um ambiente

Antes de começar a usar o ambiente, você precisa ativá-lo:
```
source my-env/bin/activate 
```
Em sistema operacional Windows:
```
my-env\Scripts\activate
```

Isso garante que apenas pacotes sob `my-env/` sejam usados.

Você notará que o nome do ambiente é mostrado à esquerda do prompt. Desta forma, você pode ver qual é o ambiente ativo.

### Instalar pacotes

Você pode instalar pacotes um por um ou definindo um arquivo `requirements.txt` para o seu projeto.
```
pip install some-package 
 pip install -r requirements.txt 
```

Se você deseja criar um arquivo `requirements.txt` partir dos pacotes já instalados, execute o seguinte comando:
```
pip freeze > requirements.txt 
```

O arquivo conterá a lista de todos os pacotes instalados no ambiente atual e suas respectivas versões. Isso ajudará você a liberar seu projeto com seus próprios módulos dependentes.

### Desativar um ambiente

Se você terminar de trabalhar com o ambiente virtual, poderá desativá-lo com:
```
deactivate 
```
Em sistema operacional Windows:
```
my-env\Scripts\deactivate.bat
```

Isso coloca você de volta ao interpretador Python padrão do sistema com todas as suas bibliotecas instaladas.

### Excluir um ambiente

Simplesmente exclua a pasta do ambiente.

## Conda

[`Conda`](https://conda.io/docs/index.html) é um pacote, dependência e gerenciamento de ambiente para muitos idiomas, incluindo o Python.

Para instalar o Conda, siga estas [instruções](https://conda.io/docs/user-guide/install/index.html) .

### Crie um ambiente

Para criar um ambiente virtual, use:
```
conda create --name my-env 
```

A Conda criará a pasta correspondente dentro do diretório de instalação do Conda.

Você também pode especificar com qual versão do Python você quer trabalhar:
```
conda create --name my-env python=3.6 
```

### Listar Ambientes

Você pode listar todos os ambientes disponíveis com:
```
conda info --envs 
```

### Ativar um ambiente

Antes de começar a usar o ambiente, você precisa ativá-lo:
```
source activate my-env 
```

### Instalar pacotes

O mesmo que com `virtualenv` .

### Desativar um ambiente

Se você terminar de trabalhar com o ambiente virtual, poderá desativá-lo com:
```
source deactivate 
```

### Remover um ambiente

Se você quiser remover um ambiente do uso Conda:
```
conda remove --name my-env 
```

#### Mais Informações:

*   [site oficial](https://virtualenv.pypa.io/en/stable/) `virtualenv`
*   [Site oficial do](https://conda.io/docs/index.html) `Conda`
*   `The Hitchhicker's Guide to Python` - [Pypenv e ambientes virtuais](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
