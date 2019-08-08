---
title: Basic Linux Commands
localeTitle: Comandos Básicos do Linux
---
## Comandos Básicos do Linux

Ao começar com o linux, existem alguns comandos básicos que todos devem conhecer.

1.  **cd** - mudar de diretório

- cd seguido por um diretório ou caminho de arquivo levará você para dentro desse diretório (pasta).

2.  **ls** - comando de lista

- Digite `ls` e o conteúdo do diretório atual será exibido.

3.  **man** - comando manual

- Mostra o manual do seguinte comando. Isso é muito útil ao tentar descobrir como funciona um comando desconhecido. Por exemplo, digite `man ls` para tudo que você precisa saber sobre o comando ls. Digite `q` para sair.

4.  **pwd** - caminho

- Digite `pwd` para exibir o caminho para seu diretório atual.

5.  **mkdir** - faça o diretório

- Este comando, seguido pelo nome que você deseja nomear seu diretório, cria um novo diretório. `mkdir folder1` fará um novo diretório chamado folder1.

6.  **rmdir** - remove o diretório

- Remove o diretório que segue o comando. `rmdir folder1` excluirá o diretório chamado folder1, se existir.

7.  **rm** - remover

- Este comando remove arquivos, não diretórios. `rm file.txt` removerá o arquivo chamado arquivo.txt enquanto existir e estiver no diretório atual.

8.  **touch** - cria arquivo

- O comando touch é usado para criar um arquivo. Pode ser qualquer coisa, desde um arquivo txt vazio até um arquivo zip vazio. 'touch new.txt' criará um novo arquivo com o nome new.

9.  **mv** - mover

- Use o comando mv para mover arquivos pela linha de comando. Nós também podemos usar o comando mv para renomear um arquivo. Por exemplo, se quisermos renomear o arquivo “text” para “new”, podemos usar 'mv text new'.

10.  **clique com o botão direito** - copie e cole

- Este é menos um comando e mais um how-to, no entanto, é muito útil para fazer quase tudo em um terminal no linux. Para começar, destaque o texto como normal e, em seguida, clique com o botão direito do mouse para copiar uma seleção. Você deve ver a parte destacada se tornar não destacada, isso significa que você copiou a seleção. Agora, clique com o botão direito do mouse onde deseja colar a seleção e pronto.

11.  **less** - visualizar o conteúdo do arquivo

- Use `less filename.txt` para visualizar o conteúdo de um arquivo e navegar por eles. Por padrão, menos passará pela página do arquivo por página.

12. **cat** - exibir o conteúdo textual do arquivo 

- Use esse comando para exibir o texto de dentro de um determinado arquivo no seu terminal. Digitando `cat myFile.txt` no seu terminal será irá exibir o conteúdo do arquivo`myFile.txt` na tela. O comando `cat` pode ser uma ferramenta muito útil quando usado com o terminal _pipes_.

13. **clear** - limpar terminal

- Use `clear` simplesmente para limpar todas as saidas exibidas no terminal.

14. **cp** - copiar arquivos e diretórios

- Use 'cp' para copiar um arquivo ou um diretório com arquivos dentro dele para outro local usando o comando 'cp CURRENT_FILE-LOCATION DESTINATION_FOLDER'. Adicione o sinalizador '-r' para copiar um diretório que não está vazio. 

15.  **netstat** - Visualiza o estado das conexões realizadas pelo host.

- Este comando é utilizado quando você quer ver quais portas estão "abertas" no seu computador(Listening), além de mostrar as conexões de rede realizadas com outras maquinas. Exemplo: `ǹetstat -nlpt` -> Lista quais portas estão abertas no sistema

16.  **whoami**  - MOstra qual usuário está logado no sistema.

- Este comando é utilizado quando você quer saber qual o nome de usuário que está logado no sistema. Exemplo: `whoami` -> Mostrara o nome de usuário

17.  **echo** - Comando para imprimir uma frase na saída padrão.

- Este comando é utilizado quando você quer imprimir uma informação na tela. Exemplo: `echo "https://www.freecodecamp.org/"` -> Mostra na tela a frase "https://www.freecodecamp.org/"

### Recursos Úteis para a Prática:
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Execute o terminal dentro do seu navegador. Ótimo para prática.
- [LearnShell](https://www.learnshell.org/): Tutoriais de shell interativo (terminal) do Linux.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): Uma coleção de tutoriais de terminal para iniciantes.
