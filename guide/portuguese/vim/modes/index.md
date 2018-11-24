---
title: Modes in Vim
localeTitle: Modos no Vim
---
# Modos Vim

Porque o Vim está focado em mudar o código existente tanto quanto escrever novos código, ele é dividido em vários modos, cada um com propósitos diferentes.

### Modo normal

Por padrão, o Vim inicia no modo "normal". O modo normal pode ser acessado de outros modos pressionando `Esc` ou `<C-[>` .

No modo Normal, as teclas pressionadas não funcionam como seria de esperar. Ou seja, eles não inserem texto no documento; em vez de, certas teclas pressionadas podem:

#### Mova o cursor

*   **h** move um caractere para a esquerda
*   **j** mover uma fileira para baixo
*   **k** move uma fila para cima
*   **Eu** movo um caractere para a direita

Como muitos comandos vim, o movimento de linhas pode ser prefixado por um número para mover s linhas de cada vez:

*   **4j** move 4 linhas para baixo
*   **6k** move 6 linhas para cima

Movimentos básicos de palavras:

*   **w** move para o início da próxima palavra
*   **b** passar para o início anterior da palavra
*   **e** passar para o final da palavra
*   **W** move para o início da próxima palavra depois de um espaço em branco
*   **B** move-se para o início da palavra anterior antes de um espaço em branco
*   **E** passar para o final da palavra antes de um espaço em branco

Início / Fim do movimento da linha:

*   **0** move para o começo da linha
*   **$** move para o final da linha

#### Manipular texto

#### Entre em outros modos

**O modo normal** é onde a pessoa deve passar a maior parte do tempo enquanto usa o Vim. Lembrar, é isso que faz o Vim diferente.

No modo normal, existem várias maneiras de se movimentar em um arquivo aberto. além do que, além do mais para usar as teclas do cursor para se mover, você pode usar `h` (esquerda), `j` (abaixo), `k` (para cima) e `l` (direita) para mover também. Isso ajuda particularmente os datilógrafos que Não gosto de sair da fila inicial quando fizer alterações.

Você também pode fazer alterações em caracteres únicos no modo normal. Por exemplo, para substitua um único caractere, mova o cursor sobre ele e pressione `r` , e depois o personagem que você deseja substituí-lo com. Da mesma forma, você pode excluir caracteres únicos movendo o cursor sobre ele e pressionando `x` .

Para executar um desfazer, pressione `u` no modo normal. Isso desfaz muda até o último vez que você estava no modo normal. Se você quiser refazer ( _ou seja_ , desfazer o desfazer), pressione `Ctrl+r` no modo normal.

### Inserir modo

Este é o segundo modo mais usado, e será o comportamento mais familiar para a maioria das pessoas. Uma vez no modo de inserção, a digitação insere caracteres como um editor de texto. Você pode inseri-lo usando um comando de inserção no modo normal.

Comandos Insert incluem:

*   `i` for ' **i** nsert', isso imediatamente muda o vim para o modo de inserção
*   `a` para ' **a** ppend', isso move o cursor após o caractere atual e entra no modo de inserção
*   `o` insere uma nova linha abaixo da linha atual e entra no modo de inserção na nova linha

Esses comandos também possuem uma variedade de maiúsculas:

*   `I` move o cursor para o início da linha e entra no modo de inserção
*   `A` move o cursor para o final da linha e entra no modo de inserção
*   `O` insere uma nova linha acima da atual e entra no modo de inserção na nova linha

Existem muitas outras maneiras de inserir texto no Vim que não podem ser listados aqui mas estes são os mais simples. Além disso, tenha cuidado ao ficar no modo de inserção por muito tempo; Vim é não projetado para ser usado no modo de inserção o tempo todo.

Para sair do modo de inserção e retornar ao modo normal, pressione `Esc` ou `<C-[>`

### Modo Visual

O modo visual é usado para fazer seleções de texto, semelhante a como clicar e arrastar com um mouse se comporta. A seleção de texto permite que os comandos sejam aplicados apenas à seleção, como cópia, excluir, substituir e assim por diante.

Para fazer uma seleção de texto:

*   Pressione `v` para entrar no modo visual, isso também marcará um ponto de seleção inicial
*   Mova o cursor para o ponto de seleção final desejado; vim irá fornecer um visual destaque da seleção de texto

O modo visual também possui as seguintes variantes:

*   `V` para entrar no modo de linha visual, isso fará com que as seleções de texto por linha
*   `<CV>` para entrar no modo de bloco visual, isso fará seleções de texto por blocos; movendo o cursor fará seleções de retângulo do texto

Para sair do modo visual e retornar ao modo normal, pressione `Esc` ou `<C-[>` .

O modo visual na verdade tem vários subtipos: _visual_ , _bloco-visual_ e _linear-visual_

*   _visual_ : como descrito acima. Enter pressionando `v`
*   _block-visual_ : selecione qualquer região retangular. Entre pressionando `<ctrl>+v`
*   _linewise-visual_ : sempre selecione linhas completas. Entre pressionando `<shift>+v`

### Modo de Comando

Modo de comando tem uma grande variedade de comandos e pode fazer coisas que o modo normal não pode fazer tão facilmente. Para entrar no modo de comando digite ':' no modo normal e depois digite seu comando, que deve aparecer na parte inferior da janela. Por exemplo, para fazer um achado global e substituir o tipo `:%s/foo/bar/g` para substituir tudo 'foo' com 'bar'

*   `:` Entra no modo de comando
*   `%` Significa em todas as linhas
*   `s` significa substituto
*   `/foo` é regex para encontrar coisas para substituir
*   `/bar/` é regex para substituir coisas com
*   `/g` significa global, caso contrário, só seria executado uma vez por linha

O Vim tem vários outros métodos sobre os quais você pode ler na ajuda documentação `:h` ou `:help` .

### Substituir modo

O modo de substituição permite substituir o texto existente digitando diretamente sobre ele. Antes de entrar neste modo, entre no modo normal e coloque o cursor em cima do primeiro caractere que você deseja substituir. Em seguida, pressione 'R' (capital R) para entrar no modo de substituição. Agora, o que você digitar substituirá o texto existente. o cursor se move automaticamente para o próximo caractere, assim como no modo de inserção. o A única diferença é que cada caractere digitado substituirá o existente.