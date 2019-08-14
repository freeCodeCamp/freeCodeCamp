---
title: Python
localeTitle: Python
---
## O que é o Python?

[Python](https://www.python.org) é uma linguagem de programação de uso geral que é tipificada, interpretada e conhecida dinamicamente por sua facilidade de leitura com excelentes princípios de design.

Para saber mais sobre o Python, confira estas páginas em python.org:

[O que é o Python?](https://www.python.org/doc/essays/blurb/)

[FAQ do Python](https://docs.python.org/3/faq/general.html) .

## Python 2 ou Python 3

*   As duas versões são semelhantes. Conhecendo uma versão, a curva de aprendizado para a outra é simples.
*   [Python 2 ou Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [O Python 2.x não será mantido após 2020.](https://www.python.org/dev/peps/pep-0373/)
    *   3.x está em desenvolvimento ativo. Isso significa que todas as melhorias recentes na biblioteca padrão, por exemplo, só estão disponíveis por padrão no Python 3.x.
    *   O ecossistema Python acumulou uma quantidade significativa de software de qualidade ao longo dos anos. A desvantagem de quebrar a compatibilidade retroativa em 3.x é que alguns desses softwares (especialmente o software interno nas empresas) ainda não funcionam no 3.x ainda.

## Instalação

A maioria dos sistemas operacionais baseados em \* nix vem com o Python instalado (geralmente Python 2, Python 3 nos mais recentes). Substituindo o sistema O Python não é recomendado e pode causar problemas. No entanto, versões diferentes do Python podem ser instaladas com segurança ao lado do sistema Python. Veja [Configuração e Uso do Python](https://docs.python.org/3/using/index.html) .

O Windows não vem com o Python, o instalador e as instruções podem ser encontradas [aqui](https://docs.python.org/3/using/windows.html)

## Intérprete Python

O interpretador Python é o que é usado para executar scripts Python.

Se estiver disponível e no caminho de busca do shell Unix tornar possível iniciá-lo digitando o comando `python` seguido pelo nome do script, ele invocará o interpretador e executará o script.

`hello_campers.py`

```python
print('Hello campers!') 
```

Do terminal:
```
$ python hello_campers.py 
 Hello campers! 
```

"Quando várias versões do Python são instaladas, é possível chamá-las por versão, dependendo da configuração da instalação. No ambiente personalizado Cloud9 ide, elas podem ser chamadas como:
```
$ python --version 
 Python 2.7.6 
 $ python3 --version 
 Python 3.4.3 
 $ python3.5 --version 
 Python 3.5.1 
 $ python3.6 --version 
 Python 3.6.2 
 $ python3.7 --version 
 Python 3.7.1 
```

## Modo Interativo Interpretador Python

O modo interativo pode ser iniciado chamando o interpretador Python com o sinalizador `-i` ou sem nenhum argumento.

O modo interativo possui um prompt no qual os comandos do Python podem ser inseridos e executados:
```
$ python3.5 
 Python 3.5.1 (default, Dec 18 2015, 00:00:00) 
 GCC 4.8.4 on linux 
 Type "help", "copyright", "credits" or "license" for more information. 
 >>> print("Hello campers!") 
 Hello campers! 
 >>> 1 + 2 
 3 
 >>> exit() 
 $ 
```

## O Zen do Python

Alguns dos princípios que influenciaram o design do Python estão incluídos como um ovo de Páscoa e podem ser lidos usando o comando dentro do modo interativo do interpretador Python:
```
>>> import this 
 The Zen of Python, by Tim Peters 
 
 Beautiful is better than ugly. 
 Explicit is better than implicit. 
 Simple is better than complex. 
 Complex is better than complicated. 
 Flat is better than nested. 
 Sparse is better than dense. 
 Readability counts. 
 Special cases aren't special enough to break the rules. 
 Although practicality beats purity. 
 Errors should never pass silently. 
 Unless explicitly silenced. 
 In the face of ambiguity, refuse the temptation to guess. 
 There should be one-- and preferably only one --obvious way to do it. 
 Although that way may not be obvious at first unless you're Dutch. 
 Now is better than never. 
 Although never is often better than *right* now. 
 If the implementation is hard to explain, it's a bad idea. 
 If the implementation is easy to explain, it may be a good idea. 
 Namespaces are one honking great idea -- let's do more of those! 
```

## Prós e contras do Python

### Prós

1.  Linguagem interativa com suporte de módulo para quase todas as funcionalidades.
2.  Código aberto: Assim, você pode contribuir para a comunidade, as funções que você desenvolveu para uso futuro e para ajudar os outros.
3.  Um monte de bons intérpretes e notebooks disponíveis para uma melhor experiência como o notebook jupyter.

#### Contras

1.  Sendo open source, muitas maneiras diferentes se desenvolveram ao longo do ano para a mesma função. Isso às vezes cria um caos para os outros lerem o código de outra pessoa.
2.  É uma linguagem lenta. Então, uma linguagem muito ruim para usar no desenvolvimento de algoritmos gerais.

## Documentação

[Python está bem documentado](https://docs.python.org/3/) . Esses documentos incluem tutoriais, guias, referências e informações meta para o idioma.

Outra referência importante é o Python Enhancement Proposals ( [PEPs](https://www.python.org/dev/peps/) ). Incluído nos PEPs é um guia de estilo para escrever código Python, [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) .

## Depuração

Instruções de `print` embutidas podem ser usadas para depuração simples:

> **… Muitas vezes a maneira mais rápida de depurar um programa é adicionar algumas instruções de impressão à fonte: o ciclo rápido de edição-teste-depuração torna essa abordagem simples muito eficaz.**
> 
> \- [Resumo executivo](https://www.python.org/doc/essays/blurb/)

O Python também inclui ferramentas mais poderosas para depuração, como:

*   módulo de [_logging_](https://docs.python.org/3/library/logging.html) , [_logging_](https://docs.python.org/3/library/logging.html)
*   módulo de depuração, [_pdb_](https://docs.python.org/3/library/pdb.html)

Apenas observe que eles existem por enquanto.

## Olá Mundo!

Voltando aos documentos, podemos ler sobre a função de [`print`](https://docs.python.org/3/library/functions.html#print) , uma [_função_](https://docs.python.org/3/library/functions.html) [interna da Biblioteca Padrão](https://docs.python.org/3/library/index.html) do [Python](https://docs.python.org/3/library/index.html) .
```
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
```

As funções integradas estão listadas em ordem alfabética. O nome é seguido por uma lista entre parênteses de parâmetros formais com valores padrão opcionais. Sob essa é uma breve descrição da função e seus parâmetros são dados e, ocasionalmente, um exemplo.

A função de [`print`](https://docs.python.org/3/library/functions.html#print) no Python 3 substitui a instrução [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) no Python 2.
```
>>> print("Hello world!") 
 Hello world! 
```

Uma função é chamada quando o nome da função é seguido por `()` . Para o mundo Hello! Por exemplo, a função de impressão é chamada com uma string como um argumento para o primeiro parâmetro. Para o restante dos parâmetros, os padrões são usados.

O argumento que chamamos de função de `print` é um objeto `str` ou _string_ , um dos [_tipos_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) internos do Python. Além disso, o mais importante sobre python é que você não precisa especificar o tipo de dados ao declarar uma variável, o compilador do python fará isso com base no tipo de valor atribuído.

O parâmetro `objects` é prefixado com um `*` que indica que a função terá um número arbitrário de argumentos para esse parâmetro.

## Quer aprender mais?

O Free Code Camp possui ótimos recursos. A web é um lugar grande, há muito mais para explorar:

*   Livro de Práticas em Python: http://anandology.com/python-practice-book/index.html
*   Pense no Python: http://greenteapress.com/thinkpython/html/index.html
*   Python de Negócios Práticos: http://pbpython.com/
*   Outro curso: https://realpython.com/?utm _source = fsp e utm_ medium = promo & utm\_campaign = bestresources
*   Geral: https://www.fullstackpython.com/
*   Aprenda o básico: https://www.codecademy.com/learn/learn-python
*   Ciência da computação usando Python: https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11?ref=hackernoon#!
*   Lista de mais recursos para aprender python: https://github.com/vinta/awesome-python
*   Python interativo: http://interactivepython.org/runestone/static/thinkcspy/index.html
*   Guia do desenvolvedor para Python: https://devguide.python.org/
