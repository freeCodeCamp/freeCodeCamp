---
title: Installing Flask in Virtual Environment
localeTitle: Instalando o Flask no Ambiente Virtual
---
Se você deseja usar o Flask, você está no lugar certo! Mas instale o Flask, só porque você quer explorar o desenvolvimento web no Flask. Nós sempre recomendamos o Django sobre o Flask, porque fica difícil construir grandes aplicações web no Flask; se você é novo no desenvolvimento web em Python.

O frasco é um micro-framework; e você pode escolher a funcionalidade que deseja ter sobre a funcionalidade barebone básica que você já tem de um framework web padrão. Mas se você não quiser fazer todo o trabalho e se concentrar em construir sua ideia; talvez o Django fosse uma companhia melhor para o caminho a seguir.

Suponho que você **não** tenha pulado a seção sobre a instalação do Python 3 e o use dentro de um ambiente virtual.

Primeiro, certifique-se de que você não esteja dentro de um ambiente virtual. Em seguida, crie um novo ambiente virtual, chamado `py3-flask`
```
$ mkvirtualenv py3-flask --python=/usr/bin/python3 
```

Agora, execute o comando `workon` para ver uma lista de ambientes virtuais em sua máquina. Isso deve listar `py3-flask` em uma linha.

Depois disso, ative este ambiente:
```
$ workon py3-flask 
```

Seu ambiente virtual seria ativado com uma cópia do interpretador Python, com as propriedades do Python 3. Você deveria correr
```
$ python --version 
```

para garantir que você esteja realmente dentro de um ambiente do Python 3.

Só para ficar claro, se você já tiver instalado Django seguinte seção anterior - **não** deve ser neste ambiente. Estamos usando o ambiente virtual; para manter nossa instalação de diferentes estruturas separadas.

Para ter certeza, corra
```
pip freeze 
```

Certifique-se de que o Django não esteja listado na lista de saída gerada pelo comando acima.

Agora vamos instalar o Flask. Para sua análise, aqui está o [guia de instalação oficial](http://flask.pocoo.org/docs/0.10/installation/) . No entanto, muitos desenvolvedores preferem instalar alguns pacotes extras com o Flask; para mais funcionalidade.

Para instalar apenas Flask, exeute
```
$ pip install flask 
```

Quando você executar o `pip freeze` novamente, ele deverá mostrar o `Flask` nos pacotes listados.

É complicado executar longos comandos como este. Felizmente, também existe algo como `package.json` no domínio Python - uma lista de dependências, que o gerenciador de pacotes pode usar para duplicar o ambiente fazendo o download delas com a versão apropriada do repositório central.

O padrão é usar o `pip freeze` e registrar a saída em um arquivo local, que pode ser controlado por fonte.
```
$ pip freeze > requirements.txt 
```

Aqui está o conteúdo de `requirements.txt` do meu ambiente, depois de instalar esses pacotes Flask. Você pode adicionar ou remover mais pacotes à medida que seu aplicativo cresce; mas por enquanto, basta copiar e colar o conteúdo do seguinte em um arquivo de texto no mesmo diretório em que você está.
```
Babel==2.2.0 
 Flask==0.10.1 
 Flask-Babel==0.9 
 Flask-Login==0.3.2 
 Flask-Mail==0.9.1 
 Flask-OpenID==1.2.5 
 Flask-SQLAlchemy==2.1 
 Flask-WTF==0.12 
 Flask-WhooshAlchemy==0.56 
 Jinja2==2.8 
 MarkupSafe==0.23 
 SQLAlchemy==1.0.12 
 Tempita==0.5.2 
 WTForms==2.1 
 Werkzeug==0.11.4 
 Whoosh==2.7.2 
 blinker==1.4 
 coverage==4.0.3 
 decorator==4.0.9 
 defusedxml==0.4.1 
 flipflop==1.0 
 guess-language==0.2 
 itsdangerous==0.24 
 pbr==1.8.1 
 python3-openid==3.0.9 
 pytz==2015.7 
 six==1.10.0 
 speaklater==1.3 
 sqlalchemy-migrate==0.10.0 
 sqlparse==0.1.18 
```

Esta lista de pacotes é retirada [daqui](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) .

Depois de salvar o arquivo, basta executar
```
$ pip install -r requirements.txt 
```

O gerenciador de pacotes cuidaria de instalar os pacotes que faltam para você! E você deve cometer este arquivo com o seu sistema de controle de origem.

O conjunto de comandos acima assume que você tem uma máquina Linux ou máquina Mac OSX; ou você está usando uma caixa hospedada em nuvem no cloud9 ou Nitrous; ou talvez você esteja usando uma caixa Vagrant.

Mas, se você tiver que usar uma máquina Windows, considere usar o Windows Powershell, em vez do Windows CMD. A maioria dos comandos seria o mesmo. Caso você precise de ajuda, talvez queira verificar [essa discussão sobre estouro de pilha](http://stackoverflow.com/questions/17917254/how-to-install-flask-on-windows) .