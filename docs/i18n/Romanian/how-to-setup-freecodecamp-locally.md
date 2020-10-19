Urmați aceste recomandări pentru a configura tabăra freeCodep la nivel local în sistemul dvs. Acest lucru este foarte recomandat dacă doriţi să contribuiţi în mod regulat.

Pentru unele fluxuri de lucru pentru contribuții, trebuie să ai tabăra freeCodep rulează local. De exemplu, previzualizarea provocărilor de codificare sau depanarea și repararea erorilor în codebase.

> [!TIP] Dacă nu sunteți interesat să configurați tabăra freeCodep local luați în considerare utilizarea Gitpod, un mediu de dezvoltatori online gratuit.
> 
> [![Deschide în Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Începe un mediu de dezvoltatori gata de cod pentru tabăra freeCodep în browser-ul tău.)

## Pregătiți-vă calculatorul local

Începeți prin instalarea programului de bază pentru sistemul dvs. de operare.

Susținem în principal dezvoltarea sistemelor **\*nix**. Personalul nostru și colaboratorii comunității lucrează în mod regulat cu codebaza folosind instrumentele instalate pe Ubuntu și macOS.

Suportăm de asemenea Windows 10 prin WSL2, pe care îl puteți pregăti prin [citirea acestui ghid](/how-to-setup-wsl).

Unii membri ai comunității se dezvoltă, de asemenea, pe Windows 10 nativ cu Git pentru Windows (Git Bash) și alte instrumente instalate pe Windows. Nu avem sprijin oficial pentru o astfel de configurare în acest moment, recomandăm în schimb utilizarea WSL2.

**Premise:**

| Cerințe prealabile                                                                             | Versiune | Note                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                   | `12,x`   | [Schema LTS](https://github.com/nodejs/Release#release-schedule)                                                                                                                                    |
| npm (vine alături de Node)                                                                     | `6,x`    | Nu are lansări LTS, folosim versiunea pachetată cu Node LTS                                                                                                                                         |
| [Server Comunitate MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`    | [Notele de lansare](https://docs.mongodb.com/manual/release-notes/), Notă: Suntem în prezent pe `3.6`, o [actualizare este planificată](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Dacă ai o versiune diferită, instalează versiunea recomandată. Putem suporta doar probleme de instalare pentru versiunile recomandate. Vezi [troubleshooting](#troubleshooting) pentru detalii.

Dacă Node.js este deja instalat pe mașina dvs., executați următoarele comenzi pentru a valida versiunile:

```console
node -v
npm -v
```

> [!TIP] Vă recomandăm cu căldură actualizarea la ultimele versiuni stabile ale software-ului menționat mai sus, cunoscute și ca versiuni de suport pe termen lung (LTS).

Odată ce cerințele sunt instalate, trebuie să vă pregătiți mediul de dezvoltare. Acest lucru este comun pentru multe fluxuri de lucru în domeniul dezvoltării şi va trebui să faceţi acest lucru o singură dată.

**Urmează acești pași pentru a-ți pregăti mediul de dezvoltare:**

1. Instalează [Git](https://git-scm.com/) sau clientul tău Git favorit, dacă nu ai fost deja. Actualizează la ultima versiune; versiunea care a venit în pachet cu sistemul tău de operare poate fi învechită.

2. (Opțional, dar recomandat) [Configurați o cheie SSH](https://help.github.com/articles/generating-an-ssh-key/) pentru GitHub.

3. Instalează un editor de cod ales de tine.

   Vă recomandăm să folosiți [Vizualizare Studio Code](https://code.visualstudio.com/) sau [Atom](https://atom.io/). Aceştia sunt editori de cod grozavi, liberi şi cu sursă deschisă.

4. Configurați linte-ul pentru editorul de cod.

   Ar trebui să aveți [ESLint rulând în editorul dvs.](http://eslint.org/docs/user-guide/integrations.html), și va evidenția orice nu se conformează cu [Ghidul de stil JavaScript](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121) al freeCodeCamp.

   > [!TIP] Nu ignorați nicio eroare de linting. Acestea sunt menite să **ajute** şi să asigure un cod simplu şi curat.

## Fă depozitul pe GitHub

[Forking](https://help.github.com/articles/about-forks/) este un pas în care primești propria copie a depozitului principal freeCodeCamp(a.k.a _repo_) pe GitHub.

Acest lucru este esențial, deoarece vă permite să lucrați la propria copie de FreeCodeCamp pe GitHub, sau pentru a descărca (clona) depozitul dumneavoastră pentru a funcționa la nivel local. Ulterior, veți putea solicita modificări pentru a fi trase în depozitul principal de pe furculiță prin intermediul unei cereri de tragere (PR).

> [!TIP] Depozitul principal la `https://github.com/freeCodeCamp/freeCodeCamp` este adesea referit ca depozitul `în amonte`.
> 
> Fork-ul dvs. la `https://github.com/YOUR_USER_NAME/freeCodeCamp` este adesea referit ca `originea repo-ului`.

**Urmaţi aceşti paşi pentru a falsifica `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Mergeți la depozitul freeCodeCamp pe GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Faceți clic pe butonul "Fork" din colțul din dreapta sus al interfeței ([Mai multe detalii aici](https://help.github.com/articles/fork-a-repo/))

3. Dupa ce depozitul a fost forjat, vei fi dus la copia ta a depozitului freeCodeCamp la `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Cum să forjezi tabăra freeCodep pe GitHub (captură de ecran)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Cum să forjezi tabăra freeCodep pe GitHub" />
</details>

## Clonați furculița din GitHub

[Clonarea](https://help.github.com/articles/cloning-a-repository/) este locul unde **descarci** o copie a unui depozit dintr-o `locație la distanță` care este deținută fie de tine, fie de altcineva. În cazul tău, această locaţie la distanţă este `fork-ul` de depozitul freeCodeCamp, care ar trebui să fie disponibil la `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Rulează aceste comenzi pe mașina locală:

1. Deschide un terminal / Comandă Prompt / Shell în directorul de proiecte

   _.e.: `/yourprojectsdirectory/`_

2. Clonați forcul dvs. de freeCodeCamp, înlocuind `YOUR_USER_NAME` cu numele dvs de utilizator GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Acest lucru va descărca întregul depozit freeCodeCamp în directorul de proiecte.

Notă: `--depth=1` creează o clonă superficială a furcii dvs., cu doar cel mai recent istoric/commit.

## Configurare sincronizare de la părinte

Acum că ai descărcat o copie a furcii tale, va trebui să configurezi o `în amonte` telecomandă către repo-ul părinte.

[Așa cum s-a menționat anterior](#fork-the-repository-on-github), repertoriul principal este trimis `în amonte`. Furculița ta s-a referit la `depozitul de origine`.

Ai nevoie de o referință de la clona locală la depozitul `în amonte` în plus față de depozitul `origine`. Pentru a putea sincroniza modificările din depozitul principal fără cerința de a forja și clona în mod repetat.

1. Schimbă directorul cu noul director freeCodeCamp:

   ```console
   cd tabăra freeCodep
   ```

2. Adăugați o referință de la distanță la repertoriul principal freeCodeMP:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Asigurați-vă că configurația arată corect:

   ```console
   git remote -v
   ```

   Ieșirea ar trebui să arate ca mai jos:

   ```console
   originea https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   originile https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   în amonte https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   în amonte https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Rulând local tabăra freeCodep

Acum că ai o copie locală de freeCodeCamp, poți urma aceste instrucțiuni pentru a rula local. Acest lucru vă va permite să:

- Previzualizează editările pe pagini așa cum ar apărea pe platforma de învățare.
- Lucrul la problemele și îmbunătățirile interfeței.
- Depanare și rezolvare probleme cu serverele aplicației și aplicațiile clienților.

Dacă chiar întâmpini probleme, mai întâi efectuează o căutare web pentru problema ta și vezi dacă ai primit deja un răspuns. Dacă nu puteţi găsi o soluţie, vă rugăm să căutați pagina noastră de probleme [GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) pentru o soluție și să raportați problema dacă nu a fost încă raportată.

Și ca întotdeauna, nu ezita să participi la [Camera noastră de chat pentru colaboratori pe Gitter](https://gitter.im/FreeCodeCamp/Contributors) sau [serverul nostru Discord](https://discord.gg/pFspAhS), pentru întrebări rapide.

> [!TIP] Puteţi sări peste rularea taberei freeCodep local dacă pur şi simplu editaţi fişiere. De exemplu, efectuând o `rebase`, sau rezolvând `conflicte de îmbinare`.
> 
> Puteți reveni întotdeauna la această parte a instrucțiunilor mai târziu. Trebuie **doar** să săriți peste acest pas dacă nu trebuie să rulați aplicațiile pe calculatorul dvs.
> 
> [Sari peste pentru a face modificări](#making-changes-locally).

### Configurare dependențe

#### Pasul 1: Configurați fișierul variabilei de mediu

Tastele API implicite şi variabilele mediului sunt stocate în fişierul `sample.env`. Acest fișier trebuie să fie copiat într-un fișier nou numit `.env` care este accesat dinamic în timpul pasului de instalare.

```console
# Creați o copie a "sample.env" și denumiți-o ".env".
# Populează cu cheile și secretele necesare API:

# macOS / Linux
probă cp. nv .env

# Windows
copy sample.env .env
```

Cheile din fișierul `.env` sunt _nu_ obligatoriu pentru a putea rula aplicația la nivel local. Puteți lăsa valorile implicite copiate din `sample.env` as-is.

> [!TIP] Rețineți dacă doriți să utilizați servicii precum Auth0 sau Algolia, va trebui să achiziționați propriile chei API pentru aceste servicii și să editați intrările în mod corespunzător în `. fișier nv`.

#### Pasul 2: Instalează dependențe

Acest pas va instala dependențele necesare pentru ca aplicația să ruleze:

```console
npm ci
```

#### Pasul 3: Porniți MongoDB și semnațiți baza de date

Înainte de a putea rula aplicaţia la nivel local, va trebui să porniţi serviciul MongoDB.

> [!NOTĂ] Cu excepţia cazului în care aveţi MongoDB care rulează într-o configurare diferită de cea implicită, URL-ul stocat ca valoarea `MONGOHQ_URL` în `. fişierul nv` ar trebui să funcţioneze bine. Dacă folosiți o configurație personalizată, modificați această valoare după cum este necesar.

Porniți serverul MongoDB într-un terminal separat:

- Pe macOS & Ubuntu:

  ```console
  mongod
  ```

- Pe Windows, trebuie să specifici calea completă către binarul `mongod`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Asigurați-vă că înlocuiți `3.6` cu versiunea instalată

> [!TIP] Puteţi evita să începeţi MongoDB de fiecare dată instalându-l ca un serviciu de fundal. Poți [afla mai multe despre asta în documentația lor pentru sistemul de operare](https://docs.mongodb.com/manual/administration/install-community/)

Apoi, hai să semănăm baza de date. În acest pas, executăm comanda de mai jos care completează serverul MongoDB cu unele seturi de date inițiale care sunt necesare pentru servicii. Acestea includ câteva programe, printre altele.

```console
npm run seed
```

#### Pasul 4: Începe aplicația client freeCodeCamp și serverul API

Acum puteți porni serverul API și aplicațiile clientului.

```console
dezvoltare npm
```

Această singură comandă va activa toate serviciile, inclusiv serverul API și aplicațiile client disponibile pentru ca dvs. să lucrați.

> [!NOTĂ] Odată gata, deschideți un browser web și **vizitați <http://localhost:8000>**. Dacă aplicația se încarcă, felicitări - toți sunteți setați! Acum ai o copie a întregii platforme de învăţare a freeCodeCamp-ului rulând pe maşina ta locală.

> Serverul API serveşte API-uri la `http://localhost:3000`. Aplicația Gatsby servește aplicația client la `http://localhost:8000`

> Dacă vizitați [http://localhost:3000/explororer](http://localhost:3000/explorer) ar trebui să vedeți API-urile disponibile.

## Conectați-vă cu un utilizator local

Configurarea locală populează automat un utilizator local în baza de date. Apăsând butonul `Conectare` te va autentifica automat în aplicația locală.

Cu toate acestea, accesarea paginii portofoliului utilizatorului este un pic complicată. În dezvoltare, Gatsby preia servind paginile client-side și astfel veți obține o pagină `404` pentru portofoliul de utilizatori atunci când lucrați local.

Doar apăsând pe butonul **"Previzualizare pagină personalizată 404"** te va redirecționa către pagina corectă.

<details>
   <summary>
      Cum să te conectezi când lucrezi local (captură ecran)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Cum să te conectezi când lucrezi local" />
</details>

## Efectuarea de schimbări locale

Acum puteți face modificări în fișiere și să comiteți modificările la clona locală a furcii dvs.

Urmează acești pași:

1. Validați că sunteți pe ramura `master`:

   ```console
   git status
   ```

   Ar trebui să obții un rezultat ca acesta:

   ```console
   În stăpânul sucursalei
   sucursala este actualizată cu 'origin/master'.

   nimic de comis, director de lucru curat
   ```

   Dacă nu sunteți maestru sau directorul dvs. de lucru nu este curat, rezolvați orice fișiere/comitete restante și finalizați `comandantul`:

   ```console
   git master checkout
   ```

2. Sincronizează ultimele modificări din tabăra freeCodep în amonte `maestru` în ramura principală locală:

   > [!ATENȚIE] Dacă ai o cerere remarcabilă de pull pe care ai făcut-o din ramura `master` a furcii tale, le veți pierde la sfârșitul acestui pas.
   > 
   > Trebuie să vă asigurați că cererea pull este fuzionată de un moderator înainte de a efectua acest pas. Pentru a evita acest scenariu, ar trebui **întotdeauna** să lucrați la o ramură diferită de `master`.

   Acest pas **va sincroniza ultimele schimbări** din depozitul principal al freeCodeCamp. Este important să vă rebazați sucursala pe cele mai recente `în amonte/master` cât mai des posibil pentru a evita conflictele mai târziu.

   Actualizați copia locală a depozitului freeCodeCamp în amonte:

   ```console
   git preia în amonte
   ```

   Resetați stâlpul principal cu masterul tabăra freeCodep:

   ```console
   git resetare --hard upstream/master
   ```

   Apăsați sucursala principală spre originea dvs. pentru a avea un istoric curat pe furculița dvs. pe GitHub:

   ```console
   git push master origine --force
   ```

   Poți valida maestrul tău curent se potrivește în amonte/master efectuând un dif:

   ```console
   git difuzează în amonte/master
   ```

   Ieșirea rezultată trebuie să fie goală.

3. Creează o ramură nouă nouă:

   Lucrul la o sucursală separată pentru fiecare problemă vă ajută să păstraţi copia de lucru locală curată. Nu ar trebui să lucrezi niciodată la `master`. Asta îți va întinde copia de tabără freeCodep și s-ar putea să trebuiască să începi cu o clonă sau furcă proaspătă.

   Verifică dacă ești pe `master` așa cum s-a explicat anterior, și ramură de acolo:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Numele sucursalei ar trebui să înceapă cu `fix/`, `funcție /`, `documente/`, etc. Evitați utilizarea numerelor de emisiune în sucursale. Păstrați-le pe scurt, semnificativ și unic.

   Câteva exemple de nume bune de filiale sunt:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Editează paginile și lucrează la cod în editorul tău de text favorit.

5. Odată ce ești mulțumit de schimbări, ar trebui să rulezi opțional tabăra freeCodep local pentru a previzualiza schimbările.

6. Asigură-te că ai reparat orice eroare și verifică formatarea modificărilor tale.

7. Bifați și confirmați fișierele pe care le actualizați:

   ```console
   git status
   ```

   Aceasta ar trebui să afișeze o listă de `unstaged` fișiere pe care le-ați editat.

   ```console
   Pe o caracteristică/documentație sucursală
   sucursala este actualizată cu 'upstream/feat/documentation'.

   Modificări neorganizate pentru angajament:
   (utilizaţi "git add/rm <file>... pentru a actualiza ceea ce va fi angajat)
   (folosiți "git checkout -- <file>. „să renunțe la modificările din directorul de lucru

       modificate: CONTRIBUȚIE. d
       modificat: documente/README.md
       modificate: documente/cum-la-setup-freecodecamp-local. d
       modificat: documente/how-to-work-on-guide-articles.md
...
   ```

8. Stadiul modificărilor și angajamentul asumat în acest sens:

   În acest pas, ar trebui să marcați doar fișierele pe care le-ați editat sau pe care le-ați adăugat. Puteți efectua o resetare și rezolva fișiere pe care nu ați intenționat să le modificați dacă este necesar.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Sau puteți adăuga toate `fișierele nestabilite` în zona de așteptare:

   ```console
   git add .
   ```

   Numai fișierele care au fost mutate în zona de aşteptare vor fi adăugate când faceți o comitere.

   ```console
   git status
   ```

   Rezultat:

   ```console
   Pe o caracteristică/documentație sucursală
   sucursala este actualizată cu 'upstream/feat/documentation'.

   Modificări pentru a fi compuse:
   (utilizaţi "git reset HEAD <file>..." pentru a dezinstala)

       modificat: CONTRIBUTING.md
       modificat: documente/README.md
       modificate: documente/how-to-setup-freecodecamp-locally.md
       modificate: documente/how-to-work-on-guide-articles.md
   ```

   Acum, puteţi comite modificările cu un scurt mesaj astfel:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Câteva exemple:

   ```md
   fix: actualizare articol ghid pentru Java - pentru buclă
   feat: adaugă articol ghid pentru abilități alexa
   ```

   Opţional:

   Vă recomandăm să faceți un mesaj convențional. Aceasta este o bună practică pe care o veți vedea pe unele dintre depozitele populare Open Source. În calitate de dezvoltator, acest lucru vă încurajează să urmați practicile standard.

   Câteva exemple de mesaje convenționale de comitere sunt:

   ```md
   reparații: actualizare a articolului ghid HTML
   fixare: actualizare script-uri pentru Travis-CI
   feat: adăugare articol pentru ciocnirea JavaScript
   documente: actualizare ghiduri contribuție
   ```

   Păstraţi aceste scurte, nu mai mult de 50 de caractere. Puteți adăuga întotdeauna informații suplimentare în descrierea mesajului de comitere.

   Acest lucru nu durează mai mult decât un mesaj neconvențional, cum ar fi „fișier de actualizare” sau „adaugă index.md”

   Poți afla mai multe despre motivul pentru care ar trebui să folosești comitetele convenționale [aici](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Dacă vă dați seama că trebuie să editați un fișier sau să actualizați mesajul de comitere după ce ați făcut o comitere puteți face acest lucru după ce ați editat fișierele cu:

   ```console
   git comite --Modificare
   ```

   Acest lucru va deschide un editor de text implicit ca `nano` sau `vi` unde puteți edita titlul mesajului de comitere și adăugați/edita descrierea.

10. Apoi, îți poți împinge modificările la furculiță:

    ```console
    git push origin branch/name-here
    ```

## Propunerea unei solicitări prin tragere (PR)

După ce ai comis modificările, verifică aici [cum să deschizi o Cerere Pull](how-to-open-a-pull-request.md).

## Referință comenzi rapide

O referire rapidă la comenzile de care veți avea nevoie când lucrați local.

| comandă                                                        | descriere                                                                                      |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Instalează/reinstalează toate dependențele și bootstraps diferitele servicii.                  |
| `npm run seed`                                                 | Analizează toate fişierele de încercare markdown şi le introduce în MongoDB.                   |
| `dezvoltare npm`                                               | Începe aplicația FreeCodeCamp API Server și Client.                                            |
| `test npm`                                                     | Rulează toate testele JS în sistem, inclusiv testele pentru client, server, lint și provocare. |
| `npm run test:client`                                          | Rulează suita de testare client.                                                               |
| `npm run test:curriculum`                                      | Rulează suita de teste de curriculum.                                                          |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Testează un bloc specific.                                                                     |
| `npm run test:curriculum --superblock='responsive-web-design'` | Testează un anumit SuperBlock.                                                                 |
| `npm rulează test-curriculum-ul complet`                       | Rulează testul curriculum, fără salvare după prima eroare                                      |
| `npm run test:server`                                          | Rulează suita de testare a serverului.                                                         |
| `npm rulează e2e`                                              | Rulează capătul Cypress pentru a termina testele.                                              |
| `npm rulat curat`                                              | Dezinstalează toate dependenţele şi curăţă geocutiile.                                         |

## Depanare

### Probleme cu instalarea cerinţelor prealabile recomandate

Ne dezvoltăm în mod regulat pe cele mai recente sau mai populare sisteme de operare precum macOS 10.15 sau mai târziu, Ubuntu 18.04 sau mai târziu și Windows 10 (cu WSL2).

Este recomandat să cercetezi problema ta specifică cu privire la resurse precum Google, Stack Overflow și Stack Exchange. Există o şansă bună ca cineva să se confrunte cu aceeaşi problemă şi există deja un răspuns la o întrebare specifică.

Dacă ești pe un alt sistem de operare și/sau încă te lovești de probleme, vezi [obținerea ajutorului](#getting-help).

> [!ATENŢIE]
> 
> Vă rugăm să evitați crearea de probleme GitHub pentru probleme preliminare. Ele nu intră în domeniul de aplicare al acestui proiect.

### Probleme cu IU, fonturi, erori de construcție etc.

Dacă întâmpini probleme cu IU, Fonturi sau vezi erorile de construcție o curățare poate fi utilă:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

SAU

Folosește scurtătura

```
npm curățare și dezvoltare
```

Dacă vă confruntați în continuare cu problemele legate de construcție, este recomandată curățarea spațiului de lucru.

Utilizaţi `git curat` în modul interativ:

```
git curățat -ifdX
```

<details>
   <summary>
      Cum să curăţaţi fişierele git neurmărite (captură de ecran)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Cum să curăţaţi fişierele git neurmărite" />
</details>

### Probleme cu API, Logare, Provocări, etc.

Dacă nu vă puteți conecta, și în schimb vedeți un banner cu un mesaj de eroare care va fi raportat la freeCodeCamp, te rugăm să verifici din nou dacă portul tău local `3000` nu este utilizat de un alt program.

**Pe Linux / macOS / WSL pe Windows - Din Terminal:**

```console
netstat -ab "3000"

tcp4 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Pe Windows - De la PowerShell crescut:**

```powershell
netstat -ab <unk> Select-Șirul "3000"

TCP 0.0.0.0:3000 DESKTOP LISTENING
```

### Probleme la instalarea dependenţelor

Dacă primiți erori în timpul instalării dependențelor, vă rugăm să vă asigurați că nu sunteți într-o rețea restricționată sau setările dvs. de firewall nu vă împiedică să accesați resursele.

Configurarea pentru prima dată poate dura o vreme în funcție de lățimea de bandă a rețelei. Fiți răbdător, și dacă sunteți încă blocat, am reînceput să utilizați GitPod în loc de o configurare offline.

## Obțineți ajutor

Dacă sunteți blocat și aveți nevoie de ajutor, spuneți-ne întrebându-ne în categoria ['Contribuitori' de pe forumul nostru](https://forum.freecodecamp.org/c/contributors) sau [camera de chat pentru colaboratori](https://gitter.im/FreeCodeCamp/Contributors) pe Gitter.

Ar putea exista o eroare în consola browser-ului sau în linia de comandă Bash / Terminal / Comandă care va ajuta la identificarea problemei. Furnizați acest mesaj de eroare în descrierea problemei dvs., astfel încât alții să poată identifica mai ușor problema și să vă ajute să găsiți o rezoluție.
