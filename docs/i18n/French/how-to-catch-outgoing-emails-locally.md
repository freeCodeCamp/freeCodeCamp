> **Remarque :** Il s'agit d'une étape **facultative** et n'est requis que lorsque vous travaillez avec les workflows de messagerie

## Introduction

Certains flux de travail, comme la mise à jour de l'e-mail d'un utilisateur, nécessite le serveur d'api-back-end pour envoyer des courriels sortants. Une alternative à l'utilisation d'un fournisseur de service de messagerie pour envoyer des courriels réels, Mailhog est un outil de test de courrier électronique qui captera les messages électroniques envoyés par votre instance de freeCodeCamp.

## Installation de MailHog

MailHog peut être installé sur macOS, Windows et Linux.

- [Introduction](#introduction)
- [Installation de MailHog](#installing-mailhog)
  - [Installation de MailHog sur macOS](#installing-mailhog-on-macos)
  - [Installation de MailHog sous Windows](#installing-mailhog-on-windows)
  - [Installation de MailHog sous Linux](#installing-mailhog-on-linux)
- [Utiliser MailHog](#using-mailhog)
- [Liens utiles](#useful-links)

### Installation de MailHog sur macOS

Installer MailHog sur macOS avec [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Les commandes ci-dessus lanceront un service mailhog en arrière-plan.

Une fois l'installation terminée, vous pouvez démarrer [en utilisant MailHog](#using-mailhog).

### Installation de MailHog sous Windows

Téléchargez la dernière version de MailHog depuis le dépôt officiel de [MailHog](https://github.com/mailhog/MailHog/releases). Recherchez et cliquez sur le lien correspondant à votre version de Windows (32 ou 64 bits) et un fichier .exe sera téléchargé sur votre ordinateur.

Une fois le téléchargement terminé, cliquez pour ouvrir le fichier. Une notification de pare-feu Windows peut apparaître, demandant l'autorisation d'accès pour MailHog. Une invite de commande standard de Windows s'ouvrira là où MailHog s'exécutera une fois que l'accès au pare-feu sera accordé.

Fermez MailHog en fermant la fenêtre d'invite de commande. Pour recommencer MailHog, cliquez sur l'exécutable MailHog (. xe) fichier qui a été téléchargé initialement - il n'est pas nécessaire de télécharger un nouveau fichier d'installation de MailHog.

Commencez [en utilisant MailHog](#using-mailhog).

### Installation de MailHog sous Linux

Tout d'abord, installez [Go](https://golang.org).

Exécutez les commandes suivantes pour installer GO sur des systèmes basés sur Debian comme Ubuntu et Linux Mint.

```bash
sudo apt-get install golang
```

Exécutez les commandes suivantes pour installer GO sur des systèmes basés sur RPM tels que CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Sinon, exécutez les commandes suivantes pour installer GO.

```bash
sudo yum install golang
```

Maintenant, définissez le chemin pour Go avec les commandes suivantes.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Enfin, entrez les commandes ci-dessous pour installer et exécuter MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Commencez [en utilisant MailHog](#using-mailhog).

## Utiliser MailHog

Ouvrez un nouvel onglet ou une nouvelle fenêtre du navigateur et accédez à [http://localhost:8025](http://localhost:8025) pour ouvrir votre boîte de réception MailHog lorsque l'installation de MailHog est terminée et que MailHog est en cours d'exécution. La boîte de réception apparaîtra comme la capture d'écran ci-dessous.

![Capture d'écran MailHog 1](images/mailhog/1.jpg)

Les e-mails envoyés par votre installation de freeCodeCamp apparaîtront comme ci-dessous

![Capture d'écran MailHog 2](images/mailhog/2.jpg)

Deux onglets qui vous permettent d'afficher soit du texte brut, soit du contenu source seront disponibles lorsque vous ouvrez un e-mail donné. Assurez-vous que l'onglet texte brut est sélectionné comme ci-dessous.

![Capture d'écran MailHog 3](images/mailhog/3.jpg)

Tous les liens dans le courriel doivent être cliquables et résolus à leur URL.

## Liens utiles

- Consultez le dépôt [MailHog](https://github.com/mailhog/MailHog) pour plus d'informations concernant MailHog. Des informations supplémentaires sont également disponibles concernant les configurations MailHog personnalisées.
