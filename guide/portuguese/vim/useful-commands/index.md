---
title: Useful Commands
localeTitle: Comandos Úteis
---
# Comandos Úteis

## Funcionalidade básica

O mais provável é que você se encontre no modo "normal", pois permite inserir comandos pressionando a tecla de dois `:` pontos `:` Para chegar aqui de outros modos, você pode digitar `ctrl + c` ou `escape` .

Para editar texto e se movimentar de uma maneira familiar, pressione `i` , para o modo "inserir". Tente se movimentar com as setas do teclado no modo "inserir" - veja a seção "Navegação" abaixo para detalhes.

Dependendo da configuração, você pode inserir um navegador de arquivos digitando e digitando o comando `:e .` no modo "normal". O 'e' significa edit e o período para o arquivo ou diretório.

## Navegação

*   Movimento do cursor: você pode usar as teclas de seta ou `h` , `j` , `k` , `l` (esquerda, baixo, cima, direita)
*   `gg` leva você para o início do arquivo
*   `G` leva você ao final do arquivo
*   `:(num)` leva você a uma linha específica no seu arquivo (ex: 42 leva você para a linha 42)

## Salvando

1.  Pressione `Escape` para se certificar de que você está no `normal mode` ;
2.  Digite `:w` ("w" significa "escrever");
3.  Pressione `Enter` .

## Salvando (para um novo arquivo)

1.  Pressione `Escape` para se certificar de que você está no `normal mode` .
2.  Digite `:w newfilename` (newfilename é o nome do novo arquivo que você deseja salvar).
3.  Pressione `Enter` .

## Saindo, Vi, Vim, Nvim, Gvim

1.  Pressione escape para entrar no modo "normal"
2.  `:q` vai soft sair vim
3.  `:q!` vai forçar a sair do vim
4.  `:qa` isso vai fechar todos os arquivos abertos
5.  `:qa!` fecha todos os arquivos enquanto abandona as alterações
6.  `:q` salva e fecha o arquivo atual

(NOTA: O comando `:q!` Forçará o Vim a sair sem salvar. Certifique-se de salvar primeiro digitando o comando `:w` se não quiser perder nenhuma alteração que você tenha feito.)

**OU**

*   Digite ZZ (salvar e sair)
*   Digite `:wq` / `:x` (salve e saia, mas use com os comandos "w" e "q" comumente usados)

## Cortar, Copiar e Colar

*   `dd` exclui (corta) uma única linha
*   `yy` yanks (cópias) uma única linha
*   você pode usar `yy` e `dd` precedidos por um número para cortar ou copiar múltiplas linhas (ex- `13dd` irá cortar 13 linhas)
*   `p` cola tudo de buffer de pasta

## Colando blocos de código

Muitas vezes você vai encontrar-se à procura de soluções para problemas, e encontrar alguém escreveu um bloco de código que faz exatamente o que você quer. Se você tentar copiar e colar o código diretamente no Vim, poderá descobrir que o código está formatado de maneira estranha ou não foi colado corretamente. Isso se deve ao fato de que o Vim lê cada caractere que você colar um após o outro, ou seja, qualquer combinação de teclas que ativa um atalho Vim será executada e o Vim tentará (e falhar) recuar automaticamente o código colado.

Para superar isso, você pode usar o **modo Colar** do Vim, que pode ser ativado entrando no modo normal (pressione `escape` ou `crtl + c` ) e digite `:set paste` , depois pressione ENTER. Você está agora no modo de _colar_ . Você pode entrar no modo de inserção com `i` e colar o bloco de texto / código sem problemas! Para retornar ao Vim regular sem o modo colar, você pode entrar no modo normal ( `escape` ou `crtl + c` ) e digitar `:set nopaste` , e pressionar ENTER.

## Configurando números de linha

1.  Pressione escape para entrar no modo "normal"
2.  Digite `:set number` , pressione enter

Para definir números de linha por padrão:

1.  Abra / crie o arquivo de configuração do vim com o `vim ~/.vimrc`
2.  Adicione o `set number` linhas, pressione enter

## Abrindo um arquivo dentro do VIM

No VIM você pode abrir um arquivo dentro da mesma janela, colocando o cursor em um caminho e digitando `gf` . Isso dirá ao VIM que o texto atual que o cursor reside é um arquivo que você deseja abrir. O arquivo será aberto dentro do terminal VIM, portanto, se você quiser retornar à janela anterior, basta digitar `ctrl+o` . Isto irá dizer ao VIM para ir para a tela anterior.

