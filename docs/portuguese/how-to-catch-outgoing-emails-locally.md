<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Como obter localmente os emails enviados (para fluxos de emails)

> **Nota:** Este passo é **opcional** - Obrigatório apenas quando estiver trabalhando com fluxos de emails

## Introdução

Alguns do fluxos de email, como atualizar o email de um usuário, necessita de uma api e/ou um servidor back-end para enviar os emails. No ambiente de desenvolvimento, você pode usar uma ferramenta para obter esses emails localmente, em vez de ter que usar um provedor de email e efetivamente enviar o email. MailHog é uma dessas ferramentas para desenvolvedores fazerem testes com emails, ela vai oter os emails que sua instância local do freeCodeCamp mandar.

## Instando MailHog

Como instalar e rodar MailHog depende do seu sistema operacional:

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
Clique no link para sua versão de windows (32 ou 64 bit) e o arquivo executável (.exe) será baixado no seu computador.

Quando o download finalizar, clique no arquivo. Você provavelmente vai receber uma notificação no firewall do Windows onde você deve permitir o acesso para MailHog. Assim que o fizer, o prompt de comando do Windows irá aparecer com o MailHog rodando.

Para fechar o MailHog basta fechar o prompt de comando. Para rodar de novo é só clicar no mesmo arquivo executável baixado anteriormente. Não precisa fazer o download novamente.

A seguir, você pode pular para [usando MailHog](#usando-o-mailhog).

### Instalando MailHog no Linux

Primeiro, instale o [Go](https://golang.org).

Para sistemas baseados em Debian, por exemplo, Ubuntu e Linux Mint, rode no terminal:

```bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux, e outros sistemas baseados em sistemas RPM, rode no terminal:

```bash
sudo dnf install golang
```

Or:

```bash
sudo yum install golang
```

Configure o path para Go:

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

Uma vez que você instalou o MailHog e iniciou o serviço, você precisa abrir seu inbox MailHog no browser. Abra uma nova aba ou janela e entre em [http://localhost:8025](http://localhost:8025).
Você deve ver agora algo semelhante com a tela abaixo:

![Captura de tela MailHog 1](../images/mailhog/1.jpg)

Quando sua instalação do freeCodeCamp enviar um email você irá ver ele aparecer aqui. Como mostra abaixo:

![Captura de tela MailHog 2](../images/mailhog/2.jpg)

Abra o email e você deve ver duas abas onde pode ver o conteúdo - texto simples e o fonte. Assegure que você está na aba de texto simples.

![Captura de tela MailHog 3](../images/mailhog/3.jpg)

Qualquer link no email deve ser clicável.

## Links úteis

- Para qualquer dúvidas ou questões relacionadas ao MailHog ou instruções ou configurações customizadas, verifique o repositório do [MailHog](https://github.com/mailhog/MailHog).
