---
title: Creating a Project with Django
localeTitle: Criando um projeto com o Django
---
Agora que sabemos como criar ambientes virtuais e usar pip, podemos começar a construir nosso projeto. Neste artigo, vamos criar nosso primeiro projeto Django, escrever testes e iniciar nosso servidor de desenvolvimento.

## Criando o ambiente virtual

Primeiro, vamos criar um novo ambiente virtual para este projeto. (Se você ainda não o fez, desative o virtualenv anterior digitando `deactivate` no terminal). Para mais informações sobre ambientes virtuais e como usá-los, visite esta página .

Navegue até o diretório em que você deseja o projeto Django e digite o seguinte no terminal:
```
mkvirtualenv taskplanner --python=/usr/bin/python3 
```

Você pode ter que mudar o caminho do Python se ele for diferente do que está acima.

Agora, o shell da linha de comando deve se parecer abaixo, indicando que você está em um ambiente virtual.
```
(taskplanner)<a href='https://sites.google.com/a/chromium.org/chromedriver/downloads' target='_blank' rel='nofollow'>munsterberg@Lenovo ~/workspace] $ 
```

Se não parecer assim, basta digitar:
```
workon taskplanner 
```

Agora podemos instalar o Django:
```
pip install Django 
```

## Crie o nosso projeto Django

Com o Django instalado, podemos criar nosso projeto:
```
django-admin.py startproject taskplanner 
```

Em seguida, navegue até nosso novo projeto digitando:
```
cd taskplanner 
```

Antes de fazermos qualquer coisa, vamos configurar este diretório como nosso diretório de trabalho usando virtualenvwrapper:
```
setvirtualenvproject 
```

**Nota** : Para obter uma lista de comandos virtualenvwrapper, digite `virtualenvwrapper` no seu terminal.

Agora, quando estamos em nosso ambiente virtual, podemos digitar `cdproject` para navegar diretamente para nosso diretório de trabalho.

O diretório do seu projeto deve ser algo como isto:
```
taskplanner // our main working directory 
 |--- manage.py // similar to the django-admin script, you will see this used a 
               // lot throughout our project 
 |--- taskplanner 
    |--- __init__.py // this just tells python to treat this directory as a package 
    |--- settings.py // main configuration file for our project 
    |--- urls.py // we will use this to configure urls 
    |--- wsgi.py // this is used for deploying our project to a production server 
```

## Teste funcional

O desenvolvimento orientado a testes é uma prática recomendada amplamente usada no desenvolvimento de software. Bascialmente, queremos escrever um teste primeiro que esteja fadado a falhar e, em seguida, escreva a menor quantidade possível de código para passar no teste. Com o Django, nosso objetivo é escrever tanto testes funcionais (também conhecidos como testes de integração, testes de ponta a ponta, etc.), quanto testes de unidade ao longo do desenvolvimento. Não se preocupe, testar não é tão difícil quanto parece!

Mas primeiro, precisamos criar um novo ambiente virtual dedicado ao teste. Abra uma nova aba no seu terminal, navegue até o diretório do projeto do seu planejador de tarefas e digite:
```
mkvirtualenv taskplanner_test --python=/usr/bin/python3 
```

Agora você deve ter 2 guias abertas em seu terminal, uma no ambiente virtual (planejador de tarefas) e a outra no ambiente virtual (taskplanner\_test).

Se você digitar `pip freeze` em nosso novo ambiente de teste (taskplanner\_test), você notará que nada aparece. Isso porque ainda precisamos instalar qualquer coisa em nosso novo ambiente.

Então vamos em frente e instalar o Django primeiro em nosso ambiente de teste (taskplanner\_test):
```
pip install Django 
```

Para criar nossos testes funcionais, vamos precisar de algumas coisas. Primeiro, precisamos ter o navegador Firefox instalado em nossa máquina. Se você não tem o Firefox, instale isso agora.

