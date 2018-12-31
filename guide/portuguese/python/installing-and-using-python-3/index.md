---
title: Installing and Using Python 3
localeTitle: Instalando e usando o Python 3
---
## Instalando o Python 3

Você pode baixar o Python deste [link](https://www.python.org/downloads/) oficial. Baseado no seu SO (Windows ou Linux ou OSX), você pode querer instalar o Python 3 seguindo [estas instruções](http://docs.python-guide.org/en/latest/starting/installation/) .

## Usando ambientes virtuais

É sempre uma ótima idéia para [proteger](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) sua instalação do Python; e mantê-lo separado do seu _sistema Python_ . O _System Python_ é o caminho para o interpretador Python, que é usado por outros módulos instalados junto com o seu sistema operacional.

Não é **seguro** instalar estruturas ou bibliotecas Web Python diretamente usando o _System Python_ . Em vez disso, você pode usar o [Virtualenv](https://virtualenv.readthedocs.org/en/latest/) para criar e gerar um processo Python separado quando estiver desenvolvendo aplicativos Python.

### Virtualenvwrapper

O [módulo Virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/) facilita o gerenciamento e o sandbox de vários ambientes de área restrita do Python em uma única máquina; sem corromper quaisquer módulos ou serviços escritos em Python e usados ​​por sua máquina.

É claro que a maioria dos ambientes de desenvolvimento hospedados na nuvem, como o [Nitrous](https://www.nitrous.io/) ou o [Cloud9,](https://c9.io/) também vem com esses pré-instalados e prontos para você obter a codificação! Você pode escolher rapidamente uma caixa em seu painel e iniciar a codificação depois de ativar um ambiente do Python 3.

No [Cloud9](https://c9.io/) , você precisa selecionar a caixa Django enquanto cria um novo ambiente de desenvolvimento.

Alguns exemplos de comandos shell seguiriam. Se você deseja copiar e colar, observe que o sinal `$` é um atalho para o terminal, não faz parte do comando. Meu prompt de terminal é algo como isto:
```
alayek:~/workspace (master) $ 
```

E um `ls` parece
```
alayek:~/workspace (master) $ ls 
```

Mas, ao escrever o mesmo nesta documentação, eu estaria escrevendo como
```
$ ls 
```

Voltando à nossa discussão, você pode criar um sandbox incluído no interpretador Python 3 no Cloud9 executando em seu terminal na nuvem:
```
$ mkvirtualenv py3 --python=/usr/bin/python3 
```

Você precisa executá-lo apenas uma vez depois de criar uma nova caixa para o seu projeto. Uma vez executado, este comando criaria um novo virtualenv em área restrita pronto para uso, chamado `py3` .

Para ver os ambientes virtuais disponíveis, você pode usar
```
$ workon 
```

Para ativar o `py3` , você pode usar o comando `workon` com o nome do ambiente:
```
$ workon py3 
```

Todos os três comandos do terminal acima também funcionariam em máquinas Linux locais ou máquinas OSX. Estes são comandos [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction) ; Portanto, se você estiver planejando usá-los, certifique-se de ter este módulo instalado e adicionado à variável `PATH` .

Se você está dentro de um ambiente virtual; Você pode facilmente descobrir isso, verificando o seu terminal. O nome do ambiente seria mostrado claramente no seu prompt de terminal.

Por exemplo, quando estou dentro do ambiente `py3` ; Eu estaria vendo isso como meu prompt de terminal:
```
(py3)alayek:~/workspace (master) $ 
```

Observe o `(py3)` entre chaves! Se por algum motivo, você não estiver vendo isso, mesmo se estiver dentro de um env virtual; Você pode tentar fazer uma das coisas [mencionadas aqui](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv) .

Para sair de um ambiente virtual; ou para desativar um - use o comando
```
$ deactivate 
```

Novamente, isso funciona apenas com o módulo virtualenvwrapper.

### Pipenv

Uma alternativa ao uso do virtualenvwrapper é o [Pipenv](https://docs.pipenv.org/) . Cria automaticamente ambientes virtuais para seus projetos e mantém um `Pipfile` que contém as dependências. Usar o Pipenv significa que você não precisa mais usar pip e virtualenv separadamente ou gerenciar seu próprio arquivo `requirements.txt` . Para aqueles familiarizados com JavaScript, o Pipenv é semelhante ao uso de uma ferramenta de empacotamento como o `npm` .

Para começar a usar o Pipenv, você pode seguir este [guia](https://docs.pipenv.org/install.html#installing-pipenv) muito detalhado. O Pipenv facilita a [especificação da versão do Python que](https://docs.pipenv.org/basics.html#specifying-versions-of-python) você deseja usar para cada projeto, a [importação](https://docs.pipenv.org/basics.html#importing-from-requirements-txt) de um arquivo `requirements.txt` existente e o [gráfico de](https://docs.pipenv.org/#pipenv-graph) suas dependências.