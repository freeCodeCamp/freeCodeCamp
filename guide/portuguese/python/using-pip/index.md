---
title: Python Using Pip
localeTitle: Python usando Pip
---
Vimos como usar `import` declarações para `import` vários módulos e usá-los em nossos programas. O próprio Python vem com vários módulos internos, mas a comunidade Python tem mais a oferecer.

> São os módulos que tornam o python tão poderoso!

Módulos de terceiros adicionam muito mais funcionalidade ao Python. Agora aprenderíamos como instalar esses módulos para que possamos usá-los em nossos programas.

A maneira mais simples é usar `pip`
```
pip install <module_name> 
```

Se você usou `npm` , então você pode pensar nisso como _npm_ do Python.

Nota: A diferença é que, com o npm, a `npm install` por padrão instala os pacotes localmente em um projeto, enquanto a `pip install` por padrão, é instalada globalmente. Para instalar módulos localmente, você precisa criar e ativar o que é chamado [de ambiente virtual](http://docs.python-guide.org/en/latest/dev/virtualenvs/) , portanto, `pip install` instalado na pasta em que o ambiente virtual está localizado, em vez de globalmente (o que pode exigir privilégios de administrador).

Da última vez, no wiki de `import-statements` , usamos o módulo `requests` como um exemplo. Como é um módulo de terceiros, temos que instalá-lo separadamente após instalar o python.

Instalá-lo seria tão simples quanto `pip install requests` . Você pode até mesmo passar vários argumentos junto com ele. O que você vai encontrar mais vezes é `--upgrade` . Você pode atualizar um módulo python por:
```
pip install <module_name> --upgrade 
```

Por exemplo, atualizar o módulo de solicitações para sua versão mais recente seria tão simples quanto as `pip install requests --upgrade` .

Antes de usar o `pip` , você precisará instalá-lo (é bem simples). Você pode instalá-lo [daqui](https://bootstrap.pypa.io/get-pip.py)

Basta clicar no link. E salve o arquivo como `get-pip.py` _Por favor, não esqueça a extensão `.py` ._ E corra.

Uma alternativa ao uso do pip seria tentar o [`easy_install`](https://bootstrap.pypa.io/ez_setup.py) .

O uso do `easy_install` também é simples. A sintaxe é:
```
easy_install <module_name> 
```

No entanto, `pip` é mais popular que usar `easy_install` .

**Nota:** Em alguns sistemas em que o Python 2 e o Python 3 estão instalados, o `pip` e o `pip3` farão coisas diferentes. `pip` instala a versão Python 2 do pacote e o `pip3` instala a versão do pacote Python 3. Para mais informações sobre a diferença entre o Python 2 e 3, consulte [este](https://guide.freecodecamp.org/python/python-2-vs-python-3) guia. Você pode verificar o `pip` versão fazendo `pip --version` e / ou `pip3 --version` :
```
pip3 --version 
 pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5) 
```

Também podemos criar um arquivo txt contendo uma lista de módulos que devem ser instalados usando o pip. Por exemplo, poderíamos criar o arquivo `requirements.txt` e seu conteúdo:
```
Kivy-Garden==0.1.4 
 macholib==1.5.1 
 idna==2.6 
 geoip2nation==0.1.2 
 docutils>=0.14 
 Cython 
```

Neste arquivo também podemos definir uma versão para a instalação. Depois disso, invocando pip com:
```
 pip install -r <FILE CONTAINING MODULES> 
 
          OR IN OUR CASE 
 
 pip install -r requirements.txt 
```

Deve instalar todos os módulos listados no arquivo.