<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Como obter localmente os emails enviados (para fluxos de emails)

> **Nota:** Este passo é **opcional** - Obrigatório apenas quando estiver trabalhando com fluxos de emails

## Introdução

Alguns dos fluxos de email, como atualizar o email de um usuário, necessitam de uma api e/ou um servidor back-end para envio. No ambiente de desenvolvimento, você pode usar uma ferramenta para obter esses emails localmente, em vez de ter que usar um provedor de email e efetivamente enviar o email. MailHog é uma dessas ferramentas para desenvolvedores fazerem testes com emails, ela vai obter os emails que sua instância local do freeCodeCamp mandar.

## Instando MailHog

O método para instalar e rodar MailHog depende do seu sistema operacional:

- [Instalando MailHog no macOS](#instalando-mailhog-no-macos)
- [Instalando MailHog no Windows](#instalando-mailhog-no-windows)
- [Instalando MailHog no Linux](#instalando-mailhog-no-linux)

### Instalando MailHog no macOS

Instalação e configuração do MailHog no macOS utilizando [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Este comando vai iniciar o serviço mailhog em background.

A seguir, você pode pular para [usando MailHog](#usando-o-mailhog).

### Instalando MailHog no Windows

Faça o download da última versão no [Repositório oficial do MailHog](https://github.com/mailhog/MailHog/releases).
Clique no link para sua versão de Windows (32 ou 64 bits) e o arquivo executável (.exe) será baixado no seu computador.

Quando o download finalizar, clique duas vezes no arquivo. Você provavelmente vai receber uma notificação do firewall do Windows perguntando se você quer permitir o acesso para MailHog. Assim que você permitir o acesso, o prompt de comando do Windows irá aparecer com o MailHog rodando.

Para fechar o MailHog, basta fechar o prompt de comando. Para rodar de novo, é só clicar no mesmo arquivo executável baixado anteriormente. Não precisa fazer o download novamente.

A seguir, você pode pular para [usando MailHog](#usando-o-mailhog).

### Instalando MailHog no Linux

Primeiro, instale o [Go](https://golang.org).

Para sistemas baseados em Debian, como, por exemplo, Ubuntu e Linux Mint, digite o seguinte comando no terminal:

```bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux e outros sistemas baseados em sistemas RPM, digite o seguinte comando no terminal:

```bash
sudo dnf install golang
```

Ou:

```bash
sudo yum install golang
```

Configure o path para o Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Em seguida, instale e inicie o MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

A seguir, você pode pular para [usando MailHog](#usando-o-mailhog).

## Usando o MailHog

Uma vez que você instalou o MailHog e iniciou o serviço, você precisa abrir seu inbox MailHog no navegador. Abra uma nova aba ou janela e entre em [http://localhost:8025](http://localhost:8025).
Você deve ver algo semelhante com a tela abaixo:

![Captura de tela MailHog 1](../../images/mailhog/1.jpg)

Quando a sua instalação do freeCodeCamp enviar um email, você verá ele aparecer aqui, como na imagem abaixo:

![Captura de tela MailHog 2](../../images/mailhog/2.jpg)

Agora, abra o email e você verá duas abas onde pode acessar o conteúdo - em texto simples e o código fonte. Assegure-se que você está na aba de texto simples.

![Captura de tela MailHog 3](../../images/mailhog/3.jpg)

Qualquer link no email deve ser clicável.

## Links úteis

- Para quaisquer dúvidas ou questões relacionadas ao MailHog, instruções ou configurações customizadas, verifique o repositório do [MailHog](https://github.com/mailhog/MailHog).
