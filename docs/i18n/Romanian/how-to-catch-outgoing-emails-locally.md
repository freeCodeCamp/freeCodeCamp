> **Notă:** Acesta este un **pas opțional** și este necesar doar când lucrăm cu e-mail fluxuri de lucru

## Introducere

Unele fluxuri de e-mail cum ar fi actualizarea e-mailului unui utilizator, necesită back-end api-server pentru a trimite e-mailuri de ieșire. O alternativă la utilizarea unui furnizor de servicii de e-mail pentru a trimite mesaje de e-mail efective, Mailhog este un instrument de dezvoltare pentru testarea email-urilor, care va prinde mesajele de e-mail trimise de instanța ta freeCodep.

## Instalarea MailHog

MailHog poate fi instalat pe macOS, Windows și Linux.

- [Introducere](#introduction)
- [Instalarea MailHog](#installing-mailhog)
  - [Instalarea MailHog pe macOS](#installing-mailhog-on-macos)
  - [Instalând MailHog pe Windows](#installing-mailhog-on-windows)
  - [Instalarea MailHog pe Linux](#installing-mailhog-on-linux)
- [Folosind MailHog](#using-mailhog)
- [Link-uri utile](#useful-links)

### Instalarea MailHog pe macOS

Instalează MailHog pe macOS cu [Homebrew](https://brew.sh/):

```bash
brew instalarea mailhog
servicii de brew pornește mailhog
```

Comenzile de mai sus vor porni un serviciu mailhog în fundal.

Când instalarea se finalizează, puteţi începe [folosind MailHog](#using-mailhog).

### Instalând MailHog pe Windows

Descarcă cea mai recentă versiune de MailHog din [Depozitul oficial al lui MailHog](https://github.com/mailhog/MailHog/releases). Localizați și faceți clic pe link-ul pentru versiunea Windows (32 sau 64 biți) și un fișier .exe va fi descărcat în computer.

Când descărcarea se termină, faceţi clic pentru a deschide fişierul. O notificare Windows firewall poate apărea, cerând permisiunea de acces pentru MailHog. O linie de comandă standard Windows se va deschide unde MailHog va rula odată ce accesul firewall este acordat.

Închide MailHog închizând fereastra de solicitare a comenzii. Pentru a porni din nou MailHog, fă clic pe executabilul MailHog (. xe) fișier care a fost descărcat inițial - nu este necesar să descărcați un nou fișier de instalare MailHog.

Începe [folosind MailHog](#using-mailhog).

### Instalarea MailHog pe Linux

Mai întâi, instalați [Du-te](https://golang.org).

Rulează următoarele comenzi pentru a instala GO pe sisteme bazate pe Debian, cum ar fi Ubuntu și Linux Mint.

```bash
sudo apt-get install golang
```

Rulează următoarele comenzi pentru a instala GO pe sisteme bazate pe RPM precum CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativ, rulați următoarele comenzi pentru a instala GO.

```bash
sudo yum install golang
```

Acum setează calea pentru Du-te cu următoarele comenzi.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
eco 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
sursă ~/.profile
```

În final, introduceți comenzile de mai jos pentru a instala și executa MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Începe [folosind MailHog](#using-mailhog).

## Folosind MailHog

Deschideți o nouă filă sau fereastră a browserului și navigați la [http://localhost:8025](http://localhost:8025) pentru a deschide inbox-ul MailHog atunci când instalarea MailHog este completă și MailHog se execută. Mesajul va apărea similar cu imaginea de mai jos.

![Screenshot 1 MailHog](images/mailhog/1.jpg)

E-mailurile trimise de tabăra freeCodep va apărea ca mai jos

![Screenshot 2 MailHog](images/mailhog/2.jpg)

Două file care vă permit să vizualizați fie text simplu, fie conținut sursă vor fi disponibile atunci când deschideți un anumit e-mail. Asigurați-vă că fila text simplu este selectată mai jos.

![Screenshot 3 MailHog](images/mailhog/3.jpg)

Toate link-urile din e-mail ar trebui să poată fi accesate și rezolvate la URL-ul.

## Link-uri utile

- Verificați depozitul [MailHog](https://github.com/mailhog/MailHog) pentru informații suplimentare legate de MailHog. De asemenea, sunt disponibile informații suplimentare cu privire la configurațiile personalizate MailHog.
