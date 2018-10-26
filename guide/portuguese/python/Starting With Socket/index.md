---
title: Starting with socket
localeTitle: Começando com socket
---
# Começando com socket

### Introdução

O Python é uma linguagem muito usada em servidores, e cada vez mais são uteis as habilidades de comunicação em todas as aplicações

### Introduzindo a biblioteca socket

A biblioteca socket vai sempre ser essencial para todos os projetos que envolvam comunicações atravéz da internet.

Aqui está um exemplo de uma simples comunicação entre cliente e servidor:

#### Exemplo:

##### Servidor:

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind(("", 1234))
s.listen(5)

conn, addr = s.accept()

s.close()

```

##### Cliente:

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(("127.0.0.1", 1234))

s.close()
```

#### Explicação:

##### Servidor:
No Sevidor, primeiro de tudo defenimos a variável ```s``` como uma ligação que usa a família de aderessos IP INET, e que usa protocolo UDP.

Depois atribuímos o IP local e uma porta para o servidor esperar novas conexões, e finalmente comando o Servidor para esperar por um pedido de ligação, no máximo 5 ao mesmo tempo.

De seguida as variáveis ```conn, addr``` são defenidas: ```conn = <socket.socket fd=516, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 1234), raddr=('127.0.0.1', 56747)>```
```addr =('127.0.0.1', 56747)```, sendo ```laddr``` o IP e porta que está defenido no cliente, ```raddr``` o IP atravéz de onde foi feito a ligação (IP e porta temporariamente abertos no cliente para comunicação entre o Servidor e o Cliente).

Por fim fechamos a conexão para evitar futuros erros.

##### Cliente:
No Cliente defenimos a variável ```s``` tal e qual como defenimos no servidor, e só funciona com a família de aderessos e o protocolo igual.

Depois conectamos ao servidor, neste caso local.

E como no Servidor fechamos também a conexão para evitar futuros erros.

#### Envio e receção de dados:
O que aprendemos anteriormente não serviria de nada se não pudessemos enviar e receber dados:

Usando no servidor o aderesso do cliente, conseguimos enviar dados ao mesmo, e no cliente também o podemos fazer:

##### Exemplo: 

###### Servidor:

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind(("", 1234))
s.listen(5)

conn, addr = s.accept()

addr.send("Olá!".encode("utf-8"))

dados = recv(2048)

print(dados.decode("utf-8"))

s.close()

```

###### Cliente:

```python
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(("127.0.0.1", 1234))

dados = s.recv(2048)

print(dados.decode("utf-8"))

s.send("Olá também!".encode("utf-8"))

s.close()

```

Output:
```Olá!```


##### Explicação: 
Neste caso enviámos um texto do Servidor para o Cliente: ```Olá!``` o ```encode("utf-8")``` serve para codificar os dados, porque os dados, são e sempre serão binário, e tem que haver uma maneira de transformar letras, acentos, sinais de pontuação, ... em binário, para isso existe as criptografias como ```ascii``` (que não suporta acentos), por isso usamos ```utf-8``` que suporta tudo, até mesmo emojis.

No caso de servidores web teriamos sempre de usar ```ascii```, porque é o padrão de descodificação dos browsers.

O Cliente recebe uma certa quantidade de dados, defenida pelo atributo da função: ```recv(2048)``` e descodifica na mesma criptografia usada pelo Servidor.

### Conclusão:
Esta biblioteca pode ser utilizada para muitas coisas, tais como: Servidores WEB, Comunicação APP-Servidor, Pentesting, ... e na minha opinião é uma das bibliotecas que qualquer programador precisa ter conhecimento do funcionamento.
