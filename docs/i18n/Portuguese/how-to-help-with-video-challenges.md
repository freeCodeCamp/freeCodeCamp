# Como ajudar com desafios de vídeo

Os desafios em vídeo são um novo tipo de desafio no currículo freeCodeCamp.

O desafio de vídeo é uma pequena seção de um curso em vídeo completo sobre um determinado tópico. Uma página de desafio de vídeo incorpora um vídeo do YouTube. Cada página de desafio tem uma única pergunta de múltipla escolha relacionada ao vídeo. Um usuário deve responder à pergunta corretamente antes de passar para o próximo desafio de vídeo do curso.

As páginas de desafio de vídeo são criadas por membros da equipe freeCodeCamp. Vídeos do YouTube também são enviados por membros da equipe freeCodeCamp. Muitos dos desafios em vídeo ainda não têm perguntas a eles associadas.

Você pode ajudar, criando questões de múltipla escolha relacionadas às seções de vídeo e adicionando as questões aos arquivos markdown para os desafios de vídeo.


## Modelo de desafio

Abaixo está um modelo de como são os arquivos markdown do desafio.

````md
---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
título: Desafio Título
Desafio: 11
videoId: 'YouTube videoId para desafio de vídeo'
---

## Descrição

<section id='description'>
Uma descrição opcional com informações úteis relacionadas ao vídeo.
</section>

## Testes

<section id='tests'>

```yml
question
  text: 'Pergunta'
  respostas:
    - 'Responder Um'
    - 'Responder Do'
    - 'Responder II'
  solução: 3
````

</section>
````

## Criar perguntas para desafios de vídeo

### Acessar os arquivos markdown do desafio de vídeo

Você pode encontrar os arquivos markdown para os desafios de vídeo nos seguintes locais do currículo:

- [Análise de Dados com Curso em Python](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analyis-with-python/data-analyis-with-python-course)
- [Curso TensorFlow 2.0](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Curso sobre Redes Naturais](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analyis-with-python/numpython/numpy)
- [Como Curso de Trabalho em Redes Neurais](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/challengum/11-machine-learning-with-python/how-neural-networks-work)

Escolha um arquivo de marcação das opções abaixo.

### Faça Skim através do vídeo associado ao desafio e crie uma questão de múltipla escolha

Primeiro, encontre o videoId.

Por exemplo, no código a seguir a partir do cabeçalho de um arquivo markdown de desafio de vídeo, o videoId é "nVAaxZ34khk". No GitHub, a informação deve ser inserida em um formato de tabela.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Análise de Dados Exemplo A challengeType: 11
videoId: nVAaxZ34khk
---
```

Em seguida, acesse o vídeo do YouTube com essa videoId. A url para o vídeo será:
https://www.youtube. om/watch?v=[videoId]    (adicione vídeo Id à URL sem colchetes quadrados)

No exemplo acima, a url é https://www. outube.com/watch?v=nVAaxZ34khk

Skim o vídeo do YouTube com esse videoId e pense em uma pergunta de múltipla escolha baseada no conteúdo do vídeo.

### Adicione a questão ao arquivo markdown

Você pode adicionar a questão localmente ou diretamente na interface GitHub. Para adicionar a pergunta localmente, você precisa [configurar o freeCodeCamp local](how-to-setup-freecodecamp-locally.md). Você também pode encontrar o arquivo no GitHub e clicar no botão editar para adicionar a pergunta diretamente em seu navegador.

If a question has not yet been added to a particular video challenge, it will have the following default question:

```yml
question:
  text: |
    Question
  answers:
    - |
      one
    - |
      two
    - |
      three
  solution: 3
```

Atualize a palavra "Pergunta" com sua pergunta. Atualize o "um", "dois" e "três" com as possíveis respostas. Certifique-se de atualizar o número de solução com o qual a resposta está correta. Você pode adicionar mais respostas possíveis usando o mesmo formato. A pergunta e as respostas podem estar rodeadas de aspas.

#### Use o markdown para formatar sua pergunta

O texto da pergunta é interpretado como markdown. A maneira mais simples de garantir que ele está formatado corretamente é iniciar a pergunta com `texto: ¶`, assim:

```yml
pergunta:
  texto: ¶
    Pergunta
```

Em seguida, você precisa ter certeza de que sua pergunta está em uma nova linha e recuou um nível mais do que `texto: £`.

A mesma abordagem pode ser usada para as respostas, de modo que toda a questão se torne

```yml
question:
  text: |
    Question
  answers:
  - |
    First answer
  - |
    Second
  - |
    Third
  solution: 2
```

Certifique-se de que cada resposta seja plausível, mas há apenas uma resposta correta.

#### Uso do HTML

Perguntas e respostas podem conter certas tags HTML como `<br>` para uma nova linha. As tags HTML devem ser usadas com moderação, quando as perguntas não podem ser expressas sem elas.

### Exemplos de questões

#### Exemplos sem HTML

````yml
pergunta:
  texto: ¶
    O que esse código JavaScript faz log no console?
    ```js
    console.log('olá mundo');
    ````


    Selecione uma resposta!
  respostas:
    - (ExplicitText=" olá *mundo*
    - (ExplicitText=" **olá** mundo
    - Common olá mundo solução: 3
````

````yml
pergunta:
  text: £
    O que será impresso depois de executar este código:
    ```py
    largura = 15
    altura = 12.
    Imprimir(altura/3)
    ````
  respostas:
    - | 39
    - | 4
    - £ 4.0
    - £ 5.0
    - £ 5 solução: 3
````

#### Exemplo com a pergunta HTML

```yml
:
  text: £
    O que será impresso após a execução deste código:
    <pre><code>largura = 15<br>altura = 12.<br>imprimir(altura/3)<code></pre>
  respostas:
    - £
      39
    - £
      4
    - econtra
      4.
    - £
      5.
    - £
      5
  solução: 3
````

O exemplo final demonstra que o HTML pode ser usado, mas que ele não é tão legível como a versão sem ele.

Para mais exemplos, você pode consultar os arquivos markdown para o seguinte curso de vídeo. Todos os desafios já têm perguntas: [Python para todos os cursos](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Abrir um pull request

Depois de criar uma ou mais perguntas, você pode fazer commit das alterações em um novo branch e [abrir um pull request](how-to-open-a-pull-request.md).
