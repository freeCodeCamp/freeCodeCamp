# Como obter localmente os emails enviados para fluxos de emails

> **Nota:** Este passo é **opcional** e é obrigatório apenas quando estiver trabalhando com fluxos de emails

## Introdução

Alguns do fluxos de email, como atualizar o email de um usuário, necessitam da api-server back-end para enviar os emails. Uma alternativa ao uso de um provedor de serviço de email para enviar mensagens de email verdadeiras é o Mailhog. Mailhog é uma ferramenta de desenvolvimento para testes de emails que vai obter as mensagens de email enviadas pela sua instância do freeCodeCamp.

## Instando MailHog

MailHog pode ser instalado no macOS, Windows e Linux.

- [Instalando MailHog no macOS](#instalando-mailhog-no-macos)
- [Instalando MailHog no Windows](#instalando-mailhog-no-windows)
- [Instalando MailHog no Linux](#instalando-mailhog-no-linux)

### Instalando MailHog no macOS

Instalação do MailHog no macOS utilizando [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

O comando acima vai iniciar o serviço mailhog em plano de fundo.

Quando a instalação for finalizada você começar a [usar o MailHog](#usando-o-mailhog).

### Instalando MailHog no Windows

Faça o download da última versão no [repositório oficial do MailHog](https://github.com/mailhog/MailHog/releases).
Localize e clique no link para sua versão de windows (32 ou 64 bit) e o arquivo executável (.exe) será baixado no seu computador.

Quando o download finalizar, clique para abrir o arquivo. Uma notificação do firewall do Windows talvez apareça solicitando permissão de acesso para o MailHog. Uma instância de prompt de comando padrão irá abrir onde o MailHog estará rodando assim que o acesso ao firewall for concedido.

Para fechar o MailHog basta fechar o prompt de comando. Para iniciar novamente basta clicar no mesmo arquivo executável baixado anteriormente - não é necessário fazer o download de um novo instalador do MailHog.

Você pode começar a [usar o MailHog](#usar-o-mailhog).

### Instalando MailHog no Linux

Primeiro, instale o [Go](https://golang.org).

Execute o comando abaixo para instalar o GO em sistemas baseados em Debian como Ubuntu e Linux Mint.

```bash
sudo apt-get install golang
```

Execute o comando abaixo para instalar GO em sistemas baseados em RPM como CentOs, Fedora, Red Hat Linux, etc.
```bash
sudo dnf install golang
```

Você pode também executar o seguinte comando para instalar o GO:

```bash
sudo yum install golang
```

Configure o path para Go com os seguintes comandos:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Em seguida, execute os comandos abaixo para instalar e executar o MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Comece a [usar o MailHog](#usando-o-mailhog).

## Usar o MailHog

Abra uma nova aba ou janela do seu browser e entre em [http://localhost:8025](http://localhost:8025). para abrir sua inbox MailHog quando a instalação estiver concluída e o MailHog estiver executando. A inbox será semelhante a captura de tela abaixo.

![Captura de tela MailHog 1](../images/mailhog/1.jpg)

Emails enviados pela sua instalação do freeCodeCamp aparecerão como mostrado abaixo

![Captura de tela MailHog 2](../images/mailhog/2.jpg)

Duas abas que permitem que você veja um texto simples (plain text) ou a fonte (source) estarão disponíveis quando você abrir um email recebido. Assegure que você está com a aba de texto simples selecionada, como mostrado abaixo.

![Captura de tela MailHog 3](../images/mailhog/3.jpg)

Qualquer link no email deve ser clicável e levar até a sua URL.

## Links úteis

- Para qualquer dúvidas ou questões relacionadas ao MailHog, instruções ou configurações customizadas, verifique o repositório do [MailHog](https://github.com/mailhog/MailHog).
