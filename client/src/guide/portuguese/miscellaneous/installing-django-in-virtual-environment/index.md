---
title: Installing Django in Virtual Environment
localeTitle: Instalando o Django no ambiente virtual
---
[O Django](https://www.djangoproject.com) é uma estrutura opinativa que ajuda você a se tornar produtivo. Por exemplo, a estrutura do arquivo quando você cria um projeto do Django. Mas, se você deseja explorar o campo de desenvolvimento web em Python em detalhes; talvez o [Flask](http://flask.pocoo.org/) esteja mais no seu beco. Sinta-se à vontade para pular esta parte do artigo e pular diretamente para a [ajuda da Instalação](#installing-flask-in-virtual-environment) do [Flask](#installing-flask-in-virtual-environment)

Como desta escrita, a versão atual do Django era o Django 1.9.2. Mas quando você está lendo isso, agora, pode ser mais alto.

O guia de instalação oficial está disponível [aqui](https://docs.djangoproject.com/en/1.9/intro/install/#install-django) . Você deve instalar o último lançamento estável e oficial; e **não** a última versão de desenvolvimento (a menos que você saiba o que está fazendo e gosta de viver perigosamente!)

Mas antes de começar a instalar, verifique se você está dentro de um ambiente virtual **ativado** ; onde executar o seguinte comando no terminal ficaria assim:
```
$ python --version 
 Python 3.5.1 
```

Pode não ser `3.5.1` para você. Pode muito bem ser `3.4.3` . Mas tudo bem, contanto que não seja mostrado como `2.7.9` ou algo mais que comece com `2` .

Depois de ter certeza de que você está em um ambiente virtual ativado, e o comando `python` aponta para um Python da versão 3; Você está pronto para instalar o Django. Basta seguir o oficial [guia de instalação](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release) e instalá-lo com `pip` , o gerenciador de pacotes Python.

Uma vez instalado seria uma ótima idéia verificar o que todos os `pip` instalaram; executando o seguinte comando:
```
$ pip freeze 
```

Isso produziria uma lista de módulos instalados com o Python atual; e você deve ver o Django com a versão apropriada (algo como `Django==1.9.2` na lista.

Se você deseja usar o Windows, a discussão acima não é aplicável a você. Talvez você tenha acesso apenas a uma máquina Windows e, por motivos pessoais, prefira não trabalhar em uma caixa Linux baseada em navegador na nuvem (conexão lenta, talvez?).

Você pode seguir este [tutorial](https://docs.djangoproject.com/en/1.9/howto/windows/) e configurar o Django com o Python 3 em sua máquina Windows.

Ou você pode usar o [Virtualbox](https://www.virtualbox.org/) com uma caixa [Vagrant](https://www.vagrantup.com/) para o desenvolvimento do Django diretamente na sua máquina!