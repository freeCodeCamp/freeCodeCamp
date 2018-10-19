# Comment récupérer les emails sortants localement (pour les workflows de messagerie)

> ** Remarque: ** Ceci est une étape ** facultative ** - Requis uniquement lorsque vous travaillez avec des flux de travail de messagerie.

## Introduction

Certains flux de travail de messagerie, tels que la mise à jour de la messagerie d'un utilisateur, requièrent que le serveur api back-end envoie des e-mails. Pendant le développement, vous pouvez utiliser un outil pour récupérer ces emails localement, au lieu de devoir utiliser un fournisseur d’email et d’envoyer un email réel. MailHog est l'un de ces outils de test de courrier électronique destiné aux développeurs. Il capture les courriers électroniques que votre instance freeCodeCamp locale envoie.

## Installation de MailHog

Comment installer et exécuter MailHog dépend de votre système d'exploitation

- [Installation de MailHog sur macOS] (#installating-mailhog-on-macos)
- [Installation de MailHog sous Windows] (#installating-mailhog-on-windows)
- [Installation de MailHog sur Linux] (#installating-mailhog-on-linux)

### Installation de MailHog sur macOS

Voici comment configurer MailHog sur macOS avec [Homebrew] (https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```
Cela va démarrer un service mailhog en arrière-plan.

Ensuite, vous pouvez aller à [using MailHog] (# using-mailhog).

### Installation de MailHog sous Windows

Téléchargez la dernière version de MailHog à partir du [référentiel officiel de MailHog] (https://github.com/mailhog/MailHog/releases). Cliquez sur le lien de votre version Windows (32 ou 64 bits) et le fichier .exe sera téléchargé sur votre ordinateur.

Une fois le téléchargement terminé, cliquez sur le fichier. Vous obtiendrez probablement une notification du pare-feu Windows vous autorisant l'accès à MailHog. Une fois que vous avez terminé, une invite de ligne de commande Windows standard s'ouvrira avec MailHog déjà en cours d'exécution.

Pour fermer MailHog, fermez l'invite de commande. Pour le réexécuter, cliquez sur le même fichier .exe. Vous n'avez pas besoin de télécharger un nouveau.

Ensuite, vous pouvez aller à [using MailHog] (# using-mailhog).

### Installation de MailHog sous Linux

Installez d'abord [Go] (https://golang.org).

Pour les systèmes basés sur Debian comme Ubuntu et Linux Mint, exécutez:

```bash
sudo apt-get install golang
```

Pour CentOS, Fedora, Red Hat Linux et d’autres systèmes basés sur RPM, exécutez:

```bash
sudo dnf installe golang
```

Ou:

```bash
sudo yum installer golang
```

Définissez le chemin pour Go:

```bash
echo "export GOPATH = $ HOME / go" >> ~ / .profile
echo 'export PATH = $ PATH: / usr / local / go / bin: $ GOPATH / bin' >> ~ / .profile
source ~ / .profile
```

Ensuite, installez et exécutez MailHog:

```bash
allez chercher github.com/mailhog/mailhog
sudo cp / home / $ (whoami) / go / bin / MailHog / usr / local / bin / mailhog
mailhog
```

Ensuite, vous pouvez aller à [using MailHog] (# using-mailhog).

## Utiliser MailHog

Une fois que vous avez installé MailHog et que vous l'avez lancé, vous devez ouvrir votre boîte de réception MailHog dans votre navigateur, ouvrir un nouvel onglet ou une nouvelle fenêtre et accéder à [http: // localhost: 8025] (http: // localhost: 8025).
Vous devriez maintenant voir un écran comme ci-dessous:

! [Capture d'écran de MailHog 1] (images / mailhog / 1.jpg)

Lorsque votre installation de freeCodeCamp envoie un courrier électronique, vous le verrez apparaître ici. Comme ci-dessous:

! [Capture d'écran de MailHog 2] (images / mailhog / 2.jpg)

Ouvrez le courrier et vous devriez voir deux onglets où vous pouvez voir le contenu - texte brut et source. Assurez-vous que vous êtes sur l'onglet texte brut.

! [Capture d'écran de MailHog 3] (images / mailhog / 3.jpg)

Tous les liens dans l'e-mail doivent être cliquables.

## Liens utiles

- Pour toute autre question relative à MailHog ou pour obtenir des instructions sur les configurations personnalisées, consultez le référentiel [MailHog] (https://github.com/mailhog/MailHog).
