---
title: Python 2 vs Python 3
localeTitle: Python 2 vs Python 3
---
Nós não estamos tomando parte no debate. Se você estiver interessado em saber mais sobre isso para fins acadêmicos, talvez [este artigo comparando Python 2 e Python 3](https://wiki.python.org/moin/Python2orPython3) possa intrigá-lo.

Mas também não podemos ignorar o fato de que existem dois tipos principais de Python por aí. Por que você se importa, você pergunta? Porque o código escrito para uma versão do Python pode resultar em um erro de sintaxe em outra versão do Python.

A seguir, uma instrução `print` válida no Python 2, mas que não funciona no Python 3:

```py
print "Hello World" 
```

No Python 3, a mesma instrução gera um erro como este:
```
>>> print "hello" 
  File "<stdin>", line 1 
    print "hello" 
                ^ 
 SyntaxError: Missing parentheses in call to 'print' 
```

No Python 2, “print” é tratado como uma declaração em vez de uma função. Não há necessidade de envolver o texto que você deseja imprimir entre parênteses, embora você possa, se quiser. O Python 3 trata explicitamente “print” como uma função, o que significa que você tem que passar os itens que você precisa para imprimir na função entre parênteses da maneira padrão, ou você receberá um erro de sintaxe

Usar a função `print()` é 'seguro' tanto no Python 2 quanto no 3:

```python
print("Hello World") 
```

Outra diferença entre o Python 2 e o Python 3 é a estrutura de dados que eles retornam quando você chama a função `map()` .

No Python 2, `map()` retorna uma lista:
```
>>> result = map(int,['10','20','30','40']) 
 >>> print result 
 >>> [10,20,30,40] 
```

No Python 3, `map()` retorna um iterador:
```
>>> result = map(int,['10','20','30','40']) 
 >>> print (result) 
 >>> <map object at 0x7f40896b4630> 
```

Para obter uma lista no Python 3, você precisa convertê-lo:
```
>>> result = list(map(int,['10','20','30','40'])) 
 >>> print (result) 
 >>> [10,20,30,40] 
```

Então, a única questão que você precisa se preocupar agora é; é qual você deve escolher? Se você é novo no Python, você deve escolher o Python 3. Atualmente, o Python 2 tem sua data de [fim de vida](https://www.python.org/dev/peps/pep-0373/#update) definida como 2020. Isso significa que correções de erros regulares não são garantidas daqui para frente e, sim, leva tempo para se familiarizar com os aspectos mais comuns. Python; e seu tempo é importante. Então, invista seu tempo e esforço com sabedoria!

Embora o Python 2 seja bem suportado e popular, as bibliotecas e frameworks mais comuns em Python preferem o Python 3. O Django [recomenda](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) oficialmente o Python 3. O Flask e todas as suas dependências também são [suportados](http://flask.pocoo.org/docs/0.10/python3/#python3-support) no Python 3.

Tanto o Python 2 quanto o Python 3 são ótimos. A maioria das distribuições Linux e MacOS vem pré-instalada com o Python 2 como a versão padrão do Python. E o Python 3 nasceu da busca insaciável por construções de linguagem mais legíveis e mais bonitas.

Este artigo usa o Python 3 para configurar as estruturas da Web em seu ambiente de desenvolvimento. Mas antes disso, você precisa garantir que você tenha o Python 3 e saiba como usá-lo!

#### Mais Informações:

*   [Artigo Python 2 ou 3](https://wiki.python.org/moin/Python2orPython3)