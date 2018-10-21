---
title: REST APIs with Falcon
localeTitle: APIs REST com Falcon
---
## Introdução

As APIs RESTful são um componente importante de qualquer pilha bem arquitetada, e o Python tem algumas estruturas brilhantes para compor rapidamente APIs. Um desses frameworks é chamado [Falcon](https://falconframework.org) - e é ótimo! Essencialmente um microframework, ele vem com um número considerável de vantagens:

1.  É rápido. Muito depressa. Confira os benchmarks [aqui](https://falconframework.org/#sectionBenchmarks) .
    
2.  Recursos HTTP são definidos como classes, com métodos de classe sendo usados ​​para diferentes operações REST nesses recursos. Isso ajuda a manter uma base de código limpa.
    
3.  É bastante extensível - confira [esta seção](https://github.com/falconry/falcon/wiki/Complementary-Packages) em seu wiki, para ter uma idéia.
    
4.  Ele é baseado no WSGI - o padrão Python para aplicativos da web - e funciona com o Python 2.6, 2.7 e 3.3+. E se você precisar de mais desempenho, execute-o usando o PyPy!
    

## Começando

Primeiro, vamos preparar nosso ambiente. Pessoalmente, é sempre bom trabalhar em ambientes virtuais - você pode usar `virtualenv` , `virtualenvwrapper` ou `venv` . Em seguida, instale o Falcon usando o `pip` : `pip install falcon` .

Vamos desenvolver uma pequena amostra de API que faz manipulações muito básicas de fuso horário para nós. Ele exibirá a hora atual em UTC, assim como a hora da época correspondente. Para esse fim, vamos pegar uma biblioteca bacana chamada `arrow` : `pip install arrow` .

Você pode encontrar a amostra finalizada em [https://github.com/rudimk/freecodecamp-guides-rest-api-falcon](https://github.com/rudimk/freecodecamp-guides-rest-api-falcon) .

## Recursos

Pense em um recurso como uma entidade que sua API precisa manipular. No nosso caso, o melhor recurso seria um `Timestamp` . Nosso roteamento normalmente seria algo assim:
```
GET /timestamp 
```

Aqui, `GET` é o verbo HTTP usado para chamar esse terminal, e `/timestamp` é o próprio URL. Agora que conseguimos esse pouco fora do caminho, vamos criar um módulo!

`$ touch timestamp.py`

Hora de importar a biblioteca do Falcon:

```python
import json 
 
 import falcon 
 
 import arrow 
```

Note que também importamos o pacote `json` e a biblioteca de `arrow` . Agora, vamos definir uma classe para o nosso recurso:

```python
class Timestamp(object): 
 
    def on_get(self, req, resp): 
        payload = {} 
        payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS') 
        payload['unix'] = arrow.utcnow().timestamp 
 
        resp.body = json.dumps(payload) 
        resp.status = falcon.HTTP_200 
```

Vamos passar por esse trecho. Definimos uma classe `Timestamp` e definimos um método de classe chamado `on_get` - essa função informa ao Falcon que quando uma solicitação `GET` é emitida para um nó de extremidade desse recurso, execute a função `on_get` e forneça os objetos request e response como parâmetros. Depois disso, é fácil navegar - criamos um dicionário vazio, o preenchemos com os timestamps UTC e UNIX atuais, o convertemos em JSON e o anexamos ao objeto de resposta.

Muito simples, certo? Mas infelizmente isso não é tudo. Agora precisamos criar um servidor Falcon e conectar a classe de recursos que acabamos de definir para um terminal real.

`$ touch app.py`

Agora, adicione o código abaixo:

```python
import falcon 
 
 from timestamp import Timestamp 
 
 api = application = falcon.API() 
 
 timestamp = Timestamp() 
 
 api.add_route('/timestamp', timestamp) 
```

Aqui, definimos uma API do Falcon e inicializamos uma instância da classe de recursos que criamos anteriormente. Em seguida, conectamos o terminal `/timestamp` à instância da classe - e agora estamos prontos! Para testar essa API, instale o `gunicorn` ( `pip install gunicorn` ) e execute o `gunicorn app` . Use o Postman ou o `cURL` simples para testar isso:
```
$ curl http://localhost:8000/timestamp 
 {"utc": "2017-10-20 06:03:14", "unix": 1508479437} 
```

E isso faz!

## Se movendo

Uma vez que você conhece o Falcon, compor poderosas APIs RESTful que interagem com bancos de dados ou filas de mensagens é muito fácil. Confira os [documentos](https://falcon.readthedocs.io/en/stable/index.html) do [Falcon](https://falcon.readthedocs.io/en/stable/index.html) , assim como o PyPI para módulos interessantes do Falcon que continuam aparecendo.