## Como dividir janelas

Você pode dividir as janelas do vim e editar 2 ou mais arquivos ao mesmo tempo.

*   `:split` -> dividir janela (horizontal)
*   `:vsplit` -> dividir janela (vertical)
*   `:vertical` novo -> abrir um novo arquivo em uma nova janela

Para se deslocar entre as janelas, você pode usar os seguintes comandos:

*   `CTRL-W h` - move para a janela à esquerda
*   `CTRL-W j` - move para a janela abaixo
*   `CTRL-W k` - mova para a janela acima
*   `CTRL-W l` - move para a janela à direita
*   `CTRL-W t` - move para a janela superior
*   `CTRL-W b` - move para a janela inferior

## Desfazer refazer

Essas ações devem ser executadas no **modo normal** .

**Desfazer** : pressione `u` ou digite `:undo` e pressione `Enter` .

**Refazer** : Pressione `U` ( `Shift` + `u` ) ou digite `:redo` e pressione `Enter` .

## Abrindo um arquivo em uma linha específica

*   vi nome do arquivo + n, onde n é o número da linha

## Abrindo um arquivo pesquisando por palavra / termo

*   vi filename + / word, onde word é o que você está procurando. O cursor será posicionado na primeira ocorrência da palavra.

## Procurando um arquivo no Vim

Quando estiver no modo normal (pressione a tecla de `escape` para certificar-se), você pode pesquisar qualquer termo no documento digitando `/` , seguido pelo termo que está procurando e pressionando `enter` . Por exemplo, digite `/hello` e pressione `enter` para procurar a palavra "hello" no arquivo atual.

Você pode pular para a próxima ocorrência do seu termo de pesquisa pressionando `n` ou a ocorrência anterior pressionando `N` `*` procura a palavra abaixo do cursor.

Se você quiser destacar todas as correspondências de pesquisa, digite `:set hlsearch` ou use o comando abreviado `:set hls` . Uso `:set noh` para desativar o destaque até a próxima pesquisa.

## Compilando um projeto

O Vim tem uma integração muito estreita com a ferramenta de automação `make` build. Se o seu projeto usa um Makefile, você pode digitar `:make` na linha de comando do Vim para executar a ferramenta `make` do seu sistema. O Vim imprimirá a saída de `make` na tela e levará você ao primeiro erro, se houver, quando o comando `make` concluído. Você pode então percorrer os erros de compilação e avisos no código do seu projeto usando os comandos `:cn` e `:cp` , para os problemas seguinte e anterior, respectivamente.

## Encontrar e substituir

1.  Pressione `Escape` para garantir que você esteja no `normal mode` ;
2.  Digite `:` (você irá mudar para o `command mode` );
3.  Digite `%s,word_to_be_replaced,new_word,g` ;
4.  Pressione `ENTER` .

Importante: se você quiser substituir a primeira ocorrência da palavra, remova o `g` no final.

## Eu quero aprender Vim!

Para iniciantes, o Vim vem com um tutorial integrado! Você pode acessá-lo executando o `vimtutor` partir do seu terminal e isso iniciará um tutorial interativo sobre _como iniciar o Vim_ (leva cerca de 15 minutos para trabalhar).

Se você não está tão confiante em inglês, você pode usar o `vimtutor` em seu idioma preferido. Por exemplo, `vimtutor fr` irá lançar o tutorial em francês!

## Outros comandos úteis

*   `gg=G` corrige o recuo do arquivo inteiro
*   Se você quiser aprender mais sobre um comando específico, digite `:help` seguido do nome do comando (ex: help: w)

Leia o resto de nossos Guias Vim para entender melhor esse poderoso editor.

## Outros recursos

*   [Vim Golf](https://vimgolf.com/) - Uma boa maneira de aprender fazendo os desafios do vim para obter a menor quantidade de toques de tecla. Você pode ver as soluções enviadas por outras pessoas se não conseguir descobrir o desafio.
*   [Vim Adventures](https://vim-adventures.com/) - Uma abordagem divertida e gamificada para aprender Vim onde você lern os diferentes golpes de tecla com cada novo nível no jogo.
*   [Open Vim](http://www.openvim.com/) - Um tutorial vim interativo que ensina comandos básicos