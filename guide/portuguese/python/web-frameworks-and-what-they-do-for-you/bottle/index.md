---
title: Bottle
localeTitle: Garrafa
---
A estrutura da garrafa nos permite trabalhar de forma rápida e fácil com uma aplicação web básica.

Os detalhes a seguir mostram como escrever e executar um simples aplicativo da Web de saudação, onde podemos inserir nosso nome em um formulário, enviar e receber uma saudação.

1.  Use `pip` para instalar o pacote de garrafas.
    
    ```
    pip install bottle 
    
    ```
    
2.  Crie um arquivo `html` para ser exibido ao carregar o site. Por exemplo, `index.html` .
    
    Vamos adicionar um título e um formulário básico a esta página.
    
    ```html
    
    <h3>Say Hello</h3> 
     
     <form action="/hello" method="get"> 
     Name: 
        <input type="text" name="name"><br><br> 
        <input type="submit"> 
     </form> 
    
    ```
    
3.  Crie um novo arquivo python, por exemplo, `main.py`
    
4.  Na primeira linha do arquivo, precisamos importar as funções get, request e run do módulo de garrafa.
    
    ```python
    from bottle import get, request, run 
    
    ```
    
5.  Agora definimos nossa função para servir nosso arquivo html quando a página raiz é acessada.
    
    Aqui usamos o `@get` decorator, que especifica que essa função deve responder a solicitações `HTTP GET` e passar `'/'` como o caminho pelo qual a função será invocada.
    
    Em seguida, definimos a função `index()` usando a palavra-chave `def` .
    
    Para ler e retornar o arquivo html que criamos na etapa 2, usamos o que é chamado de gerenciador de contexto. Isso lida com abrir e fechar o arquivo para nós, permitindo-nos ler os arquivos e conteúdos e retorná-los com a declaração de `return` .
    
    ```python
    @get('/') 
     def index(): 
        with open('./index.html') as f: 
            return f.read() 
    
    ```
    
6.  Para fazer com que o site seja executado e escute as solicitações, precisamos adicionar uma chamada às funções de `run` do frasco da seguinte maneira.
    
    Aqui nós passamos no host em que o aplicativo da Web será executado, neste caso `localhost` , e a porta que deve escutar por solicitações HTTP.
    
7.  Execute o aplicativo e carregue-o no seu navegador http: // localhost: 8080 /, você deverá ver o arquivo html que criamos eariler renderizado no navegador.
    
    Se inserirmos nosso nome e pressionarmos enviar agora, receberemos um erro `HTTP 404` pois ainda não definimos a função para responder a essa solicitação.
    
    ```python
    run(host='localhost', port=8080) 
    
    ```
    
8.  De volta ao nosso arquivo `main.py` , agora precisamos definir a função para responder ao digitar nosso formulário.
    
    Mais uma vez, usamos o `@get` decorator aqui, no entanto, desta vez, passamos em `'/.hello'` como o caminho. Você pode perceber que este é o mesmo caminho que definimos no atributo action de nosso formulário em `index.html` .
    
    Em seguida, recuperamos o valor do `name` da url, ao enviar o formulário, os dados do formulário são codificados em url, como este http: // localhost: 8080 / hello? Name = Jon + Snow
    
    Finalmente, retornamos nossa saudação, acrescentando o nome inserido em nosso formulário.
    
    ```python
    @get('/hello') 
     def hello(): 
        name = request.query['name'] 
        return f'Hello {name}' 
    
    ```
    

### Fontes

https://bottlepy.org/docs/dev/