**Sidenote** : você pode usar o Chrome para testes de integração, mas é necessário fazer o download do driver [aqui](https://sites.google.com/a/chromium.org/chromedriver/downloads) e seguir [essa pergunta de estouro de pilha](http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome) . O Firefox teve um desempenho historicamente melhor que o chrome ao executar testes de integração, o que é uma consideração muito importante, já que, em comparação com os testes de unidade, os testes de integração são extremamente lentos.

Isso ocorre porque os testes de integração estão testando **todo o** sistema, em vez de 'unidades' (pequenos componentes). No mundo real, às vezes é melhor evitar testes de integração por causa do longo tempo de desenvolvimento para criá-los, tempo de execução lento, erros ambíguos e outras razões que você descobriria a tempo.

No entanto, eles ainda valem a pena quando desenvolvemos um aplicativo do mundo real e podem ser muito úteis em termos de confiabilidade, apesar das desvantagens do desempenho.

Em seguida, precisamos instalar um pacote chamado [Selenium](http://selenium.googlecode.com/svn/trunk/docs/api/py/index.html) . Este pacote nos fornecerá um WebDriver para que possamos controlar um navegador com nossos testes. O selênio é geralmente usado para automatizar seu navegador.
```
pip install selenium 
```

Agora que temos isso instalado, precisaremos de um diretório para criar nossos testes:
```
mkdir functional_tests 
```

No diretório do `taskplanner` , você deve ver o seguinte:
```
taskplanner 
 |-- functional_tests 
 |--- manage.py 
 |--- taskplanner 
    ... 
```

Agora precisamos criar alguns arquivos em nossa pasta `functional_tests` . Nós iremos criar um arquivo `__init__.py` (isto irá dizer ao python para tratar `functional_tests` como um pacote), e um arquivo `test_all_users.py` para conter nossos testes.

Vamos fazer isso agora:
```
touch functional_tests/__init__.py 
 touch functional_tests/test_all_users.py 
```

**Sidenote** : `__init__.py` é quase sempre um arquivo vazio. Para mais informações sobre o que é usado, veja [esta resposta do stackoverflow.](http://stackoverflow.com/questions/448271/what-is-init-py-for)

Podemos finalmente começar a escrever nosso primeiro teste funcional! Testes funcionais são para testar partes da funcionalidade em nosso aplicativo da web. O TDD com Python descreve testes funcionais como "como o aplicativo funciona do ponto de vista do usuário".

Então vamos abrir o arquivo `test_all_users.py` em nosso editor de texto. Primeiro, queremos importar o webdriver do selenium, e para tornar isso muito mais fácil, o Django fornece algo conhecido como StaticLiveServerTestCase para testes ao vivo. Vamos importar os dois agora:
```
from selenium import webdriver 
 from django.contrib.staticfiles.testing import StaticLiveServerTestCase 
```

Como estamos testando da perspectiva do usuário, vamos nomear esses testes como NewVisitorTest. Adicione o seguinte:
```
class NewVisitorTest(StaticLiveServerTestCase): 
    def setUp(self): 
        self.browser = webdriver.Firefox() 
        self.browser.implicitly_wait(2) 
 
    def tearDown(self): 
        self.browser.quit() 
```

Primeiro, criamos uma classe StaticLiveServerTestCase denominada NewVisitorTest, isso conterá nossos testes que queremos executar para um novo visitante. Então, temos dois métodos chamados setUp e tearDown. O método setUp é inicializado quando executamos nossos testes. Então, para cada teste que executamos, abrimos o Firefox e esperamos 2 segundos para que a página seja carregada. O tearDown é executado após o término de cada teste. Esse método fecha o navegador para nós após cada teste.

Agora podemos escrever nosso primeiro teste e abrir e fechar o Firefox automaticamente para nós. Vamos escrever nosso teste agora abaixo do método tearDown.
```
    def test_home_title(self): 
        self.browser.get('http://localhost:8000') 
        self.assertIn('Welcome to Django', self.browser.title) 
```

Nosso primeiro teste, que emocionante! Vamos andar por isso. Todos os testes que queremos criar devem começar com "teste". Por exemplo, se eu quisesse criar um teste para o meu css, eu chamaria o método `test_h2_css` . Então, aqui, `test_home_title` o teste `test_home_title` . Isso é bastante auto-explicativo, o que é exatamente o que queremos para nossos testes. O método primeiro traz o Firefox para a url `http://localhost:8000` , e então verifica se 'Welcome to Django' está no título das tags head html.

Vamos executar este teste agora e ver o que acontece:
```
python manage.py test functional_tests 
```

Primeiro, o que exatamente estamos digitando aqui? O script manage.py nos fornece algo chamado 'teste', usaremos isso para executar todos os nossos testes. Aqui estamos executando em nosso pacote `functional_tests` que criamos com o arquivo `__init__.py` .

Depois de executar isso, você deve ver algo como o seguinte no seu terminal:
```
F 
 ====================================================================== 
 FAIL: test_home_title (functional_tests.test_all_users.NewVisitorTest) 
 ---------------------------------------------------------------------- 
 Traceback (most recent call last): 
  File "/Users/username/url/to/project/taskplanner/functional_tests/test_all_users.py", line 15, in test_home_title 
    self.assertIn('Welcome to Django', self.browser.title) 
 AssertionError: 'Welcome to Django' not found in 'Problem loading page' 
 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.524s 
 
 FAILED (failures=1) 
```

Então falhou, mas nos deu alguns conselhos úteis. Primeiro, o AssertionError. 'Bem-vindo ao Django' não encontrado em 'Página de carregamento de problemas'. Isso significa que o título de `http://localhost:8000` era 'Página de carregamento de problemas'. Se você navegar até o URL, verá que a página da Web não estava disponível.

Vamos tentar executar nosso servidor Django para fazer o teste passar. Volte para a guia do terminal que está no ambiente virtual do `taskplanner` de `taskplanner` e execute nosso servidor.
```
python manage.py runserver 
```

Você deve ver algo como o seguinte:
```
Performing system checks... 
 
 System check identified no issues (0 silenced). 
 
 You have unapplied migrations; your app may not work properly until they are applied. 
 Run 'python manage.py migrate' to apply them. 
 
 March 06, 2016 - 20:53:38 
 Django version 1.9.4, using settings 'taskplanner.settings' 
 Starting development server at http://127.0.0.1:8000/ 
 Quit the server with CONTROL-C. 
```

Não se preocupe com a mensagem de migrações não aplicadas ainda.

Agora que temos um servidor em execução em `http://localhost:8000` , vamos executar nosso teste novamente.

Volte para a guia do outro terminal que está no ambiente virtual `taskplanner_test` e execute o seguinte uma vez mais:
```
python manage.py test functional_tests 
```

Você deve ver o seguinte.
```
Creating test database for alias 'default'... 
 . 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.033s 
 
 OK 
 Destroying test database for alias 'default'... 
```

## O que fizemos até agora

Nosso primeiro teste de passagem!

Nós cobrimos muito neste artigo. Criamos nosso primeiro projeto, configuramos ambientes virtuais para fins de desenvolvimento e teste, escrevemos nosso primeiro teste funcional e seguimos o processo de desenvolvimento orientado por teste, escrevendo um teste com falha e, em seguida, fazendo com que ele passasse.

## Usando modelos iniciais

Você pode economizar muito tempo iniciando o kickstart em seu projeto com um modelo inicial de django. Esses projetos usam práticas recomendadas que poupam dores de cabeça mais tarde quando o projeto cresce. Alguns dos projetos mais populares são

*   [Cortador de biscoito](https://github.com/pydanny/cookiecutter-django)
*   [Partida de Hackathon](https://github.com/DrkSephy/django-hackathon-starter)
*   [Beira](https://github.com/arocks/edge)