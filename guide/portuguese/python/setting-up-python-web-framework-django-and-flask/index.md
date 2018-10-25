---
title: Setting Up Python Web Framework Django and Flask
localeTitle: Configurando o Python Web Framework Django e Flask
---
Neste artigo, estaremos discutindo como instalar o [Django](https://www.djangoproject.com/) e o [Flask](http://flask.pocoo.org/) - dois frameworks web populares escritos em Python.

Talvez você já esteja familiarizado com o amplo uso e o suporte da comunidade para o Python; em desenvolvimento web. Você também pode estar ciente do que é um framework web; e as opções disponíveis para o Python.

Caso essas suposições não sejam verdadeiras, talvez você queira dar uma olhada neste artigo da wiki . Se você for pego, vamos revisar a configuração de frameworks web Python em sua máquina de desenvolvimento local.

Mas seria injusto se ignorarmos completamente o debate [Python 2 vs Python 3](http://docs.python-guide.org/en/latest/starting/which-python/#the-state-of-python-2-vs-3) .

## Ambiente virtual

Antes de instalarmos o Django, faremos com que você instale uma ferramenta extremamente útil para ajudar a manter seu ambiente de codificação organizado em seu computador. É possível pular este passo, mas é altamente recomendado. Começar com a melhor configuração possível poupará muitos problemas no futuro!

Então, vamos criar um ambiente virtual (também chamado virtualenv). O Virtualenv irá isolar sua configuração do Python / Django por projeto. Isso significa que quaisquer alterações feitas em um site não afetarão as outras que você também está desenvolvendo. Limpo, certo?

Para mais informações sobre ambientes virtuais, veja a seção relevante [aqui](https://guide.freecodecamp.org/python/virtual-environments/) .

## Empacotando

Se você já instalou o `pip` , simplesmente:
```
$ pip install django 
```

Após a conclusão da instalação, podemos criar um novo projeto:
```
$ django-admin startproject myproject 
 $ cd myproject 
 $ python manage.py runserver 
```

Vá para `http://localhost:8000` ! :foguete:

Nós instalamos com sucesso o framework web da nossa necessidade. No entanto, ainda não está completo. A maioria dos aplicativos da web são direcionados por conteúdo e dados - por isso, precisamos de um armazenamento de dados. Ou, um banco de dados, se você quiser.

No próximo artigo, estaríamos discutindo como instalar o PostgreSQL e usá-lo com nosso aplicativo da web em Python.

Um ponto a ponderar - temos usado muito o `pip` , mas mal dissemos nada sobre isso. Bem, por enquanto, é apenas um gerenciador de pacotes como o `npm` . Tem algumas diferenças com o `npm` ; mas você não precisa se preocupar com isso agora. Se você estiver interessado, confira a [documentação oficial do `pip`](http://pip-python3.readthedocs.org/en/latest/index.html) .

_Se você tiver sugestões ou perguntas, venha se juntar a nós no [gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp)_ .